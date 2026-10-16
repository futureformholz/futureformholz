import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  CreditCard,
  EyeOff,
  ChevronRight,
  Mail,
  Phone,
  CheckCircle2,
  FileCheck,
} from 'lucide-react';

export const metadata = {
  title: 'Datenschutzerklärung | Future Form Holz · Stephan Tautenhahn',
  description:
    'Datenschutzerklärung von Future Form Holz, Inh. Stephan Tautenhahn. Höchste Datenschutzstandards, Vercel Hosting mit AVV, Stripe-Zahlungsabwicklung, lokale Schriftarten, kein Google Analytics und kein Cookie-Banner nötig.',
};

export default function DatenschutzPage() {
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
            <span className="text-[#a87948]">Datenschutz</span>
          </nav>

          <div className="space-y-3 pt-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#a87948] flex items-center gap-2">
              <span className="w-5 h-[1px] bg-[#a87948]" />
              DSGVO-Konformität & Transparenz
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-white">
              Datenschutzerklärung
            </h1>
            <p className="text-base sm:text-lg text-[#a39e94] max-w-3xl font-light leading-relaxed">
              Deine Privatsphäre hat bei uns oberste Priorität: Konsequente Datensparsamkeit, lokale Schriftarten,
              kein Tracking durch Drittanbieter und maximale Sicherheit bei Hosting und Zahlungsverkehr.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 text-xs font-mono text-[#8b877f]">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#24221e] border border-[#35332e] rounded-xs text-[#c5bfae]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#a87948]" />
              <span>100% DSGVO-konform</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#24221e] border border-[#35332e] rounded-xs text-[#c5bfae]">
              <EyeOff className="w-3.5 h-3.5 text-[#a87948]" />
              <span>Kein Cookie-Banner nötig</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#24221e] border border-[#35332e] rounded-xs text-[#c5bfae]">
              <Lock className="w-3.5 h-3.5 text-[#a87948]" />
              <span>Stripe & Vercel AVV</span>
            </span>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT BOXES: Privacy by Design */}
      <section className="bg-[#f5f2ea] border-b border-[#e2ddd3] py-10 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-white p-5 rounded-sm border border-[#e2ddd3] space-y-2">
            <div className="flex items-center gap-2 text-[#a87948] font-semibold text-xs font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Keine Tracking-Cookies
            </div>
            <p className="text-xs text-[#524e47] leading-relaxed">
              Wir setzen keine Marketing- oder Analyse-Cookies (kein Google Analytics, kein Facebook-Pixel).
              Daher ist kein lästiges Zustimmungsbanner erforderlich.
            </p>
          </div>

          <div className="bg-white p-5 rounded-sm border border-[#e2ddd3] space-y-2">
            <div className="flex items-center gap-2 text-[#a87948] font-semibold text-xs font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Lokale Schriftarten
            </div>
            <p className="text-xs text-[#524e47] leading-relaxed">
              Alle Schriften werden direkt von unserem Server über <code className="text-[#a87948] font-mono">next/font</code> ausgeliefert.
              Keine Datenübertragung an Google-Server.
            </p>
          </div>

          <div className="bg-white p-5 rounded-sm border border-[#e2ddd3] space-y-2">
            <div className="flex items-center gap-2 text-[#a87948] font-semibold text-xs font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Sicherer Zahlungsverkehr
            </div>
            <p className="text-xs text-[#524e47] leading-relaxed">
              Direktzahlungen erfolgen verschlüsselt über <strong>Stripe</strong> (inkl. Apple Pay & Klarna).
              Zertifiziert nach dem höchsten Sicherheitsstandard PCI-DSS Level 1.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN LEGAL CONTENT */}
      <section className="py-16 sm:py-20 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table of contents sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 bg-[#f5f2ea] border border-[#e2ddd3] p-6 rounded-sm space-y-5">
              <div className="space-y-1">
                <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#a87948] font-semibold">
                  Übersicht
                </h3>
                <p className="text-xs text-[#6e6a61]">Rechtliche Abschnitte</p>
              </div>

              <nav className="space-y-2 text-xs text-[#4a4740]">
                <a href="#verantwortlicher" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  1. Verantwortliche Stelle
                </a>
                <a href="#datenerfassung" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  2. Datenerfassung & Keine Cookies
                </a>
                <a href="#schriften" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  3. Lokale Schriftarten (next/font)
                </a>
                <a href="#hosting" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  4. Hosting bei Vercel Inc. (mit AVV)
                </a>
                <a href="#zahlung" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  5. Zahlungsabwicklung via Stripe
                </a>
                <a href="#kontakt" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  6. Kontaktaufnahme (E-Mail/Telefon)
                </a>
                <a href="#externe-links" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  7. Externe Links (Etsy)
                </a>
                <a href="#speicherdauer" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1 border-b border-[#e8e4dc]">
                  8. Speicherdauer & Löschung
                </a>
                <a href="#rechte" className="block hover:text-[#a87948] hover:translate-x-1 transition-all py-1">
                  9. Ihre Rechte als betroffene Person
                </a>
              </nav>

              <div className="pt-4 border-t border-[#e2ddd3] space-y-2 text-xs text-[#6e6a61]">
                <p className="font-medium text-[#181715]">Datenschutz-Kontakt</p>
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
            {/* 1. Verantwortlicher */}
            <article id="verantwortlicher" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  1.
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Verantwortliche Stelle
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung
                (DSGVO) sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
              </p>
              <div className="p-4 bg-[#f5f2ea] border-l-2 border-[#a87948] text-sm space-y-1 font-light">
                <p className="font-medium text-[#181715]">Future Form Holz</p>
                <p>Inhaber: <strong>Stephan Tautenhahn</strong></p>
                <p>Dorfstr. 53</p>
                <p>08289 Schneeberg, Deutschland</p>
                <p className="pt-2">
                  Telefon:{' '}
                  <a href="tel:+491749233526" className="font-mono text-[#a87948] hover:underline">
                    01749233526
                  </a>
                </p>
                <p>
                  E-Mail:{' '}
                  <a href="mailto:futureformholz@gmail.com" className="text-[#a87948] hover:underline">
                    futureformholz@gmail.com
                  </a>
                </p>
                <p className="pt-2 text-xs text-[#6e6a61]">
                  Hinweis: Gemäß § 19 UStG wird als Kleinunternehmer keine Umsatzsteuer erhoben und ausgewiesen.
                </p>
              </div>
            </article>

            {/* 2. Datenerfassung & Keine Cookies */}
            <article id="datenerfassung" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  2.
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Datenerfassung auf unserer Website & Cookie-Verzicht
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                Wir legen größten Wert auf Datensparsamkeit. Aus diesem Grund verzichtet unsere Website vollständig auf:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-[#3e3b33]">
                <li><strong>Keine Tracking- oder Werbe-Cookies:</strong> Es werden weder Analyse- noch Retargeting-Cookies auf deinem Endgerät abgelegt.</li>
                <li><strong>Kein Google Analytics oder Matomo:</strong> Wir analysieren dein Nutzerverhalten nicht über externe Auswertungsdienste.</li>
                <li><strong>Keine externen Social-Media-Plugins:</strong> Buttons zu externen Plattformen sind als einfache Hyperlinks ohne Datenaustausch im Hintergrund ausgeführt.</li>
              </ul>
              <div className="p-4 bg-[#f5f2ea] border border-[#e2ddd3] rounded-sm text-xs sm:text-sm text-[#4a4740]">
                <strong>Warum gibt es hier kein Cookie-Banner?</strong>
                <p className="mt-1">
                  Gemäß der ePrivacy-Richtlinie und § 25 TDDDG (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz)
                  ist ein Einwilligungsbanner nur dann zwingend vorgeschrieben, wenn technisch nicht erforderliche Informationen auf dem Endgerät
                  des Nutzers gespeichert oder abgerufen werden. Da wir vollständig auf derartige Technologien verzichten, benötigen wir kein Cookie-Banner.
                </p>
              </div>
            </article>

            {/* 3. Lokale Schriftarten */}
            <article id="schriften" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  3.
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Lokale Schriftarten (next/font)
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                Diese Website nutzt zur einheitlichen und ansprechenden typografischen Darstellung Schriftarten,
                die über das optimierte Framework <strong>next/font</strong> eingebunden sind.
              </p>
              <div className="p-4 bg-white border border-[#e2ddd3] rounded-sm space-y-2 text-xs sm:text-sm text-[#4a4740]">
                <p>
                  <strong>Technischer Ablauf & Datenschutzgarantie:</strong><br />
                  Beim Build-Prozess unserer Webanwendung werden alle Schriftdateien (z.&thinsp;B. Geist Sans und Geist Mono)
                  einmalig heruntergeladen und lokal auf unserem Webspace gehostet. Wenn du unsere Seiten aufrufst,
                  werden die Schriften ausschließlich von unserem eigenen Webserver bzw. Content Delivery Network ausgeliefert.
                </p>
                <p className="font-medium text-[#181715]">
                  → Es besteht zu keinem Zeitpunkt eine direkte Verbindung zu den Servern von Google. Deine IP-Adresse wird nicht an Google übermittelt.
                </p>
                <p className="text-[11px] text-[#6e6a61]">
                  Rechtsgrundlage ist unser berechtigtes Interesse an einer technisch einwandfreien, DSGVO-konformen und schnellen Darstellung
                  unseres Onlineangebots gemäß Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>
            </article>

            {/* 4. Hosting bei Vercel */}
            <article id="hosting" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  4.
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Webhosting über Vercel Inc. (mit AVV)
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                Wir hosten unsere Website bei dem cloudbasierten Hosting-Dienstleister:
              </p>
              <div className="p-4 bg-[#f5f2ea] border-l-2 border-[#a87948] text-sm space-y-1 font-light">
                <p className="font-medium text-[#181715]">Vercel Inc.</p>
                <p>440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
                <p className="text-xs text-[#6e6a61]">
                  Website: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#a87948] hover:underline">vercel.com</a>
                </p>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <p>
                  <strong>Server-Log-Dateien:</strong><br />
                  Wenn du unsere Website besuchst, erfasst der Hoster Vercel automatisch technische Verbindungsdaten (sog. Server-Logs),
                  die dein Browser automatisch übermittelt:
                </p>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-[#4a4740] space-y-1">
                  <li>IP-Adresse des anfragenden Geräts (in der Regel in anonymisierter Form)</li>
                  <li>Datum und Uhrzeit des Abrufs inklusive Zeitzonendifferenz</li>
                  <li>Name und URL der abgerufenen Datei / Unterseite</li>
                  <li>HTTP-Statuscode (z.&thinsp;B. erfolgreiche Übertragung oder Fehler)</li>
                  <li>Übertragene Datenmenge</li>
                  <li>Browsertyp, Betriebssystem und Version</li>
                </ul>
                <p className="text-xs sm:text-sm text-[#6e6a61]">
                  Diese Daten werden ausschließlich zur technischen Bereitstellung, Ausfallsicherheit, Lastverteilung
                  und Abwehr von Cyberangriffen verarbeitet. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und performanten Betrieb).
                </p>

                <div className="p-4 bg-white border border-[#e2ddd3] rounded-sm space-y-2 text-xs sm:text-sm">
                  <span className="font-semibold text-[#181715] flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-[#a87948]" />
                    Auftragsverarbeitungsvertrag (AVV / Data Processing Addendum):
                  </span>
                  <p className="text-[#4a4740]">
                    Wir haben mit Vercel Inc. einen Vertrag zur Auftragsverarbeitung (Data Processing Addendum, DPA) gemäß
                    <strong> Art. 28 DSGVO</strong> abgeschlossen. Vercel verarbeitet die Daten streng weisungsgebunden nach europäischen Datenschutzstandards.
                  </p>
                  <p className="text-[#4a4740]">
                    <strong>Drittlandübermittlung:</strong> Vercel Inc. ist unter dem <em>EU-U.S. Data Privacy Framework (DPF)</em> zertifiziert.
                    Zusätzlich verwendet Vercel die Standardvertragsklauseln (Standard Contractual Clauses – SCC) der Europäischen Kommission,
                    um ein dem europäischen Datenschutzniveau gleichwertiges Schutzniveau zu gewährleisten.
                  </p>
                </div>
              </div>
            </article>

            {/* 5. Zahlungsabwicklung Stripe */}
            <article id="zahlung" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  5.
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Zahlungsabwicklung über Stripe (inkl. Apple Pay & Klarna)
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                Für sichere Online-Zahlungen, Anzahlungen und Direktkäufe via Zahlungslink nutzen wir den externen Zahlungsdienstleister:
              </p>
              <div className="p-4 bg-[#f5f2ea] border-l-2 border-[#a87948] text-sm space-y-1 font-light">
                <p className="font-medium text-[#181715]">Stripe Payments Europe, Ltd.</p>
                <p>1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irland</p>
                <p className="text-xs text-[#6e6a61]">
                  Datenschutzerklärung von Stripe:{' '}
                  <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-[#a87948] hover:underline">
                    stripe.com/de/privacy
                  </a>
                </p>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <p>
                  Wenn du über einen unserer Stripe-Zahlungslinks bezahlst, werden deine zur Zahlungsabwicklung notwendigen Angaben
                  (wie Name, Rechnungsadresse, E-Mail-Adresse, Zahlungsdaten wie Kreditkartennummer oder Bankverbindung sowie Angaben zur Bestellung)
                  über eine verschlüsselte SSL-/TLS-Verbindung direkt an die Server von Stripe übertragen.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-1">
                  <div className="p-3.5 bg-white border border-[#e2ddd3] rounded-sm space-y-1">
                    <span className="font-semibold text-[#181715] flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-[#a87948]" />
                      Apple Pay:
                    </span>
                    <p className="text-[#615e57]">
                      Bei Bezahlung mit Apple Pay werden deine Zahldaten verschlüsselt unter Einsatz eines gerätespezifischen Tokens übermittelt.
                      Wir erhalten keine Kenntnis deiner vollständigen Kartennummer.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white border border-[#e2ddd3] rounded-sm space-y-1">
                    <span className="font-semibold text-[#181715] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#a87948]" />
                      Klarna:
                    </span>
                    <p className="text-[#615e57]">
                      Wählst du die Zahlung über Klarna (z.&thinsp;B. Sofort oder Rechnung), werden deine Daten im Rahmen der Bonitätsprüfung und
                      Identitätsfeststellung direkt von Klarna AB verarbeitet.
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#6e6a61]">
                  <strong>Rechtsgrundlage:</strong> Die Weitergabe deiner Daten an Stripe erfolgt zur Erfüllung unseres Vertrages
                  bzw. zur Durchführung vorvertraglicher Maßnahmen gemäß Art. 6 Abs. 1 lit. b DSGVO sowie auf Grundlage unseres berechtigten
                  Interesses an einem sicheren und reibungslosen Zahlungsverfahren (Art. 6 Abs. 1 lit. f DSGVO). Stripe ist nach PCI-DSS Level 1 zertifiziert.
                </p>
              </div>
            </article>

            {/* 6. Kontakt */}
            <article id="kontakt" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  6.
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Kontaktaufnahme per E-Mail oder Telefon
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                Wenn du uns per E-Mail (<code className="text-[#a87948] font-mono">futureformholz@gmail.com</code>) oder telefonisch
                (<code className="text-[#a87948] font-mono">0174 9233 526</code>) kontaktierst, werden deine gemachten Angaben
                (insbesondere Name, Kontaktdaten und Anliegen bzw. individuelle Projektwünsche) zwecks Bearbeitung der Anfrage
                und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="text-sm sm:text-base text-[#6e6a61]">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der Erfüllung eines
                Vertrages oder vorvertraglichen Maßnahmen zusammenhängt. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
                Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </article>

            {/* 7. Externe Links (Etsy) */}
            <article id="externe-links" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  7.
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Verlinkung zu unserem Etsy-Shop
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                Auf unserer Website verlinken wir auf unseren offiziellen Onlineshop bei Etsy (<em>futureformholz.etsy.com</em>).
                Hierbei handelt es sich um herkömmliche externe Textlinks und Schaltflächen.
              </p>
              <p className="text-xs sm:text-sm text-[#4a4740]">
                Beim bloßen Betrachten unserer Website werden keinerlei Daten an Etsy übertragen. Erst wenn du aktiv auf einen solchen Link
                klickst, wirst du zur Website der Etsy Ireland UC weitergeleitet. Dort gelten die gesonderten Datenschutzbestimmungen von Etsy,
                auf die wir keinen Einfluss haben.
              </p>
            </article>

            {/* 8. Speicherdauer */}
            <article id="speicherdauer" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  8.
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Speicherdauer & Löschung von Daten
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                Wir verarbeiten und speichern personenbezogene Daten nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist
                oder sofern dies durch gesetzliche Vorschriften (insbesondere handels- und steuerrechtliche Aufbewahrungsfristen von 6 bis 10 Jahren
                nach § 147 AO und § 257 HGB für Rechnungs- und Buchungsbelege) vorgegeben wurde.
              </p>
              <p className="text-sm sm:text-base text-[#6e6a61]">
                Entfällt der Speicherungszweck oder läuft eine gesetzlich vorgeschriebene Aufbewahrungsfrist ab, werden die personenbezogenen Daten
                routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.
              </p>
            </article>

            {/* 9. Rechte der betroffenen Person */}
            <article id="rechte" className="space-y-4 scroll-mt-28 border-t border-[#e8e4dc] pt-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#181715] text-[#eae6de] rounded-xs">
                  9.
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#181715]">
                  Deine Rechte als betroffene Person
                </h2>
              </div>
              <p className="text-sm sm:text-base">
                Nach der Datenschutz-Grundverordnung stehen dir umfassende Rechte gegenüber dem Verantwortlichen zu:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 bg-white border border-[#e2ddd3] rounded-sm space-y-1">
                  <span className="font-semibold text-[#181715]">Auskunftsrecht (Art. 15 DSGVO):</span>
                  <p className="text-[#615e57]">Du kannst jederzeit unentgeltlich Auskunft über deine bei uns gespeicherten personenbezogenen Daten verlangen.</p>
                </div>
                <div className="p-3.5 bg-white border border-[#e2ddd3] rounded-sm space-y-1">
                  <span className="font-semibold text-[#181715]">Berichtigung (Art. 16 DSGVO):</span>
                  <p className="text-[#615e57]">Du hast das Recht auf unverzügliche Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten.</p>
                </div>
                <div className="p-3.5 bg-white border border-[#e2ddd3] rounded-sm space-y-1">
                  <span className="font-semibold text-[#181715]">Löschung (Art. 17 DSGVO):</span>
                  <p className="text-[#615e57]">Du kannst die Löschung deiner personenbezogenen Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
                </div>
                <div className="p-3.5 bg-white border border-[#e2ddd3] rounded-sm space-y-1">
                  <span className="font-semibold text-[#181715]">Einschränkung (Art. 18 DSGVO):</span>
                  <p className="text-[#615e57]">Unter bestimmten Voraussetzungen kannst du die Einschränkung der Verarbeitung deiner Daten verlangen.</p>
                </div>
                <div className="p-3.5 bg-white border border-[#e2ddd3] rounded-sm space-y-1">
                  <span className="font-semibold text-[#181715]">Datenübertragbarkeit (Art. 20 DSGVO):</span>
                  <p className="text-[#615e57]">Du hast das Recht, deine Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p>
                </div>
                <div className="p-3.5 bg-white border border-[#e2ddd3] rounded-sm space-y-1">
                  <span className="font-semibold text-[#181715]">Widerspruchsrecht (Art. 21 DSGVO):</span>
                  <p className="text-[#615e57]">Du hast das Recht, aus Gründen, die sich aus deiner besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einzulegen.</p>
                </div>
              </div>

              {/* Beschwerderecht Aufsichtsbehörde */}
              <div className="p-4 bg-[#f5f2ea] border border-[#e2ddd3] rounded-sm text-xs sm:text-sm text-[#4a4740] space-y-1">
                <span className="font-semibold text-[#181715]">Beschwerderecht bei der zuständigen Aufsichtsbehörde:</span>
                <p>
                  Im Falle datenschutzrechtlicher Verstöße steht dir ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde zu (Art. 77 DSGVO).
                  Zuständige Aufsichtsbehörde für Sachsen ist:
                </p>
                <p className="font-mono text-[11px] pt-1 text-[#181715]">
                  Sächsische Datenschutz- und Transparenzbeauftragte<br />
                  Devrientstraße 5, 01067 Dresden · Postfach 11 01 32, 01330 Dresden<br />
                  Website: <a href="https://www.datenschutz.sachsen.de" target="_blank" rel="noopener noreferrer" className="text-[#a87948] hover:underline">datenschutz.sachsen.de</a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
