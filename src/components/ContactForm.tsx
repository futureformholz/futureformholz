'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Holzarbeiten & Epoxidharz-Unikat',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="lg:col-span-7 bg-[#f4f1ea] p-8 sm:p-12 border border-[#eae6de]">
      <h3 className="text-xl font-serif text-[#181715] mb-6">
        Unverbindliche Anfrage senden
      </h3>

      {submitted ? (
        <div className="p-8 bg-[#fcfbf9] border border-[#a87948]/30 rounded-xs text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-[#a87948] mx-auto animate-bounce" />
          <h4 className="text-lg font-serif text-[#181715]">
            Vielen Dank für Ihre Anfrage!
          </h4>
          <p className="text-sm text-[#615e57] font-light max-w-md mx-auto">
            Stephan Tautenhahn wird sich zeitnah persönlich bei Ihnen melden, um Details zu Ihren gewünschten Holzarbeiten, Epoxidharz-Unikaten oder Smarthome-Möbeln zu besprechen.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-wider font-mono text-[#a87948] hover:underline pt-2 inline-block cursor-pointer"
          >
            Weitere Nachricht verfassen
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-[#615e57] mb-2">
                Ihr Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="z. B. Max Mustermann"
                className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#d3cdbf] text-sm focus:outline-none focus:border-[#a87948]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-[#615e57] mb-2">
                E-Mail-Adresse *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@beispiel.de"
                className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#d3cdbf] text-sm focus:outline-none focus:border-[#a87948]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-[#615e57] mb-2">
                Telefonnummer
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0174 ..."
                className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#d3cdbf] text-sm focus:outline-none focus:border-[#a87948]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-[#615e57] mb-2">
                Gewünschtes Werk
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#d3cdbf] text-sm focus:outline-none focus:border-[#a87948]"
              >
                <option value="Holzarbeiten & Epoxidharz-Unikat">Epoxidharz & Holzarbeiten</option>
                <option value="Acrylglasbilder & LED-Lichtkunst">Acrylglasbilder & Lichtkunst</option>
                <option value="Smarthome-Möbel & Lichtsysteme">Smarthome-Möbel (WLED / Home Assistant)</option>
                <option value="Schwibbogen / Lichterspitze">Schwibbogen & Lichterspitze</option>
                <option value="Personalisiertes Familien- oder Hausthema">Personalisiertes Familienthema</option>
                <option value="Großformat-CNC-Fräsung (bis 200 × 100 cm)">Großformat-CNC-Fräsung (bis 200 × 100 cm)</option>
                <option value="Sonstige Sonderanfertigung">Sonstige Sonderanfertigung</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-mono tracking-wider text-[#615e57] mb-2">
              Ihre Nachricht oder Motividee
            </label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Beschreiben Sie Ihr gewünschtes Werk, z.B. Holzarbeiten, Epoxidharztisch, Acrylglasbilder oder Smarthome-Möbel..."
              className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#d3cdbf] text-sm focus:outline-none focus:border-[#a87948]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#181715] hover:bg-[#a87948] text-white text-xs uppercase tracking-[0.25em] font-medium transition-colors cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Anfrage unverbindlich absenden</span>
            <Send className="w-4 h-4 ml-1" />
          </button>
        </form>
      )}
    </div>
  );
}
