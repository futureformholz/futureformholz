import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('stripe-signature');

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event: Stripe.Event;

    // Verify signature if webhook secret is configured
    if (webhookSecret && signature && stripeSecretKey) {
      const stripe = new Stripe(stripeSecretKey);
      try {
        event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
      } catch (err: any) {
        console.error('⚠️ Stripe Webhook Signatur-Prüfung fehlgeschlagen:', err.message);
        return NextResponse.json(
          { error: `Webhook Signature Error: ${err.message}` },
          { status: 400 }
        );
      }
    } else {
      // In development / direct testing
      try {
        event = JSON.parse(rawBody);
      } catch (e) {
        return NextResponse.json({ error: 'Ungültiges JSON' }, { status: 400 });
      }
    }

    // Handle checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      const customerName = session.customer_details?.name || 'Unbekannter Kunde';
      const customerEmail = session.customer_details?.email || 'Keine E-Mail';
      const customerPhone = session.customer_details?.phone || 'Nicht angegeben';

      const sessionAny = session as any;
      const shipping = sessionAny.shipping_details || session.customer_details;
      const shippingName = shipping?.name || customerName;
      const address = shipping?.address;
      const street = address?.line1 || 'Keine Straße angegeben';
      const street2 = address?.line2 ? ` (${address.line2})` : '';
      const zip = address?.postal_code || '';
      const city = address?.city || '';
      const country = address?.country || 'DE';

      const amountTotal = session.amount_total
        ? (session.amount_total / 100).toFixed(2).replace('.', ',') + ' €'
        : '99,00 € + Versand';

      const paymentStatus = session.payment_status === 'paid' ? 'Bezahlt (Erfolgreich)' : session.payment_status;
      const orderId = session.id;
      const orderDate = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });
      const productName = session.metadata?.product_name || 'Erzgebirgisches Handwerksobjekt';

      console.log('🎉 [Stripe Webhook] Neue bezahlte Bestellung erhalten:');
      console.log(`- Artikel: ${productName}`);
      console.log(`- Kunde: ${customerName} (${customerEmail}, Tel: ${customerPhone})`);
      console.log(`- Lieferadresse: ${shippingName}, ${street}${street2}, ${zip} ${city}, ${country}`);
      console.log(`- Betrag: ${amountTotal}`);
      console.log(`- Session-ID: ${orderId}`);

      // 1. Save backup to local order log file (so no order is ever lost)
      try {
        const ordersDir = path.join(process.cwd(), 'orders');
        if (!fs.existsSync(ordersDir)) {
          fs.mkdirSync(ordersDir, { recursive: true });
        }
        const orderFilePath = path.join(ordersDir, 'orders-log.json');
        let existingOrders: any[] = [];
        if (fs.existsSync(orderFilePath)) {
          try {
            existingOrders = JSON.parse(fs.readFileSync(orderFilePath, 'utf-8'));
          } catch {}
        }
        existingOrders.unshift({
          orderId,
          orderDate,
          productName,
          customerName,
          customerEmail,
          customerPhone,
          shippingAddress: {
            name: shippingName,
            street: `${street}${street2}`,
            zip,
            city,
            country,
          },
          amountTotal,
          paymentStatus,
          stripeSessionUrl: `https://dashboard.stripe.com/payments/${session.payment_intent || ''}`,
        });
        fs.writeFileSync(orderFilePath, JSON.stringify(existingOrders, null, 2), 'utf-8');
      } catch (logErr: any) {
        console.warn('Konnte Bestellung nicht lokal archivieren:', logErr.message);
      }

      // 2. Dispatch Email Notification to Owner (futureformholz@gmail.com)
      const targetEmail = process.env.NOTIFICATION_EMAIL || 'futureformholz@gmail.com';
      const smtpHost = process.env.SMTP_HOST;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);

      if (smtpHost && smtpUser && smtpPass) {
        try {
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          });

          const emailSubject = `🎉 Neue Bestellung: ${productName} von ${customerName} (${amountTotal})`;
          const emailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #181715; line-height: 1.5;">
              <div style="background-color: #181715; padding: 24px; text-align: center; border-radius: 4px 4px 0 0;">
                <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-family: Georgia, serif;">
                  Future Form Holz · Neue Bestellung eingegangen
                </h1>
                <p style="color: #a87948; font-size: 12px; margin: 6px 0 0 0; text-transform: uppercase; letter-spacing: 2px;">
                  Stephan Tautenhahn · Schneeberg
                </p>
              </div>

              <div style="padding: 24px; background-color: #fcfbf9; border: 1px solid #eae6de; border-top: none;">
                <h2 style="color: #181715; font-size: 18px; margin-top: 0;">
                  Glück Auf Stephan, es gibt eine neue Bestellung!
                </h2>
                <p style="color: #615e57; font-size: 14px;">
                  Ein Kunde hat soeben über den Online-Shop <strong>${productName}</strong> bestellt und per Stripe bezahlt.
                </p>

                <div style="background-color: #f4f1ea; padding: 16px; border: 1px solid #eae6de; margin: 20px 0; border-radius: 4px;">
                  <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #a87948; margin-top: 0;">
                    Bestellübersicht
                  </h3>
                  <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 4px 0; color: #615e57;">Artikel:</td>
                      <td style="padding: 4px 0; font-weight: bold;">${productName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 0; color: #615e57;">Gesamtbetrag:</td>
                      <td style="padding: 4px 0; font-weight: bold; color: #a87948;">${amountTotal}</td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 0; color: #615e57;">Status:</td>
                      <td style="padding: 4px 0; font-weight: bold; color: #425d08;">${paymentStatus}</td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 0; color: #615e57;">Datum:</td>
                      <td style="padding: 4px 0;">${orderDate}</td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 0; color: #615e57;">Stripe-Session:</td>
                      <td style="padding: 4px 0; font-family: monospace; font-size: 11px;">${orderId}</td>
                    </tr>
                  </table>
                </div>

                <div style="background-color: #f4f1ea; padding: 16px; border: 1px solid #eae6de; margin: 20px 0; border-radius: 4px;">
                  <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #a87948; margin-top: 0;">
                    Lieferadresse & Empfänger
                  </h3>
                  <p style="margin: 0; font-size: 14px; line-height: 1.6;">
                    <strong>${shippingName}</strong><br>
                    ${street}${street2}<br>
                    ${zip} ${city}<br>
                    ${country}
                  </p>
                </div>

                <div style="background-color: #f4f1ea; padding: 16px; border: 1px solid #eae6de; margin: 20px 0; border-radius: 4px;">
                  <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #a87948; margin-top: 0;">
                    Kundendaten für Rückfragen / DHL
                  </h3>
                  <p style="margin: 0; font-size: 13px; line-height: 1.6;">
                    <strong>E-Mail:</strong> <a href="mailto:${customerEmail}" style="color: #a87948;">${customerEmail}</a><br>
                    <strong>Telefon:</strong> ${customerPhone}
                  </p>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                  <a href="https://dashboard.stripe.com/payments" target="_blank" style="background-color: #86b817; color: #121b06; font-weight: bold; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">
                    Zahlung im Stripe Dashboard ansehen ↗
                  </a>
                </div>
              </div>

              <div style="padding: 16px; text-align: center; color: #8b877f; font-size: 11px;">
                Future Form Holz · Inh. Stephan Tautenhahn · Dorfstraße 53 · 08289 Schneeberg OT Lindenau
              </div>
            </div>
          `;

          await transporter.sendMail({
            from: `"Future Form Holz Shop" <${smtpUser}>`,
            to: targetEmail,
            replyTo: customerEmail,
            subject: emailSubject,
            html: emailHtml,
          });

          console.log(`✅ Bestätigungs-E-Mail erfolgreich an ${targetEmail} versendet!`);
        } catch (mailErr: any) {
          console.error('Fehler beim Senden der Benachrichtigungs-E-Mail:', mailErr.message);
        }
      } else {
        console.log(
          `ℹ️ Hinweis: Keine SMTP-Zugangsdaten in .env.local hinterlegt. Die Bestelldaten wurden in 'orders/orders-log.json' archiviert. (Empfehlung: Aktiviere zusätzlich Stripe Checkout Team-Mails im Dashboard).`
        );
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error('Webhook Handler Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
