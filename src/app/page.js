import Header from './components/Header';
import Footer from './components/Footer';
import PreventivoForm from './components/PreventivoForm';
import Image from 'next/image';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaStar,
} from 'react-icons/fa';

export const metadata = {
  title: 'Caldaie e Climatizzatori Molfetta | Assistenza Tecnica Autorizzata',
  description: 'Assistenza caldaie Molfetta e Puglia: installazione, manutenzione e riparazione. Centro autorizzato Sylber, Unical, General. Climatizzatori, pompe di calore, impianti idrici. Interventi rapidi provincia Bari.',
};

const services = [
  {
    logo: '/logoattrezzo.png',
    alt: 'Assistenza tecnica - logo',
    title: 'Assistenza tecnica',
    description: 'Caldaie, condizionatori, pompe di calore',
    href: '/assistenza',
  },
  {
    logo: '/logocasa.png',
    alt: 'Impianti idrici e fognari - logo',
    title: 'Impianti idrici e fognari',
    description: 'Realizzazioni e rifacimento impianti termici, idrici e gas',
    href: '/impianti-idrici',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 md:min-h-0 flex flex-col">

        {/* ── HERO MOBILE ──────────────────────────────────── */}
        <div className="md:hidden relative text-center">
          <Image
            src="/sfondo_mobile.png"
            alt="Tecnoterm Molfetta - Impianti riscaldamento e climatizzazione"
            width={800}
            height={1200}
            className="w-full h-auto block"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 z-10">
            <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-2">
              Dal 1999 a Molfetta
            </p>
            <h1 className="text-3xl font-extrabold text-white mb-2" style={{ letterSpacing: '-0.02em' }}>
              Tecnoterm - Impianti Riscaldamento Molfetta
            </h1>
            <p className="text-white/90 text-sm leading-relaxed max-w-xs mx-auto mb-5">
              Specialisti in impianti termici, idrici e climatizzazione.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="tel:0803352600"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
              >
                <FaPhoneAlt className="text-xs" />
                080 3352600
              </a>
              <a
                href="https://wa.me/393487297131"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── HERO IMAGE DESKTOP ───────────────────────────── */}
        <div className="hidden md:block relative z-0 h-96 lg:h-[700px]">
          <Image
            src="/sfondoDefinitivo6.png"
            alt="Impianto termoidraulico Tecnoterm Molfetta"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[70%] to-white pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent to-white pointer-events-none" style={{ backdropFilter: 'blur(8px)' }} />
        </div>

        {/* ── CARDS ────────────────────────────────────────── */}
        <div className="md:-mt-56 lg:-mt-80 relative z-10 bg-white md:bg-white lg:bg-transparent flex items-center py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto w-full">

            {/* Mobile */}
            <div className="flex flex-wrap justify-center gap-4 md:hidden">
              {services.map(({ logo, alt, title, description, href }) => (
                <a
                  key={title}
                  href={href}
                  className="w-[calc(50%-0.5rem)] bg-slate-700 rounded-2xl p-4 shadow-lg border border-slate-600/40 flex flex-col items-center text-center hover:shadow-cyan-400/40 transition-all duration-300"
                >
                  <Image src={logo} alt={alt} width={44} height={44} className="mb-2 object-contain" />
                  <h2 className="text-xs font-semibold text-white mb-1.5 leading-snug">{title}</h2>
                  <p className="text-gray-300 text-[11px] leading-relaxed mb-3">{description}</p>
                  <span className="mt-auto inline-block bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-semibold px-3 py-1 rounded text-[11px]">
                    Scopri
                  </span>
                </a>
              ))}
            </div>

            {/* Desktop: 2 colonne centrate */}
            <div className="hidden md:grid grid-cols-2 gap-4 lg:gap-5 max-w-2xl mx-auto">
              {services.map(({ logo, alt, title, description, href }) => (
                <a
                  key={title}
                  href={href}
                  className="bg-slate-700 rounded-2xl p-5 shadow-lg border border-slate-600/40 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/40 transition-all duration-300"
                >
                  <Image src={logo} alt={alt} width={55} height={55} className="mb-3 object-contain" />
                  <h2 className="text-sm lg:text-base font-semibold text-white mb-1.5 leading-snug">{title}</h2>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4 mt-auto">{description}</p>
                  <div className="mt-auto">
                    <span className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white font-semibold px-5 py-1.5 rounded text-xs transition duration-300">
                      Scopri
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── I NOSTRI CONTATTI ─────────────────────────────── */}
        <div className="bg-slate-800 px-6 md:px-8 pt-16 md:pt-24 lg:pt-32 pb-10 md:pb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">I nostri contatti</h2>

            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">

              {/* Contatti - Colonna sinistra */}
              <div className="flex flex-col gap-5 md:gap-6">
                {/* Telefono */}
                <a href="tel:0803352600" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <FaPhoneAlt className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Telefono</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition">080 3352600</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/393487297131" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">WhatsApp</p>
                    <p className="text-white font-medium group-hover:text-green-400 transition">348 7297131</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:tecnotermciccia@libero.it" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Email</p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition break-all">tecnotermciccia@libero.it</p>
                  </div>
                </a>

                {/* Indirizzo */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Indirizzo</p>
                    <p className="text-white font-medium">Piazza Aldo Moro, 3</p>
                    <p className="text-slate-300 text-sm">70056 Molfetta (BA)</p>
                  </div>
                </div>

                {/* Orari */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                    <FaClock className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Orari di apertura</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex gap-6">
                        <span className="text-slate-300">Lun – Sab</span>
                        <span className="text-cyan-400 font-medium">9:00 – 12:00</span>
                      </div>
                      <div className="flex gap-6">
                        <span className="text-slate-300">Lun – Ven</span>
                        <span className="text-cyan-400 font-medium">17:00 – 20:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mappa - Colonna destra */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-80 md:h-96 lg:h-full">
                <iframe
                  src="https://www.google.com/maps?q=Piazza+Aldo+Moro,+3,+70056+Molfetta+BA&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Posizione Tecnoterm"
                />
              </div>

            </div>
          </div>
        </div>

        {/* ── PREVENTIVO ───────────────────────────────────── */}
        <div id="preventivo" className="bg-slate-800 px-6 md:px-8 py-8 md:py-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Richiedi un preventivo
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                Compila il form e riceverai una risposta il prima possibile
              </p>
            </div>
            <PreventivoForm />
          </div>
        </div>

        {/* ── RECENSIONI GOOGLE ───────────────────────────────── */}
        <div className="bg-blue-300 px-6 md:px-8 py-6 md:py-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white mb-1.5 md:mb-2">
                Scopri le nostre recensioni
              </h2>
              <p className="text-white/80 text-xs md:text-sm mb-4">
                Leggi cosa dicono i nostri clienti su Google
              </p>
              <a
                href="https://www.google.com/search?sca_esv=ea6914c6065b5ac3&sxsrf=APpeQnuXXSrE-IMgaSFOmAK34Ox5bwZqSg:1782851716946&q=tecnoterm+molfetta&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_6Y5zLIWJSiLdSiZXBnQj2ezWIXADBoWUrmNSRVdPPeruBJLLNFyckzv-1Us2R9Uo8_ukOg%3D&uds=AJ5uw1-YMpuyF7uCL7tivJR8dYckk78IA-mb7_-Yvs2eCZ5IAojrFs8WglZWXxwk26f8qIt19HXAHKZPicZq3iDWJHbQF8ki21IRPrArxyWfqai4cUhqaeI&sa=X&ved=2ahUKEwjpjpma6K-VAxUq3gIHHcipPfkQ3PALegQIGxAE&biw=1536&bih=730&dpr=1.25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-4 md:px-5 py-2 rounded-full hover:bg-blue-100 transition-all duration-300 text-xs md:text-sm"
              >
                <FaStar className="text-yellow-500 text-xs" />
                <span className="hidden md:inline">Vedi le nostre</span> recensioni
              </a>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
