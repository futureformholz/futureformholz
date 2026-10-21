'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  ArrowUpRight,
  ExternalLink,
  ShoppingBag,
} from 'lucide-react';
import { WebsiteImage } from '@/data/websiteGalleryData';

interface MasonryLightboxProps {
  image: WebsiteImage | null;
  images: WebsiteImage[];
  onClose: () => void;
  onSelectImage: (img: WebsiteImage) => void;
}

export default function MasonryLightbox({
  image,
  images,
  onClose,
  onSelectImage,
}: MasonryLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const currentIndex = image ? images.findIndex((img) => img.id === image.id) : -1;

  // Reset loading state when active image changes
  useEffect(() => {
    setIsImageLoaded(false);
  }, [image?.id]);

  // Preload previous and next image in background for instant navigation
  useEffect(() => {
    if (!image || images.length <= 1) return;
    const nextImg = images[(currentIndex + 1) % images.length];
    const prevImg = images[(currentIndex - 1 + images.length) % images.length];

    if (typeof window !== 'undefined') {
      if (nextImg?.src) {
        const imgNext = new window.Image();
        imgNext.src = nextImg.src;
      }
      if (prevImg?.src) {
        const imgPrev = new window.Image();
        imgPrev.src = prevImg.src;
      }
    }
  }, [currentIndex, image, images]);

  const handleNext = useCallback(() => {
    if (currentIndex === -1) return;
    setIsZoomed(false);
    const nextIndex = (currentIndex + 1) % images.length;
    onSelectImage(images[nextIndex]);
  }, [currentIndex, images, onSelectImage]);

  const handlePrev = useCallback(() => {
    if (currentIndex === -1) return;
    setIsZoomed(false);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onSelectImage(images[prevIndex]);
  }, [currentIndex, images, onSelectImage]);

  const toggleNativeFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === '+' || e.key === '=') setIsZoomed((prev) => !prev);
    };

    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose, handleNext, handlePrev]);

  // Touch Swipe support
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setTouchStartX(null);
  };

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl text-white select-none transition-all duration-300"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Controls Bar */}
      <div
        className="relative z-20 flex items-center justify-between px-4 sm:px-8 py-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Counter */}
        <div className="flex items-center space-x-3">
          <span className="text-[11px] font-mono tracking-widest text-[#a87948] bg-white/10 px-2.5 py-1 rounded-xs backdrop-blur-xs">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Zoom toggle */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            title={isZoomed ? 'Herauszoomen (-)' : 'Heranzoomen (+)'}
            aria-label="Zoom umschalten"
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleNativeFullscreen}
            className="hidden sm:block p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            title="Vollbild umschalten"
            aria-label="Vollbild"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#a87948] hover:bg-[#906233] text-white transition-colors focus:outline-none shadow-lg"
            title="Schließen (Esc)"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 w-full flex items-center justify-center p-2 sm:p-6 overflow-hidden"
        onClick={(e) => {
          // If clicking image background, close or reset zoom
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Navigation Arrow: Previous */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all backdrop-blur-xs border border-white/10 shadow-2xl focus:outline-none hover:scale-110 active:scale-95"
            aria-label="Vorheriges Bild (Pfeiltaste links)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* The Image Element */}
        <div
          className={`relative max-w-full max-h-full transition-transform duration-300 ease-out cursor-pointer flex items-center justify-center ${
            isZoomed ? 'scale-135 sm:scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(!isZoomed);
          }}
        >
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 border-2 border-[#a87948] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          <Image
            src={image.src}
            alt={image.title}
            width={image.width || 1920}
            height={image.height || 1080}
            priority
            quality={85}
            sizes="(max-width: 1920px) 95vw, 1920px"
            onLoad={() => setIsImageLoaded(true)}
            className={`max-h-[82vh] sm:max-h-[88vh] w-auto max-w-[95vw] object-contain shadow-2xl select-none transition-opacity duration-300 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Navigation Arrow: Next */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all backdrop-blur-xs border border-white/10 shadow-2xl focus:outline-none hover:scale-110 active:scale-95"
            aria-label="Nächstes Bild (Pfeiltaste rechts)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Bar: Clean Category & Direct CTAs */}
      <div
        className="relative z-20 px-4 sm:px-8 py-3.5 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex items-center justify-between border-t border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-2.5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#a87948] bg-black/60 px-2.5 py-1 rounded-xs border border-[#a87948]/30">
            {image.category}
          </span>
          <span className="text-[11px] font-mono text-[#a39e94] hidden sm:inline">
            Future Form Holz · Schneeberg
          </span>
        </div>

        <div className="flex items-center space-x-2.5 shrink-0">
          <Link
            href="/online-shop"
            onClick={onClose}
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-semibold px-3 py-1.5 bg-[#86b817] hover:bg-[#749f13] text-[#121b06] transition-colors rounded-xs shadow-md font-mono"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Online-Shop</span>
          </Link>
          <a
            href="#kontakt"
            onClick={onClose}
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.2em] font-medium px-3.5 py-1.5 bg-[#a87948] hover:bg-[#906233] text-white transition-colors rounded-xs shadow-lg"
          >
            <span>Werk anfragen</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
