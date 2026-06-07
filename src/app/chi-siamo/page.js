import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
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
        <section className="relative overflow-hidden h-[80vw] md:h-[45vw]">
          <Image
            src="/hero-chi-siamo.png"
            alt="Tecnoterm – da oltre 25 anni garantiamo esperienza e comfort"
            fill
            className="object-cover object-top"
            priority
          />
        </section>

        {/* Introduzione */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Da decenni il nostro nome è legato al mondo degli impianti termici, idrici e della
              climatizzazione a Molfetta. Una tradizione familiare che nel tempo è cresciuta, si è
              evoluta e ha saputo adattarsi ai cambiamenti senza mai perdere ciò che conta davvero:
              la serietà del lavoro fatto bene, il rapporto umano con le persone e la voglia di
              migliorarsi ogni giorno.
            </p>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mt-6">
              Dietro Tecnoterm non c&apos;è soltanto un&apos;azienda, ma una famiglia che da anni
              vive questo mestiere con dedizione, trasformando esperienza e competenza in un punto
              di riferimento per il territorio.
            </p>
          </div>
        </section>

        {/* Prima generazione — Vincenzo */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src="/vincenzo-ciccia.jpeg" alt="Vincenzo Ciccia – prima generazione Tecnoterm" fill className="object-cover" />
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
                    Tutto inizia con Vincenzo, un abile saldatore che, in anni in cui il futuro si
                    costruiva con coraggio e sacrificio, decide di trasferirsi in Germania per fare
                    fortuna. Lì lavora tra cantieri, officine e grandi impianti industriali,
                    perfezionando un mestiere fatto di precisione, tecnica ed esperienza. Quando
                    successivamente arriva a Molfetta, porta con sé non solo competenze avanzate
                    per quei tempi, ma anche una mentalità innovativa e una grande cultura del
                    lavoro.
                  </p>
                  <p>
                    Negli anni contribuisce alla realizzazione di impianti per abitazioni, attività
                    commerciali e strutture importanti del territorio, diventando un professionista
                    conosciuto e rispettato. Tra i primi a credere nell&apos;evoluzione del
                    riscaldamento moderno, introduce e installa le prime caldaie a metano Sylber,
                    marchio di cui ancora oggi Tecnoterm è centro assistenza tecnica autorizzato.
                    La sua officina diventa negli anni un punto di riferimento, dove passione
                    artigianale, esperienza e affidabilità si incontrano ogni giorno.
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
                    Da questa eredità cresce Antonio, che fin da giovane dimostra grande
                    determinazione e una naturale predisposizione per il mestiere. Impara
                    rapidamente il lavoro sul campo, vivendo giornate intere tra installazioni,
                    manutenzioni e assistenze tecniche, costruendo esperienza direttamente accanto
                    al padre. Con il tempo, grazie alla passione e alla volontà di creare qualcosa
                    di suo, a luglio del 1999 fonda Tecnoterm.
                  </p>
                  <p>
                    Anno dopo anno, con sacrificio, impegno e costanza, Antonio trasforma
                    l&apos;azienda in una realtà solida e stimata a Molfetta e nei dintorni.
                    Tecnoterm cresce, amplia i propri servizi e diventa sinonimo di professionalità
                    nel settore degli impianti termici, idrici e della climatizzazione. Dalle
                    installazioni alle manutenzioni, dall&apos;assistenza tecnica specializzata ai
                    montaggi più complessi, ogni intervento viene affrontato con attenzione,
                    serietà e rispetto per il cliente.
                  </p>
                  <p>
                    Nel tempo arrivano grandi soddisfazioni: collaborazioni importanti, lavori
                    realizzati con successo e soprattutto la fiducia di intere generazioni di
                    clienti che ancora oggi continuano ad affidarsi all&apos;azienda. Un rapporto
                    costruito negli anni grazie alla qualità del lavoro e alla presenza costante
                    sul territorio.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src="/antonio-ciccia.jpeg" alt="Antonio Ciccia – fondatore Tecnoterm Molfetta" fill className="object-cover" />
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
                <Image src="/alessandro-ciccia.png" alt="Alessandro Ciccia – terza generazione Tecnoterm Molfetta" fill className="object-cover" />
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
                    Oggi questa storia continua con Alessandro, la terza generazione. Cresciuto
                    respirando fin da piccolo l&apos;atmosfera dell&apos;azienda, tra utensili,
                    officina e cantieri, sta imparando ogni giorno il mestiere con entusiasmo,
                    umiltà e voglia di migliorarsi continuamente. Accanto all&apos;esperienza
                    tramandata dalla famiglia, porta con sé una visione giovane e moderna, attenta
                    all&apos;innovazione e all&apos;evoluzione del settore.
                  </p>
                  <p>
                    L&apos;obiettivo è continuare a far crescere Tecnoterm, mantenendo vivi i
                    valori che hanno reso questa realtà ciò che è oggi: passione, affidabilità,
                    professionalità e legame con il territorio. Perché dietro ogni impianto, ogni
                    assistenza e ogni intervento, c&apos;è una storia di famiglia che continua da
                    generazioni e guarda ancora al futuro con la stessa determinazione di sempre.
                  </p>
                </div>
              </div>
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
              href="/contatti"
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
