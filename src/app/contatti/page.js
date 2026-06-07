import Header from '../components/Header';
import Footer from '../components/Footer';
import ContattoForm from '../components/ContattoForm';
import Image from 'next/image';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

export const metadata = {
  title: 'Contatti | Tecnoterm Molfetta – Richiedi un Preventivo',
  description:
    'Contatta Tecnoterm a Molfetta: chiama l\'080 3352600, scrivici su WhatsApp o invia una richiesta di preventivo. Piazza Aldo Moro 3, Molfetta (BA). Serviamo tutta la provincia di Bari.',
};

export default function ContattiPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-64 md:h-96 overflow-hidden">
          <Image
            src="/contatti.png"
            alt="Tecnoterm contatti Molfetta"
            fill
            className="object-cover object-top"
            priority
          />
        </section>

        {/* Titolo */}
        <section className="bg-blue-300 py-10 md:py-14">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              I nostri contatti
            </h1>
            <p className="text-white/90 text-lg md:text-xl">
              Siamo a tua disposizione per qualsiasi informazione o intervento.
            </p>
          </div>
        </section>

        {/* Info + Mappa */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

              {/* Card info */}
              <div className="bg-slate-800 rounded-2xl p-8 shadow-lg flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-white mb-2">Dove siamo e come contattarci</h2>

                <a href="tel:0803352600" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <FaPhoneAlt className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Telefono</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition">080 3352600</p>
                  </div>
                </a>

                <a href="https://wa.me/393487297131" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">WhatsApp</p>
                    <p className="text-white font-medium group-hover:text-green-400 transition">348 7297131</p>
                  </div>
                </a>

                <a href="mailto:tecnotermciccia@libero.it" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Email</p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition break-all">tecnotermciccia@libero.it</p>
                  </div>
                </a>

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

              {/* Form preventivo */}
              <ContattoForm />
            </div>
          </div>
        </section>

        {/* CTA WhatsApp */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <FaWhatsapp className="text-5xl text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
              Scrivici su WhatsApp
            </h2>
            <p className="text-slate-600 mb-6">
              Il modo più rapido per ricevere un preventivo o fissare un intervento.
            </p>
            <a
              href="https://wa.me/393487297131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg shadow-green-500/30"
            >
              <FaWhatsapp className="text-xl" />
              Scrivici ora
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
