import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SOURCE_DIR = 'C:/Users/steph/Pictures/Website';
const PROJECT_ROOT = process.cwd();
const PUBLIC_GALLERY_DIR = path.join(PROJECT_ROOT, 'public', 'gallery');
const DATA_DIR = path.join(PROJECT_ROOT, 'src', 'data');

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
  '20260525_160853.jpg', // team member
  '20260406_160904.jpg', // team member
  '20260406_163633.jpg', // hero background
]);

export async function scanAndSyncGallery() {
  console.log('🔄 Scanne Ordnerstruktur unter:', SOURCE_DIR);
  const sourceExists = fs.existsSync(SOURCE_DIR);

  if (!sourceExists) {
    console.warn(`⚠️ Quellordner "${SOURCE_DIR}" nicht gefunden. Fallback auf public/gallery.`);
    return null;
  }

  // Ensure public/gallery exists
  if (!fs.existsSync(PUBLIC_GALLERY_DIR)) {
    fs.mkdirSync(PUBLIC_GALLERY_DIR, { recursive: true });
  }

  const images = [];
  let copiedCount = 0;
  const categoryCounts = {};

  const topDirs = fs.readdirSync(SOURCE_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

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
        } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
          const destPath = path.join(PUBLIC_GALLERY_DIR, entry.name);

          // Copy if missing
          if (!fs.existsSync(destPath)) {
            fs.copyFileSync(fullPath, destPath);
            copiedCount++;
          }

          images.push({
            filename: entry.name,
            rawCategory: rawCat,
            category: categoryName,
            subcategory: subCat,
            sourcePath: fullPath,
            destPath: destPath,
          });

          categoryCounts[categoryName]++;
        }
      }
    }

    scanDir(catPath, null);
  }

  console.log(`📸 Gefundene Bilder: ${images.length} in ${topDirs.length} Kategorien. Neu kopiert: ${copiedCount}`);

  // Clean up deleted files from public/gallery
  const currentFilenames = new Set(images.map(img => img.filename));
  let removedFromGalleryCount = 0;
  const removedFiles = [];

  if (fs.existsSync(PUBLIC_GALLERY_DIR)) {
    const existingGalleryFiles = fs.readdirSync(PUBLIC_GALLERY_DIR);
    for (const f of existingGalleryFiles) {
      if (!currentFilenames.has(f) && !PRESERVED_STATIC_FILES.has(f) && /\.(jpg|jpeg|png)$/i.test(f)) {
        try {
          fs.unlinkSync(path.join(PUBLIC_GALLERY_DIR, f));
          removedFromGalleryCount++;
          removedFiles.push(f);
        } catch (e) {
          console.warn(`Konnte gelöschte Datei nicht entfernen: ${f}:`, e.message);
        }
      }
    }
  }

  if (removedFromGalleryCount > 0) {
    console.log(`🗑️ Aus public/gallery entfernt (in Quelle gelöscht): ${removedFromGalleryCount} Dateien.`);
  }

  // Load existing metadata cache if available
  const cachePath = path.join(DATA_DIR, 'galleryImages.json');
  const metaCache = new Map();
  if (fs.existsSync(cachePath)) {
    try {
      const cached = JSON.parse(fs.readFileSync(cachePath, 'utf-8'));
      if (Array.isArray(cached)) {
        for (const item of cached) {
          if (item.Name) metaCache.set(item.Name, item);
        }
      }
    } catch {
      // ignore cache parsing error
    }
  }

  console.log('⚡ Berechne Bilddimensionen & Seitenverhältnisse...');
  const processedImages = [];
  const galleryImagesJson = [];

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    let width = 1200;
    let height = 800;
    let orientation = 'landscape';
    let ratio = 1.5;

    const cached = metaCache.get(img.filename);
    if (cached && cached.Width && cached.Height) {
      width = cached.Width;
      height = cached.Height;
      orientation = cached.Orientation || (width >= height ? 'landscape' : 'portrait');
      ratio = cached.Ratio || parseFloat((width / height).toFixed(2));
    } else {
      try {
        const meta = await sharp(img.destPath).metadata();
        let w = meta.width || 1200;
        let h = meta.height || 800;

        // Account for EXIF rotation
        if (meta.orientation && meta.orientation >= 5 && meta.orientation <= 8) {
          const temp = w;
          w = h;
          h = temp;
        }

        width = w;
        height = h;
        ratio = parseFloat((w / h).toFixed(2));
        orientation = w >= h ? 'landscape' : 'portrait';
      } catch (err) {
        console.warn(`Konnte Metadaten für ${img.filename} nicht lesen:`, err.message);
      }
    }

    galleryImagesJson.push({
      Name: img.filename,
      Width: width,
      Height: height,
      Ratio: ratio,
      Orientation: orientation,
      Category: img.category,
      Subcategory: img.subcategory,
    });

    const encodedFilename = encodeURIComponent(img.filename);
    const friendlyTitle = img.filename
      .replace(/\.(jpg|jpeg|png)$/i, '')
      .replace(/[-_]/g, ' ')
      .trim();

    processedImages.push({
      id: `img-${i + 1}`,
      filename: img.filename,
      src: `/gallery/${encodedFilename}`,
      width,
      height,
      ratio,
      title: friendlyTitle,
      category: img.category,
      subcategory: img.subcategory || undefined,
    });
  }

  // Write galleryImages.json
  fs.writeFileSync(cachePath, JSON.stringify(galleryImagesJson, null, 2), 'utf-8');
  console.log(`✅ ${galleryImagesJson.length} Einträge in ${cachePath} gespeichert`);

  // Build websiteGalleryData.ts
  const tsContent = `// Automatisch generiert aus C:\\Users\\steph\\Pictures\\Website
// Stand: ${new Date().toISOString()}

export interface WebsiteImage {
  id: string;
  filename: string;
  src: string;
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
    copied: copiedCount,
    removed: removedFromGalleryCount,
    removedFiles: removedFiles.slice(0, 10),
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
