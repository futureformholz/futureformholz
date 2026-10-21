'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startseite', href: '/' },
    { name: 'Online-Shop', href: '/online-shop', badge: 'Shop' },
    { name: 'Fotogalerie', href: '/#galerie' },
    { name: 'Über uns', href: '/ueber-uns' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fcfbf9]/95 backdrop-blur-md shadow-xs border-b border-[#eae6de] py-3.5'
          : 'bg-[#fcfbf9]/80 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-center space-x-3 focus:outline-none">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#d4cebe] shadow-xs group-hover:border-[#a87948] transition-colors bg-[#24221e] shrink-0">
            <Image
              src="/logo.png"
              alt="Future Form Holz Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-lg sm:text-xl font-serif tracking-[0.15em] uppercase text-[#181715] group-hover:text-[#a87948] transition-colors leading-tight">
              Future Form Holz
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#8b877f] font-mono">
              Inh. Stephan Tautenhahn · Schneeberg
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors py-1 ${
                  isActive ? 'text-[#181715]' : 'text-[#615e57] hover:text-[#181715]'
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-mono tracking-normal bg-[#eae6de] text-[#a87948] font-bold rounded-sm">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#a87948]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA: Focus on Online-Shop and Anfrage */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            href="/online-shop"
            className="inline-flex items-center text-xs uppercase tracking-[0.18em] font-bold px-4 py-2 bg-[#86b817] hover:bg-[#749f13] text-[#121b06] shadow-sm hover:shadow-md transition-all rounded-xs border border-[#9ed61c]/50"
            title="Zum Online-Shop"
          >
            <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
            <span>Online-Shop</span>
          </Link>
          <Link
            href="/#kontakt"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-medium px-3.5 py-2 border border-[#181715] text-[#181715] hover:bg-[#181715] hover:text-[#fcfbf9] transition-all duration-200 group rounded-xs"
          >
            <span>Anfrage</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#181715] hover:text-[#a87948] transition-colors focus:outline-none"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#fcfbf9] border-b border-[#eae6de] shadow-xl px-6 py-8 transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-[0.25em] font-medium flex items-center justify-between py-2 border-b border-[#f4f1ea] ${
                    isActive ? 'text-[#a87948]' : 'text-[#181715]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] tracking-normal font-mono px-2 py-0.5 bg-[#eae6de] rounded-xs text-[#a87948] font-bold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-2 space-y-3">
              <Link
                href="/online-shop"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs uppercase tracking-[0.2em] font-bold py-3.5 bg-[#86b817] hover:bg-[#749f13] text-[#121b06] transition-colors flex items-center justify-center space-x-2 rounded-xs shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Zum Online-Shop</span>
              </Link>

              <Link
                href="/#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs uppercase tracking-[0.2em] font-medium py-3 border border-[#181715] bg-[#181715] text-[#fcfbf9] hover:bg-[#a87948] hover:border-[#a87948] transition-colors rounded-xs"
              >
                Unverbindliche Anfrage
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
