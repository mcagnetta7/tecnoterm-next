import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Contenuto principale */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-white font-extrabold text-xl mb-3 tracking-tight">
            <span className="text-cyan-400">Tecno</span>term
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            Soluzioni professionali per riscaldamento e climatizzazione da oltre 25 anni.
          </p>
        </div>

        {/* Link rapidi */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Link Rapidi
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-cyan-400 transition">Home</Link></li>
            <li><Link href="/chi-siamo" className="hover:text-cyan-400 transition">Chi siamo</Link></li>
            <li><Link href="/assistenza" className="hover:text-cyan-400 transition">Assistenza tecnica</Link></li>
            <li><Link href="/impianti-idrici" className="hover:text-cyan-400 transition">Impianti idrici e fognari</Link></li>
            <li><Link href="/recensioni" className="hover:text-cyan-400 transition">Recensioni</Link></li>
            <li><Link href="/contatti" className="hover:text-cyan-400 transition">Contatti</Link></li>
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Contatti
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-red-400 mt-0.5 shrink-0" />
              <span>Piazza Aldo Moro, 3<br />70056 Molfetta (BA)</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-400 shrink-0" />
              <a href="tel:0803352600" className="hover:text-cyan-400 transition">080 3352600</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400 shrink-0" />
              <a href="mailto:tecnotermciccia@libero.it" className="hover:text-cyan-400 transition break-all">
                tecnotermciccia@libero.it
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Seguici
          </h4>
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.facebook.com/TecnotermMolfetta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-slate-400 hover:text-blue-400 transition hover:scale-110 transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/tecnoterm_dicicciaantonio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-slate-400 hover:text-pink-400 transition hover:scale-110 transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/tecnoterm-di-ciccia-antonio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-blue-500 transition hover:scale-110 transform"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider + bottom bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Tecnoterm di Ciccia Antonio. Tutti i diritti riservati.</p>
          <div className="flex gap-4">
            <a
              href="https://www.iubenda.com/privacy-policy/77550649"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/77550649/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
