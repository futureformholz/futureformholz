'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  Maximize2,
  ChevronDown,
  LayoutGrid,
  Layers,
  Sparkles,
  Flame,
  TreePine,
  Lightbulb,
  Wrench,
  Compass,
  Check,
  Loader2,
} from 'lucide-react';
import {
  WEBSITE_GALLERY,
  WEBSITE_CATEGORIES,
  WebsiteCategory,
  WebsiteImage,
} from '@/data/websiteGalleryData';
import MasonryLightbox from './MasonryLightbox';

function GalleryCard({
  image,
  onClick,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw',
}: {
  image: WebsiteImage;
  onClick: () => void;
  sizes?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xs bg-[#f4f1ea] border border-[#eae6de] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#a87948]"
    >
      {/* Aspect-ratio container prevents Cumulative Layout Shift (CLS) */}
      <div
        className="relative w-full overflow-hidden bg-[#e8e4db]"
        style={{
          aspectRatio: image.ratio
            ? `${image.ratio}`
            : image.width && image.height
            ? `${image.width} / ${image.height}`
            : '4/3',
        }}
      >
        {/* Subtle skeleton shimmer animation while image is loading */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8e4db] via-[#f4f1ea] to-[#e8e4db] animate-pulse" />
        )}

        <Image
          src={image.thumbSrc || image.src}
          alt={`${image.category} - ${image.title}`}
          width={image.width || 800}
          height={image.height || 600}
          sizes={sizes}
          quality={75}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-104 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Category badge watermark on top */}
        <div className="absolute top-2.5 left-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="text-[9px] font-mono uppercase tracking-wider bg-black/70 text-white px-2 py-0.5 backdrop-blur-xs rounded-xs">
            {image.category}
          </span>
        </div>

        {/* Subtle dark overlay with expand icon on hover */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="p-3 bg-black/60 text-white rounded-full backdrop-blur-xs flex items-center justify-center shadow-lg border border-white/20 transform scale-90 group-hover:scale-100 transition-transform">
            <Maximize2 className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

const CATEGORY_META: Record<
  string,
  { icon: React.ElementType; description: string; tag: string }
> = {
  'Schwibbögen & Fensterbilder': {
    icon: Lightbulb,
    description:
      'Traditionelle und moderne erzgebirgische Schwibbögen, filigrane Fensterbilder und beleuchtete Motive mit präziser LED-Technik (Home Assistant, WLED).',
    tag: 'Erzgebirgische Lichtkunst',
  },
  'Epoxidharzprojekte': {
    icon: Sparkles,
    description:
      'Massivholz trifft auf glasklares Kunstharz: Einzigartige Epoxidharzlampen, Flusstische und Lichtobjekte mit atemberaubender Tiefenwirkung und Farbverläufen.',
    tag: 'Epoxid & Massivholz',
  },
  'Acrylglasbilder': {
    icon: Layers,
    description:
      'Feinste Konturenfräsung in hochtransparentem Acrylglas, hinterleuchtete Kunstmotive und moderne Wandlichtreliefs aus eigener Werkstatt.',
    tag: 'Acrylglas & CNC-Gravur',
  },
  'Schneide- & Servierbretter': {
    icon: Flame,
    description:
      'Massive Schneide-, Servier- und Grillbretter aus edlen Harthölzern – mit Saftrille, Grifffräsung und natürlicher lebensmittelechter Veredelung.',
    tag: 'Massivholz-Unikate',
  },
  'Outdoor': {
    icon: TreePine,
    description:
      'Vom witterungsbeständigen Adirondack-Sessel über massive Gartenbänke und Pergolen bis hin zu maßgeschneiderten Terrassenüberdachungen.',
    tag: 'Garten & Konstruktion',
  },
  'Indoor': {
    icon: Wrench,
    description:
      'Individuelle Werbe- und Praxisschilder, Raumteiler, Möbelstücke und anspruchsvolle Innenausbauten für ein warmes Raumambiente.',
    tag: 'Innenausbau & Schilder',
  },
  'Deko': {
    icon: Compass,
    description:
      'Kreative Holzdekorationen, saisonale Festmotive, personalisierte Geschenke und dekorative Accessoires aus Schneeberg im Erzgebirge.',
    tag: 'Dekorative Holzkunst',
  },
};

export default function MasonryGallery() {
  const [selectedCategory, setSelectedCategory] = useState<WebsiteCategory>('Alle Werke');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'filter' | 'grouped'>('filter');
  const [activeImage, setActiveImage] = useState<WebsiteImage | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  // Available subcategories for the selected category
  const availableSubcategories = useMemo(() => {
    if (selectedCategory === 'Alle Werke') return [];
    const subs = new Set<string>();
    WEBSITE_GALLERY.forEach((img) => {
      if (img.category === selectedCategory && img.subcategory) {
        subs.add(img.subcategory);
      }
    });
    return Array.from(subs);
  }, [selectedCategory]);

  // Filtered images based on category and optional subcategory
  const filteredImages = useMemo(() => {
    return WEBSITE_GALLERY.filter((img) => {
      if (selectedCategory !== 'Alle Werke' && img.category !== selectedCategory) {
        return false;
      }
      if (selectedSubcategory && img.subcategory !== selectedSubcategory) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, selectedSubcategory]);

  const displayedImages = useMemo(() => {
    return filteredImages.slice(0, visibleCount);
  }, [filteredImages, visibleCount]);

  // Counts by main category
  const countsByCategory = useMemo(() => {
    const counts: Record<string, number> = { 'Alle Werke': WEBSITE_GALLERY.length };
    WEBSITE_CATEGORIES.forEach((cat) => {
      if (cat !== 'Alle Werke') {
        counts[cat] = WEBSITE_GALLERY.filter((img) => img.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Counts by subcategory for current category
  const countsBySubcategory = useMemo(() => {
    const counts: Record<string, number> = {};
    if (selectedCategory === 'Alle Werke') return counts;
    WEBSITE_GALLERY.forEach((img) => {
      if (img.category === selectedCategory && img.subcategory) {
        counts[img.subcategory] = (counts[img.subcategory] || 0) + 1;
      }
    });
    return counts;
  }, [selectedCategory]);

  // Group images by category for the grouped thematic view
  const groupedImages = useMemo(() => {
    const groups: { category: WebsiteCategory; images: WebsiteImage[] }[] = [];
    WEBSITE_CATEGORIES.forEach((cat) => {
      if (cat !== 'Alle Werke') {
        const catImages = WEBSITE_GALLERY.filter((img) => img.category === cat);
        if (catImages.length > 0) {
          groups.push({ category: cat, images: catImages });
        }
      }
    });
    return groups;
  }, []);

  const handleCategoryChange = (cat: WebsiteCategory) => {
    setSelectedCategory(cat);
    setSelectedSubcategory(null);
    setViewMode('filter');
    setVisibleCount(24);
  };

  const handleSubcategoryChange = (subCat: string | null) => {
    setSelectedSubcategory(subCat);
    setVisibleCount(24);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 24, filteredImages.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredImages.length);
  };

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Progressive background loading via IntersectionObserver
  useEffect(() => {
    if (viewMode !== 'filter') return;
    const sentinel = loadMoreRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => {
            if (prev >= filteredImages.length) return prev;
            return Math.min(prev + 24, filteredImages.length);
          });
        }
      },
      { rootMargin: '450px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [viewMode, filteredImages.length]);

  return (
    <section id="galerie" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto scroll-mt-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-8 border-b border-[#eae6de]">
        <div className="space-y-3">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#a87948] flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#a87948]" />
            Atelier-Fotostrecke & Werkstatteinblicke
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#181715]">
            Unsere Werke nach Kategorien
          </h2>
          <p className="text-sm sm:text-base text-[#615e57] max-w-2xl font-light leading-relaxed">
            Über <strong>{WEBSITE_GALLERY.length} originale Fotografien</strong> direkt aus der Werkstatt in Schneeberg OT Lindenau:
            Wählen Sie über die Reiter Ihre gewünschte Kategorie aus – von traditionellen Schwibbögen
            über glasklare Epoxidharzlampen und Acrylglasbilder bis hin zu Massivholzbrettern und Terrassenüberdachungen.
          </p>
        </div>

        {/* View Switcher Controls */}
        <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end space-y-2 shrink-0">
          <div className="inline-flex p-1 bg-[#f4f1ea] border border-[#eae6de] rounded-xs shadow-xs">
            <button
              onClick={() => setViewMode('filter')}
              className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-all flex items-center space-x-1.5 cursor-pointer ${
                viewMode === 'filter'
                  ? 'bg-[#181715] text-white shadow-xs'
                  : 'text-[#615e57] hover:text-[#181715]'
              }`}
              title="Rasteransicht mit Kategorien"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Rasteransicht</span>
            </button>
            <button
              onClick={() => {
                setViewMode('grouped');
                setSelectedCategory('Alle Werke');
                setSelectedSubcategory(null);
              }}
              className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-all flex items-center space-x-1.5 cursor-pointer ${
                viewMode === 'grouped'
                  ? 'bg-[#181715] text-white shadow-xs'
                  : 'text-[#615e57] hover:text-[#181715]'
              }`}
              title="Nach Handwerksbereichen gruppiert"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Themenübersicht</span>
            </button>
          </div>
          <span className="font-mono text-[11px] text-[#8b877f]">
            {viewMode === 'filter'
              ? `${displayedImages.length} von ${filteredImages.length} Werken geladen`
              : '7 Handwerks-Kategorien'}
          </span>
        </div>
      </div>

      {/* FILTER-BUTTONS / REITER */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 pt-1 no-scrollbar scroll-smooth">
          {WEBSITE_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category && viewMode === 'filter';
            const count = countsByCategory[category] ?? 0;
            if (count === 0 && category !== 'Alle Werke') return null;

            const meta = CATEGORY_META[category];
            const Icon = meta ? meta.icon : LayoutGrid;

            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`group px-4 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 whitespace-nowrap flex items-center space-x-2.5 cursor-pointer border rounded-xs ${
                  isSelected
                    ? 'bg-[#181715] text-[#fcfbf9] border-[#181715] shadow-md -translate-y-0.5'
                    : 'bg-[#fcfbf9] text-[#615e57] border-[#eae6de] hover:bg-[#f4f1ea] hover:text-[#181715] hover:border-[#d3cdbf]'
                }`}
                aria-pressed={isSelected}
              >
                <Icon
                  className={`w-3.5 h-3.5 transition-colors ${
                    isSelected ? 'text-[#a87948]' : 'text-[#8b877f] group-hover:text-[#a87948]'
                  }`}
                />
                <span>{category === 'Alle Werke' ? 'Alle' : category}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors ${
                    isSelected
                      ? 'bg-[#292723] text-[#e8c89b] font-semibold'
                      : 'bg-[#eae6de] text-[#706c64] group-hover:bg-[#dfdad0]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Optional Subcategory Filter Bar */}
        {viewMode === 'filter' && availableSubcategories.length > 0 && (
          <div className="flex items-center space-x-2 pt-3 pb-1 border-t border-[#eae6de]/60 mt-3 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#8b877f] mr-1">
              Unterordner:
            </span>
            <button
              onClick={() => handleSubcategoryChange(null)}
              className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer rounded-xs border ${
                selectedSubcategory === null
                  ? 'bg-[#a87948] text-white border-[#a87948]'
                  : 'bg-[#f4f1ea] text-[#615e57] border-[#eae6de] hover:text-[#181715]'
              }`}
            >
              Alle in {selectedCategory} ({countsByCategory[selectedCategory]})
            </button>
            {availableSubcategories.map((subCat) => {
              const subCount = countsBySubcategory[subCat] || 0;
              const isSubSelected = selectedSubcategory === subCat;
              return (
                <button
                  key={subCat}
                  onClick={() => handleSubcategoryChange(subCat)}
                  className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer rounded-xs border flex items-center space-x-1.5 ${
                    isSubSelected
                      ? 'bg-[#a87948] text-white border-[#a87948]'
                      : 'bg-[#f4f1ea] text-[#615e57] border-[#eae6de] hover:text-[#181715]'
                  }`}
                >
                  <span>{subCat}</span>
                  <span className="opacity-80">({subCount})</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Category Info Banner if a specific category is selected */}
      {viewMode === 'filter' && selectedCategory !== 'Alle Werke' && CATEGORY_META[selectedCategory] && (
        <div className="mb-10 p-5 sm:p-6 bg-[#fcfbf9] border-l-3 border-[#a87948] border-y border-r border-[#eae6de] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#a87948]">
              {CATEGORY_META[selectedCategory].tag}
            </span>
            <h3 className="text-xl font-serif text-[#181715]">
              {selectedCategory}
            </h3>
            <p className="text-xs sm:text-sm text-[#615e57] font-light max-w-3xl leading-relaxed">
              {CATEGORY_META[selectedCategory].description}
            </p>
          </div>
          <div className="text-right self-start sm:self-center shrink-0">
            <span className="text-2xl font-serif text-[#181715]">
              {filteredImages.length}
            </span>
            <span className="block text-[10px] font-mono uppercase tracking-wider text-[#8b877f]">
              {filteredImages.length === 1 ? 'Fotografie' : 'Fotografien'}
            </span>
          </div>
        </div>
      )}

      {/* VIEW MODE 1: FILTERED MASONRY */}
      {viewMode === 'filter' ? (
        <>
          {filteredImages.length === 0 ? (
            <div className="py-20 text-center text-[#8b877f] font-mono text-xs uppercase tracking-wider bg-[#fcfbf9] border border-[#eae6de]">
              Keine Werke in dieser Auswahl vorhanden.
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 sm:gap-6 space-y-5 sm:space-y-6">
              {displayedImages.map((image) => (
                <GalleryCard
                  key={image.id}
                  image={image}
                  onClick={() => setActiveImage(image)}
                />
              ))}
            </div>
          )}

          {/* Load More Bar and Intersection Sentinel */}
          {displayedImages.length < filteredImages.length && (
            <div
              ref={loadMoreRef}
              className="mt-16 pt-10 border-t border-[#eae6de] flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={handleLoadMore}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#181715] hover:bg-[#a87948] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-md"
              >
                <span>Weitere 24 Werke laden</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={handleShowAll}
                className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-[#d3cdbf] hover:border-[#181715] text-[#181715] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
              >
                Alle {filteredImages.length} Werke anzeigen
              </button>
            </div>
          )}
        </>
      ) : (
        /* VIEW MODE 2: GROUPED BY THEMES */
        <div className="space-y-20">
          {groupedImages.map((group) => {
            const meta = CATEGORY_META[group.category] || {
              icon: Sparkles,
              description: 'Handgefertigte Unikate aus Schneeberg.',
              tag: group.category,
            };
            const Icon = meta.icon;
            const previewImages = group.images.slice(0, 8);

            return (
              <div
                key={group.category}
                className="p-6 sm:p-10 bg-[#fcfbf9] border border-[#eae6de] space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#eae6de]">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4 text-[#a87948]" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#a87948]">
                        {meta.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#181715]">
                      {group.category}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#615e57] font-light leading-relaxed">
                      {meta.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCategoryChange(group.category)}
                    className="self-start md:self-auto px-5 py-2.5 bg-[#181715] hover:bg-[#a87948] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors whitespace-nowrap cursor-pointer shadow-xs flex items-center space-x-2"
                  >
                    <span>Alle {group.images.length} Werke ansehen</span>
                  </button>
                </div>

                {/* Group Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
                  {previewImages.map((image) => (
                    <GalleryCard
                      key={image.id}
                      image={image}
                      onClick={() => setActiveImage(image)}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <MasonryLightbox
        image={activeImage}
        images={filteredImages}
        onClose={() => setActiveImage(null)}
        onSelectImage={(img) => setActiveImage(img)}
      />
    </section>
  );
}
