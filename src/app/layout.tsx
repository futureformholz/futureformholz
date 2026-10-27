import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://futureformholz.de'),
  title: {
    default: 'Future Form Holz · Holzarbeiten, Epoxidharz, Acrylglasbilder & Smarthome-Möbel',
    template: '%s | Future Form Holz',
  },
  description:
    'Exklusive Holzarbeiten, Epoxidharz-Unikate, illuminierte Acrylglasbilder und intelligente Smarthome-Möbel aus Schneeberg im Erzgebirge. Präzise Großformat-CNC-Fräsung (200 × 100 cm) & LED-Lichtkunst von Stephan Tautenhahn.',
  keywords: [
    'Holzarbeiten',
    'Epoxidharz',
    'Acrylglasbilder',
    'Smarthome-Möbel',
    'Future Form Holz',
    'Stephan Tautenhahn',
    'Schneeberg',
    'Erzgebirge',
    'Epoxidharz Tisch',
    'Acrylglas Lichtkunst',
    'LED Holzmöbel',
    'Smart Home Holz',
    'WLED Beleuchtung',
    'CNC Fräsung 200x100',
    'Schwibbogen Erzgebirge',
    'Lichterspitze',
    'Holzkunst Unikate',
  ],
  authors: [{ name: 'Stephan Tautenhahn', url: 'https://futureformholz.de' }],
  creator: 'Stephan Tautenhahn',
  publisher: 'Future Form Holz · Stephan Tautenhahn',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://futureformholz.de',
    siteName: 'Future Form Holz',
    title: 'Future Form Holz · Holzarbeiten, Epoxidharz, Acrylglasbilder & Smarthome-Möbel',
    description:
      'Exklusive Holzarbeiten, Epoxidharz-Unikate, Acrylglasbilder und Smarthome-Möbel aus Schneeberg im Erzgebirge. Großformat-CNC & smarte LED-Technik.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Future Form Holz Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Future Form Holz · Holzarbeiten, Epoxidharz, Acrylglasbilder & Smarthome-Möbel',
    description:
      'Exklusive Holzarbeiten, Epoxidharz-Unikate, Acrylglasbilder und Smarthome-Möbel aus Schneeberg im Erzgebirge.',
    images: ['/logo.png'],
  },
  verification: {
    google: 'CljLYVWdhRmIkVzKQKslWYFnE39MIbTlfKQfh70WeU0',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#fcfbf9] text-[#181715] antialiased selection:bg-[#a87948] selection:text-white">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
