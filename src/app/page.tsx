import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Layers,
  Leaf,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Cpu,
  Sparkles,
  Tv,
} from 'lucide-react';
import MasonryGallery from '@/components/MasonryGallery';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Holzarbeiten, Epoxidharz, Acrylglasbilder & Smarthome-Möbel | Future Form Holz',
  description:
    'Exklusive Holzarbeiten, Epoxidharz-Unikate, illuminierte Acrylglasbilder und smarte Smarthome-Möbel aus Schneeberg im Erzgebirge. Präzise Großformat-CNC-Fräsung (200 × 100 cm) und Handwerkskunst von Stephan Tautenhahn.',
  keywords: [
    'Holzarbeiten',
    'Epoxidharz',
    'Acrylglasbilder',
    'Smarthome-Möbel',
    'Future Form Holz',
    'Online-Shop Future Form Holz',
    'Erzgebirge',
    'Schneeberg',
    'Lindenau',
    'Epoxidharztisch',
    'Acrylglas Lichtbogen',
    'WLED Beleuchtung',
    'CNC Fräsung 200x100',
    'LED Schwibbogen',
  ],
};

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#181715] text-[#eae6de]">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/20260406_163633.webp"
            alt="Future Form Holz Werkstatt und Lichtkunst auf der Werkbank"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-center opacity-45 scale-102 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181715] via-[#181715]/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28 text-center flex flex-col items-center">
          {/* Logo Emblem */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#a87948] shadow-2xl mb-6 bg-[#24221e] group">
            <Image
              src="/logo.png"
              alt="Future Form Holz Logo"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 96px, 112px"
              priority
            />
          </div>

          <span className="inline-flex items-center space-x-2 text-[11px] uppercase font-mono tracking-[0.3em] text-[#a87948] bg-[#292723]/80 px-4 py-1.5 border border-[#3d3a33] backdrop-blur-xs mb-8">
            <span className="w-2 h-2 rounded-full bg-[#a87948] animate-pulse" />
            <span>Future Form Holz · Stephan Tautenhahn · Schneeberg</span>
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-[1.1] max-w-4xl">
            Holzarbeiten & Epoxidharz in vollendeter Form. <br />
            <span className="italic font-light text-[#d4cebe]">Acrylglasbilder & Smarthome-Möbel.</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-[#b8b2a5] max-w-2xl font-light leading-relaxed">
            Future Form Holz verbindet traditionelle Holzarbeiten und edles Epoxidharz mit moderner
            Großformat-CNC-Fräsung (bis 200 × 100 cm), kunstvollen Acrylglasbildern und individuellen Smarthome-Möbeln –
            programmierbare LED-Lichtstimmungen, WLED & Home-Assistant-Integration.
          </p>

          {/* CTA Buttons Row: Direct Focus on Online-Shop and Atelier Gallery */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto flex-wrap">
            <Link
              href="/online-shop"
              className="w-full sm:w-auto px-8 py-4 bg-[#86b817] hover:bg-[#749f13] text-[#121b06] text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-xl hover:shadow-2xl text-center flex items-center justify-center space-x-2 border border-[#9ed61c]/50 hover:scale-[1.03] active:scale-[0.98]"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span>Zum Online-Shop</span>
            </Link>

            <a
              href="#galerie"
              className="w-full sm:w-auto px-8 py-4 bg-[#a87948] hover:bg-[#906233] text-white text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-lg text-center"
            >
              Fotogalerie entdecken
            </a>

            <a
              href="#kontakt"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#d4cebe]/40 hover:border-white text-white text-xs uppercase tracking-[0.25em] font-medium transition-all text-center flex items-center justify-center space-x-2"
            >
              <span>Unverbindliche Anfrage</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>

          {/* Quick Metrics Bar highlighting Core Competencies */}
          <div className="mt-20 pt-10 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-white">Holzarbeiten</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#99948a] mt-1">
                Massivholz & Erzgebirge
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-white">Epoxidharz</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#99948a] mt-1">
                Tische & Kunstharz-Unikate
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-white">Acrylglas</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#99948a] mt-1">
                Lichtbilder & Schwibbögen
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-white">Smart Home</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#99948a] mt-1">
                Smarthome-Möbel & LED
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#galerie"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[#8b877f] hover:text-white transition-colors flex flex-col items-center space-y-1"
          aria-label="Nach unten scrollen"
        >
          <span className="text-[9px] font-mono uppercase tracking-widest">Scrollen</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </section>

      {/* CORE FEATURE: ASYMMETRISCHE MASONRY FOTOGALERIE */}
      <MasonryGallery />

      {/* PHILOSOPHIE & VALUES SECTION */}
      <section className="bg-[#f4f1ea] py-24 sm:py-32 border-y border-[#eae6de]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl space-y-3 mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#a87948] flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#a87948]" />
              Unsere Handwerksphilosophie
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#181715]">
              Vier Pfeiler moderner Handwerkskunst
            </h2>
            <p className="text-sm sm:text-base text-[#615e57] font-light leading-relaxed">
              Vom massiven Holztisch bis zum smart vernetzten Möbelstück: Jedes Werk entsteht mit Leidenschaft,
              Geduld und modernster Technik in Schneeberg OT Lindenau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Holzarbeiten */}
            <div className="bg-[#fcfbf9] p-8 border border-[#eae6de] space-y-4 hover:border-[#a87948] transition-colors">
              <div className="w-12 h-12 bg-[#f4f1ea] border border-[#e2ded5] flex items-center justify-center text-[#a87948]">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-[#181715]">
                Klassische Holzarbeiten
              </h3>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Selektierte Hölzer wie Eiche, Esche und feinstes Birkenmultiplex. Präzise gefertigt,
                verzugsfrei gefügt und mit natürlichen Ölen handveredelt.
              </p>
              <ul className="text-[11px] font-mono text-[#8b877f] space-y-1 pt-2 border-t border-[#f4f1ea]">
                <li>· Massivholz & Furniere</li>
                <li>· Schwibbögen & Lichtspitzen</li>
              </ul>
            </div>

            {/* Card 2: Epoxidharz */}
            <div className="bg-[#fcfbf9] p-8 border border-[#eae6de] space-y-4 hover:border-[#a87948] transition-colors">
              <div className="w-12 h-12 bg-[#f4f1ea] border border-[#e2ded5] flex items-center justify-center text-[#a87948]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-[#181715]">
                Epoxidharz-Veredelung
              </h3>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Glasklare und farbige Epoxidharz-Güsse kombiniert mit naturgewachsenen Holzkanten.
                Langlebige Oberflächen mit faszinierender Tiefenwirkung.
              </p>
              <ul className="text-[11px] font-mono text-[#8b877f] space-y-1 pt-2 border-t border-[#f4f1ea]">
                <li>· Rivertables & Epoxidharz-Unikate</li>
                <li>· Kristallklar & UV-stabil</li>
              </ul>
            </div>

            {/* Card 3: Acrylglasbilder */}
            <div className="bg-[#fcfbf9] p-8 border border-[#eae6de] space-y-4 hover:border-[#a87948] transition-colors">
              <div className="w-12 h-12 bg-[#f4f1ea] border border-[#e2ded5] flex items-center justify-center text-[#a87948]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-[#181715]">
                Acrylglasbilder & Lichtbogen
              </h3>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Lasergravierte und CNC-konturierte Acrylglasbilder mit Kantenbeleuchtung.
                Brillante Transparenz und dreidimensionale Lichteffekte.
              </p>
              <ul className="text-[11px] font-mono text-[#8b877f] space-y-1 pt-2 border-t border-[#f4f1ea]">
                <li>· Hochtransparentes Acrylglas</li>
                <li>· Konturierte Lichteffekte</li>
              </ul>
            </div>

            {/* Card 4: Smarthome-Möbel */}
            <div className="bg-[#fcfbf9] p-8 border border-[#eae6de] space-y-4 hover:border-[#a87948] transition-colors">
              <div className="w-12 h-12 bg-[#f4f1ea] border border-[#e2ded5] flex items-center justify-center text-[#a87948]">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-[#181715]">
                Smarte Smarthome-Möbel
              </h3>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Möbelbau trifft Gebäudeautomation: Unsichtbar integrierte LED-Stripes,
                steuerbar per Home Assistant, WLED, App oder Sprachbefehl.
              </p>
              <ul className="text-[11px] font-mono text-[#8b877f] space-y-1 pt-2 border-t border-[#f4f1ea]">
                <li>· Home Assistant & WLED</li>
                <li>· Verdeckte Kabelführung</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS: VON DER IDEE ZUM UNIKAT */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#a87948] flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#a87948]" />
              Der Ablauf
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#181715]">
              Vier Schritte zu Ihrem individuellen Werk
            </h2>
            <p className="text-sm sm:text-base text-[#615e57] font-light leading-relaxed">
              Ob traditioneller Schwibbogen, Epoxidharz-Objekt, leuchtendes Acrylglasbild oder individuelle
              Smarthome-Möbel: Wir setzen Ihre Vision millimetergenau um.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/ueber-uns"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#181715] hover:text-[#a87948] transition-colors"
              >
                <span>Mehr über Future Form Holz</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-[#f4f1ea] border border-[#eae6de]">
              <span className="text-3xl font-serif text-[#a87948] block mb-2">01</span>
              <h4 className="text-base font-serif text-[#181715] mb-2">
                Idee & Motivabstimmung
              </h4>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Gemeinsame Besprechung Ihrer Wünsche: Maße, Holzarten, Epoxidharzfarben oder Smarthome-Spezifikationen.
              </p>
            </div>

            <div className="p-6 bg-[#f4f1ea] border border-[#eae6de]">
              <span className="text-3xl font-serif text-[#a87948] block mb-2">02</span>
              <h4 className="text-base font-serif text-[#181715] mb-2">
                CAD-Konstruktion & Vektoren
              </h4>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Detaillierte Fräspfadprogrammierung für die Großformat-CNC-Fräse inklusive passgenauer Nuten für Acrylglas und LED-Profile.
              </p>
            </div>

            <div className="p-6 bg-[#f4f1ea] border border-[#eae6de]">
              <span className="text-3xl font-serif text-[#a87948] block mb-2">03</span>
              <h4 className="text-base font-serif text-[#181715] mb-2">
                Großformat-CNC (200 × 100 cm)
              </h4>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Präziser Zuschnitt auf unserer 200 × 100 cm Fräsanlage. Höchste Wiederholgenauigkeit in Holz, Epoxidharz und Acryl.
              </p>
            </div>

            <div className="p-6 bg-[#f4f1ea] border border-[#eae6de]">
              <span className="text-3xl font-serif text-[#a87948] block mb-2">04</span>
              <h4 className="text-base font-serif text-[#181715] mb-2">
                Handfinish & Smart-Integration
              </h4>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Sorgfältiger Handschliff, Veredelung mit Naturölen, Montage der LED-Technik (inkl. Home Assistant oder WLED) und sichere Auslieferung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ONLINE-SHOP TEASER BANNER */}
      <section className="bg-[#181715] text-[#eae6de] py-20 px-6 sm:px-8 border-y border-[#292723]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a87948]">
              Offizieller Online-Shop · Future Form Holz
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Handgefertigte Erzgebirgs-Lichtbögen & Schwibbögen online kaufen
            </h3>
            <p className="text-sm text-[#a39e94] font-light">
              Entdecken Sie unsere meisterhaften Lichtbögen und filigranen LED-Schwibbögen – gefertigt in
              Schneeberg mit ca. 14 Tagen Lieferzeit. Sicher und direkt bestellbar über unseren Online-Shop mit Stripe.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link
              href="/online-shop"
              className="w-full sm:w-auto px-8 py-4 bg-[#86b817] hover:bg-[#749f13] text-[#121b06] text-xs uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap flex items-center justify-center space-x-2 shadow-xl hover:scale-[1.02]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Jetzt im Online-Shop ansehen</span>
            </Link>

            <a
              href="#galerie"
              className="w-full sm:w-auto px-6 py-4 bg-[#fcfbf9] hover:bg-[#eae6de] text-[#181715] text-xs uppercase tracking-[0.2em] font-medium transition-colors whitespace-nowrap flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Fotogalerie ansehen</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT / INQUIRY SECTION */}
      <section id="kontakt" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#a87948] flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#a87948]" />
              Gemeinsam Planen
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#181715]">
              Haben Sie einen Wunsch?
            </h2>
            <p className="text-sm sm:text-base text-[#615e57] font-light leading-relaxed">
              Ob exklusive Holzarbeiten, maßgefertigtes Epoxidharz-Design, beleuchtete Acrylglasbilder,
              Smarthome-Möbel oder Großformat-CNC-Frästeile bis 200 × 100 cm: Ich berate Sie gerne persönlich.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#eae6de] text-sm text-[#181715]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#a87948] mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Future Form Holz</p>
                  <p className="text-xs text-[#a87948] font-mono">Inhaber: Stephan Tautenhahn</p>
                  <p className="text-xs text-[#615e57] font-light mt-0.5">
                    Dorfstraße 53 · 08289 Schneeberg OT Lindenau
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#a87948] mt-1 shrink-0" />
                <div>
                  <a href="tel:+491749233526" className="font-medium hover:text-[#a87948] transition-colors">
                    0174 9233 526
                  </a>
                  <p className="text-xs text-[#615e57] font-light">Telefon & WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#a87948] mt-1 shrink-0" />
                <div>
                  <a href="mailto:futureformholz@gmail.com" className="font-medium hover:text-[#a87948] transition-colors">
                    futureformholz@gmail.com
                  </a>
                  <p className="text-xs text-[#615e57] font-light">Direkte schriftliche Anfrage</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ShoppingBag className="w-4 h-4 text-[#86b817] mt-1 shrink-0" />
                <div>
                  <Link
                    href="/online-shop"
                    className="font-medium text-[#4f6e0b] hover:text-[#2d4004] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Zum offiziellen Online-Shop</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <p className="text-xs text-[#615e57] font-light">Erzgebirgs-Lichtbögen & LED-Schwibbögen online kaufen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Client Component */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
