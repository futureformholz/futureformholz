'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  Lock,
  ChevronRight,
  Maximize2,
  Check,
  Plus,
  Minus,
  Clock,
  Phone,
  Loader2,
  AlertCircle,
  ArrowLeft,
  Eye,
  Play,
  ExternalLink,
} from 'lucide-react';
import { PRODUCTS, type ProductData } from './products';

interface OnlineShopViewProps {
  productId?: string | null;
}

export function OnlineShopView({ productId }: OnlineShopViewProps) {
  const router = useRouter();
  const activeProduct = productId ? PRODUCTS[productId] || null : null;

  const handleSelectProduct = (id: string) => {
    router.push(`/online-shop/${id}`);
  };

  const handleBackToOverview = () => {
    router.push('/online-shop');
  };

  return (
    <div className="bg-[#fcfbf9] text-[#181715] min-h-screen">
      {/* BREADCRUMB HEADER */}
      <div className="border-b border-[#eae6de] bg-[#f7f5f0] py-4 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs font-mono text-[#8b877f]">
          <Link href="/" className="hover:text-[#a87948] transition-colors">
            Startseite
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          {activeProduct ? (
            <>
              <button
                type="button"
                onClick={handleBackToOverview}
                className="hover:text-[#a87948] transition-colors cursor-pointer"
              >
                Online-Shop
              </button>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="truncate max-w-xs sm:max-w-md text-[#a87948] font-semibold">
                {activeProduct.shortTitle}
              </span>
            </>
          ) : (
            <span className="text-[#181715] font-semibold">Online-Shop</span>
          )}
        </div>
      </div>

      {!activeProduct ? (
        <ProductGridOverview onSelectProduct={handleSelectProduct} />
      ) : (
        <ProductDetailView
          key={activeProduct.id}
          activeProduct={activeProduct}
          onBackToOverview={handleBackToOverview}
        />
      )}
    </div>
  );
}

