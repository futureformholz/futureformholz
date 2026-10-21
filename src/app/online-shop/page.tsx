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
      : 'erzgebirgs-lichtbogen';

  const [selectedProductId, setSelectedProductId] = useState<string>(normalizedInitial);
  const activeProduct = PRODUCTS[selectedProductId] || PRODUCTS['erzgebirgs-lichtbogen'];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [shippingOption, setShippingOption] = useState<'standard' | 'pickup'>('standard');
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
    }
  }, [productParam]);

  const currentImages = activeProduct.images;

  const pricePerItem = activeProduct.price;
  const shippingCost = shippingOption === 'standard' ? 5.99 : 0.0;
  const subtotal = pricePerItem * quantity;
  const totalPrice = subtotal + shippingCost;

  // Stripe Checkout Handler
  const handleStripeCheckout = async () => {
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

  const handleSelectProduct = (id: string) => {
    setSelectedProductId(id);
    setActiveImageIndex(0);
    setQuantity(1);
    setCheckoutError(null);
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
          <Link href="/online-shop" className="text-[#181715] font-semibold">
            Online-Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="truncate max-w-xs sm:max-w-md text-[#a87948]">
            {activeProduct.shortTitle}
          </span>
        </div>
      </div>

      {/* PRODUCT CATALOG SELECTOR BANNER */}
      <div className="border-b border-[#eae6de] bg-[#fdfcfb] py-6 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#a87948] block">
                Exklusive Werkstatt-Kollektion
              </span>
              <h2 className="text-lg sm:text-xl font-serif text-[#181715]">
                Wählen Sie Ihr gewünschtes Handwerks-Unikat:
              </h2>
            </div>
            <span className="text-xs font-mono text-[#615e57]">
              3 handgefertigte Unikate zur Auswahl · Sichere Direktzahlung mit Stripe
            </span>
          </div>

          {/* TAB CARDS FOR ALL 3 PRODUCTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.values(PRODUCTS).map((prod) => {
              const isSelected = selectedProductId === prod.id;
              const prodThumb = prod.images[0].src;

              return (
                <button
                  key={prod.id}
                  onClick={() => handleSelectProduct(prod.id)}
                  className={`p-4 text-left border rounded-xs transition-all flex items-center space-x-3.5 cursor-pointer ${
                    isSelected
                      ? 'border-[#a87948] bg-white shadow-md ring-2 ring-[#a87948]/25'
                      : 'border-[#eae6de] bg-[#f7f5f0] hover:bg-white hover:border-[#d3cdbf]'
                  }`}
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#181715] rounded-xs overflow-hidden shrink-0 border border-[#eae6de]">
                    <Image
                      src={prodThumb}
                      alt={prod.shortTitle}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                    <div className="absolute top-1 left-1">
                      <span className="text-[8px] font-mono uppercase tracking-wider bg-black/80 text-white px-1.5 py-0.5">
                        {prod.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#a87948] font-bold">
                        {prod.artNo}
                      </span>
                      {isSelected && (
                        <span className="text-[9px] font-mono uppercase tracking-wider bg-[#a87948] text-white px-1.5 py-0.5 rounded-xs font-semibold">
                          Aktiv
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xs sm:text-sm text-[#181715] font-semibold truncate leading-tight">
                      {prod.shortTitle}
                    </h3>

                    <div className="pt-0.5 flex items-baseline justify-between">
                      <span className="text-sm font-serif font-bold text-[#181715]">
                        {prod.price.toFixed(2).replace('.', ',')} €
                      </span>
                      <span className="text-[10px] font-mono text-[#a87948]">
                        Details ansehen →
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* MAIN ACTIVE PRODUCT SECTION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
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
                  <span className="text-[11px] font-mono text-[#8b877f] block">Gesamtbetrag:</span>
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
      </div>

      {/* FULLSCREEN PHOTO ZOOM MODAL */}
      {isZoomOpen && (
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
