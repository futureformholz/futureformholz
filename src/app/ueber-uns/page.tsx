import React from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  Cpu,
  Sparkles,
  Compass,
  Mail,
  Phone,
  MapPin,
  Sliders,
  Maximize2,
  Lightbulb,
} from 'lucide-react';
import { TIMBER_MATERIALS } from '@/data/teamData';

export const metadata = {
  title: 'Über uns & Meine Geschichte | Future Form Holz · Stephan Tautenhahn',
  description:
    'Vom Teamleiter zum Schöpfer: Stephan Tautenhahn verbindet 46 Jahre Lebenserfahrung, Führungsverantwortung als Teamleiter für Technische Gebäudeausrüstung (TGA) und eine selbstgebaute Großformat-CNC-Fräse mit erzgebirgischer Licht- und Holzkunst.',
};

export default function UeberUnsPage() {
  return (
    <div className="space-y-0">
      {/* 1. EDITORIAL HERO WITH AUTHENTIC LOCAL WORKBENCH IMAGE */}
      <section className="relative bg-[#181715] text-[#eae6de] py-24 sm:py-36 px-6 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/20260406_163633.webp"
            alt="Handgefertigter illuminierter Schwibbogen in der Werkstatt"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover opacity-30 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181715] via-[#181715]/75 to-black/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center">
          {/* Logo Badge */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#a87948] bg-[#24221e] shadow-2xl mb-2">
            <Image
              src="/logo.png"
              alt="Future Form Holz Logo"
              fill
              className="object-cover"
            />
          </div>

          <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#a87948] inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#a87948]" />
            Stephan Tautenhahn · Future Form Holz
            <span className="w-6 h-[1px] bg-[#a87948]" />
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-[1.15]">
            Meine Geschichte: <br />
            <span className="italic font-light text-[#d4cebe]">Vom Teamleiter zum Schöpfer.</span>
          </h1>

          <div className="py-2">
            <blockquote className="text-lg sm:text-2xl font-serif italic text-[#e5b98a] max-w-2xl mx-auto leading-relaxed border-y border-[#3d3a33] py-4">
              „Es gibt einen Unterschied zwischen ‚fertig‘ und ‚perfekt‘.“
            </blockquote>
          </div>

          <p className="text-sm sm:text-base text-[#b8b2a5] max-w-2xl mx-auto font-light leading-relaxed">
            In Schneeberg im Erzgebirge verschmelzen technische Akribie, selbst gebaute
            Großformat-CNC-Technologie und lebendige Holzkunst zu einzigartigen Licht-Monumenten.
          </p>
        </div>
      </section>

      {/* 2. PERSÖNLICHE GESCHICHTE: VOM TEAMLEITER ZUM SCHÖPFER */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#a87948] flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#a87948]" />
              Der Mensch hinter der Werkbank
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#181715] leading-tight">
              Präzision ist kein Bonus. <br />
              <span className="italic text-[#706c64]">Sie ist Grundvoraussetzung.</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#4a4741] font-light leading-relaxed">
              <p>
                Mein Name ist <strong>Stephan</strong>, ich bin <strong>46 Jahre alt</strong> und mein
                Leben spielt sich eigentlich zwischen technischen Zeichnungen und komplexen Systemen
                ab. Als <strong>Teamleiter für technische Gebäudeausrüstung (TGA)</strong> ist
                Präzision für mich kein Bonus, sondern Grundvoraussetzung.
              </p>
              <p className="border-l-2 border-[#a87948] pl-5 italic text-[#2c2a26] font-serif text-lg">
                „Doch so sehr ich die Planung am Bildschirm liebe – meine wahre Erfüllung finde
                ich dort, wo Späne fliegen und das Holz riecht.“
              </p>
              <p>
                Aus diesem Drang heraus entstand <strong>Future Form Holz</strong>: Kein gewöhnlicher
                Handwerksbetrieb von der Stange, sondern ein persönliches Atelier für Menschen, die
                kompromisslose Detailtreue und außergewöhnliche Lichtobjekte schätzen.
              </p>
            </div>

            {/* Key Fact Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#eae6de]">
              <div>
                <span className="block text-3xl font-serif text-[#181715]">46</span>
                <span className="text-xs font-mono text-[#8b877f]">Jahre Lebenserfahrung</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-[#181715]">TGA</span>
                <span className="text-xs font-mono text-[#8b877f]">Teamleiter Technische Gebäudeausrüstung</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-[#181715]">08289</span>
                <span className="text-xs font-mono text-[#8b877f]">Schneeberg OT Lindenau</span>
              </div>
            </div>
          </div>

          {/* Authentic Workbench Photo */}
          <div className="lg:col-span-5">
            <div className="relative h-[480px] sm:h-[560px] w-full border border-[#eae6de] overflow-hidden shadow-xl group bg-[#24221e]">
              <Image
                src="/gallery/20260406_160904.jpg"
                alt="Acrylglas-Schwibbogen Haamitland Arzgebirg mit Bergparade auf der Werkbank"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#a87948]">
                  Erzgebirgische Bergparade
                </span>
                <h3 className="text-lg font-serif mt-1">„Haamitland Arzgebirg“</h3>
                <p className="text-xs text-[#d3cdbf] font-light mt-1">
                  Massiver Eichensockel mit bergmännischen Insignien, filigran gravierte Bergparade und leuchtstarke LED Stripes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WENN LEIDENSCHAFT AUF HOCHTECHNOLOGIE TRIFFT: DIE GROSSFORMAT-CNC */}
      <section className="bg-[#181715] text-[#eae6de] py-24 sm:py-32 border-y border-[#292723]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual CNC Feature Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative h-[440px] sm:h-[500px] w-full border border-[#3d3a33] overflow-hidden shadow-2xl group">
                <Image
                  src="/gallery/20260406_163633.jpg"
                  alt="Großformat-Lichtwerkzeuge auf der Werkbank von Future Form Holz"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#a87948]">
                    Herzstück der Werkstatt
                  </span>
                  <h3 className="text-xl font-serif mt-1">200 × 100 cm Großformat-CNC</h3>
                  <p className="text-xs text-[#a39e94] font-light mt-1">
                    Eigenbau mit Industriekomponenten für nahtlose Großobjekte aus einem Stück.
                  </p>
                </div>
              </div>
            </div>

            {/* Story text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#a87948] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#a87948]" />
                Wenn Leidenschaft auf Hochtechnologie trifft
              </span>

              <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
                Die Grenze zwischen Handwerk und Technologie auflösen.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#b8b2a5] font-light leading-relaxed">
                <p>
                  Irgendwann reichte mir die klassische Holzbearbeitung nicht mehr aus. Mein technischer
                  Ehrgeiz war geweckt: Ich wollte die Grenze zwischen traditionellem Handwerk und moderner
                  Technologie auflösen.
                </p>
                <p className="text-white font-medium">
                  Das Ergebnis? Eine selbst konstruierte und gebaute Großformat-CNC-Fräse, die heute
                  das Herzstück meiner Werkstatt ist.
                </p>
                <p>
                  Mit einem gewaltigen Arbeitsbereich von <strong>200 × 100 cm</strong> kann ich Entwürfe
                  realisieren, die herkömmliche Werkstätten vor unlösbare Aufgaben stellen: gigantische
                  Schwibbögen ohne Leimfugen, filigranste Skyline-Motive, komplexe organische Kurven und
                  perfekt kalibrierte Nuten für hochwertige LED Stripes.
                </p>
              </div>

              {/* Spec Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-[#21201d] border border-[#33302a] space-y-2">
                  <div className="flex items-center space-x-2 text-[#a87948]">
                    <Maximize2 className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">200 × 100 cm Format</span>
                  </div>
                  <p className="text-xs text-[#a39e94] font-light">
                    Großflächige Bauteile, Firmenschilder und Licht-Monumente werden aus einer einzigen Platte gefräst.
                  </p>
                </div>

                <div className="p-4 bg-[#21201d] border border-[#33302a] space-y-2">
                  <div className="flex items-center space-x-2 text-[#a87948]">
                    <Sliders className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">Eigene Konstruktion</span>
                  </div>
                  <p className="text-xs text-[#a39e94] font-light">
                    Vollständige Kontrolle über Fräsparameter, Vorschubgeschwindigkeiten und Kantenfinish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEHR ALS NUR HOLZ: LICHT UND INTELLIGENZ */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#a87948] inline-flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[#a87948]" />
            Mehr als nur Holz: Licht und Intelligenz
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#181715] leading-tight">
            1,20 bis 1,80 Meter lange Licht-Monumente
          </h2>
          <p className="text-base sm:text-lg text-[#615e57] font-light leading-relaxed">
            In meiner Welt ist ein Schwibbogen nicht einfach nur Dekoration. Wenn ich ein Stück Holz
            in die Hand nehme, sehe ich das Potenzial für etwas Größeres.
          </p>
          <blockquote className="font-serif italic text-xl text-[#a87948] pt-2">
            „Aber ich wollte mehr: Die Wärme des Holzes sollte auf die Intelligenz von heute treffen.“
          </blockquote>
        </div>

        {/* 4 Showcase Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#fcfbf9] border border-[#eae6de] overflow-hidden group hover:border-[#a87948] transition-colors flex flex-col">
            <div className="relative h-60 w-full overflow-hidden bg-[#24221e]">
              <Image
                src="/gallery/20260525_115302.jpg"
                alt="1,20m bis 1,80m langes Lichtmonument"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 text-[10px] font-mono bg-black/70 text-[#e5b98a] px-2 py-1 backdrop-blur-xs">
                Bis 1,8 m
              </span>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-serif text-[#181715]">Großformatige Licht-Monumente</h3>
                <p className="text-xs text-[#615e57] font-light leading-relaxed mt-2">
                  Monumentale Schwibbögen von 1,20 m bis 1,80 m Spannweite. Majestätische Präsenz
                  im Raum, die klassische Volkskunst in die Moderne überführt.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#a87948] uppercase pt-2 border-t border-[#f4f1ea]">
                Monumentale Dimensionen
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fcfbf9] border border-[#eae6de] overflow-hidden group hover:border-[#a87948] transition-colors flex flex-col">
            <div className="relative h-60 w-full overflow-hidden bg-[#24221e]">
              <Image
                src="/gallery/20251122_135500.jpg"
                alt="Smarte LED-Steuerung per App oder Sprache"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 text-[10px] font-mono bg-[#a87948] text-white px-2 py-1">
                Smart Home
              </span>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-serif text-[#181715]">Smarte LED-Steuerung</h3>
                <p className="text-xs text-[#615e57] font-light leading-relaxed mt-2">
                  Deshalb integriere ich smarte LED-Steuerungen, die sich nahtlos per App oder
                  Sprache regeln lassen – mit Szenen, Dimmfunktionen und programmierbarem Ambiente.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#a87948] uppercase pt-2 border-t border-[#f4f1ea]">
                App- & Sprachsteuerung
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fcfbf9] border border-[#eae6de] overflow-hidden group hover:border-[#a87948] transition-colors flex flex-col">
            <div className="relative h-60 w-full overflow-hidden bg-[#24221e]">
              <Image
                src="/gallery/Designer.png"
                alt="Illuminierte Holzwerbetafeln & Epoxidharzlampen"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 text-[10px] font-mono bg-black/70 text-[#e5b98a] px-2 py-1 backdrop-blur-xs">
                Business & Design
              </span>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-serif text-[#181715]">Werbetafeln & Epoxidharz</h3>
                <p className="text-xs text-[#615e57] font-light leading-relaxed mt-2">
                  Ob es die Werbetafel für ein Unternehmen ist, die nachts in den richtigen Farben pulsiert,
                  oder die kunstvoll illuminierte Epoxidharzlampe, die durch Licht zum Leben erwacht.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#a87948] uppercase pt-2 border-t border-[#f4f1ea]">
                Technik & Natur fließen ineinander
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#fcfbf9] border border-[#eae6de] overflow-hidden group hover:border-[#a87948] transition-colors flex flex-col">
            <div className="relative h-60 w-full overflow-hidden bg-[#24221e]">
              <Image
                src="/gallery/1790141401993.png"
                alt="Personalisierte Unikate und maßgeschneiderte Holzkonstruktionen"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 text-[10px] font-mono bg-black/70 text-[#e5b98a] px-2 py-1 backdrop-blur-xs">
                100% Unikat
              </span>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-serif text-[#181715]">Vom Entwurf bis zur Schraube</h3>
                <p className="text-xs text-[#615e57] font-light leading-relaxed mt-2">
                  Vom Gartenstuhl bis hin zu komplexen Terrassenüberdachungen: Mit der Akribie eines
                  Technikers und der Leidenschaft eines Handwerkers kompromisslos gefertigt.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#a87948] uppercase pt-2 border-t border-[#f4f1ea]">
                Individuelle Maßanfertigung
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VOM ERSTEN ENTWURF BIS ZUR LETZTEN SCHRAUBE: 4-STUFEN-PROZESS */}
      <section className="bg-[#f4f1ea] py-24 sm:py-32 border-y border-[#eae6de]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#a87948] inline-flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#a87948]" />
              Vom ersten Entwurf bis zur letzten Schraube
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#181715] leading-tight">
              Keine Massenware. Kompromisslose Unikate.
            </h2>
            <p className="text-base sm:text-lg text-[#615e57] font-light leading-relaxed">
              „Vom Gartenstuhl bis hin zur komplexen Terrassenüberdachung: Ich plane jedes Projekt mit
              der Akribie eines Technikers und fertige es mit der Leidenschaft eines Handwerkers.
              Ich verkaufe keine Massenware. Ich schaffe Unikate, die technologisch durchdacht und
              handwerklich kompromisslos sind.“
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#fcfbf9] border border-[#eae6de] p-6 space-y-3">
              <span className="text-xs font-mono font-bold text-[#a87948]">01 · PLANUNG</span>
              <h4 className="text-xl font-serif text-[#181715]">TGA-Präzision</h4>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                CAD-Konstruktion, dreidimensionale Vektoren und exakte Durchdringungsberechnung für
                verdeckte Kabelkanäle und passgenaue LED Stripes.
              </p>
            </div>

            <div className="bg-[#fcfbf9] border border-[#eae6de] p-6 space-y-3">
              <span className="text-xs font-mono font-bold text-[#a87948]">02 · CNC-FRÄSUNG</span>
              <h4 className="text-xl font-serif text-[#181715]">200 × 100 cm</h4>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Hochpräzise Fräsbahnen im Hunderstel-Millimeter-Bereich auf der selbst gebauten
                Großformat-Portalfräse.
              </p>
            </div>

            <div className="bg-[#fcfbf9] border border-[#eae6de] p-6 space-y-3">
              <span className="text-xs font-mono font-bold text-[#a87948]">03 · HANDFINISH</span>
              <h4 className="text-xl font-serif text-[#181715]">Holz & Späne</h4>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Entgraten, Feinschliff, Kantenrundung und Veredelung mit natürlichen Ölen oder Wachsen
                in der Schneeberger Werkstatt.
              </p>
            </div>

            <div className="bg-[#fcfbf9] border border-[#eae6de] p-6 space-y-3">
              <span className="text-xs font-mono font-bold text-[#a87948]">04 · LICHT-INTELLIGENZ</span>
              <h4 className="text-xl font-serif text-[#181715]">Smart Control</h4>
              <p className="text-xs text-[#615e57] font-light leading-relaxed">
                Einpassen aller gewünschten LED-Sorten (RGB, CCT, digital) und Smart-Control-Implementierung
                in Home Assistant, WLED oder per App & Sprache.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MATERIALKUNDE SECTION (ALL LOCAL IMAGES) */}
      <section className="bg-[#181715] text-[#eae6de] py-24 sm:py-32 px-6 sm:px-8 border-t border-[#292723]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl space-y-3 mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a87948]">
              Material & Werkstoffe
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Sorgfältig ausgewählte Komponenten
            </h2>
            <p className="text-sm text-[#a39e94] font-light">
              Nur wenn Werkstoff, Fräsparameter und Lichttechnik exakt harmonieren, entsteht langlebige Kunst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIMBER_MATERIALS.map((wood) => (
              <div
                key={wood.name}
                className="bg-[#21201d] border border-[#33302a] p-6 space-y-4 hover:border-[#a87948] transition-colors"
              >
                <div className="relative h-48 w-full overflow-hidden bg-black/40">
                  <Image
                    src={wood.imageUrl}
                    alt={wood.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-lg font-serif text-white">{wood.name}</h3>
                <div className="space-y-2 text-xs font-light">
                  <p className="text-[#a87948] font-mono text-[11px]">{wood.origin}</p>
                  <p className="text-[#a39e94] leading-relaxed">{wood.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION: LUST AUF EIN GEMEINSAMES PROJEKT? */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-5xl mx-auto text-center space-y-8">
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#a87948] inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#a87948]" />
          Lass uns sprechen
        </span>

        <h2 className="text-3xl sm:text-5xl font-serif text-[#181715] leading-tight max-w-3xl mx-auto">
          Lust auf ein gemeinsames Projekt?
        </h2>

        <div className="max-w-2xl mx-auto space-y-4 text-base sm:text-lg text-[#615e57] font-light leading-relaxed">
          <p>
            Egal, ob du eine <strong>smarte Lichtlösung für dein Zuhause</strong> suchst oder eine
            <strong> individuelle Werbebotschaft aus Holz</strong> brauchst: Ich lade dich ein, Teil
            dieser Geschichte zu werden.
          </p>
          <p className="font-serif italic text-xl text-[#181715] pt-2">
            „Lass uns gemeinsam etwas erschaffen, das es so kein zweites Mal gibt.“
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="https://futureformholz.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#181715] text-white hover:bg-[#a87948] text-xs uppercase tracking-[0.25em] font-medium transition-colors shadow-lg flex items-center space-x-2"
          >
            <span>Auf Etsy kontaktieren & bestellen</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="mailto:futureformholz@gmail.com"
            className="px-8 py-4 bg-white text-[#181715] border border-[#181715] hover:bg-[#f4f1ea] text-xs uppercase tracking-[0.25em] font-medium transition-colors flex items-center space-x-2"
          >
            <Mail className="w-4 h-4 text-[#a87948]" />
            <span>E-Mail: futureformholz@gmail.com</span>
          </a>
        </div>

        {/* Direct Contact Info Card */}
        <div className="pt-12 max-w-xl mx-auto border-t border-[#eae6de]">
          <div className="p-6 bg-[#fcfbf9] border border-[#eae6de] text-left space-y-3 font-mono text-xs text-[#615e57]">
            <p className="font-serif text-base text-[#181715] font-normal not-italic mb-2">
              Future Form Holz · Stephan Tautenhahn
            </p>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#a87948] shrink-0" />
              <span>Dorfstraße 53 · 08289 Schneeberg OT Lindenau (Erzgebirge)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#a87948] shrink-0" />
              <a href="tel:+491749233526" className="hover:text-[#a87948]">0174 9233 526</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#a87948] shrink-0" />
              <a href="mailto:futureformholz@gmail.com" className="hover:text-[#a87948]">futureformholz@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

