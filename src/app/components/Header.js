import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-[#f4f4f4] text-slate-900 shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        {/* 3 colonne: [logo grande] [spacer] [social] */}
        <div className="grid grid-cols-[1fr_minmax(48px,96px)_1fr] items-center h-[144px] md:h-[160px] lg:h-[176px]">          
          {/* COLONNA 1 — LOGO (GRANDE) */}
          <div className="flex items-center h-full">
            <Image
              src="/logo.png"
              alt="Tecnoterm Logo"
              width={720}
              height={220}
              priority
              className="h-32 md:h-36 lg:h-40 xl:h-44 w-auto object-contain"
            />
          </div>

          {/* COLONNA 2 — SPACER */}
          <div aria-hidden />

          {/* COLONNA 3 — TESTI + SOCIAL */}
          <div className="flex justify-end">
            <div className="flex items-center gap-3 md:gap-4 text-lg md:text-xl text-slate-700 leading-none">
              <span className="hidden sm:inline text-sm font-medium text-slate-600">
                Seguici sui social
              </span>
              <a
                href="https://www.facebook.com/TecnotermMolfetta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook - Seguici sui social"
                className="hover:text-blue-600 transition"
                title="Seguici su Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/tecnoterm_dicicciaantonio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - Seguici sui social"
                className="hover:text-pink-500 transition"
                title="Seguici su Instagram"
              >
                <FaInstagram />
              </a>

              <span className="hidden md:inline-block h-5 w-px bg-slate-300 mx-1" />

              <span className="hidden sm:inline text-sm font-medium text-slate-600">
                Lavora con noi
              </span>
              <a
                href="https://www.linkedin.com/company/tecnoterm-di-ciccia-antonio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn - Lavora con noi"
                className="hover:text-blue-500 transition"
                title="Lavora con noi su LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
