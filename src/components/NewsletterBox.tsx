'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface NewsletterBoxProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
}

export default function NewsletterBox({
  title = 'Benachrichtigung zum Kollektionsstart',
  subtitle = 'Erhalten Sie vorab Einblick in unsere limitierten Manufaktur-Serien und handverlesene Unikate.',
  buttonLabel = 'Eintragen',
}: NewsletterBoxProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#181715] text-[#eae6de] p-8 sm:p-12 border border-[#2e2c28] relative overflow-hidden">
      {/* Decorative subtle texture/accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#a87948]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto text-center space-y-4">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a87948]">
          Atelier Brief
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif tracking-wide text-white">
          {title}
        </h3>
        <p className="text-sm text-[#a39e94] font-light leading-relaxed">
          {subtitle}
        </p>

        {submitted ? (
          <div className="pt-4 flex items-center justify-center space-x-2 text-sm text-[#a87948] font-mono">
            <CheckCircle2 className="w-5 h-5" />
            <span>Vielen Dank! Ihre E-Mail wurde erfolgreich hinterlegt.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-4 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail-Adresse"
                className="w-full px-4 py-3 bg-[#24221e] border border-[#38352e] text-[#fcfbf9] text-xs font-mono placeholder-[#807b71] focus:outline-none focus:border-[#a87948] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#a87948] hover:bg-[#906233] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <span>{buttonLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
        <p className="text-[10px] text-[#736e65] pt-1">
          Kein Spam. Jederzeit mit einem Klick abbestellbar.
        </p>
      </div>
    </div>
  );
}
