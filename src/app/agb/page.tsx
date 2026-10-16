import React from 'react';
import Link from 'next/link';
import {
  FileText,
  ShieldCheck,
  AlertCircle,
  Truck,
  CreditCard,
  Sparkles,
  ChevronRight,
  Mail,
  Phone,
} from 'lucide-react';

export const metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB) | Future Form Holz · Stephan Tautenhahn',
  description:
    'Allgemeine Geschäftsbedingungen (AGB) von Future Form Holz, Inh. Stephan Tautenhahn. Transparente Regelungen für handgefertigte Holzkunst, Kleinserien, Unikate, Stripe-Zahlungen, Widerrufsrecht und Gewährleistung.',
};

export default function AgbPage() {
  return (
    <div className="bg-[#fcfbf9] text-[#181715] min-h-screen">
      {/* HEADER SECTION */}
      <section className="bg-[#181715] text-[#eae6de] pt-24 pb-16 px-6 sm:px-8 border-b border-[#292723]">
        <div className="max-w-5xl mx-auto space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-[#a87948]">
            <Link href="/" className="hover:text-white transition-colors">
              Startseite
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5e5a52]" />
            <span className="text-[#d4cebe]">Rechtliches</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#5e5a52]" />
            <span className="text-[#a87948]">AGB</span>
          </nav>

          <div className="space-y-3 pt-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#a87948] flex items-center gap-2">
              <span className="w-5 h-[1px] bg-[#a87948]" />
              Elektronischer Geschäftsverkehr & Werkstattverträge
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-white">
              Allgemeine Geschäftsbedingungen (AGB)
            </h1>
            <p className="text-base sm:text-lg text-[#a39e94] max-w-3xl font-light leading-relaxed">
              Faire, transparente und verlässliche Bedingungen für den Kauf handgefertigter Holzkunst,
              Kleinserien und individueller Sonderanfertigungen aus unserer Werkstatt in Schneeberg.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 text-xs font-mono text-[#8b877f]">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#24221e] border border-[#35332e] rounded-xs text-[#c5bfae]">
              <FileText className="w-3.5 h-3.5 text-[#a87948]" />
              <span>Stand: Oktober 2026</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#24221e] border border-[#35332e] rounded-xs text-[#c5bfae]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#a87948]" />
              <span>§ 19 UStG (Kleinunternehmer)</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#24221e] border border-[#35332e] rounded-xs text-[#c5bfae]">
              <Sparkles className="w-3.5 h-3.5 text-[#a87948]" />
              <span>Handgefertigte Unikate</span>
            </span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 sm:py-20 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Quick Nav (Sidebar on desktop) */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 bg-[#f5f2ea] border border-[#e2ddd3] p-6 rounded-sm space-y-5">
              <div className="space-y-1">
                <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#a87948] font-semibold">
                  Inhaltsübersicht
                </h3>
                <p className="text-xs text-[#6e6a61]">Schnellzugriff auf alle Paragrafen</p>
              </div>

              <nav className="space-y-2 text-xs text-[#4a4740]">
                <a href="#geltungsbereich" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  § 1 Geltungsbereich & Anbieter
                </a>
                <a href="#vertragsschluss" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  § 2 Angebot & Vertragsschluss (Stripe & Direkt)
                </a>
                <a href="#preise-ustg" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  § 3 Preise & Kleinunternehmer (§ 19 UStG)
                </a>
                <a href="#zahlung" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  § 4 Zahlungsmodalitäten (Stripe, Apple Pay, Klarna)
                </a>
                <a href="#eigentumsvorbehalt" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  § 5 Eigentumsvorbehalt
                </a>
                <a href="#lieferung" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  § 6 Lieferzeiten & Versand
                </a>
                <a href="#widerruf" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc] font-medium text-[#181715]">
                  § 7 Widerrufsrecht & Ausschluss bei Maßfertigung
                </a>
                <a href="#gewaehrleistung" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  § 8 Mängelhaftung & Werkstoff Holz
                </a>
                <a href="#haftung" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  § 9 Haftungsbeschränkung
                </a>
                <a href="#schlussbestimmungen" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1">
                  § 10 Streitschlichtung & Schlussbestimmungen
                </a>
              </nav>

              {/* Direct contact mini-card */}
              <div className="pt-4 border-t border-[#e2ddd3] space-y-2 text-xs text-[#6e6a61]">
                <p className="font-medium text-[#181715]">Fragen zu deiner Bestellung?</p>
                <div className="space-y-1 font-mono text-[11px]">
                  <a href="mailto:futureformholz@gmail.com" className="flex items-center gap-1.5 hover:text-[#a87948] transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#a87948]" />
                    <span>futureformholz@gmail.com</span>
                  </a>
                  <a href="tel:+491749233526" className="flex items-center gap-1.5 hover:text-[#a87948] transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#a87948]" />
                    <span>0174 9233 526</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Legal Text body */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-12 leading-relaxed text-[#2c2a26]">
            {/* § 1 */}
            <article id="geltungsbereich" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  § 1
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Geltungsbereich und Anbieter
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend <em>„AGB“</em>) gelten für alle
                Verträge über die Lieferung von Waren, die ein Verbraucher (§ 13 BGB) oder Unternehmer
                (§ 14 BGB) mit dem Anbieter schließt:
              </p>
              <div className="p-4 bg-[#f5f2ea] border-l-2 border-[#a87948] text-sm space-y-1 font-light">
                <p className="font-medium text-[#181715]">Future Form Holz</p>
                <p>Inhaber: <strong>Stephan Tautenhahn</strong></p>
                <p>Dorfstraße 53, 08289 Schneeberg, Deutschland</p>
                <p>Telefon: 0174 9233 526 · E-Mail: futureformholz@gmail.com</p>
              </div>
              <p className="text-sm sm:text-base">
                (2) Diese AGB erfassen Verkäufe und Werkverträge, die über elektronische Fernkommunikationsmittel
                (z.&thinsp;B. Stripe-Zahlungslinks, Website-Kontaktformulare, E-Mail-Aufträge oder telefonische Absprachen)
                abgeschlossen werden.
              </p>
              <p className="text-sm sm:text-base text-[#6e6a61]">
                (3) Soweit Käufe über externe Plattformen (insbesondere über unseren offiziellen Etsy-Shop unter{' '}
                <a href="https://futureformholz.etsy.com" target="_blank" rel="noopener noreferrer" className="text-[#a87948] underline underline-offset-2">
                  futureformholz.etsy.com
                </a>
                ) getätigt werden, gelten vorrangig bzw. ergänzend die dort vereinbarten Nutzungs- und Geschäftsbedingungen der Plattform Etsy.
              </p>
            </article>

            {/* § 2 */}
            <article id="vertragsschluss" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  § 2
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Angebot, Vertragsschluss & Bestellwege
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                (1) Die Darstellung der Werke, Schwibbögen, Fräsarbeiten und Kleinserien auf dieser Website dient der
                Präsentation unseres Handwerksportfolios und stellt kein rechtlich bindendes Angebot, sondern eine
                unverbindliche Aufforderung zur Kontaktaufnahme bzw. Bestellung dar.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 bg-white border border-[#e2ddd3] rounded-sm space-y-2">
                  <h4 className="text-sm font-semibold text-[#181715] flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#a87948]" />
                    a) Kauf über Stripe-Zahlungslinks (Direktkauf):
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4a4740]">
                    Übermittelt der Anbieter dem Kunden einen individuellen oder produktbezogenen <strong>Stripe-Zahlungslink</strong>,
                    stellt dieser ein verbindliches Angebot zum Abschluss eines Kaufvertrags dar. Der Vertrag kommt zustande, sobald der Kunde den
                    Bezahlvorgang über Stripe (z.&thinsp;B. per Kreditkarte, Apple Pay oder Klarna) erfolgreich abschließt und die Zahlung autorisiert wird.
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#e2ddd3] rounded-sm space-y-2">
                  <h4 className="text-sm font-semibold text-[#181715] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#a87948]" />
                    b) Individuelle Sonderanfertigungen & Unikate:
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4a4740]">
                    Bei maßgeschneiderten Werken (z.&thinsp;B. individualisierte Schwibbögen mit Familiennamen, Firmenlogos,
                    Epoxidharzlampen, Großformat-CNC-Zuschnitte) erarbeitet der Anbieter nach Kundenabsprache ein individuelles
                    Angebot nebst Spezifikation. Die Annahme erfolgt durch schriftliche Bestätigung des Kunden (per E-Mail)
                    oder durch Begleichung der vereinbarten Anzahlung bzw. des Rechnungsbetrags.
                  </p>
                </div>
              </div>
            </article>

            {/* § 3 */}
            <article id="preise-ustg" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  § 3
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Preise, Versandkosten & Kleinunternehmerregelung
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                (1) Alle angegebenen Preise verstehen sich in Euro (€).
              </p>

              {/* Notice Box Kleinunternehmer */}
              <div className="p-4 sm:p-5 bg-[#fff8ee] border border-[#e6c99c] rounded-sm flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-[#a87948] shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm text-[#47361e]">
                  <p className="font-semibold text-[#181715]">
                    Hinweis zur Kleinunternehmerregelung gemäß § 19 UStG:
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Als Kleinunternehmer im Sinne von <strong>§ 19 Abs. 1 Umsatzsteuergesetz (UStG)</strong> wird
                    keine Umsatzsteuer berechnet. Folglich wird auf Rechnungen und Zahlungsbelegen auch keine
                    Umsatzsteuer gesondert ausgewiesen. Die genannten Beträge sind Endpreise zzgl. etwaiger Versandkosten.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base">
                (2) Zuzüglich zu den angegebenen Produktpreisen können Versand- und Verpackungskosten anfallen.
                Deren genaue Höhe wird dem Kunden vor Abschluss der Bestellung bzw. im individuellen Angebot deutlich mitgeteilt.
              </p>
            </article>

            {/* § 4 */}
            <article id="zahlung" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  § 4
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Zahlungsmodalitäten & Zahlungsabwicklung über Stripe
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                (1) Für die Abwicklung von Zahlungen stehen dem Kunden folgende Möglichkeiten zur Verfügung:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#3e3b33]">
                <li>
                  <strong>Zahlung über Stripe:</strong> Wir nutzen den zertifizierten Zahlungsdienstleister{' '}
                  <em>Stripe Payments Europe, Ltd.</em>, 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irland.
                  Über Stripe bieten wir je nach technischer Verfügbarkeit unter anderem folgende Zahlungsarten an:
                  <ul className="list-circle pl-6 pt-1 space-y-1 text-xs sm:text-sm text-[#615e57]">
                    <li>Kreditkarte / Debitkarte (Visa, Mastercard, American Express)</li>
                    <li><strong>Apple Pay</strong> (für berechtigte Apple-Endgeräte)</li>
                    <li><strong>Klarna</strong> (z.&thinsp;B. Sofortüberweisung, Rechnungskauf oder Ratenzahlung je nach Bonitätsprüfung durch Klarna)</li>
                  </ul>
                  Bei Zahlung via Stripe wird das Konto bzw. die Karte des Kunden unmittelbar nach Bestätigung der Zahlungsanweisung belastet.
                </li>
                <li>
                  <strong>Vorkasse / Banküberweisung:</strong> Der Rechnungsbetrag ist innerhalb von 7 Werktagen nach Erhalt
                  der Auftragsbestätigung auf das angegebene Bankkonto zu überweisen. Die Fertigung bzw. der Versand erfolgt nach vollständigem Zahlungseingang.
                </li>
                <li>
                  <strong>Barzahlung bei Abholung:</strong> Nach vorheriger Terminabsprache in der Werkstatt in Schneeberg OT Lindenau.
                </li>
              </ul>
            </article>

            {/* § 5 */}
            <article id="eigentumsvorbehalt" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  § 5
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Eigentumsvorbehalt
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                Die gelieferte Ware bleibt bis zur vollständigen Erfüllung aller Forderungen aus dem jeweiligen
                Kaufvertrag das uneingeschränkte Eigentum von <strong>Future Form Holz · Inh. Stephan Tautenhahn</strong>.
                Vor dem Übergang des Eigentums ist eine Verpfändung, Sicherungsübereignung, Verarbeitung oder Umgestaltung
                ohne ausdrückliche schriftliche Zustimmung des Anbieters nicht zulässig.
              </p>
            </article>

            {/* § 6 */}
            <article id="lieferung" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  § 6
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Lieferzeiten, Versand & Gefahrübergang
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                (1) Da es sich bei unseren Erzeugnissen um hochwertige Handarbeit und anspruchsvolle CNC-Fräsungen handelt,
                unterscheiden sich die Lieferzeiten wie folgt:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 bg-white border border-[#e2ddd3] rounded-sm space-y-1">
                  <span className="font-semibold text-[#181715] flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#a87948]" />
                    Lagernde Kleinserien & Standardwerke:
                  </span>
                  <p className="text-[#615e57]">
                    Versandfertig in der Regel innerhalb von <strong>3 bis 7 Werktagen</strong> nach Zahlungseingang.
                  </p>
                </div>
                <div className="p-4 bg-white border border-[#e2ddd3] rounded-sm space-y-1">
                  <span className="font-semibold text-[#181715] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#a87948]" />
                    Individuelle Unikate & Maßanfertigungen:
                  </span>
                  <p className="text-[#615e57]">
                    Die Fertigungszeit beträgt je nach Projektumfang (CAD-Konstruktion, Fräsung, Lackierung, Trocknung von Epoxidharz, LED-Montage)
                    in der Regel <strong>2 bis 4 Wochen</strong> nach Freigabe.
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base">
                (2) <strong>Gefahrübergang:</strong> Ist der Kunde Verbraucher, geht die Gefahr des zufälligen Untergangs und der
                zufälligen Verschlechterung der verkauften Sache erst mit der Übergabe der Ware an den Verbraucher oder einen von ihm
                bestimmten Empfänger über – unabhängig davon, ob der Versand versichert erfolgt. Ist der Kunde Unternehmer, geht die Gefahr
                mit der Übergabe an das Versandunternehmen auf den Kunden über.
              </p>
            </article>

            {/* § 7 WIDERRUF & AUSSCHLUSS */}
            <article id="widerruf" className="space-y-5 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  § 7
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Widerrufsrecht für Verbraucher
                </h2>
              </div>

              <div className="p-5 bg-white border border-[#e2ddd3] rounded-sm space-y-4 text-sm sm:text-base">
                <h3 className="font-serif text-lg text-[#181715]">Widerrufsbelehrung</h3>
                <p>
                  Verbraucher haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
                  Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist,
                  die Waren in Besitz genommen haben bzw. hat.
                </p>
                <p>
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (<strong>Future Form Holz, Inh. Stephan Tautenhahn, Dorfstraße 53, 08289 Schneeberg,
                  E-Mail: futureformholz@gmail.com, Telefon: 0174 9233 526</strong>) mittels einer eindeutigen Erklärung (z.&thinsp;B. ein mit der
                  Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
                </p>
                <p>
                  Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
                  Widerrufsfrist absenden.
                </p>
                <h4 className="font-semibold text-[#181715] pt-2">Folgen des Widerrufs:</h4>
                <p className="text-xs sm:text-sm text-[#4a4740]">
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der
                  Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns
                  angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen,
                  an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
                </p>
              </div>

              {/* AUSSCHLUSS HINWEIS GEMÄSS § 312g ABS. 2 NR. 1 BGB */}
              <div className="p-5 sm:p-6 bg-[#fff4f2] border-2 border-[#e8a399] rounded-sm space-y-3">
                <div className="flex items-center gap-2.5 text-[#a82a1e]">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <h3 className="font-semibold text-sm sm:text-base uppercase tracking-wider font-mono">
                    Wichtiger Hinweis: Gesetzlicher Ausschluss des Widerrufsrechts bei Maßanfertigungen
                  </h3>
                </div>
                <div className="text-xs sm:text-sm text-[#541f19] space-y-2 leading-relaxed">
                  <p>
                    Gemäß <strong>§ 312g Abs. 2 Nr. 1 BGB</strong> besteht das Widerrufsrecht <u>nicht</u> bei Verträgen zur Lieferung
                    von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den
                    Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind.
                  </p>
                  <p>
                    <strong>Dies betrifft bei Future Form Holz insbesondere:</strong>
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li>Personalisierte Schwibbögen, Schilder oder Holzarbeiten mit individueller Namensgravur, Schriftzug, Firmenlogo oder Haus-Silhouette</li>
                    <li>Sonderanfertigungen nach konkreten Kundenmaßen, speziellen Holzkombinationen oder CAD-Zeichnungen</li>
                    <li>Individuell gegossene Epoxidharz-Unikate (z.&thinsp;B. Epoxidharzlampen oder Reliefs mit kundenspezifischen Farbwünschen)</li>
                  </ul>
                  <p className="text-xs text-[#7d3229] italic">
                    Für alle nicht personalisierten Kleinserienartikel bleibt das 14-tägige gesetzliche Widerrufsrecht selbstverständlich vollumfänglich bestehen.
                  </p>
                </div>
              </div>
            </article>

            {/* § 8 */}
            <article id="gewaehrleistung" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  § 8
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Mängelhaftung (Gewährleistung) & Besonderheiten des Werkstoffs Holz
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                (1) Es gelten die gesetzlichen Vorschriften zur Mängelhaftung (Gewährleistung). Die Gewährleistungsfrist für Verbraucher
                beträgt 24 Monate ab Erhalt der Ware.
              </p>
              <div className="p-4 bg-[#f5f2ea] border border-[#e2ddd3] rounded-sm space-y-2 text-xs sm:text-sm text-[#4a4740]">
                <h4 className="font-semibold text-[#181715] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#a87948]" />
                  Besonderheiten bei handwerklicher Holzverarbeitung:
                </h4>
                <p>
                  Holz ist ein natürlicher, lebendiger Werkstoff. Natürliche Farb- und Maserungsunterschiede, Unregelmäßigkeiten im Wuchs,
                  Äste, minimale Haarrisse oder witterungs- bzw. luftfeuchtigkeitsbedingte Maßveränderungen (Schwind- und Quellverhalten)
                  stellen keinen Sachmangel dar. Sie unterstreichen die Authentizität und den Unikat-Charakter echter Handarbeit.
                </p>
                <p>
                  Bei elektrisch illuminierten Werken (LED-Stripes, Netzteile, Smarthome-Controller) darf der Betrieb ausschließlich
                  mit den vom Hersteller freigegebenen Spannungswerten und Original-Netzteilen erfolgen.
                </p>
              </div>
            </article>

            {/* § 9 */}
            <article id="haftung" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  § 9
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Haftungsbeschränkung
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                (1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit,
                die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen, sowie für sonstige Schäden, die auf einer
                vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen.
              </p>
              <p className="text-sm sm:text-base">
                (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) ist die Haftung der Höhe nach
                auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt. Die Vorschriften des Produkthaftungsgesetzes
                bleiben unberührt.
              </p>
            </article>

            {/* § 10 */}
            <article id="schlussbestimmungen" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  § 10
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Streitbeilegung & Schlussbestimmungen
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                (1) Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a87948] underline underline-offset-2 break-all"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . Unsere E-Mail-Adresse lautet:{' '}
                <a href="mailto:futureformholz@gmail.com" className="text-[#a87948]">
                  futureformholz@gmail.com
                </a>
                .
              </p>
              <p className="text-sm sm:text-base">
                (2) Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen. Wir bevorzugen stets die direkte, partnerschaftliche Klärung im Sinne des Kunden.
              </p>
              <p className="text-sm sm:text-base">
                (3) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).
                Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit
                der übrigen Bestimmungen hiervon unberührt.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