function ProductGridOverview({ onSelectProduct }: { onSelectProduct: (id: string) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-16 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#a87948] font-semibold block">
          Erzgebirgische Meisterwerkstatt · Stephan Tautenhahn
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#181715] font-normal leading-tight">
          Exklusive Lichtbögen & Schwibbögen
        </h1>
        <p className="text-sm sm:text-base text-[#615e57] font-light leading-relaxed">
          Traditionelle Handwerkskunst neu interpretiert. Handgefertigt in Schneeberg OT Lindenau – aus massivem heimischem Eichenholz, hochpräzisen Konturgravuren und stimmungsvoller 12V-LED-Lichttechnik mit optionaler Sockel-Wunschgravur.
        </p>
      </div>

      {/* Trust Highlights */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
        <div className="p-4 bg-white border border-[#eae6de] rounded-xs text-center space-y-1 shadow-xs">
          <span className="text-xs font-mono font-bold text-[#a87948] block">100% Erzgebirge</span>
          <span className="text-[11px] font-mono text-[#615e57] block">Handarbeit aus Schneeberg</span>
        </div>
        <div className="p-4 bg-white border border-[#eae6de] rounded-xs text-center space-y-1 shadow-xs">
          <span className="text-xs font-mono font-bold text-[#a87948] block">Eiche massiv</span>
          <span className="text-[11px] font-mono text-[#615e57] block">Sockelmaß 55 × 4 × 4 cm</span>
        </div>
        <div className="p-4 bg-white border border-[#eae6de] rounded-xs text-center space-y-1 shadow-xs">
          <span className="text-xs font-mono font-bold text-[#a87948] block">12V Plug & Play</span>
          <span className="text-[11px] font-mono text-[#615e57] block">Inkl. 12V-Netzteil</span>
        </div>
        <div className="p-4 bg-white border border-[#eae6de] rounded-xs text-center space-y-1 shadow-xs">
          <span className="text-xs font-mono font-bold text-[#a87948] block">Wunschgravur (+15 €)</span>
          <span className="text-[11px] font-mono text-[#615e57] block">Individuell in Eiche gefräst</span>
        </div>
      </div>

      {/* Section Subheader */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#eae6de] pb-3 text-xs font-mono text-[#615e57]">
        <span className="font-semibold text-[#181715] text-sm">
          Alle Modelle ({Object.keys(PRODUCTS).length} Handwerks-Unikate)
        </span>
        <span>Klicken Sie auf ein Modell, um alle Bilder & Gravur-Optionen zu sehen</span>
      </div>

      {/* THE PRODUCT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {Object.values(PRODUCTS).map((prod) => (
          <div
            key={prod.id}
            onClick={() => onSelectProduct(prod.id)}
            className="bg-white border border-[#eae6de] hover:border-[#a87948] rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
          >
            {/* Image Viewport */}
            <div className="relative aspect-[16/10] bg-[#181715] overflow-hidden">
              {prod.imageFit === 'contain' && (
                <Image
                  src={prod.images[0].src}
                  alt=""
                  fill
                  aria-hidden="true"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover scale-110 blur-xl opacity-45 pointer-events-none"
                />
              )}
              <Image
                src={prod.images[0].src}
                alt={prod.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`${
                  prod.imageFit === 'contain' ? 'object-contain p-1' : 'object-cover'
                } group-hover:scale-105 transition-transform duration-700 ease-out`}
              />
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[9px] font-mono uppercase tracking-wider bg-black/85 text-white px-2.5 py-1 backdrop-blur-xs border border-white/10 rounded-xs shadow">
                  {prod.badge}
                </span>
              </div>
              <div className="absolute top-3 right-3 z-10">
                <span className="text-[9px] font-mono uppercase tracking-wider bg-[#a87948] text-white px-2 py-0.5 rounded-xs font-bold shadow">
                  {prod.artNo}
                </span>
              </div>
              {/* Hover Hint */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="bg-white/95 text-[#181715] px-4 py-2 rounded-xs text-xs font-mono font-semibold shadow-lg backdrop-blur-xs flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Eye className="w-3.5 h-3.5 text-[#a87948]" />
                  Details ansehen
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <h2 className="font-serif text-lg font-bold text-[#181715] group-hover:text-[#a87948] transition-colors leading-snug line-clamp-2">
                  {prod.shortTitle}
                </h2>
                <p className="text-xs text-[#615e57] line-clamp-2 leading-relaxed">
                  {prod.bulletPoints[0]?.text || prod.subtitle}
                </p>

                {/* Quick Specs Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[10px] font-mono bg-[#f4f1ea] text-[#615e57] px-2 py-0.5 rounded-xs">
                    {prod.specs[0]?.label}
                  </span>
                  <span className="text-[10px] font-mono bg-[#f4f1ea] text-[#615e57] px-2 py-0.5 rounded-xs">
                    {prod.specs[1]?.label}
                  </span>
                  <span className="text-[10px] font-mono bg-[#a87948]/15 text-[#a87948] px-2 py-0.5 rounded-xs font-semibold">
                    +15 € Wunschgravur
                  </span>
                </div>
              </div>

              {/* Card Footer: Price & CTA */}
              <div className="pt-4 border-t border-[#eae6de] space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8b877f] block">
                      Handarbeitspreis:
                    </span>
                    <span className="text-2xl font-serif font-bold text-[#181715]">
                      {prod.price.toFixed(2).replace('.', ',')} €
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#8b877f]">zzgl. Versand</span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(prod.id);
                  }}
                  className="w-full py-3 px-4 bg-[#86b817] group-hover:bg-[#749f13] text-[#121b06] text-xs uppercase tracking-widest font-bold transition-all rounded-xs flex items-center justify-center space-x-2 shadow-xs hover:shadow-md cursor-pointer"
                >
                  <span>Details ansehen & kaufen</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Inquiry Teaser */}
      <div className="bg-[#181715] text-[#eae6de] p-8 sm:p-10 rounded-xs border border-[#2e2c28] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl text-center md:text-left">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#a87948] font-bold">
            Individuelle Sonderanfertigung
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-white">
            Sie suchen ein ganz persönliches Motiv oder ein Firmenpräsent?
          </h3>
          <p className="text-xs text-[#a39e94] leading-relaxed">
            Wir fertigen Schwibbögen und Lichtkunst mit Ihrem Wunschmotiv, Familienwappen oder Firmenlogo – passgenau in unserer Schneeberger Werkstatt.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href="/#kontakt"
            className="px-6 py-3 bg-[#a87948] hover:bg-[#906233] text-white text-xs uppercase tracking-widest font-bold transition-colors text-center rounded-xs"
          >
            Sonderanfertigung anfragen
          </Link>
          <a
            href="tel:+491749233526"
            className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-widest font-mono transition-colors text-center border border-white/20 rounded-xs flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0174 9233 526</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductDetailView({
  activeProduct,
  onBackToOverview,
}: {
  activeProduct: ProductData;
  onBackToOverview: () => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [shippingOption, setShippingOption] = useState<'standard' | 'pickup'>('standard');
  const [engravingEnabled, setEngravingEnabled] = useState(false);
  const [engravingText, setEngravingText] = useState('');
  const [engravingError, setEngravingError] = useState<string | null>(null);
  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    if (!isZoomOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsZoomOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomOpen]);

  const currentImages = activeProduct.images;
  const pricePerItem = activeProduct.price;
  const shippingCost = shippingOption === 'standard' ? 5.99 : 0.0;
  const engravingCost = engravingEnabled ? 15.0 * quantity : 0.0;
  const subtotal = pricePerItem * quantity;
  const totalPrice = subtotal + shippingCost + engravingCost;

  const isShortsVideo = activeProduct.youtubeAspect !== '16:9';

  const handleStripeCheckout = async () => {
    if (engravingEnabled && !engravingText.trim()) {
      setEngravingError('Bitte geben Sie Ihren gewünschten Gravurtext ein (max. 10 Zeichen).');
      const inputEl = document.getElementById('engraving-text-input');
      if (inputEl) inputEl.focus();
      return;
    }

    setIsLoadingCheckout(true);
    setCheckoutError(null);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: activeProduct.id,
          quantity,
          shippingOption,
          engravingEnabled,
          engravingText: engravingText.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || 'Fehler beim Verbinden mit Stripe');
      }

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error('Keine Checkout-URL von Stripe erhalten.');
      }
    } catch (err: unknown) {
      console.error('Checkout error:', err);
      const message = err instanceof Error ? err.message : 'Verbindung zu Stripe fehlgeschlagen.';
      setCheckoutError(message);
      setIsLoadingCheckout(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 sm:py-12 space-y-10">
      {/* Back Button Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#eae6de]">
        <button
          type="button"
          onClick={onBackToOverview}
          className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#181715] hover:text-[#a87948] transition-colors py-2.5 px-4 bg-white border border-[#d3cdbf] hover:border-[#a87948] rounded-xs shadow-xs cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>← Zurück zur Übersicht</span>
        </button>

        <div className="flex items-center space-x-2 text-xs font-mono text-[#8b877f]">
          <span className="font-semibold text-[#a87948]">{activeProduct.artNo}</span>
          <span>·</span>
          <span>{activeProduct.badge}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* LEFT: GALLERY (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Main Active Image Viewport */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xs overflow-hidden bg-[#181715] border border-[#eae6de] shadow-lg group">
            {activeProduct.imageFit === 'contain' && (
              <Image
                src={currentImages[activeImageIndex]?.src || activeProduct.images[0].src}
                alt=""
                fill
                aria-hidden="true"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover scale-110 blur-2xl opacity-45 pointer-events-none"
              />
            )}
            <Image
              src={currentImages[activeImageIndex]?.src || activeProduct.images[0].src}
              alt={currentImages[activeImageIndex]?.alt || activeProduct.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className={`${
                activeProduct.imageFit === 'contain' ? 'object-contain p-1' : 'object-cover object-center'
              } transition-transform duration-700 ease-out group-hover:scale-102`}
            />

            {/* Watermark badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[10px] font-mono uppercase tracking-wider bg-black/80 text-white px-3 py-1 backdrop-blur-xs border border-white/10 rounded-xs">
                Original Werkstatt-Unikat
              </span>
            </div>

            {/* Zoom Trigger */}
            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="absolute bottom-4 right-4 z-10 p-2.5 bg-black/70 hover:bg-black text-white rounded-full backdrop-blur-xs border border-white/20 transition-all opacity-90 hover:opacity-100 hover:scale-105 cursor-pointer"
              title="Vollbild anzeigen"
              aria-label="Vollbild"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Thumbnail Carousel & optional video jump anchor */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {currentImages.map((img, idx) => {
                const isActive = activeImageIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-16 sm:w-24 sm:h-20 rounded-xs overflow-hidden border-2 transition-all cursor-pointer bg-[#181715] shrink-0 ${
                      isActive
                        ? 'border-[#a87948] shadow-md scale-102'
                        : 'border-[#eae6de] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>

            {activeProduct.youtubeId && (
              <a
                href="#produktvideo"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#f4f1ea] hover:bg-[#eae6de] border border-[#d3cdbf] hover:border-[#a87948] rounded-xs text-xs font-mono uppercase tracking-wider text-[#181715] transition-colors shrink-0"
              >
                <Play className="w-3.5 h-3.5 text-[#a87948] fill-current" />
                <span>Produktvideo ansehen</span>
              </a>
            )}
          </div>

          {/* Highlight Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#eae6de]">
            {activeProduct.specs.map((spec, i) => (
              <div key={i} className="p-3 bg-[#f4f1ea] border border-[#eae6de] text-center space-y-1">
                <span className="text-xs font-mono font-bold text-[#a87948] block">
                  {spec.label}
                </span>
                <span className="text-[10px] uppercase font-mono text-[#615e57] block">
                  {spec.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO & STRIPE CHECKOUT (5 cols) */}
        <div className="lg:col-span-5 space-y-7">
          <div className="space-y-2.5">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest bg-[#2e2c28] text-white px-2.5 py-0.5 rounded-xs font-semibold">
                {activeProduct.badge}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8b877f]">
                Art.-Nr. {activeProduct.artNo}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif text-[#181715] leading-tight">
              {activeProduct.title}
            </h1>

            <p className="text-xs font-mono text-[#8b877f]">{activeProduct.subtitle}</p>
          </div>

          {/* PRICING & SHIPPING DISPLAY */}
          <div className="p-6 bg-[#f4f1ea] border border-[#eae6de] rounded-xs space-y-4">
            <div className="flex items-baseline justify-between border-b border-[#e2ded5] pb-4">
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#181715]">
                  {activeProduct.price.toFixed(2).replace('.', ',')} €
                </span>
                <span className="text-xs text-[#615e57] font-mono ml-2 block sm:inline">
                  Endpreis ({shippingOption === 'standard' ? 'zzgl. 5,99 € Versand' : 'inkl. Abholung'})
                </span>
              </div>

              <span className="text-xs font-mono text-[#a87948] bg-[#a87948]/15 px-3 py-1 border border-[#a87948]/40 rounded-xs font-semibold flex items-center gap-1.5 shrink-0">
                <Clock className="w-3.5 h-3.5 text-[#a87948]" />
                Lieferzeit: ca. 14 Tage
              </span>
            </div>

            {/* Shipping Selection */}
            <div className="space-y-2">
              <label className="block text-xs uppercase font-mono tracking-wider text-[#615e57]">
                Versandoption wählen:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setShippingOption('standard')}
                  className={`p-3 text-left border rounded-xs transition-all flex items-center justify-between cursor-pointer ${
                    shippingOption === 'standard'
                      ? 'border-[#a87948] bg-white text-[#181715] shadow-xs'
                      : 'border-[#d3cdbf] bg-[#fcfbf9] text-[#615e57] hover:border-[#a87948]'
                  }`}
                >
                  <div>
                    <p className="font-semibold">Versicherter Versand</p>
                    <p className="text-[10px] text-[#8b877f]">DHL Paketversand</p>
                  </div>
                  <span className="font-bold text-[#a87948]">+5,99 €</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShippingOption('pickup')}
                  className={`p-3 text-left border rounded-xs transition-all flex items-center justify-between cursor-pointer ${
                    shippingOption === 'pickup'
                      ? 'border-[#a87948] bg-white text-[#181715] shadow-xs'
                      : 'border-[#d3cdbf] bg-[#fcfbf9] text-[#615e57] hover:border-[#a87948]'
                  }`}
                >
                  <div>
                    <p className="font-semibold">Selbstabholung</p>
                    <p className="text-[10px] text-[#8b877f]">Werkstatt Schneeberg</p>
                  </div>
                  <span className="font-bold text-[#86b817]">0,00 €</span>
                </button>
              </div>
            </div>

            {/* Optional Gravur Breakdown if active */}
            {engravingEnabled && (
              <div className="pt-2 border-t border-[#e2ded5] flex items-center justify-between text-xs font-mono">
                <span className="text-[#a87948] flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Individuelle Sockelgravur:
                </span>
                <span className="font-bold text-[#a87948]">
                  +{engravingCost.toFixed(2).replace('.', ',')} €
                  {quantity > 1 ? ` (${quantity}× 15,00 €)` : ''}
                </span>
              </div>
            )}

            {/* Quantity Selector & Summary */}
            <div className="pt-2 flex items-center justify-between border-t border-[#e2ded5]">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono uppercase text-[#615e57]">Anzahl:</span>
                <div className="flex items-center border border-[#d3cdbf] bg-white rounded-xs">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 hover:bg-[#f4f1ea] transition-colors text-[#181715] focus:outline-none cursor-pointer"
                    aria-label="Anzahl verringern"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-3 py-1 text-xs font-mono font-bold text-[#181715]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 hover:bg-[#f4f1ea] transition-colors text-[#181715] focus:outline-none cursor-pointer"
                    aria-label="Anzahl erhöhen"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-mono text-[#8b877f] block">
                  {engravingEnabled ? 'Gesamtbetrag (inkl. Gravur):' : 'Gesamtbetrag:'}
                </span>
                <span className="text-xl font-mono font-bold text-[#a87948]">
                  {totalPrice.toFixed(2).replace('.', ',')} €
                </span>
              </div>
            </div>

            {/* Legal Note § 19 UStG */}
            <p className="text-[10px] text-[#8b877f] font-light leading-normal">
              Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerstatus).
            </p>
          </div>

          {/* INTERAKTIVE SOCKEL-GRAVUR-OPTION (+15,00 €) */}
          <div className="p-4 sm:p-5 bg-white border border-[#d3cdbf] rounded-xs space-y-3.5 shadow-xs">
            <label className="flex items-start space-x-3 cursor-pointer select-none">
              <input
                type="checkbox"
                id="engraving-toggle-checkbox"
                checked={engravingEnabled}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setEngravingEnabled(checked);
                  if (!checked) {
                    setEngravingError(null);
                  }
                }}
                className="mt-0.5 w-4 h-4 text-[#a87948] border-[#d3cdbf] rounded-xs focus:ring-[#a87948] accent-[#a87948] cursor-pointer"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="text-xs sm:text-sm font-serif font-bold text-[#181715]">
                    Individuelle Sockelgravur hinzufügen (+ 15,00 €)
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-[#a87948]/15 text-[#a87948] px-2 py-0.5 rounded-xs font-semibold">
                    Personalisierung
                  </span>
                </div>
                <p className="text-[11px] text-[#615e57] font-mono mt-0.5">
                  Ihr persönlicher Wunschtext präzise gefräst in den massiven Holzsockel
                </p>
              </div>
            </label>

            {engravingEnabled && (
              <div className="pt-3 border-t border-[#eae6de] space-y-2.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="engraving-text-input"
                    className="text-xs font-mono uppercase tracking-wider text-[#181715] font-semibold"
                  >
                    Wunschtext auf Sockel <span className="text-red-600">*</span>
                  </label>
                  <span
                    className={`text-xs font-mono font-semibold ${
                      engravingText.length === 10
                        ? 'text-[#a87948] font-bold'
                        : engravingText.length > 0
                        ? 'text-[#181715]'
                        : 'text-[#8b877f]'
                    }`}
                  >
                    {engravingText.length} / 10 Zeichen
                  </span>
                </div>

                <input
                  id="engraving-text-input"
                  type="text"
                  value={engravingText}
                  onChange={(e) => {
                    const val = e.target.value.slice(0, 10);
                    setEngravingText(val);
                    if (val.trim()) {
                      setEngravingError(null);
                    }
                  }}
                  maxLength={10}
                  placeholder="z.B. Glück auf"
                  className={`w-full px-3.5 py-2.5 bg-[#fcfbf9] border rounded-xs text-sm font-mono text-[#181715] placeholder:text-[#a8a39a] focus:outline-none focus:bg-white transition-all ${
                    engravingError
                      ? 'border-red-500 ring-1 ring-red-500'
                      : 'border-[#d3cdbf] focus:border-[#a87948] focus:ring-1 focus:ring-[#a87948]'
                  }`}
                />

                {engravingError && (
                  <p className="text-xs text-red-600 font-mono flex items-center gap-1.5 pt-0.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{engravingError}</span>
                  </p>
                )}

                <p className="text-[10px] text-[#8b877f] font-mono leading-relaxed pt-1.5 border-t border-[#f0ede6]">
                  Hinweis: Bei individueller Wunschgravur wird der Artikel speziell für Sie angefertigt (Ausschluss des Widerrufsrechts gemäß § 312g Abs. 2 Nr. 1 BGB).
                </p>
              </div>
            )}
          </div>

          {/* STRIPE CHECKOUT CTA BUTTON */}
          <div className="space-y-3">
            {checkoutError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{checkoutError}</span>
              </div>
            )}

            <button
              type="button"
              onClick={handleStripeCheckout}
              disabled={isLoadingCheckout}
              className="w-full py-4 px-6 bg-[#86b817] hover:bg-[#749f13] active:bg-[#62870e] text-[#121b06] text-sm uppercase tracking-[0.2em] font-bold transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 rounded-xs cursor-pointer border border-[#9ed61c]/60 hover:scale-[1.01]"
            >
              {isLoadingCheckout ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Verbinde mit Stripe Checkout...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Jetzt sicher kaufen mit Stripe</span>
                  <span className="text-xs font-mono bg-black/15 px-2 py-0.5 rounded-xs whitespace-nowrap">
                    {totalPrice.toFixed(2).replace('.', ',')} €
                  </span>
                </>
              )}
            </button>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-[#615e57]">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#a87948]" /> SSL-Verschlüsselt
              </span>
              <span>·</span>
              <span>Stripe Checkout</span>
              <span>·</span>
              <span>Adresseingabe</span>
              <span>·</span>
              <span>Apple Pay / Klarna / Karte</span>
            </div>
          </div>

          {/* Quick Benefits List */}
          <div className="border-t border-[#eae6de] pt-6 space-y-2.5 text-xs text-[#615e57]">
            {activeProduct.bulletPoints.map((item, i) => (
              <div key={i} className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-[#86b817] shrink-0 mt-0.5" />
                <span>
                  <strong>{item.title}:</strong> {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DETAILED DESCRIPTION, VIDEO PLAYER & CRAFT DETAILS SECTION */}
      <div className="mt-20 pt-16 border-t border-[#eae6de] space-y-16">
        {activeProduct.youtubeId && isShortsVideo ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#a87948] flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#a87948]" />
                Meisterhafte Erzgebirgskunst
              </span>

              <h2 className="text-2xl sm:text-4xl font-serif text-[#181715] tracking-tight">
                {activeProduct.introTitle}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#615e57] font-light leading-relaxed">
                {activeProduct.introParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`https://www.youtube.com/shorts/${activeProduct.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#f4f1ea] hover:bg-[#eae6de] border border-[#d3cdbf] hover:border-[#a87948] rounded-xs text-xs font-mono text-[#181715] transition-colors"
                >
                  <Play className="w-3.5 h-3.5 text-[#a87948] fill-current" />
                  <span>Auf YouTube öffnen</span>
                  <ExternalLink className="w-3 h-3 text-[#8b877f]" />
                </a>
              </div>
            </div>

            {/* Responsive 9:16 YouTube Shorts Player */}
            <div id="produktvideo" className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-[330px] bg-[#181715] p-2.5 sm:p-3 rounded-2xl border border-[#2e2c28] shadow-2xl space-y-2.5">
                <div className="flex items-center justify-between px-1.5 text-[10px] font-mono uppercase tracking-widest text-[#a87948]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Produktvideo · Shorts
                  </span>
                  <span className="text-[#8b877f]">9:16 Live-Ansicht</span>
                </div>
                <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeProduct.youtubeId}?rel=0`}
                    title={`Produktvideo: ${activeProduct.shortTitle}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            <div className="max-w-4xl space-y-6">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#a87948] flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#a87948]" />
                Meisterhafte Erzgebirgskunst
              </span>

              <h2 className="text-2xl sm:text-4xl font-serif text-[#181715] tracking-tight">
                {activeProduct.introTitle}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#615e57] font-light leading-relaxed">
                {activeProduct.introParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {activeProduct.youtubeId && (
              <div id="produktvideo" className="max-w-4xl space-y-3">
                <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#a87948] block">
                  Produktvideo in Aktion
                </span>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#181715] border border-[#2e2c28] shadow-xl">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeProduct.youtubeId}?rel=0`}
                    title={`Produktvideo: ${activeProduct.shortTitle}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* MOTIF & HIGHLIGHT DETAILS CARDS */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif text-[#181715]">{activeProduct.motifTitle}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeProduct.motifPoints.map((mp, i) => (
              <div
                key={i}
                className="bg-[#fcfbf9] p-6 sm:p-8 border border-[#eae6de] space-y-3 hover:border-[#a87948] transition-colors"
              >
                <div className="w-10 h-10 bg-[#f4f1ea] border border-[#d3cdbf] flex items-center justify-center text-[#a87948]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif text-[#181715]">{mp.title}</h4>
                <p className="text-xs text-[#615e57] font-light leading-relaxed">{mp.text}</p>
              </div>
            ))}

            {activeProduct.qualityPoints.map((qp, i) => {
              const IconComponent = qp.icon || Sparkles;
              return (
                <div
                  key={`q-${i}`}
                  className="bg-[#fcfbf9] p-6 sm:p-8 border border-[#eae6de] space-y-3 hover:border-[#a87948] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#f4f1ea] border border-[#d3cdbf] flex items-center justify-center text-[#a87948]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-serif text-[#181715]">{qp.title}</h4>
                  <p className="text-xs text-[#615e57] font-light leading-relaxed">{qp.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CUSTOM ORDERS: IHR UNIKAT NACH MASS */}
        <div className="bg-[#181715] text-[#eae6de] p-8 sm:p-14 border border-[#2e2c28] relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a87948]">
              Sonderanfertigungen nach Wunsch
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-white tracking-tight">
              {activeProduct.customTitle}
            </h3>
            <p className="text-sm text-[#b8b2a5] font-light leading-relaxed">
              {activeProduct.customDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-xs font-light">
              {activeProduct.customFeatures.map((feat, i) => (
                <div key={i} className="space-y-1.5 border-l-2 border-[#a87948] pl-4">
                  <p className="font-serif text-white text-sm">{feat.title}</p>
                  <p className="text-[#a39e94]">{feat.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#kontakt"
                className="px-6 py-3.5 bg-[#a87948] hover:bg-[#906233] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center shadow-lg cursor-pointer"
              >
                Individuelle Sonderanfertigung anfragen
              </Link>
              <a
                href="tel:+491749233526"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-[0.2em] font-mono transition-colors text-center border border-white/20 flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0174 9233 526 anrufen</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Back Button */}
      <div className="pt-8 border-t border-[#eae6de] flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBackToOverview}
          className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#181715] hover:text-[#a87948] transition-colors py-3 px-5 bg-white border border-[#d3cdbf] hover:border-[#a87948] rounded-xs shadow-xs cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>← Zurück zur Produkt-Übersicht</span>
        </button>
        <span className="text-xs font-mono text-[#8b877f]">
          Handgefertigte erzgebirgische Holzkunst von Stephan Tautenhahn
        </span>
      </div>

      {/* FULLSCREEN PHOTO ZOOM MODAL */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 cursor-pointer"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-xs font-mono cursor-pointer"
          >
            ✕ Schließen (Esc)
          </button>
          <div className="relative w-full max-w-5xl h-[85vh]">
            <Image
              src={currentImages[activeImageIndex]?.src || activeProduct.images[0].src}
              alt={currentImages[activeImageIndex]?.alt || 'Großansicht'}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
