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
  title: 'Future Form Holz · Inh. Stephan Tautenhahn | Schneeberg (Erzgebirge)',
  description:
    'Handgefertigte Schwibbögen, Lichterspitzen und erzgebirgische Holzkunst aus Schneeberg OT Lindenau. Großformat-CNC-Fräsung (200 × 100 cm) und personalisierte Unikate.',
  keywords: [
    'Future Form Holz',
    'Stephan Tautenhahn',
    'Schwibbogen',
    'Lichterspitze',
    'Erzgebirge',
    'Schneeberg',
    'Lindenau',
    'CNC Fräse 200x100',
    'LED Schwibbogen',
    'Acrylglas Lichtbogen',
    'Holzkunst',
  ],
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
