import {
  Tv,
  Cpu,
  MapPin,
  Award,
  Sparkles,
  Zap,
  Layers,
  type LucideIcon,
} from 'lucide-react';

export interface ProductImage {
  src: string;
  alt: string;
  title: string;
}

export interface ProductData {
  id: string;
  artNo: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  price: number;
  badge: string;
  imageFit?: 'cover' | 'contain';
  youtubeId?: string;
  youtubeAspect?: '9:16' | '16:9';
  images: ProductImage[];
  specs: { label: string; sub: string }[];
  bulletPoints: { title: string; text: string }[];
  introTitle: string;
  introParagraphs: string[];
  motifTitle: string;
  motifPoints: { title: string; text: string }[];
  qualityPoints: { title: string; text: string; icon: LucideIcon }[];
  customTitle: string;
  customDescription: string;
  customFeatures: { title: string; text: string }[];
}

export const PRODUCTS: Record<string, ProductData> = {
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
  'bergstadt-schneeberg': {
    id: 'bergstadt-schneeberg',
    artNo: 'FFH-LB-BSG',
    shortTitle: 'Erzgebirgs-Lichtbogen »Bergstadt Schneeberg«',
    title:
      'Traditioneller Erzgebirgs-Lichtbogen »Bergstadt Schneeberg« – Handgravierte Acrylglaskunst auf massivem Eichensockel',
    subtitle: 'Handgefertigt von Stephan Tautenhahn in 08289 Schneeberg OT Lindenau',
    price: 115.0, // 115,00 € zzgl. Versand
    badge: 'Klassik-Edition · Eiche massiv',
    youtubeId: 'Fe98a_042Ms',
    youtubeAspect: '9:16',
    images: [
      {
        src: '/products/bergstadt-schneeberg/bild-1.jpg',
        alt: 'Erzgebirgs-Lichtbogen Bergstadt Schneeberg beleuchtet auf Eichensockel',
        title: 'Lichtbogen »Bergstadt Schneeberg« mit warmweißer 12V-LED-Beleuchtung',
      },
      {
        src: '/products/bergstadt-schneeberg/bild-2.jpg',
        alt: 'Detailaufnahme Schneeberg Altstadt Gravur und Eichensockel 55x4x4 cm',
        title: 'Massiver Eichensockel (55 × 4 × 4 cm) mit Schlägel & Eisen Gravur',
      },
      {
        src: '/products/bergstadt-schneeberg/bild-3.jpg',
        alt: 'Frontalansicht des beleuchteten Lichtbogens Bergstadt Schneeberg in der Werkstatt',
        title: 'Brillante Konturgravur: St. Wolfgangskirche, Rathaus, Markt & Ortspyramide',
      },
      {
        src: '/products/bergstadt-schneeberg/bild-4.jpg',
        alt: 'Perspektivische Werkstattaufnahme des Acrylglas-Lichtbogens Bergstadt Schneeberg im LED-Glanz',
        title: 'Plastische Lichtwirkung der 5 mm Acrylglas-Gravur auf massivem Eichensockel',
      },
    ],
    specs: [
      { label: '55 × 4 × 4 cm', sub: 'Massiver Sockel aus Eiche' },
      { label: 'Altstadt-Panorama', sub: 'St. Wolfgangskirche, Rathaus & Markt' },
      { label: '12V Plug & Play', sub: 'Warmweiße LED inkl. Netzteil' },
      { label: 'Wunschgravur', sub: 'Optional bis 10 Zeichen (+15 €)' },
    ],
    bulletPoints: [
      {
        title: 'Heimatliebe im Detail',
        text: 'Detailreiche Konturgravur der Schneeberger Altstadt mit St. Wolfgangskirche, Rathaus und großer Ortspyramide.',
      },
      {
        title: 'Massiver Eichensockel (55 × 4 × 4 cm)',
        text: 'Gefertigt aus heimischer Eiche, geölt und verziert mit tiefgefrästen Schlägel & Eisen Symbolen.',
      },
      {
        title: 'Persönliche Sockelgravur (+15,00 €)',
        text: 'Optional mit Ihrem individuellen Wunschtext (bis zu 10 Zeichen) direkt in die Sockelfront gefräst.',
      },
    ],
    introTitle: 'Ein leuchtendes Stück Heimat: Der Schneeberger Lichtbogen',
    introParagraphs: [
      'Holen Sie sich mit diesem exklusiven Lichtbogen die Faszination der erzgebirgischen Tradition direkt ins Wohnzimmer. Das detailreiche Panorama zeigt die majestätische St. Wolfgangskirche, das Rathaus und das festliche Treiben auf dem Weihnachtsmarkt.',
      'Hinweis: Holz ist ein Naturprodukt. Leichte Abweichungen in der Maserung machen jedes Stück zu einem Unikat. Preis zzgl. Versandkosten.',
    ],
    motifTitle: 'Das Motiv im Detail',
    motifPoints: [
      {
        title: 'Schneeberger Altstadt',
        text: 'Brillante 5 mm Acrylglas-Gravur mit Kirchturm, Buden und traditionellen Figuren.',
      },
    ],
    qualityPoints: [
      {
        icon: Tv,
        title: 'Perfektes Sockelmaß (55 cm)',
        text: 'Harmonisierte Maße von 55 × 4 × 4 cm für einen stabilen Stand auf jeder Fensterbank.',
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
    customDescription:
      'Verleihen Sie Ihrem Bogen eine persönliche Note mit einer Gravur direkt im Eichensockel.',
    customFeatures: [
      {
        title: 'Bis zu 10 Zeichen wählbar',
        text: 'Geben Sie Ihren Wunschtext direkt vor der Bestellung im Shop ein.',
      },
    ],
  },
  'glueck-auf-tradition': {
    id: 'glueck-auf-tradition',
    artNo: 'FFH-LB-GAT',
    shortTitle: 'Erzgebirgs-Lichtbogen »Glück Auf – Tradition«',
    title:
      'Traditioneller Erzgebirgs-Lichtbogen »Glück Auf – Tradition & Handwerk« – Handgravierte Acrylglaskunst auf massivem Eichensockel',
    subtitle: 'Handgefertigt von Stephan Tautenhahn in 08289 Schneeberg OT Lindenau',
    price: 99.0, // 99,00 € zzgl. Versand
    badge: 'Meisterstück-Edition · Eiche massiv',
    imageFit: 'contain',
    youtubeId: 'vpTKX3qwdrY',
    youtubeAspect: '9:16',
    images: [
      {
        src: '/products/glueck-auf-tradition/bild-1.jpg',
        alt: 'Erzgebirgs-Lichtbogen Glück Auf Tradition beleuchtet auf Eichensockel',
        title: 'Lichtbogen »Glück Auf – Tradition« mit warmweißer 12V-LED-Beleuchtung',
      },
      {
        src: '/products/glueck-auf-tradition/bild-2.jpg',
        alt: 'Detailaufnahme Bergleute Gravur und Eichensockel Arzgebirg',
        title: 'Massiver Eichensockel (55 × 4 × 4 cm) mit Arzgebirg-Gravur',
      },
    ],
    specs: [
      { label: '55 × 4 × 4 cm', sub: 'Massiver Sockel aus Eiche' },
      { label: 'Traditions-Panorama', sub: 'Bergleute, Schnitzer & Heimat' },
      { label: '12V Plug & Play', sub: 'Warmweiße LED inkl. Netzteil' },
      { label: 'Wunschgravur', sub: 'Optional bis 10 Zeichen (+15 €)' },
    ],
    bulletPoints: [
      {
        title: 'Lebendige Erzgebirgstradition',
        text: 'Detailreiche Konturgravur mit Bergleuten in Paradeuniform, Holzschnitzer und historischer Bergkulisse.',
      },
      {
        title: 'Massiver Eichensockel (55 × 4 × 4 cm)',
        text: 'Gefertigt aus heimischer Eiche, geölt und verziert mit dem klassischen Arzgebirg-Schriftzug.',
      },
      {
        title: 'Persönliche Sockelgravur (+15,00 €)',
        text: 'Optional mit Ihrem individuellen Wunschtext (bis zu 10 Zeichen) direkt in die Sockelfront gefräst.',
      },
    ],
    introTitle: 'Heimat, Handwerk und Geschichte: Der Lichtbogen »Glück Auf – Tradition«',
    introParagraphs: [
      'Erleben Sie die faszinierende Kultur des Erzgebirges in einem einzigartigen Lichtobjekt. Dieser Bogen zeigt die handwerklichen Wurzeln unserer Heimat – vom erzgebirgischen Schnitzer bis hin zu Bergleuten in Uniform.',
      'Hinweis: Holz ist ein Naturprodukt. Leichte Abweichungen in der Maserung machen jedes Stück zu einem Unikat. Preis zzgl. Versandkosten.',
    ],
    motifTitle: 'Das Motiv im Detail',
    motifPoints: [
      {
        title: 'Kulturerbe & Handwerk',
        text: 'Präzise 5 mm Acrylglas-Gravur mit feinen Figuren, Bergbau-Tradition und stimmungsvollem Licht.',
      },
    ],
    qualityPoints: [
      {
        icon: Tv,
        title: 'Perfektes Sockelmaß (55 cm)',
        text: 'Harmonisierte Maße von 55 × 4 × 4 cm für einen stabilen Stand auf jeder Fensterbank.',
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
    customDescription:
      'Verleihen Sie Ihrem Bogen eine persönliche Note mit einer Gravur direkt im Eichensockel.',
    customFeatures: [
      {
        title: 'Bis zu 10 Zeichen wählbar',
        text: 'Geben Sie Ihren Wunschtext direkt vor der Bestellung im Shop ein.',
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

export const PRODUCT_ALIASES: Record<string, string> = {
  'erzgebirgischer-led-schwibbogen': 'schwibbogen-seiffener-kirche',
  'schneeberg-555': 'schneeberg-555-jahre',
  'glueck-auf': 'glueck-auf-panoramen',
  'neustaedtel-lichtbogen': 'neustaedtel',
  'bergstadt-schneeberg-lichtbogen': 'bergstadt-schneeberg',
  'glueck-auf-tradition-lichtbogen': 'glueck-auf-tradition',
};

export function normalizeProductId(raw?: string | null): string | null {
  if (!raw) return null;
  const mapped = PRODUCT_ALIASES[raw] ?? raw;
  return PRODUCTS[mapped] ? mapped : null;
}
