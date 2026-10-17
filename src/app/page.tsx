'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  Layers,
  Leaf,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Cpu,
} from 'lucide-react';
import MasonryGallery from '@/components/MasonryGallery';

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
            <span>Future Form Holz · Holzgestaltung & CNC-Frästechnik</span>
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-[1.1] max-w-4xl">
            Holz in vollendeter Form. <br />
            <span className="italic font-light text-[#d4cebe]">Erleuchtete Handwerkskunst.</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-[#b8b2a5] max-w-2xl font-light leading-relaxed">
            Future Form Holz verbindet erzgebirgische Holzkunst und detailreiche Motive
            mit moderner Großformat-CNC-Fräsung (bis 200 × 100 cm) sowie flexibler LED-Lichttechnik –
            alle LED-Sorten, programmierbare Lichtstimmungen und Smart-Control-Einbindung (Home Assistant, WLED, App & Sprache).
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#galerie"
              className="w-full sm:w-auto px-8 py-4 bg-[#a87948] hover:bg-[#906233] text-white text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-lg text-center"
            >
              Fotogalerie entdecken
            </a>
            <a
              href="https://futureformholz.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#d4cebe]/40 hover:border-white text-white text-xs uppercase tracking-[0.25em] font-medium transition-all text-center flex items-center justify-center space-x-2"
            >
              <span>Etsy-Shop besuchen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-20 pt-10 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-white">200×100 cm</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#99948a] mt-1">
                Großformat-CNC-Fräse
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-white">500+</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#99948a] mt-1">
                Originalwerke in Galerie
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-white">Smart LED</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#99948a] mt-1">
                Home Assistant · WLED · Alle Sorten
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif text-white">Unikate</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#99948a] mt-1">
                Schneeberg (Erzgebirge)
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
              Drei Grundpfeiler kompromissloser Qualität
            </h2>
            <p className="text-sm sm:text-base text-[#615e57] font-light leading-relaxed">
              Jedes Lichtobjekt und jeder Schwibbogen entsteht mit Leidenschaft, Geduld
              und Liebe zum handwerklichen Detail in Schneeberg OT Lindenau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Selektierte Hölzer */}
            <div className="bg-[#fcfbf9] p-8 sm:p-10 border border-[#eae6de] space-y-5 hover:border-[#a87948] transition-colors">
              <div className="w-12 h-12 bg-[#f4f1ea] border border-[#e2ded5] flex items-center justify-center text-[#a87948]">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#181715]">
                Selektierte Hölzer & Werkstoffe
              </h3>
              <p className="text-sm text-[#615e57] font-light leading-relaxed">
                Wir verwenden ausschließlich sorgfältig getrocknete Massivhölzer, feinstes
                Birkenmultiplex und hochtransparentes Acrylglas für maximale Formstabilität
                und ein sauberes Fräsbild.
              </p>
              <ul className="text-xs font-mono text-[#8b877f] space-y-1.5 pt-2 border-t border-[#f4f1ea]">
                <li>· Qualitätsholz aus kontrollierten Beständen</li>
                <li>· Verzugsfreie, formstabile Konstruktion</li>
              </ul>
            </div>

            {/* Card 2: Großformat CNC Fräse */}
            <div className="bg-[#fcfbf9] p-8 sm:p-10 border border-[#eae6de] space-y-5 hover:border-[#a87948] transition-colors">
              <div className="w-12 h-12 bg-[#f4f1ea] border border-[#e2ded5] flex items-center justify-center text-[#a87948]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#181715]">
                Großformat-CNC (200 × 100 cm)
              </h3>
              <p className="text-sm text-[#615e57] font-light leading-relaxed">
                Dank unserer eigenen Großformat-CNC-Portalfräse mit 200 × 100 cm Arbeitsbereich
                fräsen wir anspruchsvollste Konturen, filigrane Aussparungen und großformatige
                Schwibbögen aus einem Stück.
              </p>
              <ul className="text-xs font-mono text-[#8b877f] space-y-1.5 pt-2 border-t border-[#f4f1ea]">
                <li>· 2000 × 1000 mm Bearbeitungsfläche</li>
                <li>· Höchste Maß- & Kantenpräzision</li>
              </ul>
            </div>

            {/* Card 3: Natürliche Veredelung */}
            <div className="bg-[#fcfbf9] p-8 sm:p-10 border border-[#eae6de] space-y-5 hover:border-[#a87948] transition-colors">
              <div className="w-12 h-12 bg-[#f4f1ea] border border-[#e2ded5] flex items-center justify-center text-[#a87948]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#181715]">
                Handfinish & LED-Beleuchtung
              </h3>
              <p className="text-sm text-[#615e57] font-light leading-relaxed">
                Jedes Werkstück wird von Hand feingeschliffen und mit natürlichen Ölen
                oder Wachsen veredelt. Verdeckte LED-Lichtleisten sorgen für ein
                blendfreies, stimmungsvolles Ambiente.
              </p>
              <ul className="text-xs font-mono text-[#8b877f] space-y-1.5 pt-2 border-t border-[#f4f1ea]">
                <li>· Manuelle Kantenentgratung & Handschliff</li>
                <li>· Langlebige, energiesparende LED-Technik</li>
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
              Vier Schritte zu Ihrem Lichtunikat
            </h2>
            <p className="text-sm sm:text-base text-[#615e57] font-light leading-relaxed">
              Ob traditioneller Bergmannsbogen, Ihr eigenes Haus als leuchtendes Familienmodell
              oder individuelle CNC-Frästeile: Wir setzen Ihre Vision präzise um.
            </p>

            <div className="pt-4">
              <Link
                href="/ueber-uns"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#181715] hover:text-[#a87948] transition-colors"
              >
                <span>Mehr über Future Form Holz erfahren</span>
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
                Gemeinsame Besprechung Ihrer Motivwünsche, Fotos oder Skizzen – vom traditionellen
                Bergmannsmotiv bis zum individuellen Familienhaus.
              </p>
            </div>

            <div className="p-6 bg-[#f4f1ea] border border-[#eae6de]">
              <span className="text-3xl font-serif text-[#a87948] block mb-2">02</span>
              <h4 className="text-base font-serif text-[#181715] mb-2">
                CAD-Konstruktion & Vektoren
              </h4>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Detaillierte Vektorisierung und Fräspfadprogrammierung für die Großformat-CNC-Fräse
                inklusive passgenauer Fräsnuten für LED Stripes und Kabelkanäle.
              </p>
            </div>

            <div className="p-6 bg-[#f4f1ea] border border-[#eae6de]">
              <span className="text-3xl font-serif text-[#a87948] block mb-2">03</span>
              <h4 className="text-base font-serif text-[#181715] mb-2">
                CNC-Großformatfräsung
              </h4>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Präziser Zuschnitt auf unserer 200 × 100 cm Fräsanlage. Saubere Kantenführung
                in Holz und hochwertigem Acrylglas.
              </p>
            </div>

            <div className="p-6 bg-[#f4f1ea] border border-[#eae6de]">
              <span className="text-3xl font-serif text-[#a87948] block mb-2">04</span>
              <h4 className="text-base font-serif text-[#181715] mb-2">
                Handfinish & Smart-LED-Integration
              </h4>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Sorgfältiger Handschliff, Sockelmontage, Integration aller gewünschten LED-Sorten
                (inkl. Home Assistant oder WLED-Anbindung) und bruchsicherer Versand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ETSY SHOP TEASER BANNER */}
      <section className="bg-[#181715] text-[#eae6de] py-20 px-6 sm:px-8 border-y border-[#292723]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a87948]">
              Online Bestellen · Etsy Shop
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Entdecken Sie unsere Kollektion direkt im Etsy-Shop
            </h3>
            <p className="text-sm text-[#a39e94] font-light">
              Sofort verfügbare Schwibbögen, illuminierte Lichterspitzen, erzgebirgische Unikate
              und Geschenke können Sie bequem über unseren offiziellen Etsy-Shop erwerben.
            </p>
          </div>
          <a
            href="https://futureformholz.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#fcfbf9] hover:bg-[#eae6de] text-[#181715] text-xs uppercase tracking-[0.2em] font-medium transition-colors whitespace-nowrap flex items-center space-x-2 shadow-lg"
          >
            <span>Zu futureformholz.etsy.com</span>
            <ExternalLink className="w-4 h-4" />
          </a>
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
              Ob traditioneller Schwibbogen, personalisiertes Geschenk mit Familiennamen
              oder individuelle CNC-Frästeile bis 200 × 100 cm: Ich berate Sie gerne persönlich.
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
                <ExternalLink className="w-4 h-4 text-[#a87948] mt-1 shrink-0" />
                <div>
                  <a
                    href="https://futureformholz.etsy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-[#a87948] transition-colors inline-flex items-center gap-1"
                  >
                    <span>futureformholz.etsy.com</span>
                  </a>
                  <p className="text-xs text-[#615e57] font-light">Offizieller Onlineshop auf Etsy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-[#f4f1ea] p-8 sm:p-12 border border-[#eae6de]">
            <h3 className="text-xl font-serif text-[#181715] mb-6">
              Unverbindliche Anfrage senden
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Vielen Dank für Ihre Anfrage! Stephan Tautenhahn wird sich in Kürze bei Ihnen melden.');
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#615e57] mb-2">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="z. B. Max Mustermann"
                    className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#d3cdbf] text-sm focus:outline-none focus:border-[#a87948]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#615e57] mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@beispiel.de"
                    className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#d3cdbf] text-sm focus:outline-none focus:border-[#a87948]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#615e57] mb-2">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    placeholder="0174 ..."
                    className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#d3cdbf] text-sm focus:outline-none focus:border-[#a87948]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#615e57] mb-2">
                    Gewünschtes Werk
                  </label>
                  <select className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#d3cdbf] text-sm focus:outline-none focus:border-[#a87948]">
                    <option>Schwibbogen / Lichterspitze</option>
                    <option>Personalisiertes Familien- oder Hausthema</option>
                    <option>Acrylglas- & LED-Lichtbogen</option>
                    <option>Großformat-CNC-Fräsung (bis 200 × 100 cm)</option>
                    <option>Traditionelle erzgebirgische Holzkunst</option>
                    <option>Sonstige Sonderanfertigung</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-[#615e57] mb-2">
                  Ihre Nachricht oder Motividee
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Beschreiben Sie Ihr gewünschtes Motiv, Namen für Gravuren oder Wunschmaße..."
                  className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#d3cdbf] text-sm focus:outline-none focus:border-[#a87948]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#181715] hover:bg-[#a87948] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors cursor-pointer"
              >
                Anfrage unverbindlich absenden
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
