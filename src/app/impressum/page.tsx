import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  Scale,
  FileText,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export const metadata = {
  title: 'Impressum | Future Form Holz · Stephan Tautenhahn',
  description:
    'Impressum und Anbieterkennzeichnung nach § 5 DDG von Future Form Holz, Inhaber Stephan Tautenhahn, Schneeberg OT Lindenau (Erzgebirge).',
};

export default function ImpressumPage() {
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
            <span className="text-[#a87948]">Impressum</span>
          </nav>

          <div className="space-y-3 pt-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#a87948] flex items-center gap-2">
              <span className="w-5 h-[1px] bg-[#a87948]" />
              Gesetzliche Anbieterkennzeichnung (§ 5 DDG)
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-white">
              Impressum
            </h1>
            <p className="text-base sm:text-lg text-[#a39e94] max-w-3xl font-light leading-relaxed">
              Verantwortliche Angaben nach dem Digitale-Dienste-Gesetz (DDG) und dem Medienstaatsvertrag (MStV)
              für Future Form Holz.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 text-xs font-mono text-[#8b877f]">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#24221e] border border-[#35332e] rounded-xs text-[#c5bfae]">
              <Building2 className="w-3.5 h-3.5 text-[#a87948]" />
              <span>Einzelunternehmen</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#24221e] border border-[#35332e] rounded-xs text-[#c5bfae]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#a87948]" />
              <span>§ 19 UStG (Kleinunternehmer)</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#24221e] border border-[#35332e] rounded-xs text-[#c5bfae]">
              <Sparkles className="w-3.5 h-3.5 text-[#a87948]" />
              <span>Schneeberg im Erzgebirge</span>
            </span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 sm:py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-12 leading-relaxed text-[#2c2a26]">
          {/* Angaben gemäß § 5 DDG */}
          <article className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif text-[#181715] flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-[#a87948]" />
              Angaben gemäß § 5 DDG
            </h2>
            <div className="p-6 bg-[#f5f2ea] border-l-2 border-[#a87948] text-sm sm:text-base space-y-1.5 font-light">
              <p className="text-lg font-serif font-medium text-[#181715]">Future Form Holz</p>
              <p>Inhaber: <strong>Stephan Tautenhahn</strong></p>
              <p>Dorfstr. 53</p>
              <p>08289 Schneeberg, Deutschland</p>
            </div>
          </article>

          {/* Kontakt */}
          <article className="space-y-4 border-t border-[#e8e4dc] pt-8">
            <h2 className="text-xl sm:text-2xl font-serif text-[#181715] flex items-center gap-2.5">
              <Mail className="w-5 h-5 text-[#a87948]" />
              Kontakt
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <div className="p-4 bg-white border border-[#e2ddd3] rounded-sm space-y-1">
                <span className="text-xs uppercase tracking-wider font-mono text-[#a87948] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  Telefon:
                </span>
                <p>
                  <a href="tel:+491749233526" className="font-mono text-[#181715] hover:text-[#a87948] transition-colors font-medium">
                    0174 9233 526
                  </a>
                </p>
                <p className="text-xs text-[#6e6a61]">Mobil & Werkstatt</p>
              </div>
              <div className="p-4 bg-white border border-[#e2ddd3] rounded-sm space-y-1">
                <span className="text-xs uppercase tracking-wider font-mono text-[#a87948]">E-Mail:</span>
                <p>
                  <a href="mailto:futureformholz@gmail.com" className="font-mono text-[#181715] hover:text-[#a87948] transition-colors font-medium">
                    futureformholz@gmail.com
                  </a>
                </p>
                <p className="text-xs text-[#6e6a61]">Anfragen & Aufträge</p>
              </div>
            </div>
          </article>

          {/* Kleinunternehmerregelung */}
          <article className="space-y-4 border-t border-[#e8e4dc] pt-8">
            <h2 className="text-xl sm:text-2xl font-serif text-[#181715] flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#a87948]" />
              Umsatzsteuer-Identifikation
            </h2>
            <div className="p-5 bg-[#fff8ee] border border-[#e6c99c] rounded-sm space-y-2 text-sm text-[#47361e]">
              <p className="font-semibold text-[#181715]">
                Befreiung gemäß § 19 UStG (Kleinunternehmerregelung):
              </p>
              <p className="leading-relaxed">
                Als Kleinunternehmer im Sinne von <strong>§ 19 Abs. 1 Umsatzsteuergesetz (UStG)</strong> erheben und
                weisen wir keine Umsatzsteuer aus. Folglich wird auf unseren Rechnungen keine Umsatzsteuer gesondert
                berechnet oder ausgewiesen. Eine Umsatzsteuer-Identifikationsnummer (USt-IdNr.) ist daher nicht vergeben.
              </p>
            </div>
          </article>

          {/* Verantwortlich für Inhalt */}
          <article className="space-y-4 border-t border-[#e8e4dc] pt-8">
            <h2 className="text-xl sm:text-2xl font-serif text-[#181715] flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[#a87948]" />
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <div className="p-4 bg-white border border-[#e2ddd3] rounded-sm text-sm sm:text-base space-y-1">
              <p className="font-medium text-[#181715]">Stephan Tautenhahn</p>
              <p className="text-[#615e57]">Dorfstr. 53, 08289 Schneeberg, Deutschland</p>
            </div>
          </article>

          {/* EU-Streitschlichtung */}
          <article className="space-y-4 border-t border-[#e8e4dc] pt-8">
            <h2 className="text-xl sm:text-2xl font-serif text-[#181715] flex items-center gap-2.5">
              <Scale className="w-5 h-5 text-[#a87948]" />
              EU-Streitschlichtung & Verbraucherstreitbeilegung
            </h2>
            <div className="text-sm sm:text-base space-y-3 text-[#3e3b33]">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a87948] underline underline-offset-2 break-all"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="text-xs sm:text-sm text-[#6e6a61]">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </article>

          {/* Haftungshinweise */}
          <article className="space-y-4 border-t border-[#e8e4dc] pt-8 text-xs sm:text-sm text-[#524e47] space-y-3">
            <h3 className="font-serif text-base text-[#181715]">Haftung für Inhalte und Links</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
              Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter (insbesondere zu unserem Etsy-Shop), auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <h3 className="font-serif text-base text-[#181715] pt-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte, Fotografien der Holzwerke, Werkstattbilder und Designs auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung von Stephan Tautenhahn.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
