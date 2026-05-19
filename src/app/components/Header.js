"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaHome } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isChiSiamo = pathname === '/chi-siamo';

  const navLinkClass = (active) =>
    `px-4 py-2 text-sm font-semibold text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 transition ${
      active ? 'after:w-full bg-white/20 rounded' : 'after:w-0 hover:after:w-full'
    }`;

  return (
    <header className="bg-blue-300 text-white shadow-lg sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">

        {/* ── BARRA MOBILE / TABLET (< lg) ── */}
        <div className="flex items-center justify-between h-16 lg:hidden">
          <Image
            src="/logo.png"
            alt="Tecnoterm Logo"
            width={720}
            height={220}
            priority
            className="h-10 w-auto object-contain"
          />

          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/TecnotermMolfetta" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-yellow-300 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/tecnoterm_dicicciaantonio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-pink-300 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/tecnoterm-di-ciccia-antonio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-yellow-300 transition">
              <FaLinkedinIn />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col gap-1.5 p-2 ml-1"
              aria-label="Menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* ── BARRA DESKTOP (lg+) ── */}
        <div className="hidden lg:grid grid-cols-[240px_1fr_auto] items-center h-20 gap-4">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Tecnoterm Logo"
            width={720}
            height={220}
            priority
            className="h-16 w-auto object-contain"
          />

          {/* Navigazione */}
          <nav className="flex items-center justify-center">
            <Link href="/" aria-label="Home" className="px-3 py-2 text-white hover:text-white/70 transition">
              <FaHome className="text-lg" />
            </Link>
            <a href="/chi-siamo" className={navLinkClass(isChiSiamo)}>Chi siamo</a>
            <a href="/contatti" className={navLinkClass(false)}>I nostri contatti</a>

            <div className="relative group">
              <button className="px-4 py-2 text-sm font-semibold text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:w-0 group-hover:after:w-full after:transition-all after:duration-300 transition">
                Servizi
              </button>
              <div className="absolute left-0 mt-3 w-56 bg-blue-500 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <a href="#climatizzazione" className="block px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition">Impianti climatizzazione</a>
                  <a href="/assistenza"      className="block px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition">Assistenza</a>
                  <a href="#idrici"          className="block px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition">Impianti idrici</a>
                </div>
              </div>
            </div>

            <a href="/recensioni" className={navLinkClass(false)}>Lascia una recensione</a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3 text-sm font-semibold">
            <span>Seguici</span>
            <a href="https://www.facebook.com/TecnotermMolfetta" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-yellow-300 transition hover:scale-125 transform">
              <FaFacebookF className="text-base" />
            </a>
            <a href="https://www.instagram.com/tecnoterm_dicicciaantonio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-pink-300 transition hover:scale-125 transform">
              <FaInstagram className="text-base" />
            </a>
            <span>Lavora con noi</span>
            <a href="https://www.linkedin.com/company/tecnoterm-di-ciccia-antonio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-yellow-300 transition hover:scale-125 transform">
              <FaLinkedinIn className="text-base" />
            </a>
          </div>
        </div>
      </div>

      {/* ── MENU MOBILE A TENDINA ── */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1 max-w-xl mx-auto">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2.5 text-sm font-medium text-slate-700 hover:text-cyan-600 border-b border-slate-100 flex items-center gap-2 transition">
              <FaHome /> Home
            </Link>
            <a
              href="/chi-siamo"
              className={`py-2.5 text-sm font-medium border-b border-slate-100 transition ${isChiSiamo ? 'text-cyan-600 font-semibold' : 'text-slate-700 hover:text-cyan-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chi siamo
            </a>
            <a href="/contatti" className="py-2.5 text-sm font-medium text-slate-700 hover:text-cyan-600 border-b border-slate-100 transition" onClick={() => setIsMobileMenuOpen(false)}>
              I nostri contatti
            </a>

            <div className="border-b border-slate-100">
              <p className="py-2.5 text-sm font-medium text-slate-700">Servizi</p>
              <div className="pl-4 flex flex-col gap-1 pb-2 border-l-2 border-cyan-300">
                <a href="#climatizzazione" className="py-1 text-xs font-medium text-slate-600 hover:text-cyan-600 transition" onClick={() => setIsMobileMenuOpen(false)}>Impianti climatizzazione</a>
                <a href="/assistenza"      className="py-1 text-xs font-medium text-slate-600 hover:text-cyan-600 transition" onClick={() => setIsMobileMenuOpen(false)}>Assistenza</a>
                <a href="#idrici"          className="py-1 text-xs font-medium text-slate-600 hover:text-cyan-600 transition" onClick={() => setIsMobileMenuOpen(false)}>Impianti idrici</a>
              </div>
            </div>

            <a href="/recensioni" className="py-2.5 text-sm font-medium text-slate-700 hover:text-cyan-600 transition" onClick={() => setIsMobileMenuOpen(false)}>
              Lascia una recensione
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
