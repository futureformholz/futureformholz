import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SOURCE_DIR = 'C:/Users/steph/Pictures/Website';
const PROJECT_ROOT = process.cwd();
const PUBLIC_GALLERY_DIR = path.join(PROJECT_ROOT, 'public', 'gallery');
const PUBLIC_THUMBS_DIR = path.join(PUBLIC_GALLERY_DIR, 'thumbs');
const DATA_DIR = path.join(PROJECT_ROOT, 'src', 'data');
const CACHE_FILE = path.join(DATA_DIR, 'galleryCache.json');

const CATEGORY_MAP = {
  'Schwibbögen&Fensterbilder': 'Schwibbögen & Fensterbilder',
  'Epoxidharzprojekte': 'Epoxidharzprojekte',
  'Acrylglasbilder': 'Acrylglasbilder',
  'Schneide- und Servierbretter': 'Schneide- & Servierbretter',
  'Outdoor': 'Outdoor',
  'Indoor': 'Indoor',
  'Deko': 'Deko',
};

const CATEGORY_ORDER = [
  'Alle Werke',
  'Schwibbögen & Fensterbilder',
  'Epoxidharzprojekte',
  'Acrylglasbilder',
  'Schneide- & Servierbretter',
  'Outdoor',
  'Indoor',
  'Deko',
];

// Files referenced in static page layouts (e.g. team portraits, hero image)
const PRESERVED_STATIC_FILES = new Set([
  '20260405_091706.jpg', // team member
  '20260405_091706.webp',
  '20260525_160853.jpg', // team member
  '20260525_160853.webp',
  '20260406_160904.jpg', // team member
  '20260406_160904.webp',
  '20260406_163633.jpg', // hero background
  '20260406_163633.webp',
  '20260525_115302.jpg', // showcase: Großformatige Licht-Monumente
  '20260525_115302.webp',
  '20251122_135500.jpg', // showcase: Smarte LED-Steuerung
  '20251122_135500.webp',
  'Designer.png',        // showcase: Werbetafeln & Epoxidharz
  'Designer.webp',
  '1790141401993.png',   // showcase: Vom Entwurf bis zur Schraube
  '1790141401993.webp',
]);

