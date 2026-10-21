import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Universal email dispatcher supporting Resend REST API or Nodemailer (SMTP)
async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM || 'Future Form Holz <onboarding@resend.dev>';

  // 1. Prefer Resend API if API Key is configured (recommended for Vercel Serverless)
  if (resendApiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: resendFrom,
          to: [to],
          reply_to: replyTo,
          subject,
          html,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error('❌ Resend API Fehler:', errText);
        return false;
      }

      console.log(`✅ [Resend] E-Mail erfolgreich an ${to} versendet!`);
      return true;
    } catch (err: any) {
      console.error('❌ Resend Verbindungsfehler:', err.message);
      return false;
    }
  }

  // 2. Nodemailer SMTP (e.g. IONOS, Strato, Gmail App-Passwort)
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

      await transporter.sendMail({
        from: `"Future Form Holz" <${smtpUser}>`,
        to,
        replyTo,
        subject,
        html,
      });

      console.log(`✅ [SMTP / Nodemailer] E-Mail erfolgreich an ${to} versendet!`);
      return true;
    } catch (err: any) {
      console.error('❌ Nodemailer SMTP Fehler:', err.message);
      return false;
    }
  }

  console.log(
    `ℹ️ [E-Mail Info] Weder RESEND_API_KEY noch SMTP_HOST konfiguriert. E-Mail an ${to} konnte nicht direkt versendet werden. (Tipp: Aktiviere alternativ 'Kunden-E-Mails' im Stripe Dashboard).`
  );
  return false;
}

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
      // In development / fallback without webhook signature
      try {
        event = JSON.parse(rawBody);
      } catch (e) {
        return NextResponse.json({ error: 'Ungültiges JSON' }, { status: 400 });
      }
    }

    // Handle checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      const customerName = session.customer_details?.name || 'Kunde';
      const customerEmail = session.customer_details?.email || '';
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

      const paymentStatus =
        session.payment_status === 'paid' ? 'Bezahlt (Erfolgreich)' : session.payment_status;
      const orderId = session.id;
      const orderDate = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });
      const productName =
        session.metadata?.product_name || 'Erzgebirgischer LED-Schwibbogen (Handgefertigt)';

      console.log('🎉 [Stripe Webhook] Neue bezahlte Bestellung erhalten:');
      console.log(`- Artikel: ${productName}`);
      console.log(`- Kunde: ${customerName} (${customerEmail}, Tel: ${customerPhone})`);
      console.log(`- Lieferadresse: ${shippingName}, ${street}${street2}, ${zip} ${city}, ${country}`);
      console.log(`- Betrag: ${amountTotal}`);
      console.log(`- Session-ID: ${orderId}`);

      // 1. Backup: Lokale Archivierung der Bestellung (falls Serverless-Dateisystem verfügbar)
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
        console.warn('Hinweis: Lokale Dateiarchivierung in Serverless nicht persistent:', logErr.message);
      }

      // 2. Benachrichtigungs-E-Mail an Inhaber (futureformholz@gmail.com)
      const targetEmail = process.env.NOTIFICATION_EMAIL || 'futureformholz@gmail.com';
      const ownerEmailSubject = `🎉 Neue Bestellung: ${productName} von ${customerName} (${amountTotal})`;
      const ownerEmailHtml = `
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
              Glück Auf Stephan, es gibt eine neue bezahlte Bestellung!
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

      await sendEmail({
        to: targetEmail,
        replyTo: customerEmail || undefined,
        subject: ownerEmailSubject,
        html: ownerEmailHtml,
      });

      // 3. Bestätigungs-E-Mail an den KUNDEN (Auftragsbestätigung & Werkstattinfo)
      if (customerEmail && customerEmail.includes('@')) {
        const customerEmailSubject = `Bestellbestätigung: Ihr handgefertigtes Werk von Future Form Holz (${amountTotal})`;
        const customerEmailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #181715; line-height: 1.6;">
            <div style="background-color: #181715; padding: 28px 24px; text-align: center; border-radius: 4px 4px 0 0;">
              <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-family: Georgia, serif; letter-spacing: 0.5px;">
                FUTURE FORM HOLZ
              </h1>
              <p style="color: #a87948; font-size: 11px; margin: 6px 0 0 0; text-transform: uppercase; letter-spacing: 3px;">
                Erzgebirgische Handwerkskunst · Stephan Tautenhahn
              </p>
            </div>

            <div style="padding: 30px 24px; background-color: #fcfbf9; border: 1px solid #eae6de; border-top: none;">
              <h2 style="color: #181715; font-size: 20px; margin-top: 0; font-family: Georgia, serif;">
                Herzlichen Dank für Ihre Bestellung!
              </h2>
              <p style="color: #615e57; font-size: 14px;">
                Hallo ${customerName},<br><br>
                wir haben Ihre Bestellung und die Zahlung über Stripe erfolgreich erhalten. Wir freuen uns sehr, Ihr persönliches Stück erzgebirgischer Handwerkskunst für Sie in unserer Schneeberger Werkstatt zu fertigen.
              </p>

              <div style="background-color: #f4f1ea; padding: 20px; border: 1px solid #eae6de; margin: 24px 0; border-radius: 4px;">
                <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; color: #a87948; margin-top: 0; border-bottom: 1px solid #e2ded5; padding-bottom: 8px;">
                  Ihre Bestelldetails
                </h3>
                <table style="width: 100%; font-size: 13px; border-collapse: collapse; margin-top: 10px;">
                  <tr>
                    <td style="padding: 6px 0; color: #615e57;">Artikel:</td>
                    <td style="padding: 6px 0; font-weight: bold; text-align: right;">${productName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #615e57;">Gesamtbetrag:</td>
                    <td style="padding: 6px 0; font-weight: bold; color: #a87948; text-align: right; font-size: 15px;">${amountTotal}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #615e57;">Zahlungsstatus:</td>
                    <td style="padding: 6px 0; font-weight: bold; color: #425d08; text-align: right;">${paymentStatus}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #615e57;">Lieferzeit:</td>
                    <td style="padding: 6px 0; text-align: right;">ca. 14 Tage (Handfertigung)</td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #f4f1ea; padding: 20px; border: 1px solid #eae6de; margin: 24px 0; border-radius: 4px;">
                <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; color: #a87948; margin-top: 0; border-bottom: 1px solid #e2ded5; padding-bottom: 8px;">
                  Lieferadresse
                </h3>
                <p style="margin: 10px 0 0 0; font-size: 14px; line-height: 1.6; color: #181715;">
                  <strong>${shippingName}</strong><br>
                  ${street}${street2}<br>
                  ${zip} ${city}<br>
                  ${country}
                </p>
              </div>

              <div style="border-left: 3px solid #a87948; padding-left: 16px; margin: 24px 0;">
                <h4 style="margin: 0 0 6px 0; font-size: 14px; color: #181715;">So geht es jetzt weiter:</h4>
                <p style="margin: 0; font-size: 13px; color: #615e57;">
                  Ihr Werk wird nun sorgfältig zusammengestellt, verpackt und auf den Weg gebracht. Sobald das Paket an DHL übergeben wurde, erhalten Sie Ihre persönliche Sendungsnummer zur Nachverfolgung.
                </p>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eae6de; font-size: 13px; color: #615e57;">
                <p style="margin: 0;">
                  Haben Sie Fragen zu Ihrer Fertigung oder Lieferung? Sie erreichen mich jederzeit persönlich:
                </p>
                <p style="margin: 8px 0 0 0;">
                  📞 <strong>0174 9233 526</strong> &nbsp;·&nbsp; ✉️ <a href="mailto:futureformholz@gmail.com" style="color: #a87948;">futureformholz@gmail.com</a>
                </p>
              </div>
            </div>

            <div style="padding: 20px; text-align: center; color: #8b877f; font-size: 11px;">
              Future Form Holz · Inh. Stephan Tautenhahn · Dorfstraße 53 · 08289 Schneeberg OT Lindenau<br>
              Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerstatus).
            </div>
          </div>
        `;

        await sendEmail({
          to: customerEmail,
          replyTo: 'futureformholz@gmail.com',
          subject: customerEmailSubject,
          html: customerEmailHtml,
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error('Webhook Handler Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
