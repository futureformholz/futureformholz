import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const quantity = Math.max(1, parseInt(body.quantity || 1, 10));

    const reqOrigin = req.headers.get('origin');
    const forwardedHost = req.headers.get('x-forwarded-host') || req.headers.get('host');
    const forwardedProto = req.headers.get('x-forwarded-proto') || 'https';
    const computedHostOrigin = forwardedHost ? `${forwardedProto}://${forwardedHost}` : null;

    const origin =
      reqOrigin ||
      computedHostOrigin ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.NODE_ENV === 'production' ? 'https://futureformholz.de' : 'http://localhost:3000');

    const directPaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    const productId = body.productId || 'erzgebirgs-lichtbogen';
    const isPickup = body.shippingOption === 'pickup';

    const productCatalog: Record<
      string,
      {
        name: string;
        description: string;
        price: number;
        image: string;
        priceId?: string;
      }
    > = {
      'schneeberg-555-jahre': {
        name: 'Exklusiver Jubiläums-Lichtbogen »555 Jahre Bergstadt Schneeberg«',
        description:
          'Jubiläumsbogen zur 555-Jahrfeier der Bergstadt Schneeberg (1471–2026) mit St. Wolfgangskirche, Stadtwappen, Förderturm und Rathaus. Sockelmaß: 55 × 4 × 4 cm, Eiche massiv, 12V LED-Betrieb inkl. Netzteil. Lieferzeit: ca. 14 Tage.',
        price: 9900,
        image: '/products/schneeberg-555/schneeberg-555-1.jpg',
        priceId: process.env.STRIPE_PRICE_SCHNEEBERG_555,
      },
      'glueck-auf-panoramen': {
        name: 'Traditioneller Erzgebirgs-Schwibbogen »Glück Auf – Panoramen«',
        description:
          'Traditioneller Erzgebirgs-Schwibbogen »Glück Auf – Panoramen« – Bergbau-Szenerie auf massivem Eichensockel (55 × 4 × 4 cm, Bogen ca. 59 × 38 cm), 12V LED-Betrieb inkl. Netzteil. Lieferzeit: ca. 14 Tage.',
        price: 9900,
        image: '/products/glueck-auf-panoramen/bild-1.jpg',
        priceId: process.env.STRIPE_PRICE_GLUECK_AUF_PANORAMEN,
      },
      'neustaedtel': {
        name: 'Traditioneller Erzgebirgs-Lichtbogen »Neustädtel«',
        description:
          'Traditioneller Erzgebirgs-Lichtbogen »Neustädtel« – Handgravierte Acrylglaskunst auf massivem Eichensockel (55 × 4 × 4 cm), 12V warmweiße LED inkl. Netzteil. Lieferzeit: ca. 14 Tage.',
        price: 9900,
        image: '/products/neustaedtel/bild-1.jpg',
        priceId: process.env.STRIPE_PRICE_NEUSTAEDTEL,
      },
      'erzgebirgs-lichtbogen': {
        name: 'Exklusiver Erzgebirgs-Lichtbogen »Haamitland«',
        description:
          'Handgefertigter Acrylglas-Lichtbogen (500 × 230 mm) auf massivem Eichensockel (550 × 40 × 35 mm) mit Bergparade-Gravur & LED-Licht. Inkl. 12V Netzteil. Lieferzeit: ca. 14 Tage.',
        price: 9900,
        image: '/products/erzgebirgs-lichtbogen/lichtbogen-1.jpg',
        priceId: process.env.STRIPE_PRICE_HAAMITLAND,
      },
      'schwibbogen-seiffener-kirche': {
        name: 'LED-Holzschwibbogen »Seiffener Kirche«',
        description:
          'Filigraner Holz-Schwibbogen, bestehend aus 2 identischen Platten, mit Seiffener Kirche, Kurrendesängern, warmer LED-Beleuchtung und stabilem Holzsockel. Inkl. 12V Netzteil. Lieferzeit: ca. 14 Tage.',
        price: 9900,
        image: '/products/erzgebirgischer-led-schwibbogen/seiffener-kirche-1.jpg',
        priceId: process.env.STRIPE_PRICE_SEIFFENER_KIRCHE,
      },
      'schwibbogen-bergmannstradition': {
        name: 'LED-Holzschwibbogen »Bergmannstradition«',
        description:
          'Filigraner Holz-Schwibbogen, bestehend aus 2 identischen Platten, mit traditionellen Bergleuten, Schnitzern, Klöpplerin, warmer LED-Beleuchtung und stabilem Holzsockel. Inkl. 12V Netzteil. Lieferzeit: ca. 14 Tage.',
        price: 9900,
        image: '/products/erzgebirgischer-led-schwibbogen/bergmannstradition-1.jpg',
        priceId: process.env.STRIPE_PRICE_BERGMANNSTRADITION,
      },
      // Aliases
      'schneeberg-555': {
        name: 'Exklusiver Jubiläums-Lichtbogen »555 Jahre Bergstadt Schneeberg«',
        description:
          'Jubiläumsbogen zur 555-Jahrfeier der Bergstadt Schneeberg (1471–2026) mit St. Wolfgangskirche, Stadtwappen, Förderturm und Rathaus. Sockelmaß: 55 × 4 × 4 cm, Eiche massiv, 12V LED-Betrieb inkl. Netzteil. Lieferzeit: ca. 14 Tage.',
        price: 9900,
        image: '/products/schneeberg-555/schneeberg-555-1.jpg',
        priceId: process.env.STRIPE_PRICE_SCHNEEBERG_555,
      },
      'erzgebirgischer-led-schwibbogen': {
        name: 'LED-Holzschwibbogen »Seiffener Kirche«',
        description:
          'Filigraner Holz-Schwibbogen, bestehend aus 2 identischen Platten, mit Seiffener Kirche, warmer LED-Beleuchtung und stabilem Holzsockel. Inkl. 12V Netzteil. Lieferzeit: ca. 14 Tage.',
        price: 9900,
        image: '/products/erzgebirgischer-led-schwibbogen/seiffener-kirche-1.jpg',
        priceId: process.env.STRIPE_PRICE_SEIFFENER_KIRCHE,
      },
      'glueck-auf': {
        name: 'Traditioneller Erzgebirgs-Schwibbogen »Glück Auf – Panoramen«',
        description:
          'Traditioneller Erzgebirgs-Schwibbogen »Glück Auf – Panoramen« – Bergbau-Szenerie auf massivem Eichensockel (55 × 4 × 4 cm, Bogen ca. 59 × 38 cm), 12V LED-Betrieb inkl. Netzteil. Lieferzeit: ca. 14 Tage.',
        price: 9900,
        image: '/products/glueck-auf-panoramen/bild-1.jpg',
        priceId: process.env.STRIPE_PRICE_GLUECK_AUF_PANORAMEN,
      },
      'neustaedtel-lichtbogen': {
        name: 'Traditioneller Erzgebirgs-Lichtbogen »Neustädtel«',
        description:
          'Traditioneller Erzgebirgs-Lichtbogen »Neustädtel« – Handgravierte Acrylglaskunst auf massivem Eichensockel (55 × 4 × 4 cm), 12V warmweiße LED inkl. Netzteil. Lieferzeit: ca. 14 Tage.',
        price: 9900,
        image: '/products/neustaedtel/bild-1.jpg',
        priceId: process.env.STRIPE_PRICE_NEUSTAEDTEL,
      },
    };

    const selectedProduct =
      productCatalog[productId] ||
      productCatalog['neustaedtel'] ||
      productCatalog['glueck-auf-panoramen'] ||
      productCatalog['schneeberg-555-jahre'] ||
      productCatalog['erzgebirgs-lichtbogen'];

    // Validate engraving option
    const engravingEnabled = Boolean(body.engravingEnabled);
    const rawEngravingText = typeof body.engravingText === 'string' ? body.engravingText.trim() : '';
    const engravingText = rawEngravingText.slice(0, 10);
    const hasEngraving = engravingEnabled && engravingText.length > 0;

    if (engravingEnabled && !rawEngravingText) {
      return NextResponse.json(
        { error: 'Bitte geben Sie einen Gravurtext für die Sockelgravur ein (max. 10 Zeichen).' },
        { status: 400 }
      );
    }

    // 1. Direct Stripe Payment Link (only when no custom engraving is requested and link is set)
    if (directPaymentLink && !hasEngraving && !stripeSecretKey) {
      return NextResponse.json({ url: directPaymentLink });
    }

    // 2. Stripe Checkout Session via Stripe API
    if (stripeSecretKey && !stripeSecretKey.includes('placeholder')) {
      const stripe = new Stripe(stripeSecretKey);

      // Safe HTTPS image URL preparation for Stripe Live Mode
      let imageUrl = selectedProduct.image;
      if (!imageUrl.startsWith('http')) {
        const baseForImg = origin.startsWith('http') ? origin : `https://${origin}`;
        imageUrl = `${baseForImg}${selectedProduct.image}`;
      }
      const productImages = imageUrl.startsWith('https://') ? [imageUrl] : [];

      const mainProductDescription = hasEngraving
        ? `${selectedProduct.description} · Inkl. Sockelgravur: »${engravingText}«`
        : selectedProduct.description;

      // Determine line item: Use pre-configured Stripe Price ID if available, otherwise dynamic price_data
      const mainLineItem: any =
        !hasEngraving && selectedProduct.priceId && selectedProduct.priceId.startsWith('price_')
          ? {
              price: selectedProduct.priceId,
              quantity,
            }
          : {
              price_data: {
                currency: 'eur',
                product_data: {
                  name: selectedProduct.name,
                  description: mainProductDescription,
                  ...(productImages.length > 0 ? { images: productImages } : {}),
                },
                unit_amount: selectedProduct.price, // 99.00 EUR
              },
              quantity,
            };

      const lineItems: any[] = [mainLineItem];

      // Add engraving line item (+ 15,00 EUR) if requested
      if (hasEngraving) {
        lineItems.push({
          price_data: {
            currency: 'eur',
            product_data: {
              name: `Individuelle Sockelgravur (bis 10 Zeichen): »${engravingText}«`,
              description: `Individuelle Wunschgravur auf massivem Eichenholz: "${engravingText}" (Sonderanfertigung gem. § 312g Abs. 2 Nr. 1 BGB)`,
            },
            unit_amount: 1500, // 15.00 EUR
          },
          quantity,
        });
      }

      const sessionParams: any = {
        mode: 'payment',
        locale: 'de',
        billing_address_collection: 'required',
        phone_number_collection: {
          enabled: true,
        },
        shipping_address_collection: {
          allowed_countries: ['DE', 'AT', 'CH'],
        },
        metadata: {
          product_id: productId,
          product_name: selectedProduct.name,
          quantity: String(quantity),
          shipping_mode: isPickup ? 'Selbstabholung' : 'DHL Versand',
          delivery_time: 'ca. 14 Tage',
          engraving_enabled: hasEngraving ? 'true' : 'false',
          engraving_text: hasEngraving ? engravingText : '',
        },
        line_items: lineItems,
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: isPickup ? 0 : 599, // 0.00 EUR for pickup or 5.99 EUR for DHL
                currency: 'eur',
              },
              display_name: isPickup
                ? 'Kostenfreie Selbstabholung (Werkstatt Schneeberg)'
                : 'DHL Paketversand (Versichert)',
              delivery_estimate: {
                minimum: { unit: 'business_day', value: 12 },
                maximum: { unit: 'business_day', value: 16 },
              },
            },
          },
        ],
        success_url: `${origin}/danke?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/online-shop?product=${productId}`,
      };

      let session;
      try {
        session = await stripe.checkout.sessions.create(sessionParams);
      } catch (stripeErr: any) {
        // Resilient fallback: If Stripe rejects due to unreachable image URL (e.g. DNS propagation)
        if (
          stripeErr?.message?.toLowerCase().includes('image') &&
          sessionParams.line_items[0]?.price_data?.product_data?.images
        ) {
          console.warn('Stripe image fetch failed, retrying session without image URL...');
          delete sessionParams.line_items[0].price_data.product_data.images;
          session = await stripe.checkout.sessions.create(sessionParams);
        } else {
          throw stripeErr;
        }
      }

      return NextResponse.json({ url: session.url });
    }

    // 3. Fallback / Test-Mode when no Stripe key is configured yet in .env.local
    // Routes directly to the confirmation / thank you page with a clear setup note
    return NextResponse.json({
      url: `${origin}/danke?status=success&demo=true`,
      isDemo: true,
      message: 'Demo-Modus aktiv: Hinterlege deinen Stripe-Schlüssel in .env.local für echte Zahlungen.',
    });
  } catch (error: any) {
    console.error('Stripe Checkout API Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Fehler beim Erstellen der Checkout-Session' },
      { status: 500 }
    );
  }
}
