'use client';

import React, { useState, useMemo } from 'react';
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
} from 'lucide-react';
import {
  WEBSITE_GALLERY,
  WEBSITE_CATEGORIES,
  WebsiteCategory,
  WebsiteImage,
} from '@/data/websiteGalleryData';
import MasonryLightbox from './MasonryLightbox';

const CATEGORY_META: Record<
  string,
  { icon: React.ElementType; description: string; tag: string }
> = {
  'Schwibbögen & Lichtkunst': {
    icon: Lightbulb,
    description:
      'Illuminierte Monumente von 1,20 m bis 1,80 m, hochpräzise Acrylglas-Fräskunst und smarte LED-Steuerung (Home Assistant, WLED).',
    tag: 'Licht-Monumente',
  },
  'Epoxidharzlampen': {
    icon: Sparkles,
    description:
      'Massives Holz trifft auf glasklares Epoxidharz: Kunstvoll gegossene Epoxidharzlampen mit faszinierenden Lichteffekten, Farbverläufen und Tiefenwirkung.',
    tag: 'Epoxid & Licht',
  },
  'Gartenmöbel & Holzbau': {
    icon: TreePine,
    description:
      'Vom ergonomischen Adirondack-Gartenstuhl über geschwungene Parkbänke bis hin zu Pergolen und Raumspartreppen.',
    tag: 'Outdoor & Konstruktion',
  },
  'Personalisierte Unikate': {
    icon: Flame,
    description:
      'Individuelle Familienschwibbögen, Lichtenberg-Fraktalbrandmalerei, Firmenpräsente und maßgefertigte Holzunikate.',
    tag: 'Einzelanfertigung',
  },
  'Lichterspitzen & Tradition': {
    icon: Compass,
    description:
      'Erzgebirgische Handwerkstradition: Klassische Lichterspitzen mit Bergmann & Engel, bergmännische Motive und traditionsreiche Bergparaden.',
    tag: 'Erzgebirgische Tradition',
  },
  'Werkstatt & Entstehung': {
    icon: Wrench,
    description:
      'Authentische Werkstatteinblicke: Rohholzauswahl, 200 × 100 cm CNC-Fräsung, Handschliff und Passgenauigkeit auf der Werkbank.',
    tag: 'Hinter den Kulissen',
  },
};

export default function MasonryGallery() {
  const [selectedCategory, setSelectedCategory] = useState<WebsiteCategory>('Alle Werke');
  const [viewMode, setViewMode] = useState<'filter' | 'grouped'>('filter');
  const [activeImage, setActiveImage] = useState<WebsiteImage | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'Alle Werke') return WEBSITE_GALLERY;
    return WEBSITE_GALLERY.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const displayedImages = useMemo(() => {
    return filteredImages.slice(0, visibleCount);
  }, [filteredImages, visibleCount]);

  const countsByCategory = useMemo(() => {
    const counts: Record<string, number> = { 'Alle Werke': WEBSITE_GALLERY.length };
    WEBSITE_CATEGORIES.forEach((cat) => {
      if (cat !== 'Alle Werke') {
        counts[cat] = WEBSITE_GALLERY.filter((img) => img.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Group images by category for the grouped view
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
    setViewMode('filter');
    setVisibleCount(24);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 24, filteredImages.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredImages.length);
  };

  return (
    <section id="galerie" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-[#eae6de]">
        <div className="space-y-3">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#a87948] flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#a87948]" />
            Atelier-Fotostrecke & Unikate
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#181715]">
            Asymmetrische Werkschau
          </h2>
          <p className="text-sm sm:text-base text-[#615e57] max-w-2xl font-light leading-relaxed">
            Über <strong>370 originale Fotografien</strong> direkt aus der Werkstatt in Schneeberg OT Lindenau:
            Von monumentalen Schwibbögen mit smarter LED-Steuerung (Home Assistant, WLED) über Epoxidharzlampen
            bis hin zu handgefertigten Gartenmöbeln und Werkstatteinblicken.
          </p>
        </div>

        {/* View Switcher Controls */}
        <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end space-y-2">
          <div className="inline-flex p-1 bg-[#f4f1ea] border border-[#eae6de] rounded-xs">
            <button
              onClick={() => setViewMode('filter')}
              className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all flex items-center space-x-1.5 cursor-pointer ${
                viewMode === 'filter'
                  ? 'bg-[#181715] text-white shadow-xs'
                  : 'text-[#615e57] hover:text-[#181715]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Rasteransicht</span>
            </button>
            <button
              onClick={() => {
                setViewMode('grouped');
                setSelectedCategory('Alle Werke');
              }}
              className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all flex items-center space-x-1.5 cursor-pointer ${
                viewMode === 'grouped'
                  ? 'bg-[#181715] text-white shadow-xs'
                  : 'text-[#615e57] hover:text-[#181715]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Nach Themen gruppiert</span>
            </button>
          </div>
          <span className="font-mono text-[11px] text-[#8b877f]">
            {viewMode === 'filter'
              ? `${displayedImages.length} von ${filteredImages.length} Werken sichtbar`
              : '6 Handwerks-Themenwelten'}
          </span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {WEBSITE_CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category && viewMode === 'filter';
          const count = countsByCategory[category] ?? 0;
          if (count === 0 && category !== 'Alle Werke') return null;

          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2.5 text-xs uppercase tracking-[0.18em] font-medium transition-all whitespace-nowrap flex items-center space-x-2 cursor-pointer ${
                isSelected
                  ? 'bg-[#181715] text-[#fcfbf9] shadow-xs'
                  : 'bg-[#f4f1ea] text-[#615e57] hover:bg-[#eae6de] hover:text-[#181715]'
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-xs ${
                  isSelected ? 'bg-[#33312e] text-[#a87948]' : 'bg-[#e2ded5] text-[#8b877f]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* VIEW MODE 1: FILTERED MASONRY */}
      {viewMode === 'filter' ? (
        <>
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 sm:gap-6 space-y-5 sm:space-y-6">
            {displayedImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setActiveImage(image)}
                className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xs bg-[#f4f1ea] border border-[#eae6de] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#a87948]"
              >
                <div className="relative w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={image.width || 800}
                    height={image.height || 600}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading="lazy"
                  />

                  {/* Subtle dark overlay with clean expand icon on hover (no text descriptions) */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 bg-black/60 text-white rounded-full backdrop-blur-xs flex items-center justify-center shadow-lg border border-white/20 transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Bar */}
          {displayedImages.length < filteredImages.length && (
            <div className="mt-16 pt-10 border-t border-[#eae6de] flex flex-col sm:flex-row items-center justify-center gap-4">
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
        <div className="space-y-24">
          {groupedImages.map((group) => {
            const meta = CATEGORY_META[group.category] || {
              icon: Sparkles,
              description: 'Handgefertigte Unikate aus Schneeberg.',
              tag: group.category,
            };
            const Icon = meta.icon;
            // Show preview of up to 8 images per group
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
                    <div
                      key={image.id}
                      onClick={() => setActiveImage(image)}
                      className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xs bg-[#f4f1ea] border border-[#eae6de] transition-all duration-300 hover:shadow-xl hover:border-[#a87948]"
                    >
                      <div className="relative w-full overflow-hidden bg-neutral-900">
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={image.width || 800}
                          height={image.height || 600}
                          className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="p-2.5 bg-black/60 text-white rounded-full backdrop-blur-xs flex items-center justify-center shadow-lg border border-white/20 transform scale-90 group-hover:scale-100 transition-transform">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
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

