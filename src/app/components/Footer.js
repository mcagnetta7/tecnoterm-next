import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] text-slate-800 py-6 px-6 md:px-12 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto space-y-4 md:space-y-0">
        {/* COPYRIGHT */}
        <p className="text-sm">
          © {new Date().getFullYear()} TECNOTERM di Ciccia Antonio. Tutti i diritti riservati.
        </p>

        {/* SOCIAL */}
        <div className="flex space-x-4 text-lg text-slate-700">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
