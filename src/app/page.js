import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Tecnoterm - Impianti e Assistenza Tecnica',
  description: 'Tecnoterm: specialisti in impianti di climatizzazione, assistenza tecnica e impianti idrici a Molfetta.',
};

const services = [
  {
    logo: '/logofuocoacqua.png',
    alt: 'Impianti di climatizzazione - logo',
    title: 'Impianti di climatizzazione invernale/estiva',
    description: 'Installiamo impianti di climatizzazione per ogni ambiente',
    href: '#climatizzazione',
  },
  {
    logo: '/logoattrezzo.png',
    alt: 'Assistenza tecnica - logo',
    title: 'Assistenza tecnica',
    description: 'Caldaie, condizionatori, pompe di calore',
    href: '/assistenza',
  },
  {
    logo: '/logocasa.png',
    alt: 'Impianti idrici e fognanti - logo',
    title: 'Impianti idrici e fognanti',
    description: 'Realizzazioni e rifacimento impianti termici, idrici e gas',
    href: '#idrici',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen md:h-screen flex flex-col md:overflow-hidden bg-white">
      <Header />

      <main className="flex-1 md:min-h-0 flex flex-col md:overflow-hidden">

        {/* Zona immagine — nascosta su mobile */}
        <div className="hidden md:block relative overflow-hidden" style={{ flex: '0 0 65%' }}>
          <img
            src="/sfondoDefinitivo6.png"
            alt="Impianto termoidraulico Tecnoterm"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[80%] to-white pointer-events-none" />
        </div>

        {/* Card servizi */}
        <div className="md:flex-1 md:min-h-0 bg-white flex items-center py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              {services.map(({ logo, alt, title, description, href }) => (
                <a
                  key={title}
                  href={href}
                  className="bg-slate-700 rounded-2xl p-5 shadow-lg border border-slate-600/40 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/40 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={alt}
                    width={55}
                    height={55}
                    className="mb-3 object-contain"
                  />
                  <h2 className="text-sm lg:text-base font-semibold text-white mb-1.5 leading-snug">
                    {title}
                  </h2>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4 mt-auto">
                    {description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white font-semibold px-5 py-1.5 rounded text-xs transition duration-300">
                      Scopri di più
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
