'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Sparkles,
  Lock,
  ChevronRight,
  Maximize2,
  Check,
  Plus,
  Minus,
  Cpu,
  Tv,
  Ruler,
  Layers,
  MapPin,
  Clock,
  Phone,
  Loader2,
  AlertCircle,
  Award,
  Zap,
  ArrowLeft,
  Eye,
  ShoppingBag,
} from 'lucide-react';

interface ProductImage {
  src: string;
  alt: string;
  title: string;
}

interface ProductData {
  id: string;
  artNo: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  price: number;
  badge: string;
  images: ProductImage[];
  specs: { label: string; sub: string }[];
  bulletPoints: { title: string; text: string }[];
  introTitle: string;
  introParagraphs: string[];
  motifTitle: string;
  motifPoints: { title: string; text: string }[];
  qualityPoints: { title: string; text: string; icon: any }[];
  customTitle: string;
  customDescription: string;
  customFeatures: { title: string; text: string }[];
}

const PRODUCTS: Record<string, ProductData> = {
  'schneeberg-555-jahre': {
    id: 'schneeberg-555-jahre',
    artNo: 'FFH-LB-555',
    shortTitle: 'Jubiläumsbogen »555 Jahre Schneeberg«',
    title: 'Exklusiver Jubiläums-Lichtbogen »555 Jahre Bergstadt Schneeberg«',
    subtitle: 'Sonderedition zur 555-Jahrfeier (1471–2026) · Meisterhafte Handwerkskunst aus Schneeberg',
    price: 99.0,
    badge: 'Jubiläums-Edition',
    images: [
      {
        src: '/products/schneeberg-555/schneeberg-555-1.jpg',
        alt: 'Exklusiver Jubiläums-Lichtbogen 555 Jahre Bergstadt Schneeberg im atmosphärischen LED-Lichtglanz',
        title: 'Atmosphärische Nachtansicht: Brillante Lichtbrechung im Acrylglas',
      },
      {
        src: '/products/schneeberg-555/schneeberg-555-2.jpg',
        alt: 'Frontalansicht des Schneeberg-Jubiläumsbogens auf der Werkbank',
        title: 'Detailreiche Motive: St. Wolfgang, Stadtwappen, Förderturm & Rathaus',
      },
      {
        src: '/products/schneeberg-555/schneeberg-555-3.jpg',
        alt: 'Jubiläums-Lichtbogen mit Sockelgravur Anno 1471',
        title: 'Massiver Eichensockel mit Gravur (55 × 4 × 4 cm)',
      },
      {
        src: '/products/schneeberg-555/schneeberg-555-4.jpg',
        alt: 'Werkstattaufnahme des Jubiläums-Lichtbogens mit Sockelgravur Glück auf',
        title: 'Illuminierter Acrylglasbogen mit Eichensockel',
      },
      {
        src: '/products/schneeberg-555/schneeberg-555-5.jpg',
        alt: 'Nahaufnahme der Sockelgravur Glück auf seit 1471 in massivem Eichenholz',
        title: 'Tiefgefräste Eichensockel-Gravur: Glück auf seit 1471',
      },
    ],
    specs: [
      { label: '55 × 4 × 4 cm', sub: 'Eiche massiv' },
      { label: '12V LED-Betrieb', sub: 'Inkl. Netzteil' },
      { label: '5 mm Acrylglas', sub: 'Präzisions-Lasergravur' },
      { label: '1471–2026', sub: '555 Jahre Schneeberg' },
    ],
    bulletPoints: [
      {
        title: 'Jubiläumsedition 1471–2026',
        text: 'Jubiläumsbogen zur 555-Jahrfeier der Bergstadt Schneeberg (1471–2026) mit St. Wolfgangskirche, Stadtwappen, Förderturm und Rathaus.',
      },
      {
        title: 'Sockelmaß 55 × 4 × 4 cm',
        text: 'Handgefertigter Sockel aus massivem Eichenholz mit warmer, langlebiger LED-Beleuchtung.',
      },
      {
        title: '12V LED-Betrieb inkl. Netzteil',
        text: 'Plug & Play: Inklusive passendem 12V Netzteil, sofort anschlussbereit.',
      },
      {
        title: 'Bruchsicherer Spezialversand',
        text: 'Stoßsicher im Spezialkarton verpackt mit versichertem DHL-Tracking.',
      },
    ],
    introTitle: '555 Jahre Bergstadt Schneeberg: Ein leuchtendes Denkmal erzgebirgischer Geschichte',
    introParagraphs: [
      'Jubiläumsbogen zur 555-Jahrfeier der Bergstadt Schneeberg (1471–2026) mit St. Wolfgangskirche, Stadtwappen, Förderturm und Rathaus.',
      'Mit dem großen Berggeschrey und den reichen Silberfunden im Jahre 1471 begann die faszinierende Geschichte unserer Bergstadt Schneeberg. Dieser exklusive Jubiläums-Lichtbogen verbindet bergmännische Tradition mit moderner LED-Lichtkunst: Auf 5 mm starkem, hochtransparentem Acrylglas erstrahlen die Wahrzeichen unserer Stadt in gestochen scharfer Brillanz über einem schweren Sockel aus massiver Eiche.',
    ],
    motifTitle: 'Die historischen Wahrzeichen Schneebergs vereint in einem Kunstwerk',
    motifPoints: [
      {
        title: 'St. Wolfgangskirche & Rathaus',
        text: 'Die markante spätgotische St. Wolfgangskirche und das historische Schneeberger Rathaus bilden das stolze architektonische Fundament des Bogenmotivs.',
      },
      {
        title: 'Großes Stadtwappen & Schlägel und Eisen',
        text: 'Das prachtvolle historische Schneeberger Wappen mit Schlägel und Eisen zeugt von der tiefen bergmännischen Verbundenheit unserer Region.',
      },
      {
        title: 'Historischer Förderturm & 555 Jahre Schriftzug',
        text: 'Der filigran gravierte Förderturm und der gotische Schriftzug erinnern an 555 Jahre stolze Bergbautradition von 1471 bis 2026.',
      },
    ],
    qualityPoints: [
      {
        icon: Award,
        title: 'Offizielle Jubiläums-Edition',
        text: 'Gewidmet der 555-jährigen Geschichte der Bergstadt Schneeberg (1471–2026).',
      },
      {
        icon: Tv,
        title: 'Sockelmaß 55 × 4 × 4 cm (Eiche massiv)',
        text: 'Massiver, handgearbeiteter Sockel aus heimischem Eichenholz mit warmer, stimmungsvoller LED-Beleuchtung.',
      },
      {
        icon: Cpu,
        title: '12V LED-Betrieb inkl. Netzteil',
        text: 'Komplett anschlussfertig geliefert – einfach anstecken und die faszinierende Lichtbrechung genießen.',
      },
      {
        icon: MapPin,
        title: 'Gefertigt in Schneeberg',
        text: 'Original erzgebirgische Handarbeit von Stephan Tautenhahn in Schneeberg OT Lindenau.',
      },
    ],
    customTitle: 'Ihr persönliches Jubiläums-Unikat mit Sockelgravur',
    customDescription:
      'Geben Sie Ihrem Jubiläumsbogen eine ganz persönliche Note. Mit unserer Gravuroption auf dem massiven Eichensockel wird jedes Exemplar zu einem unverwechselbaren Sammlerstück:',
    customFeatures: [
      {
        title: 'Individuelle Sockelgravur',
        text: 'Bis zu 10 Zeichen nach Wunsch (z. B. „Glück auf“, Namen oder ein persönliches Jubiläumsjahr).',
      },
      {
        title: 'Tiefenfräsung in Eichenholz',
        text: 'Jede Gravur wird mit höchster Präzision dauerhaft in das massive Holz eingearbeitet.',
      },
      {
        title: 'Sonderwünsche auf Anfrage',
        text: 'Sondermaße oder Firmenpräsente realisieren wir gerne auf Anfrage für Sie.',
      },
    ],
  },
  'glueck-auf-panoramen': {
    id: 'glueck-auf-panoramen',
    artNo: 'FFH-SB-GAP',
    shortTitle: 'Schwibbogen »Glück Auf – Panoramen«',
    title: 'Traditioneller Erzgebirgs-Schwibbogen »Glück Auf – Panoramen« – Bergbau-Szenerie auf massivem Eichensockel',
    subtitle: 'Handgefertigt von Stephan Tautenhahn in 08289 Schneeberg OT Lindenau',
    price: 99.0, // 99,00 € zzgl. Versand (und optional +15,00 € Gravur)
    badge: 'Eiche massiv & 3D-Licht',
    images: [
      {
        src: '/products/glueck-auf-panoramen/bild-1.jpg',
        alt: 'Schwibbogen Glück Auf Panoramen mit Förderturm und Grubenbahn beleuchtet',
        title: 'Schwibbogen »Glück Auf – Panoramen« mit indirekter Beleuchtung',
      },
      {
        src: '/products/glueck-auf-panoramen/bild-2.jpg',
        alt: 'Detailaufnahme Schlägel und Eisen sowie Bergleute am Stollen',
        title: 'Detailreiche Arbeit: Schlägel & Eisen, Fachwerk, Grubenbahn und Eichensockel',
      },
    ],
    specs: [
      { label: '55 × 4 × 4 cm', sub: 'Sockelmaß Eiche (Bogen ca. 59 × 38 cm)' },
      { label: '12V LED-Betrieb', sub: 'Indirektes Licht mit 3D-Effekt' },
      { label: 'Naturwerkstoff Holz', sub: 'Präzise verarbeitetes Unikat' },
      { label: 'Wunschgravur', sub: 'Optional bis 10 Zeichen (+15 €)' },
    ],
    bulletPoints: [
      {
        title: 'Detailreiche Bergbau-Hommage',
        text: 'Das Herzstück bildet »Schlägel und Eisen«, umrahmt von einem majestätischen Förderturm, traditionellen Fachwerkhäusern, einer Grubenbahn und Bergleuten am Stollen.',
      },
      {
        title: 'Massiver Eichensockel (55 × 4 × 4 cm) & 3D-Licht',
        text: 'Durch die verdeckte, indirekte 12V-Beleuchtung im Eichensockel wird das Motiv in ein warmes, gemütliches Licht getaucht.',
      },
      {
        title: 'Persönliche Sockelgravur (+15,00 €)',
        text: 'Veredeln Sie den Eichensockel optional mit Ihrer individuellen Wunschgravur (bis zu 10 Zeichen).',
      },
    ],
    introTitle: 'Bringe ein Stück bergmännische Tradition in dein Zuhause! ⚒️✨',
    introParagraphs: [
      'Mit unserem liebevoll gefertigten Schwibbogen »Glück Auf – Panoramen« holst du dir nicht nur eine wunderschöne Lichtquelle, sondern auch ein echtes Stück Geschichte ins Fenster. Dieser detailreiche Lichterbogen ist eine Hommage an die Bergbautradition und fängt die Faszination der Zeche in stimmungsvollem Design ein.',
      'Hinweis: Holz ist ein Naturprodukt. Leichte Abweichungen in der Maserung machen jedes Stück zu einem echten Unikat. Preis versteht sich zzgl. Versandkosten.',
    ],
    motifTitle: 'Das Motiv im Detail',
    motifPoints: [
      {
        title: 'Schlägel und Eisen, Förderturm & Grubenbahn',
        text: 'Zu entdecken gibt es einen majestätischen Förderturm, traditionelle Fachwerkhäuser, eine Grubenbahn sowie Bergleute, die in den Stollen einfahren – perfekt für die dunkle Jahreszeit.',
      },
    ],
    qualityPoints: [
      {
        icon: Tv,
        title: 'Ein Hingucker für jedes Fenster',
        text: 'Mit dem massiven Eichensockel (55 × 4 × 4 cm) und dem großzügigen Bogenmaß (59 × 38 cm) ideal für Fensterbänke, Sideboards oder den Kamin.',
      },
      {
        icon: Cpu,
        title: 'Stimmungsvolle 12V-Beleuchtung',
        text: 'Indirekt beleuchtet für einen plastischen 3D-Effekt – inklusive passendem 12V-Netzteil.',
      },
      {
        icon: MapPin,
        title: 'Mit Liebe zum Detail gefertigt',
        text: 'Ein echter Blickfang aus unserer Werkstatt in Schneeberg, der die alte »Glück Auf«-Tradition leuchten lässt.',
      },
    ],
    customTitle: 'Individuelle Sockelgravur (+15,00 €)',
    customDescription: 'Verleihen Sie Ihrem Schwibbogen eine ganz persönliche Note mit einer Fräsung direkt im 55 × 4 × 4 cm Eichensockel.',
    customFeatures: [
      {
        title: 'Bis zu 10 Zeichen frei wählbar',
        text: 'Aktivieren Sie einfach oben beim Kauf die Gravur-Option und geben Sie Ihren Wunschtext ein.',
      },
    ],
  },
  'neustaedtel': {
    id: 'neustaedtel',
    artNo: 'FFH-LB-NEU',
    shortTitle: 'Erzgebirgs-Lichtbogen »Neustädtel«',
    title: 'Traditioneller Erzgebirgs-Lichtbogen »Neustädtel« – Handgravierte Acrylglaskunst auf massivem Eichensockel',
    subtitle: 'Handgefertigt von Stephan Tautenhahn in 08289 Schneeberg OT Lindenau',
    price: 99.0, // 99,00 € zzgl. Versand
    badge: 'Ortsteil-Edition · Eiche massiv',
    images: [
      {
        src: '/products/neustaedtel/bild-1.jpg',
        alt: 'Erzgebirgs-Lichtbogen Neustädtel beleuchtet auf Eichensockel',
        title: 'Lichtbogen »Neustädtel« mit warmweißer 12V-LED-Beleuchtung',
      },
      {
        src: '/products/neustaedtel/bild-2.jpg',
        alt: 'Detailaufnahme Neustädtel Gravur und Eichensockel 55x4x4 cm',
        title: 'Massiver Eichensockel (55 × 4 × 4 cm) mit präziser Holzarbeit',
      },
      {
        src: '/products/neustaedtel/bild-3.jpg',
        alt: 'Lichtbogen Neustädtel in der Werkstatt mit stimmungsvoller Lichtreflexion',
        title: 'Illuminierter Acrylglasbogen mit Eichensockel',
      },
      {
        src: '/products/neustaedtel/bild-4.jpg',
        alt: 'Frontalaufnahme des Neustädtler Lichtbogens',
        title: 'Präzise Konturgravur: Kirche, Bergamt & Ortsansicht',
      },
      {
        src: '/products/neustaedtel/bild-5.jpg',
        alt: 'Zwei handgefertigte Neustädtel-Lichtbögen auf der Werkbank',
        title: 'Meisterhafte Handarbeit aus Schneeberg OT Lindenau',
      },
    ],
    specs: [
      { label: '55 × 4 × 4 cm', sub: 'Massiver Sockel aus Eiche' },
      { label: 'Neustädtler Motiv', sub: 'Kirche, Wappen & Ortsansicht' },
      { label: '12V Plug & Play', sub: 'Warmweiße LED inkl. Netzteil' },
      { label: 'Wunschgravur', sub: 'Optional bis 10 Zeichen (+15 €)' },
    ],
    bulletPoints: [
      {
        title: 'Heimatverbundenes Design',
        text: 'Brillante Konturgravur der Neustädtler Wahrzeichen mit Kirche, Ortswappen und bergmännischen Details.',
      },
      {
        title: 'Massiver Eichensockel (55 × 4 × 4 cm)',
        text: 'Gefertigt aus heimischer Eiche, fein geschliffen und geölt – mit verdeckter 12V-LED-Lichtleiste.',
      },
      {
        title: 'Persönliche Sockelgravur (+15,00 €)',
        text: 'Optional mit Ihrem individuellen Wunschtext (bis zu 10 Zeichen) direkt in die Sockelfront gefräst.',
      },
    ],
    introTitle: 'Heimatliebe im warmen Licht: Der Neustädtler Lichterbogen',
    introParagraphs: [
      'Hol dir ein Stück erzgebirgische Geschichte und echtes Handwerk ins Fenster! Unser Lichtbogen »Neustädtel« zeigt die markanten Wahrzeichen des geschichtsträchtigen Ortsteils in brillanter Acryl-Konturgravur.',
      'Hinweis: Holz ist ein Naturprodukt. Leichte Abweichungen in der Maserung machen jedes Stück zu einem Unikat. Preis zzgl. Versandkosten.',
    ],
    motifTitle: 'Das Motiv im Detail',
    motifPoints: [
      {
        title: 'Ortsansicht Neustädtel',
        text: 'Detailreich gravierte Gebäude, Kirchturm und das traditionelle Wappen auf hochwertigem Acrylglas.',
      },
    ],
    qualityPoints: [
      {
        icon: Tv,
        title: 'Perfektes Sockelmaß (55 cm)',
        text: 'Harmonisierte Maße von 55 × 4 × 4 cm für einen stabilen und edlen Stand auf jeder Fensterbank.',
      },
      {
        icon: Cpu,
        title: 'Sicherer 12V-Betrieb',
        text: 'Inklusive energiesparender, warmweißer LEDs und passendem Netzteil für den sofortigen Start.',
      },
      {
        icon: MapPin,
        title: 'Echte Handarbeit aus Sachsen',
        text: 'Entworfen und gefertigt in unserer Werkstatt in Schneeberg OT Lindenau.',
      },
    ],
    customTitle: 'Individuelle Sockelgravur (+15,00 €)',
    customDescription: 'Verleihen Sie Ihrem Neustädtler Bogen eine persönliche Note mit einer Gravur direkt im Eichensockel.',
    customFeatures: [
      {
        title: 'Bis zu 10 Zeichen wählbar',
        text: 'Geben Sie Ihren Wunschtext direkt vor der Bestellung im Shop ein.',
      },
    ],
  },
  'erzgebirgs-lichtbogen': {
    id: 'erzgebirgs-lichtbogen',
    artNo: 'FFH-LB-01',
    shortTitle: 'Erzgebirgs-Lichtbogen »Haamitland«',
    title:
      'Ein leuchtendes Stück Heimat: Der exklusive Erzgebirgs-Lichtbogen – Traditionelle Handwerkskunst in modernem Licht',
    subtitle: 'Handgefertigt von Stephan Tautenhahn in 08289 Schneeberg OT Lindenau',
    price: 99.0,
    badge: 'Acrylglas & Eiche',
    images: [
      {
        src: '/products/erzgebirgs-lichtbogen/lichtbogen-1.jpg',
        alt: 'Erzgebirgs-Lichtbogen Haamitland erleuchtet auf der Werkbank',
        title: 'Illuminierte Bergparade in voller Leuchtkraft',
      },
      {
        src: '/products/erzgebirgs-lichtbogen/lichtbogen-3.jpg',
        alt: 'Frontalansicht des illuminierten Acrylglas-Lichtbogens mit St. Wolfgangskirche',
        title: 'Frontalansicht mit St. Wolfgangskirche & Haamitland-Schriftzug',
      },
      {
        src: '/products/erzgebirgs-lichtbogen/lichtbogen-2.jpg',
        alt: 'Tageslichtaufnahme des massiven Eichensockels mit Schlägel und Eisen Fräsung',
        title: 'Detailaufnahme: Massiver Eichensockel mit Schlägel & Eisen',
      },
    ],
    specs: [
      { label: '500 × 230 mm', sub: 'Acrylglas 5 mm' },
      { label: '550 mm', sub: 'Massiver Eichensockel' },
      { label: '12V Plug & Play', sub: 'Inkl. Netzteil' },
      { label: 'Schneeberg', sub: 'Erzgebirgische Handarbeit' },
    ],
    bulletPoints: [
      {
        title: 'Massives 5 mm Acrylglas',
        text: 'Hochpräzise Konturengravur für brillante Lichtbrechung.',
      },
      {
        title: 'Massiver Eichensockel (550 mm)',
        text: 'Handgefertigt mit tiefgefrästem Schlägel & Eisen.',
      },
      {
        title: 'Plug & Play',
        text: 'Inklusive passendem 12V Netzteil, sofort anschlussbereit.',
      },
      {
        title: 'Bruchsicherer Spezialversand',
        text: 'Stoßsicher verpackt mit versichertem DHL-Tracking.',
      },
    ],
    introTitle: 'Faszination erzgebirgischer Bergmannstradition in modernem Licht',
    introParagraphs: [
      'Holen Sie sich mit diesem exklusiven Lichtbogen die Faszination der erzgebirgischen Bergmannstradition direkt ins Wohnzimmer. Dieses handgefertigte Leuchtobjekt vereint die tiefe Verbundenheit zu unserer Heimat mit modernster Technik und edlen Materialien.',
      'Ein leuchtendes Zentrum der „Haamitland“-Liebe, das perfekt mit klassischer Holzkunst und bergmännischen Schätzen harmoniert. Ein echtes Sammlerstück für jeden Liebhaber des Erzgebirges!',
    ],
    motifTitle: 'Details zum Lichtbogen im Überblick',
    motifPoints: [
      {
        title: 'Detailreiche Bergparade',
        text: 'Präzise Gravur einer detailreichen, glanzvollen Bergparade mit marschierenden Bergmannszügen, Trachtenträgern und Musikanten, überragt von der majestätischen St. Wolfgangskirche. Im Zentrum prangt stolz der „Haamitland“-Schriftzug.',
      },
      {
        title: 'Massives 5 mm Acrylglas',
        text: 'Hochtransparentes, 5 mm starkes Premium-Acrylglas sorgt für eine brillante Lichtbrechung und hebt jedes noch so kleine Detail der Gravur gestochen scharf hervor.',
      },
      {
        title: 'Edler Eichensockel (550 mm)',
        text: 'Ein schwerer, handgearbeiteter Sockel aus massivem Eichenholz (Maße: 550 × 40 × 35 mm). Verziert mit tiefgefrästen Schlägel & Eisen Symbolen und dem traditionellen Schriftzug „Arzgebirg“.',
      },
    ],
    qualityPoints: [
      {
        icon: Tv,
        title: 'Beeindruckende Präsenz',
        text: 'Mit einer Glasfläche von 500 × 230 mm ist der Bogen ein prominenter Blickfang auf jedem Sideboard, im Fenster oder als Mittelpunkt Ihrer Sammlung.',
      },
      {
        icon: Cpu,
        title: 'Bequem & Anschlussfertig (Plug & Play)',
        text: 'Inklusive passendem 12V Netzteil mit langlebigen LEDs. Einfach anstecken, einschalten und die stimmungsvolle Atmosphäre genießen.',
      },
      {
        icon: MapPin,
        title: 'Standort Schneeberg',
        text: 'Gefertigt in Schneeberg im Erzgebirge. Sicherer Versand für 5,99 € oder direkte Abholung nach Vereinbarung.',
      },
    ],
    customTitle: 'Ihr Unikat nach Maß – Individuelle Sonderanfertigungen',
    customDescription:
      'Sie suchen etwas ganz Spezielles für einen besonderen Anlass oder Ihre Geschäftsräume? Über den abgebildeten Bogen hinaus bieten wir Ihnen volle Flexibilität für Ihr persönliches Lichtobjekt:',
    customFeatures: [
      {
        title: 'Größe nach Wunsch',
        text: 'Von der dezenten Tischdeko (20 × 20 cm) bis zum imposanten XXL-Objekt von 180 × 100 cm.',
      },
      {
        title: 'Personalisierung',
        text: 'Der Eichensockel kann individuell mit Namen, wichtigen Daten, Widmungen oder Ihrem eigenen Wunschtext graviert werden.',
      },
      {
        title: 'Eigene Motive & Formen',
        text: 'Wir setzen Ihre Ideen um! Ob Ihr eigenes Familienhaus, ein Firmenlogo oder Ihr Lieblingsmotiv.',
      },
      {
        title: 'Smart Home & Upgrades',
        text: 'Auf Wunsch mit Smart Home Integration (App, Alexa, Google Home) sowie RGB-Farbwechsel und Dimmfunktion.',
      },
    ],
  },

  'schwibbogen-seiffener-kirche': {
    id: 'schwibbogen-seiffener-kirche',
    artNo: 'FFH-SB-02',
    shortTitle: 'LED-Schwibbogen »Seiffener Kirche«',
    title:
      'Erzgebirgische Tradition trifft moderne LED-Technik: Filigraner Holz-Schwibbogen mit Seiffener Kirche',
    subtitle: 'Meisterhafte Holzkunst & LED-Licht · Stephan Tautenhahn · Schneeberg',
    price: 99.0,
    badge: 'Echtholz & LED',
    images: [
      {
        src: '/products/erzgebirgischer-led-schwibbogen/seiffener-kirche-1.jpg',
        alt: 'Filigraner LED-Holzschwibbogen mit Seiffener Kirche erleuchtet auf der Fensterbank',
        title: 'Illuminierte Seiffener Kirche mit Kurrendesängern und Sternen im warmen LED-Licht',
      },
      {
        src: '/products/erzgebirgischer-led-schwibbogen/seiffener-kirche-2.jpg',
        alt: 'Nahaufnahme des beleuchteten Seiffener-Kirche-Schwibbogens',
        title: 'Stimmungsvolle Nahaufnahme: Warmer Lichterglanz & Seiffener Silhouette',
      },
      {
        src: '/products/erzgebirgischer-led-schwibbogen/seiffener-kirche-3.jpg',
        alt: 'Tageslichtaufnahme der präzisen Holzfräsung der Seiffener Kirche in der Werkstatt',
        title: 'Meisterhafte Holzkunst & filigrane Konturen bei Tageslicht',
      },
    ],
    specs: [
      { label: 'Echtholz (2 Platten)', sub: 'Bestehend aus 2 identischen Platten' },
      { label: 'Warmweiß LED', sub: 'Energieeffizient & langlebig' },
      { label: 'Netzstecker', sub: 'Bequemer 12V-Betrieb' },
      { label: 'Seiffener Kirche', sub: 'Traditionelle Holzkunst' },
    ],
    bulletPoints: [
      {
        title: 'Moderne LED-Technik & Edles Holz',
        text: 'Bestehend aus 2 identischen Platten: Hochwertiges, helles Echtholz trifft auf energieeffiziente, warmweiße LED-Beleuchtung. Sicherer und langlebiger Betrieb ohne offene Flammen.',
      },
      {
        title: 'Meisterhafte Ästhetik & Präzisionsfräsung',
        text: 'Die millimetergenaue Fräsung beider Holzplatten sorgt für beeindruckende räumliche Tiefe und lässt jedes filigrane Detail plastisch hervortreten.',
      },
      {
        title: 'Sofort startklar & Flexibel',
        text: 'Bequemer Betrieb über Netzstecker – einfach anschließen und den winterlichen Zauber genießen! Perfekt für die Fensterbank, das Sideboard oder den Schreibtisch.',
      },
      {
        title: 'Kompakte Basis',
        text: 'Wie das Vorbild ruht jeder Bogen auf einem stabilen, hochwertigen Holzsockel für sicheren Stand.',
      },
    ],
    introTitle: 'Ein Lichtblick, der Geschichten erzählt',
    introParagraphs: [
      'Bestehend aus 2 identischen Platten: Ob als herzliches Geschenk für die Familie oder als repräsentativer Akzent für Ihr Unternehmen – unsere exklusive Serie von filigranen Holz-Schwibbögen verbindet meisterhaftes Handwerk mit modernster LED-Technologie. Perfekt für die Weihnachtszeit, als Hochzeitsgeschenk, Jubiläumspräsent oder als stilvolles Firmengeschenk.',
    ],
    motifTitle: 'Traditionelle Seiffener Handwerkskunst im Detail',
    motifPoints: [
      {
        title: 'Illustration erzgebirgischer Handwerkskunst mit der Seiffener Kirche',
        text: 'Eine detailverliebte Illustration erzgebirgischer Handwerkskunst mit der weltberühmten Seiffener Kirche, festlichen Tannen, Kurrendesängern und Waldmotiven.',
      },
      {
        title: 'Festliche Winterwald-Atmosphäre',
        text: 'Stimmungsvolle Kurrendesänger mit Stern, anmutige Tannen und ein Waldreh umrahmen die Seiffener Dorfkirche für ein behagliches, festliches Ambiente.',
      },
    ],
    qualityPoints: [
      {
        icon: Sparkles,
        title: 'Moderne LED-Technik & Edles Holz',
        text: 'Hochwertiges, helles Echtholz trifft auf energieeffiziente, warmweiße LED-Beleuchtung. Sicherer und langlebiger Betrieb ohne offene Flammen.',
      },
      {
        icon: Award,
        title: 'Meisterhafte Ästhetik & Präzisionsfräsung',
        text: 'Bestehend aus 2 identischen Platten: Die millimetergenaue Fräsung des Holzes sorgt für beeindruckende Tiefe und bringt die architektonischen Feinheiten der Seiffener Kirche zur Geltung.',
      },
      {
        icon: Zap,
        title: 'Bequem & Flexibel',
        text: 'Bequemer Betrieb über Netzstecker – einfach anschließen und den winterlichen Zauber genießen! Perfekt für die Fensterbank, das Sideboard oder den Schreibtisch.',
      },
      {
        icon: Layers,
        title: 'Kompakte Basis',
        text: 'Wie das Vorbild ruht jeder Bogen auf einem stabilen, hochwertigen Holzsockel für sicheren Stand.',
      },
    ],
    customTitle: 'Ihr Unikat nach Maß - Individuelle Sonderanfertigungen für Firmen & Familien',
    customDescription:
      'Sie haben eine ganz eigene Vision? Wir gehen weit über Standardprodukte hinaus und schaffen für Sie Ihr persönliches Lichtobjekt – ein wahres Unikat, das Ihre Geschichte erzählt.',
    customFeatures: [
      {
        title: 'Grenzenlose Individualisierung - Größe nach Wunsch',
        text: 'Ob als dezente Fensterdekoration (ab 40 cm Breite) oder als imposantes XXL-Objekt (bis zu 180 cm Breite) für Foyers, Firmen oder als stilvoller Raumteiler – wir realisieren Ihre Wunschmaße.',
      },
      {
        title: 'Persönliche Integration',
        text: 'Verleihen Sie dem Bogen eine ganz persönliche Note. Familiennamen, Gründungsdaten für Firmen, Hochzeitsdaten oder Widmungen – das perfekte Detail für jeden Anlass.',
      },
      {
        title: 'Eigene Motive & Formen',
        text: 'Bringen Sie Ihre einzigartigen Ideen in Holz! Ob Ihr Eigenheim, ein Firmenlogo, ein spezielles Produkt oder eine regionale Silhouette – Form und Motiv sind völlig frei anpassbar.',
      },
    ],
  },

  'schwibbogen-bergmannstradition': {
    id: 'schwibbogen-bergmannstradition',
    artNo: 'FFH-SB-03',
    shortTitle: 'LED-Schwibbogen »Bergmannstradition«',
    title:
      'Erzgebirgische Tradition trifft moderne LED-Technik: Filigraner Holz-Schwibbogen mit Bergleuten & Handwerksmotiven',
    subtitle: 'Traditionelle Holzkunst & LED-Licht · Stephan Tautenhahn · Schneeberg',
    price: 99.0,
    badge: 'Echtholz & LED',
    images: [
      {
        src: '/products/erzgebirgischer-led-schwibbogen/bergmannstradition-1.jpg',
        alt: 'Filigraner LED-Holzschwibbogen Bergmannstradition erleuchtet auf der Fensterbank',
        title: 'Illuminierte Bergleute, Schnitzer & Klöpplerin im warmen LED-Licht',
      },
      {
        src: '/products/erzgebirgischer-led-schwibbogen/bergmannstradition-2.jpg',
        alt: 'Außenansicht des beleuchteten Holz-Schwibbogens Bergmannstradition im Fenster',
        title: 'Festlicher Lichterglanz im Fenster am Abend',
      },
    ],
    specs: [
      { label: 'Echtholz (2 Platten)', sub: 'Bestehend aus 2 identischen Platten' },
      { label: 'Warmweiß LED', sub: 'Energieeffizient & langlebig' },
      { label: 'Netzstecker', sub: 'Bequemer 12V-Betrieb' },
      { label: 'Bergparade', sub: 'Traditionelle Holzkunst' },
    ],
    bulletPoints: [
      {
        title: 'Lebendige Bergmannstradition',
        text: 'Zwei stattliche Bergleute mit Schlägel und Eisen, Schnitzer und Klöpplerin in filigranem Holz.',
      },
      {
        title: 'Moderne LED-Technik & Edles Holz',
        text: 'Bestehend aus 2 identischen Platten: Hochwertiges, helles Echtholz trifft auf energieeffiziente, warmweiße LED-Beleuchtung.',
      },
      {
        title: 'Millimetergenaue Holzfräsung',
        text: 'Die millimetergenaue Fräsung beider Holzplatten sorgt für faszinierende räumliche Tiefe und lässt jedes filigrane Handwerksdetail plastisch hervortreten.',
      },
      {
        title: 'Kompakte & solide Basis',
        text: 'Ruht auf einem massiven, handgearbeiteten Holzsockel für absolut sicheren Stand.',
      },
    ],
    introTitle: 'Lebendige Bergmannstradition in edlem Holz',
    introParagraphs: [
      'Bestehend aus 2 identischen Platten: Ein meisterhafter Holz-Schwibbogen für alle, die das Erzgebirge und seine reiche Tradition im Herzen tragen. Die detaillierte Darstellung von Bergleuten, Schnitzern und Klöpplerinnen verbindet Heimatgeschichte mit zeitgemäßem Design und warmer LED-Beleuchtung.',
    ],
    motifTitle: 'Traditionelles bergmännisches Motiv im Überblick',
    motifPoints: [
      {
        title: 'Bergparade & Handwerkskunst',
        text: 'Zwei majestätische Bergleute im Zentrum mit Schlägel & Eisen, flankiert von einem Holzschnitzer und einer Klöpplerin am Spinnrad.',
      },
      {
        title: 'Schlägel & Eisen im Zentrum',
        text: 'Das traditionelle bergmännische Bergbau-Symbol bildet das stolze Herzstück, umrahmt von meisterhafter erzgebirgischer Handwerkskultur.',
      },
    ],
    qualityPoints: [
      {
        icon: Sparkles,
        title: 'Moderne LED-Technik & Edles Holz',
        text: 'Hochwertiges, helles Echtholz trifft auf energieeffiziente, warmweiße LED-Beleuchtung ohne Brandgefahr.',
      },
      {
        icon: Award,
        title: 'Meisterhafte Ästhetik & Fräskunst',
        text: 'Bestehend aus 2 identischen Platten: Präzise Fräsung für beeindruckende Schattenwürfe, dreidimensionale Tiefe und saubere Konturen.',
      },
      {
        icon: Zap,
        title: 'Sofort startklar (Plug & Play)',
        text: 'Einfach per Netzstecker an die Steckdose anschließen und den winterlichen Zauber genießen.',
      },
      {
        icon: Layers,
        title: 'Kompakter Holzsockel',
        text: 'Stabiler Stand für Fensterbank, Kamin oder Schreibtisch.',
      },
    ],
    customTitle: 'Ihr Unikat nach Maß – Sonderanfertigungen',
    customDescription:
      'Sie möchten ein maßgeschneidertes Firmengeschenk oder eine individuelle Familienanfertigung? Wir realisieren Sonderwünsche jeder Art:',
    customFeatures: [
      {
        title: 'Größe nach Wunsch (40 bis 180 cm)',
        text: 'Vom dezenten Tischformat bis zum imposanten XXL-Objekt für Foyers und Konferenzräume.',
      },
      {
        title: 'Persönliche Integration',
        text: 'Familiennamen, Gründungsdaten für Firmen, Hochzeitsdaten oder persönliche Widmungen.',
      },
      {
        title: 'Eigene Motive, Logos & Formen',
        text: 'Bringen Sie Ihre eigenen Ideen in Holz! Ob Eigenheim, Firmenlogo oder Wunschsilhouette.',
      },
    ],
  },
};

function OnlineShopContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get('product') || searchParams.get('p');

  // Map legacy product IDs if necessary
  const normalizedInitial =
    productParam === 'erzgebirgischer-led-schwibbogen'
      ? 'schwibbogen-seiffener-kirche'
      : productParam && PRODUCTS[productParam]
      ? productParam
      : null;

  const [selectedProductId, setSelectedProductId] = useState<string | null>(normalizedInitial);
  const activeProduct = selectedProductId ? PRODUCTS[selectedProductId] || null : null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [shippingOption, setShippingOption] = useState<'standard' | 'pickup'>('standard');
  const [engravingEnabled, setEngravingEnabled] = useState(false);
  const [engravingText, setEngravingText] = useState('');
  const [engravingError, setEngravingError] = useState<string | null>(null);
  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Sync with URL query parameter
  useEffect(() => {
    if (productParam) {
      const mapped =
        productParam === 'erzgebirgischer-led-schwibbogen'
          ? 'schwibbogen-seiffener-kirche'
          : productParam;
      if (PRODUCTS[mapped]) {
        setSelectedProductId(mapped);
        setActiveImageIndex(0);
      }
    } else {
      setSelectedProductId(null);
    }
  }, [productParam]);

  // Handle browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const p = params.get('product') || params.get('p');
      if (p && PRODUCTS[p]) {
        setSelectedProductId(p);
      } else {
        setSelectedProductId(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const currentImages = activeProduct ? activeProduct.images : [];
  const pricePerItem = activeProduct ? activeProduct.price : 99.0;
  const shippingCost = shippingOption === 'standard' ? 5.99 : 0.0;
  const engravingCost = engravingEnabled ? 15.0 * quantity : 0.0;
  const subtotal = pricePerItem * quantity;
  const totalPrice = subtotal + shippingCost + engravingCost;

  const handleSelectProduct = (id: string) => {
    setSelectedProductId(id);
    setActiveImageIndex(0);
    setQuantity(1);
    setCheckoutError(null);
    setEngravingError(null);
    window.history.pushState(null, '', `/online-shop?product=${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToOverview = () => {
    setSelectedProductId(null);
    setCheckoutError(null);
    setEngravingError(null);
    window.history.pushState(null, '', '/online-shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Stripe Checkout Handler
  const handleStripeCheckout = async () => {
    if (!activeProduct || !selectedProductId) return;

    // Client-side validation: If engraving is enabled, text is required
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
          productId: selectedProductId,
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
    } catch (err: any) {
      console.error('Checkout error:', err);
      setCheckoutError(err.message || 'Verbindung zu Stripe fehlgeschlagen.');
      setIsLoadingCheckout(false);
    }
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
            <span className="text-[#181715] font-semibold">
              Online-Shop
            </span>
          )}
        </div>
      </div>

      {/* 1. PRODUKT-GRID (ÜBERSICHT) */}
      {!activeProduct ? (
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
                onClick={() => handleSelectProduct(prod.id)}
                className="bg-white border border-[#eae6de] hover:border-[#a87948] rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
              >
                {/* Image Viewport */}
                <div className="relative aspect-[16/10] bg-[#181715] overflow-hidden">
                  <Image
                    src={prod.images[0].src}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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
                      <span className="text-[11px] font-mono text-[#8b877f]">
                        zzgl. Versand
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectProduct(prod.id);
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
      ) : (
        /* 2. DETAILSEITE BEI KLICK */
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 sm:py-12 space-y-10">
          {/* Back Button Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#eae6de]">
            <button
              type="button"
              onClick={handleBackToOverview}
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
              <Image
                src={currentImages[activeImageIndex]?.src || activeProduct.images[0].src}
                alt={currentImages[activeImageIndex]?.alt || activeProduct.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
              />

              {/* Watermark badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-mono uppercase tracking-wider bg-black/80 text-white px-3 py-1 backdrop-blur-xs border border-white/10 rounded-xs">
                  Original Werkstatt-Unikat
                </span>
              </div>

              {/* Zoom Trigger */}
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute bottom-4 right-4 z-10 p-2.5 bg-black/70 hover:bg-black text-white rounded-full backdrop-blur-xs border border-white/20 transition-all opacity-90 hover:opacity-100 hover:scale-105 cursor-pointer"
                title="Vollbild anzeigen"
                aria-label="Vollbild"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Clean Thumbnail Carousel (no placeholder or upload field) */}
            <div className="flex flex-wrap items-center gap-3">
              {currentImages.map((img, idx) => {
                const isActive = activeImageIndex === idx;
                return (
                  <button
                    key={idx}
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

              <p className="text-xs font-mono text-[#8b877f]">
                {activeProduct.subtitle}
              </p>
            </div>

            {/* PRICING & SHIPPING DISPLAY WITH EXACTLY 1x LIEFERZEIT */}
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

                {/* EXACTLY 1x VISIBLE LIEFERZEIT ANZEIGE */}
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

            {/* INTERAKTIVE SOCKEL-GRAVUR-OPTION FÜR ALLE ARTIKEL (+15,00 €) */}
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

                  {/* RECHTLICHER HINWEIS WIDERRUFSRECHT */}
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
                    <span className="text-xs font-mono bg-black/15 px-2 py-0.5 rounded-xs">
                      {totalPrice.toFixed(2).replace('.', ',')} €
                    </span>
                  </>
                )}
              </button>

              {/* Payment Trust Badges */}
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

        {/* DETAILED DESCRIPTION & CRAFT DETAILS SECTION */}
        <div className="mt-20 pt-16 border-t border-[#eae6de] space-y-16">
          {/* Main Description */}
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

          {/* MOTIF & HIGHLIGHT DETAILS CARDS */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif text-[#181715]">
              {activeProduct.motifTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeProduct.motifPoints.map((mp, i) => (
                <div
                  key={i}
                  className="bg-[#fcfbf9] p-6 sm:p-8 border border-[#eae6de] space-y-3 hover:border-[#a87948] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#f4f1ea] border border-[#d3cdbf] flex items-center justify-center text-[#a87948]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-serif text-[#181715]">
                    {mp.title}
                  </h4>
                  <p className="text-xs text-[#615e57] font-light leading-relaxed">
                    {mp.text}
                  </p>
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
                    <h4 className="text-base font-serif text-[#181715]">
                      {qp.title}
                    </h4>
                    <p className="text-xs text-[#615e57] font-light leading-relaxed">
                      {qp.text}
                    </p>
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
            onClick={handleBackToOverview}
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#181715] hover:text-[#a87948] transition-colors py-3 px-5 bg-white border border-[#d3cdbf] hover:border-[#a87948] rounded-xs shadow-xs cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>← Zurück zur Produkt-Übersicht</span>
          </button>
          <span className="text-xs font-mono text-[#8b877f]">
            Handgefertigte erzgebirgische Holzkunst von Stephan Tautenhahn
          </span>
        </div>
      </div>
    )}

      {/* FULLSCREEN PHOTO ZOOM MODAL */}
      {isZoomOpen && activeProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 cursor-pointer"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
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

export default function OnlineShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fcfbf9] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#a87948]" />
        </div>
      }
    >
      <OnlineShopContent />
    </Suspense>
  );
}