// Parallel worker queue
async function mapConcurrent(items, limit, fn) {
  const results = new Array(items.length);
  let index = 0;
  async function worker() {
    while (index < items.length) {
      const i = index++;
      results[i] = await fn(items[i], i);
    }
  }
  const workers = Array.from({ length: Math.min(limit, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

export async function scanAndSyncGallery() {
  console.log('🔄 Scanne Ordnerstruktur unter:', SOURCE_DIR);
  const sourceExists = fs.existsSync(SOURCE_DIR);

  if (!sourceExists) {
    console.warn(`⚠️ Quellordner "${SOURCE_DIR}" nicht gefunden. Fallback auf public/gallery.`);
    return null;
  }

  // Ensure directories exist
  if (!fs.existsSync(PUBLIC_GALLERY_DIR)) {
    fs.mkdirSync(PUBLIC_GALLERY_DIR, { recursive: true });
  }
  if (!fs.existsSync(PUBLIC_THUMBS_DIR)) {
    fs.mkdirSync(PUBLIC_THUMBS_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  // Load cache
  let cache = {};
  if (fs.existsSync(CACHE_FILE)) {
    try {
      cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
    } catch {
      cache = {};
    }
  }

  const rawImages = [];
  const categoryCounts = {};

  const topDirs = fs.readdirSync(SOURCE_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const rawCat of topDirs) {
    const categoryName = CATEGORY_MAP[rawCat] || rawCat;
    const catPath = path.join(SOURCE_DIR, rawCat);
    categoryCounts[categoryName] = 0;

    function scanDir(currentPath, subCat = null) {
      const entries = fs.readdirSync(currentPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentPath, entry.name);

        if (entry.isDirectory()) {
          scanDir(fullPath, entry.name);
        } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
          const stat = fs.statSync(fullPath);
          const parsed = path.parse(entry.name);
          const webpName = `${parsed.name}.webp`;
          const destMain = path.join(PUBLIC_GALLERY_DIR, webpName);
          const destThumb = path.join(PUBLIC_THUMBS_DIR, webpName);

          rawImages.push({
            originalName: entry.name,
            webpName,
            baseName: parsed.name,
            sourcePath: fullPath,
            destMain,
            destThumb,
            mtimeMs: stat.mtimeMs,
            sourceSize: stat.size,
            rawCategory: rawCat,
            category: categoryName,
            subcategory: subCat,
          });

          categoryCounts[categoryName]++;
        }
      }
    }

    scanDir(catPath, null);
  }

  console.log(`📸 Gefundene Quellbilder: ${rawImages.length} in ${topDirs.length} Kategorien.`);

  // Process and convert images to WebP
  let convertedCount = 0;
  let cachedCount = 0;
  const newCache = {};

  console.log('⚡ Optimiere Bilder zu WebP (1920px Full & 720px Thumb)...');
  const startTime = Date.now();

  const processedImages = await mapConcurrent(rawImages, 16, async (img, idx) => {
    const cachedEntry = cache[img.webpName];
    const mainExists = fs.existsSync(img.destMain);
    const thumbExists = fs.existsSync(img.destThumb);

    let width = 1200;
    let height = 800;
    let ratio = 1.5;
    let orientation = 'landscape';

    const isCacheValid =
      cachedEntry &&
      mainExists &&
      thumbExists &&
      Math.abs(cachedEntry.mtimeMs - img.mtimeMs) < 1000 &&
      cachedEntry.width &&
      cachedEntry.height;

    if (isCacheValid) {
      width = cachedEntry.width;
      height = cachedEntry.height;
      ratio = cachedEntry.ratio || parseFloat((width / height).toFixed(2));
      orientation = cachedEntry.orientation || (width >= height ? 'landscape' : 'portrait');
      cachedCount++;
    } else {
      try {
        const pipeline = sharp(img.sourcePath, { failOnError: false, failOn: 'none' }).rotate();

        // 1. Full High-Definition WebP (max 1920x1920, quality 82, effort 4)
        const mainInfo = await pipeline
          .clone()
          .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 82, effort: 4 })
          .toFile(img.destMain);

        // 2. High-Speed Masonry Thumbnail WebP (max 720x720, quality 75, effort 4)
        await pipeline
          .clone()
          .resize(720, 720, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 75, effort: 4 })
          .toFile(img.destThumb);

        width = mainInfo.width || 1200;
        height = mainInfo.height || 800;
        ratio = parseFloat((width / height).toFixed(2));
        orientation = width >= height ? 'landscape' : 'portrait';
        convertedCount++;

        if (convertedCount % 50 === 0 || convertedCount === rawImages.length) {
          console.log(`  ⏳ Fortschritt: ${convertedCount} Bilder neu komprimiert...`);
        }
      } catch (err) {
        console.warn(`⚠️ Fehler beim Optimieren von ${img.originalName}:`, err.message);
        if (cachedEntry) {
          width = cachedEntry.width || 1200;
          height = cachedEntry.height || 800;
          ratio = cachedEntry.ratio || 1.5;
          orientation = cachedEntry.orientation || 'landscape';
        }
      }
    }

    newCache[img.webpName] = {
      mtimeMs: img.mtimeMs,
      sourceSize: img.sourceSize,
      width,
      height,
      ratio,
      orientation,
      category: img.category,
      subcategory: img.subcategory,
    };
    const friendlyTitle = img.baseName.replace(/[-_]/g, ' ').trim();

    return {
      id: `img-${idx + 1}`,
      filename: img.webpName,
      src: `/gallery/${img.webpName}`,
      thumbSrc: `/gallery/thumbs/${img.webpName}`,
      width,
      height,
      ratio,
      title: friendlyTitle,
      category: img.category,
      subcategory: img.subcategory || undefined,
    };
  });

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`✅ WebP-Optimierung beendet in ${durationSec}s: ${convertedCount} neu konvertiert, ${cachedCount} aus Cache verwendet.`);

  // Also ensure preserved static files exist as WebP and compressed JPG
  for (const staticFile of PRESERVED_STATIC_FILES) {
    const parsed = path.parse(staticFile);
    const webpName = `${parsed.name}.webp`;
    const staticWebpPath = path.join(PUBLIC_GALLERY_DIR, webpName);
    const staticJpgPath = path.join(PUBLIC_GALLERY_DIR, staticFile);

    // If source exists in rawImages, make sure both jpg and webp are optimized
    const match = rawImages.find((img) => img.originalName === staticFile || img.baseName === parsed.name);
    if (match) {
      if (!fs.existsSync(staticWebpPath)) {
        try {
          await sharp(match.sourcePath)
            .rotate()
            .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 82 })
            .toFile(staticWebpPath);
        } catch {}
      }
      // Compress the JPG version if > 1MB so it doesn't drag down performance
      if (fs.existsSync(staticJpgPath)) {
        try {
          const s = fs.statSync(staticJpgPath);
          if (s.size > 1024 * 1024) {
            const tmpPath = `${staticJpgPath}.tmp.jpg`;
            await sharp(match.sourcePath)
              .rotate()
              .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
              .jpeg({ quality: 82, progressive: true })
              .toFile(tmpPath);
            fs.renameSync(tmpPath, staticJpgPath);
            console.log(`  📸 Statische JPG-Datei optimiert: ${staticFile} (${(s.size / 1024 / 1024).toFixed(1)} MB -> komprimiert)`);
          }
        } catch (e) {
          console.warn(`Konnte statische JPG nicht komprimieren: ${staticFile}:`, e.message);
        }
      }
    }
  }

  // Clean up obsolete files from public/gallery (old uncompressed .jpg/.png)
  const currentWebpNames = new Set(rawImages.map((img) => img.webpName));
  let removedOldCount = 0;

  if (fs.existsSync(PUBLIC_GALLERY_DIR)) {
    const existingGalleryFiles = fs.readdirSync(PUBLIC_GALLERY_DIR);
    for (const f of existingGalleryFiles) {
      const full = path.join(PUBLIC_GALLERY_DIR, f);
      if (fs.statSync(full).isDirectory()) continue;

      // If it's an old raw .jpg/.png that has been converted to .webp and is not in PRESERVED_STATIC_FILES, remove it
      if (/\.(jpg|jpeg|png)$/i.test(f) && !PRESERVED_STATIC_FILES.has(f)) {
        try {
          fs.unlinkSync(full);
          removedOldCount++;
        } catch (e) {
          console.warn(`Konnte alte Rohdatei nicht entfernen: ${f}:`, e.message);
        }
      }

      // If it's a webp that is no longer in currentWebpNames
      if (f.endsWith('.webp') && !currentWebpNames.has(f) && !PRESERVED_STATIC_FILES.has(f)) {
        try {
          fs.unlinkSync(full);
          const thumb = path.join(PUBLIC_THUMBS_DIR, f);
          if (fs.existsSync(thumb)) fs.unlinkSync(thumb);
          removedOldCount++;
        } catch {}
      }
    }
  }

  if (removedOldCount > 0) {
    console.log(`🗑️ Bereinigt: ${removedOldCount} alte/unbenutzte Dateien aus public/gallery entfernt.`);
  }

  // Save cache
  fs.writeFileSync(CACHE_FILE, JSON.stringify(newCache, null, 2), 'utf-8');

  // Build galleryImages.json for backwards compatibility
  const galleryImagesJson = processedImages.map((img) => ({
    Name: img.filename,
    Width: img.width,
    Height: img.height,
    Ratio: img.ratio,
    Orientation: img.width >= img.height ? 'landscape' : 'portrait',
    Category: img.category,
    Subcategory: img.subcategory || null,
  }));
  const galleryJsonPath = path.join(DATA_DIR, 'galleryImages.json');
  fs.writeFileSync(galleryJsonPath, JSON.stringify(galleryImagesJson, null, 2), 'utf-8');

  // Build websiteGalleryData.ts
  const tsContent = `// Automatisch generiert aus C:\\Users\\steph\\Pictures\\Website
// Stand: ${new Date().toISOString()}

export interface WebsiteImage {
  id: string;
  filename: string;
  src: string;
  thumbSrc: string;
  width: number;
  height: number;
  ratio: number;
  title: string;
  category: WebsiteCategory;
  subcategory?: string;
}

export const WEBSITE_CATEGORIES = ${JSON.stringify(CATEGORY_ORDER, null, 2)} as const;

export type WebsiteCategory = (typeof WEBSITE_CATEGORIES)[number];

export const RAW_CATEGORY_MAP: Record<string, WebsiteCategory> = ${JSON.stringify(CATEGORY_MAP, null, 2)};

export const WEBSITE_GALLERY: WebsiteImage[] = ${JSON.stringify(processedImages, null, 2)};
`;

  const tsPath = path.join(DATA_DIR, 'websiteGalleryData.ts');
  fs.writeFileSync(tsPath, tsContent, 'utf-8');
  console.log(`✅ TypeScript-Definitionen in ${tsPath} aktualisiert`);

  return {
    total: processedImages.length,
    converted: convertedCount,
    cached: cachedCount,
    removedOld: removedOldCount,
    durationSec,
    categoryCounts,
  };
}

// Run directly if invoked from command line
if (process.argv[1] && process.argv[1].endsWith('sync-gallery.mjs')) {
  scanAndSyncGallery()
    .then((res) => {
      console.log('🎉 Synchronisation abgeschlossen:', JSON.stringify(res, null, 2));
      process.exit(0);
    })
    .catch((err) => {
      console.error('❌ Synchronisation fehlgeschlagen:', err);
      process.exit(1);
    });
}
