import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';

export const metadata = {
  title: 'Etsy-Shop & Kollektion | Future Form Holz · Stephan Tautenhahn',
  description:
    'Handgefertigte Schwibbögen, illuminierte Lichterspitzen und erzgebirgische Holzkunst direkt im offiziellen Etsy-Shop von Future Form Holz kaufen.',
};

export default function ShopPage() {
  const shopCategories = [
    { name: 'Schwibbögen & Lichtkunst', count: 'Etsy', active: true },
    { name: 'Tradition & Erzgebirge', count: 'Etsy', active: false },
    { name: 'Lichterspitzen', count: 'Etsy', active: false },
    { name: 'Personalisierte Unikate', count: 'Auf Anfrage', active: false },
    { name: 'Großformat-CNC-Zuschnitte', count: 'Auf Anfrage', active: false },
  ];

  const featuredShopProducts = [
    {
      title: 'Erleuchtete Lichterspitze »Bergmann & Engel«',
      category: 'Lichterspitzen',
      details: 'Feinste erzgebirgische Holzkunst mit integrierter LED-Beleuchtung',
      tag: 'Bestseller',
      image: '/gallery/1771610067899.webp',
      link: 'https://futureformholz.etsy.com',
    },
    {
      title: 'Acrylglas-Schwibbogen »Haamitland Arzgebirg« mit Bergparade',
      category: 'Schwibbögen & Lichtkunst',
      details: 'Massiver Eichensockel mit Schlägel & Eisen, illuminierte Schneeberger Bergparade und LED Stripes',
      tag: 'Kundenfavorit',
      image: '/gallery/1775485307496.webp',
      link: 'https://futureformholz.etsy.com',
    },
    {
      title: 'Personalisierter Familienschwibbogen mit Teelichtern',
      category: 'Personalisierte Unikate',
      details: 'Individuell gefräst mit Ihrem Haus und Familiennamen',
      tag: 'Auf Bestellung',
      image: '/gallery/1774685651355.webp',
      link: 'https://futureformholz.etsy.com',
    },
  ];

  return (
    <div className="space-y-0">
      {/* PAGE HEADER */}
      <section className="bg-[#181715] text-[#eae6de] py-20 px-6 sm:px-8 border-b border-[#292723]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a87948] flex items-center gap-2">
              <span className="w-5 h-[1px] bg-[#a87948]" />
              Offizieller Online-Shop
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Future Form Holz auf Etsy
            </h1>
            <p className="text-sm text-[#a39e94] max-w-xl font-light">
              Unsere sofort lieferbaren Schwibbögen, Lichterspitzen und Holzgeschenke
              können Sie sicher und unkompliziert über unseren Etsy-Shop bestellen.
            </p>
          </div>

          <a
            href="https://futureformholz.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#181715] bg-[#a87948] hover:bg-[#906233] text-white px-6 py-3.5 shadow-lg transition-colors"
          >
            <span>futureformholz.etsy.com öffnen</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* SHOP CONTAINER */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        {/* Category Filters Bar */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-12 border-b border-[#eae6de]">
          {shopCategories.map((cat) => (
            <a
              key={cat.name}
              href="https://futureformholz.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 text-xs uppercase tracking-[0.18em] font-medium transition-all whitespace-nowrap flex items-center space-x-2 ${
                cat.active
                  ? 'bg-[#181715] text-white'
                  : 'bg-[#f4f1ea] text-[#615e57] hover:bg-[#eae6de] hover:text-[#181715]'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#33312e] text-[#a87948] rounded-xs">
                {cat.count}
              </span>
            </a>
          ))}
        </div>

        {/* ETSY HIGHLIGHT HERO CARD */}
        <div className="bg-[#fcfbf9] border border-[#eae6de] p-8 sm:p-14 text-center max-w-4xl mx-auto mb-20 shadow-sm relative overflow-hidden">
          <div className="w-16 h-16 bg-[#f4f1ea] border border-[#d3cdbf] rounded-full mx-auto flex items-center justify-center text-[#a87948] mb-6">
            <ShoppingBag className="w-7 h-7" />
          </div>

          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#a87948] block mb-2">
            Verifizierter Etsy-Verkäufer
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#181715] mb-4">
            Besuchen Sie unseren Shop auf Etsy
          </h2>
          <p className="text-sm text-[#615e57] font-light max-w-xl mx-auto leading-relaxed mb-8">
            Hier finden Sie aktuelle Kollektionen, detailgetreue Fotos, Kundenbewertungen
            und sichere Zahlungsmöglichkeiten für unsere erzgebirgischen Holzkunstwerke.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://futureformholz.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#181715] hover:bg-[#a87948] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Jetzt auf Etsy shoppen</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/#galerie"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#d3cdbf] hover:border-[#181715] text-[#181715] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Fotogalerie (53 Werke) ansehen
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-[#eae6de] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#8b877f]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#a87948]" />
              Sicherer Versand aus Schneeberg
            </span>
            <span>·</span>
            <span>100% Handveredelt im Erzgebirge</span>
            <span>·</span>
            <span>Käuferschutz über Etsy</span>
          </div>
        </div>

        {/* FEATURED ETSY PRODUCTS */}
        <div className="space-y-8 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#eae6de] pb-4">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#a87948]">
                Beliebte Werke
              </span>
              <h3 className="text-2xl font-serif text-[#181715] mt-1">
                Auswahl aus unserer aktuellen Fertigung
              </h3>
            </div>
            <a
              href="https://futureformholz.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#a87948] hover:text-[#906233] mt-2 sm:mt-0 flex items-center gap-1"
            >
              <span>Alle Artikel auf Etsy ansehen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredShopProducts.map((prod) => (
              <a
                key={prod.title}
                href={prod.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fcfbf9] border border-[#eae6de] overflow-hidden group hover:border-[#a87948] transition-all hover:shadow-xl block"
              >
                <div className="relative h-64 w-full bg-[#181715] overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-mono uppercase tracking-wider bg-[#181715]/80 text-[#fcfbf9] px-2.5 py-1 backdrop-blur-xs">
                      {prod.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#a87948] tracking-wider block">
                      {prod.category}
                    </span>
                    <h4 className="text-base font-serif text-[#181715] mt-1 group-hover:text-[#a87948] transition-colors">
                      {prod.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#8b877f] font-light">
                    {prod.details}
                  </p>

                  <div className="pt-3 border-t border-[#f4f1ea] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#a87948] flex items-center gap-1 group-hover:underline">
                      <span>Auf Etsy bestellen</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CUSTOM PIECES CALL TO ACTION */}
        <div className="bg-[#f4f1ea] border border-[#eae6de] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-serif text-[#181715]">
              Wünschen Sie eine persönliche Einzelanfertigung?
            </h4>
            <p className="text-sm text-[#615e57] font-light max-w-xl">
              Haben Sie ein eigenes Familienhaus, einen speziellen Schriftzug oder benötigen
              Sie CNC-Fräszuschnitte bis 200 × 100 cm? Stephan Tautenhahn fertigt nach Maß.
            </p>
          </div>
          <Link
            href="/#kontakt"
            className="px-6 py-3.5 bg-[#181715] hover:bg-[#a87948] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors whitespace-nowrap flex items-center space-x-2 shadow-md"
          >
            <span>Persönliches Unikat anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
