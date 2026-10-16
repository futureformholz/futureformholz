import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cpu, ShieldCheck, ExternalLink, Lock, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#181715] text-[#eae6de] pt-20 pb-12 border-t border-[#292723]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2e2c28]">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center space-x-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#3e3b33] bg-[#24221e] shrink-0">
                <Image
                  src="/logo.png"
                  alt="Future Form Holz Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif tracking-[0.2em] uppercase text-white">
                  Future Form Holz
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#a87948] font-mono mt-0.5">
                  Inh. Stephan Tautenhahn · Schneeberg
                </span>
              </div>
            </div>

            <p className="text-sm text-[#a39e94] leading-relaxed max-w-sm font-light">
              Handgefertigte Schwibbögen, Lichterspitzen und individuelle Holz- und Acrylkunst
              aus Schneeberg im Erzgebirge – präzise gefräst mit eigener Großformat-CNC (200 × 100 cm).
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#c5bfae]">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#252320] border border-[#35332e] rounded-xs font-mono text-[11px]">
                <Cpu className="w-3.5 h-3.5 text-[#a87948]" />
                <span>CNC 200 × 100 cm</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#252320] border border-[#35332e] rounded-xs font-mono text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#a87948]" />
                <span>§ 19 UStG Kleinunternehmer</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#252320] border border-[#35332e] rounded-xs font-mono text-[11px]">
                <Lock className="w-3.5 h-3.5 text-[#a87948]" />
                <span>Stripe Checkout</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#d4cebe] font-medium font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#a39e94]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="hover:text-white transition-colors">
                  Über uns & Werkstatt
                </Link>
              </li>
              <li>
                <Link href="/#galerie" className="hover:text-white transition-colors">
                  Werk- & Fotogalerie
                </Link>
              </li>
              <li>
                <a
                  href="https://futureformholz.etsy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-1.5 text-[#a87948]"
                >
                  <span>Etsy Online-Shop</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Shop-Übersicht & Kollektion
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <h5 className="text-[11px] uppercase tracking-[0.2em] text-[#d4cebe] font-medium font-mono mb-2">
                Rechtliches
              </h5>
              <ul className="space-y-1.5 text-xs text-[#a39e94]">
                <li>
                  <Link href="/impressum" className="hover:text-[#a87948] transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="hover:text-[#a87948] transition-colors">
                    Allgemeine Geschäftsbedingungen (AGB)
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="hover:text-[#a87948] transition-colors">
                    Datenschutzerklärung
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact / Atelier */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#d4cebe] font-medium font-mono">
              Werkstatt & Kontakt
            </h4>
            <div className="text-sm text-[#a39e94] space-y-2 font-light">
              <p className="font-medium text-white">Future Form Holz</p>
              <p className="text-xs text-[#a87948] font-mono">Inhaber: Stephan Tautenhahn</p>
              <p>Dorfstraße 53</p>
              <p>08289 Schneeberg OT Lindenau</p>
              <div className="pt-2 text-xs space-y-1">
                <p>
                  <span className="text-[#c5bfae]">Telefon:</span>{' '}
                  <a href="tel:+491749233526" className="hover:text-white transition-colors font-mono">
                    0174 9233 526
                  </a>
                </p>
                <p>
                  <span className="text-[#c5bfae]">E-Mail:</span>{' '}
                  <a href="mailto:futureformholz@gmail.com" className="hover:text-white transition-colors">
                    futureformholz@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-[#c5bfae]">Etsy:</span>{' '}
                  <a
                    href="https://futureformholz.etsy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors text-[#a87948]"
                  >
                    futureformholz.etsy.com
                  </a>
                </p>
              </div>

              {/* Payment hint */}
              <div className="pt-3 border-t border-[#2e2c28] text-[11px] text-[#736f66] flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#a87948] shrink-0" />
                <span>Sichere Direktzahlung über Stripe (inkl. Apple Pay & Klarna)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#807b71] font-light space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Future Form Holz · Inh. Stephan Tautenhahn. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</p>
          <div className="flex items-center space-x-6 text-[#9a9488]">
            <Link href="/impressum" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Impressum
            </Link>
            <Link href="/agb" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              AGB
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
