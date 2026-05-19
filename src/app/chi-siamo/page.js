import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FaHeart, FaShieldAlt, FaWrench, FaUsers, FaCheckCircle, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const metadata = {
  title: 'Chi Siamo | Tecnoterm',
  description:
    'Scopri la storia di Tecnoterm: una famiglia, esperienza e passione per il riscaldamento e la climatizzazione che continua da generazioni.',
};

export default function ChiSiamoPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        {/* Hero */}
        <section>
          <img
            src="/hero-chi-siamo.png"
            alt="Tecnoterm – da oltre 25 anni garantiamo esperienza e comfort"
            className="w-full h-auto block"
          />
        </section>

        {/* Introduzione */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Da oltre tre decenni, Tecnoterm rappresenta un punto di riferimento nel settore del
              riscaldamento e della climatizzazione a Molfetta e dintorni. La nostra non è solo
              un&apos;azienda, ma un percorso familiare fatto di dedizione, aggiornamento continuo e
              un profondo legame con il territorio. Ogni generazione ha aggiunto un tassello
              fondamentale, trasformando una piccola bottega artigiana in una realtà strutturata e
              all&apos;avanguardia.
            </p>
          </div>
        </section>

        {/* Prima generazione — Vincenzo */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="/vincenzo-ciccia.jpeg"
                  alt="Vincenzo Ciccia – fondatrice Tecnoterm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-300/10 mix-blend-overlay" />
              </div>

              <div>
                <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  La Prima Generazione
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Le origini con Vincenzo
                </h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Tutto ha inizio con Vincenzo, un uomo dalla straordinaria manualità e
                    dall&apos;intuito tecnico fuori dal comune. Dopo anni di dura esperienza in
                    Germania, dove ha appreso il rigore e la precisione teutonica, torna in Italia
                    portando con sé un bagaglio di conoscenze inestimabile.
                  </p>
                  <p>
                    È lui a introdurre sul territorio le prime caldaie Sylber, diventando un
                    pioniere dell&apos;assistenza tecnica specializzata. La sua officina diventa
                    presto un punto di riferimento per chi cerca non solo una riparazione, ma una
                    soluzione duratura e affidabile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seconda generazione — Antonio */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 md:order-1">
                <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  La Seconda Generazione
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  L&apos;evoluzione con Antonio
                </h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Antonio raccoglie il testimone del padre Vincenzo e porta Tecnoterm nel nuovo
                    millennio. Con una visione moderna e un costante aggiornamento professionale,
                    espande l&apos;offerta di servizi abbracciando le nuove tecnologie di
                    climatizzazione e risparmio energetico.
                  </p>
                  <p>
                    Sotto la sua guida, l&apos;azienda costruisce partnership solide con i migliori
                    brand del settore — da Daikin a Ariston — e rafforza la propria presenza nel
                    territorio pugliese, diventando un punto di riferimento riconosciuto per
                    qualità e professionalità.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="/antonio-ciccia.jpeg"
                  alt="Tecnico specializzato al lavoro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-300/10 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </section>

        {/* Terza generazione — Alessandro */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="/alessandro-ciccia.png"
                  alt="Alessandro Ciccia – terza generazione Tecnoterm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-300/10 mix-blend-overlay" />
              </div>

              <div>
                <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  La Terza Generazione
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Innovazione e futuro con Alessandro
                </h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Oggi, Alessandro guida l&apos;azienda verso le sfide del domani. Con un forte
                    focus sull&apos;innovazione tecnologica, l&apos;efficienza energetica e la
                    digitalizzazione dei servizi, Tecnoterm continua a evolversi mantenendo salde
                    le radici e i valori familiari.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valori */}
        <section className="py-16 md:py-24 bg-blue-300">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">I nostri valori</h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Ciò che ci guida ogni giorno nel nostro lavoro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
                <FaHeart className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Passione</h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  Amiamo il nostro lavoro e questo si vede in ogni intervento, dalla consulenza
                  iniziale alla manutenzione nel tempo.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
                <FaShieldAlt className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Affidabilità</h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  Mantenere le promesse e rispettare i tempi è per noi una regola fondamentale. La
                  fiducia dei clienti è il nostro bene più prezioso.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
                <FaWrench className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Competenza</h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  Formazione continua, certificazioni aggiornate e tecnologie all&apos;avanguardia
                  per garantire sempre il massimo standard qualitativo.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
                <FaUsers className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Territorio</h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  Siamo profondamente radicati nella nostra comunità. Conosciamo le esigenze locali
                  e rispondiamo con prontezza e vicinanza.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perché sceglierci */}
        <section className="py-16 md:py-24 bg-slate-800">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perché sceglierci
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Qualità e professionalità che parlano da soli
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Tecnici certificati e continuamente aggiornati',
                'Interventi rapidi e puntuali in tutta la provincia',
                'Materiali e ricambi originali di alta qualità',
                'Preventivi trasparenti senza sorprese',
                'Garanzia su tutti gli interventi eseguiti',
                'Assistenza post-vendita dedicata',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white/10">
                  <FaCheckCircle className="text-cyan-400 text-xl mt-0.5 shrink-0" />
                  <span className="text-slate-100 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dove siamo */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10 text-center">
              Dove siamo?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Info */}
              <div className="bg-slate-800 rounded-xl p-8 shadow-lg flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-red-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1">Indirizzo</p>
                    <p className="text-gray-300 text-sm">Piazza Aldo Moro, 3 — 70056 Molfetta (BA)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaClock className="text-yellow-300 text-xl mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-2">Orari di apertura</p>
                    <div className="text-gray-300 text-sm space-y-1">
                      <div className="flex justify-between gap-8">
                        <span>Lunedì – Sabato</span>
                        <span className="text-cyan-400 font-medium">9:00 – 12:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Lunedì – Venerdì</span>
                        <span className="text-cyan-400 font-medium">17:00 – 20:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mappa */}
              <div className="min-h-[280px]">
                <iframe
                  src="https://www.google.com/maps?q=Piazza+Aldo+Moro,+3,+70056+Molfetta+BA&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '280px' }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FaPhoneAlt className="text-4xl text-cyan-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Vuoi saperne di più?
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Siamo a tua disposizione per rispondere a qualsiasi domanda e trovare insieme la
              soluzione migliore per le tue esigenze.
            </p>
            <Link
              href="/#contatti"
              className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white font-semibold px-8 py-3 rounded transition duration-300"
            >
              Contattaci
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
