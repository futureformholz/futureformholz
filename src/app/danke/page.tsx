import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Package,
  ShieldCheck,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  Truck,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vielen Dank für Ihre Bestellung! | Future Form Holz',
  description:
    'Vielen Dank für Ihren Kauf bei Future Form Holz. Ihr handgefertigter Erzgebirgs-Lichtbogen wird mit größter Sorgfalt in Schneeberg für Sie vorbereitet.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DankePage() {
  return (
    <div className="py-16 sm:py-24 px-6 sm:px-8 max-w-4xl mx-auto space-y-12">
      {/* SUCCESS HERO BANNER */}
      <div className="bg-[#fcfbf9] border border-[#eae6de] p-8 sm:p-14 text-center space-y-5 shadow-sm relative overflow-hidden">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f4f1ea] border border-[#a87948]/30 rounded-full mx-auto flex items-center justify-center text-[#a87948] shadow-inner">
          <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#a87948] block">
          Bestellung erfolgreich abgeschlossen
        </span>

        <h1 className="text-3xl sm:text-5xl font-serif text-[#181715] tracking-tight">
          Herzlichen Dank für Ihr Vertrauen!
        </h1>

        <p className="text-sm sm:text-base text-[#615e57] font-light max-w-xl mx-auto leading-relaxed">
          Ihre Bestellung wurde erfolgreich erfasst. Wir freuen uns sehr, ein leuchtendes Stück
          erzgebirgischer Handwerkskunst auf den Weg zu Ihnen bringen zu dürfen.
        </p>

        {/* ORDER SUMMARY CARD */}
        <div className="mt-8 pt-8 border-t border-[#eae6de] bg-[#f4f1ea] p-6 text-left max-w-2xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#e2ded5]">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-xs overflow-hidden border border-[#d3cdbf] bg-[#181715] shrink-0">
                <Image
                  src="/products/erzgebirgs-lichtbogen/lichtbogen-1.jpg"
                  alt="Erzgebirgs-Lichtbogen Haamitland"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-serif font-medium text-[#181715]">
                  Exklusiver Erzgebirgs-Lichtbogen »Haamitland«
                </p>
                <p className="text-xs text-[#8b877f] font-mono mt-0.5">
                  500 × 230 mm Acrylglas · Massiver Eichensockel 550 mm · Inkl. 12V Netzteil
                </p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="text-sm font-mono font-bold text-[#181715]">99,00 €</span>
              <span className="block text-[10px] text-[#8b877f] font-mono">1 Stück</span>
            </div>
          </div>

          <div className="space-y-2 text-xs font-mono text-[#615e57]">
            <div className="flex justify-between">
              <span>Zwischensumme:</span>
              <span>99,00 €</span>
            </div>
            <div className="flex justify-between">
              <span>Versicherter Paketversand (DHL):</span>
              <span>5,99 €</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-[#e2ded5] text-sm font-bold text-[#181715]">
              <span>Gesamtbetrag:</span>
              <span className="text-[#a87948]">104,99 €</span>
            </div>
            <p className="text-[10px] text-[#8b877f] pt-1">
              Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerstatus).
            </p>
          </div>
        </div>
      </div>

      {/* 3 STEPS TIMELINE */}
      <div className="space-y-6">
        <h2 className="text-xl font-serif text-[#181715] text-center">
          So geht es jetzt mit Ihrem Werk weiter:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#fcfbf9] border border-[#eae6de] p-6 space-y-3">
            <div className="w-10 h-10 bg-[#f4f1ea] border border-[#d3cdbf] flex items-center justify-center text-[#a87948]">
              <Package className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#a87948]">
              Schritt 01
            </span>
            <h3 className="text-base font-serif text-[#181715]">
              Auftragsbestätigung
            </h3>
            <p className="text-xs text-[#615e57] font-light leading-relaxed">
              Sie erhalten in Kürze Ihre Zahlungsbestätigung und den Rechnungsbeleg per E-Mail.
            </p>
          </div>

          <div className="bg-[#fcfbf9] border border-[#eae6de] p-6 space-y-3">
            <div className="w-10 h-10 bg-[#f4f1ea] border border-[#d3cdbf] flex items-center justify-center text-[#a87948]">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#a87948]">
              Schritt 02
            </span>
            <h3 className="text-base font-serif text-[#181715]">
              Handendkontrolle & Schutzverpackung
            </h3>
            <p className="text-xs text-[#615e57] font-light leading-relaxed">
              Ihr Lichtbogen wird vor dem Verpacken von Stephan Tautenhahn sorgfältig geprüft,
              gereinigt und bruchsicher in stoßabsorbierendem Spezialmaterial verpackt.
            </p>
          </div>

          <div className="bg-[#fcfbf9] border border-[#eae6de] p-6 space-y-3">
            <div className="w-10 h-10 bg-[#f4f1ea] border border-[#d3cdbf] flex items-center justify-center text-[#a87948]">
              <Truck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#a87948]">
              Schritt 03
            </span>
            <h3 className="text-base font-serif text-[#181715]">
              Versicherter Versand (DHL)
            </h3>
            <p className="text-xs text-[#615e57] font-light leading-relaxed">
              Direkt nach Einlieferung erhalten Sie Ihre persönliche DHL-Sendungsnummer zur
              bequemen Sendungsverfolgung bis an Ihre Haustür.
            </p>
          </div>
        </div>
      </div>

      {/* WORKSHOP & CONTACT ASSISTANCE */}
      <div className="bg-[#181715] text-[#eae6de] p-8 sm:p-10 border border-[#2e2c28] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#a87948]">
            Persönlicher Werkstattkontakt
          </span>
          <h3 className="text-xl font-serif text-white">
            Haben Sie Fragen zu Ihrer Bestellung?
          </h3>
          <p className="text-xs text-[#b8b2a5] font-light max-w-lg">
            Stephan Tautenhahn steht Ihnen bei allen Fragen zur Fertigung, Lieferung oder
            individuellen Sonderwünschen gerne persönlich zur Verfügung.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <a
            href="tel:+491749233526"
            className="px-5 py-3 bg-[#a87948] hover:bg-[#906233] text-white text-xs font-mono uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors whitespace-nowrap shadow-md"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0174 9233 526</span>
          </a>
          <a
            href="mailto:futureformholz@gmail.com"
            className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors whitespace-nowrap border border-white/15"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>futureformholz@gmail.com</span>
          </a>
        </div>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="w-full sm:w-auto px-8 py-3.5 bg-[#181715] hover:bg-[#a87948] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center shadow-md"
        >
          Zur Startseite zurückkehren
        </Link>
        <Link
          href="/#galerie"
          className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#d3cdbf] hover:border-[#181715] text-[#181715] text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center"
        >
          Weitere Werke in der Galerie ansehen
        </Link>
      </div>
    </div>
  );
}
