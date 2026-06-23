"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaHome, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAssistenzaOpen, setIsMobileAssistenzaOpen] = useState(false);
  const pathname = usePathname();
  const isChiSiamo = pathname === '/chi-siamo';

  const navLinkClass = (active) =>
    `px-4 py-2 text-sm font-semibold text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 transition ${
      active ? 'after:w-full bg-white/20 rounded' : 'after:w-0 hover:after:w-full'
    }`;

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setIsMobileAssistenzaOpen(false);
  };

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

            {/* Dropdown Servizi */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-semibold text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:w-0 group-hover:after:w-full after:transition-all after:duration-300 transition">
                Servizi
              </button>

              {/* Livello 1 */}
              <div className="absolute left-0 mt-3 w-52 bg-blue-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -translate-y-2 group-hover:translate-y-0 shadow-xl rounded-b-lg">
                <div className="py-2">

                  {/* Assistenza — con sottomenu */}
                  <div className="relative group/assistenza">
                    <div className="flex items-center justify-between px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition cursor-default">
                      <span>Assistenza</span>
                      <FaChevronRight className="text-[10px] opacity-70" />
                    </div>

                    {/* Livello 2 */}
                    <div className="absolute left-full top-0 w-52 bg-blue-600 opacity-0 invisible group-hover/assistenza:opacity-100 group-hover/assistenza:visible transition-all duration-200 shadow-xl rounded-r-lg rounded-bl-lg">
                      <div className="py-2">
                        <Link href="/assistenza?cat=caldaie#catalogo"        className="block px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition" rel="nofollow">Caldaie</Link>
                        <Link href="/assistenza?cat=scaldabagni#catalogo"    className="block px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition" rel="nofollow">Scaldabagni</Link>
                        <Link href="/assistenza?cat=pompe#catalogo"          className="block px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition" rel="nofollow">Pompe di calore</Link>
                        <Link href="/assistenza?cat=climatizzatori#catalogo" className="block px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition" rel="nofollow">Climatizzatori</Link>
                      </div>
                    </div>
                  </div>

                  {/* Impianti idrici */}
                  <Link href="/impianti-idrici" className="block px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition">Impianti idrici e fognari</Link>
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
            <Link href="/" onClick={closeMobile} className="py-2.5 text-sm font-medium text-slate-700 hover:text-cyan-600 border-b border-slate-100 flex items-center gap-2 transition">
              <FaHome /> Home
            </Link>
            <a
              href="/chi-siamo"
              className={`py-2.5 text-sm font-medium border-b border-slate-100 transition ${isChiSiamo ? 'text-cyan-600 font-semibold' : 'text-slate-700 hover:text-cyan-600'}`}
              onClick={closeMobile}
            >
              Chi siamo
            </a>
            <a href="/contatti" className="py-2.5 text-sm font-medium text-slate-700 hover:text-cyan-600 border-b border-slate-100 transition" onClick={closeMobile}>
              I nostri contatti
            </a>

            {/* Servizi mobile */}
            <div className="border-b border-slate-100">
              <p className="py-2.5 text-sm font-medium text-slate-700">Servizi</p>
              <div className="pl-4 flex flex-col gap-1 pb-2 border-l-2 border-cyan-300">

                {/* Assistenza con sub-toggle */}
                <div>
                  <button
                    onClick={() => setIsMobileAssistenzaOpen(!isMobileAssistenzaOpen)}
                    className="w-full flex items-center justify-between py-1.5 text-xs font-medium text-slate-600 hover:text-cyan-600 transition"
                  >
                    <span>Assistenza</span>
                    <FaChevronRight className={`text-[10px] transition-transform duration-200 ${isMobileAssistenzaOpen ? 'rotate-90' : ''}`} />
                  </button>

                  {isMobileAssistenzaOpen && (
                    <div className="pl-3 flex flex-col gap-0.5 pb-1 border-l border-cyan-200 ml-1 mt-0.5">
                      <Link href="/assistenza?cat=caldaie#catalogo"        className="py-1.5 text-xs text-slate-500 hover:text-cyan-600 transition" onClick={closeMobile} rel="nofollow">Caldaie</Link>
                      <Link href="/assistenza?cat=scaldabagni#catalogo"    className="py-1.5 text-xs text-slate-500 hover:text-cyan-600 transition" onClick={closeMobile} rel="nofollow">Scaldabagni</Link>
                      <Link href="/assistenza?cat=pompe#catalogo"          className="py-1.5 text-xs text-slate-500 hover:text-cyan-600 transition" onClick={closeMobile} rel="nofollow">Pompe di calore</Link>
                      <Link href="/assistenza?cat=climatizzatori#catalogo" className="py-1.5 text-xs text-slate-500 hover:text-cyan-600 transition" onClick={closeMobile} rel="nofollow">Climatizzatori</Link>
                    </div>
                  )}
                </div>

                <Link href="/impianti-idrici" className="py-1 text-xs font-medium text-slate-600 hover:text-cyan-600 transition" onClick={closeMobile}>Impianti idrici e fognari</Link>
              </div>
            </div>

            <a href="/recensioni" className="py-2.5 text-sm font-medium text-slate-700 hover:text-cyan-600 transition" onClick={closeMobile}>
              Lascia una recensione
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
