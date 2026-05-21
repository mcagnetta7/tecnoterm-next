import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import {
  FaTint,
  FaFire,
  FaSun,
  FaHome,
  FaWrench,
  FaIndustry,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaLeaf,
  FaSnowflake,
  FaClipboardList,
  FaDraftingCompass,
  FaHardHat,
  FaThumbsUp,
} from 'react-icons/fa';

export const metadata = {
  title: 'Impianti Idrici e Fognanti | Tecnoterm',
  description:
    'Tecnoterm realizza e ristruttura impianti termici, idrici, fognanti, a pavimento e pannelli solari a Molfetta e provincia. Progettazione e posa chiavi in mano.',
};

const SERVIZI = [
  { Icon: FaFire,       label: 'Impianti termici a radiatori',       desc: 'Progettazione e installazione di impianti di riscaldamento a radiatori per ogni tipo di abitazione.' },
  { Icon: FaTint,       label: 'Riscaldamento a pavimento radiante',  desc: 'Posa di pannelli radianti idronici per un comfort uniforme e consumi ridotti.' },
  { Icon: FaHome,       label: 'Impianti idrici sanitari',            desc: 'Realizzazione completa degli impianti acqua calda e fredda per bagni, cucine e locali tecnici.' },
  { Icon: FaIndustry,   label: 'Impianti fognanti e scarichi',        desc: 'Installazione e rifacimento di reti di scarico e fognatura per uso civile e commerciale.' },
  { Icon: FaSun,        label: 'Pannelli solari termici',             desc: 'Impianti solari termici per produzione di acqua calda sanitaria e supporto al riscaldamento.' },
  { Icon: FaLeaf,       label: 'Impianti a gas',                     desc: 'Realizzazione e adeguamento normativo di impianti a gas metano per uso domestico e commerciale.' },
  { Icon: FaWrench,     label: 'Rifacimento impianti esistenti',      desc: 'Ristrutturazione completa di impianti obsoleti, con materiali moderni e conformi alle normative vigenti.' },
  { Icon: FaSnowflake,  label: 'Impianti in nuove costruzioni',       desc: 'Collaborazione con imprese edili per la realizzazione di tutti gli impianti in fase di costruzione.' },
];

const STEPS = [
  { Icon: FaClipboardList, n: '01', label: 'Sopralluogo gratuito',      desc: 'Valutiamo la situazione esistente, ascoltiamo le esigenze e prendiamo tutte le misure necessarie.' },
  { Icon: FaDraftingCompass, n: '02', label: 'Progettazione e preventivo', desc: 'Elaboriamo una soluzione su misura con un preventivo dettagliato e senza sorprese.' },
  { Icon: FaHardHat,       n: '03', label: 'Realizzazione',             desc: 'Eseguiamo i lavori con materiali di qualità, rispettando tempi e modalità concordate.' },
  { Icon: FaThumbsUp,      n: '04', label: 'Collaudo e consegna',       desc: 'Testiamo ogni impianto prima della consegna e forniamo tutta la documentazione richiesta.' },
];

export default function ImpiantiIdriciPage() {
  return (
    <>
      <Header />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="bg-blue-300 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              Impianti idrici e fognanti
            </h1>
            <p className="text-white/90 text-lg md:text-xl">
              Dalla progettazione alla posa chiavi in mano: realizziamo e ristrutturiamo
              impianti termici, idrici e fognanti per abitazioni, uffici e strutture commerciali.
            </p>
          </div>
        </section>

        {/* ── Intro ────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Ogni impianto idraulico nasce da un progetto attento e da materiali scelti con cura.
              Che si tratti di una nuova costruzione, di una ristrutturazione o di un rifacimento,
              seguiamo ogni fase del lavoro con la competenza e la serietà che ci contraddistinguono
              da oltre 25 anni sul territorio.
            </p>
          </div>
        </section>

        {/* ── Sezione 1: Ristrutturazioni ──────────────────── */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Immagine */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="/bg-termoidraulico.jpg"
                  alt="Realizzazione impianto termoidraulico"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/20" />
              </div>

              {/* Testo */}
              <div>
                <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  Realizzazioni e ristrutturazioni
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Nuovi impianti e rifacimenti completi
                </h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Che si tratti di rinnovare un impianto datato o di realizzarne uno da zero,
                    gestiamo l&apos;intero processo: dal sopralluogo alla progettazione, dalla
                    posa alla messa in funzione. Lavoriamo sia in nuove costruzioni che in
                    ristrutturazioni di abitazioni esistenti, garantendo sempre il rispetto delle
                    normative vigenti.
                  </p>
                  <p>
                    Ogni intervento è documentato e collaudato prima della consegna. Utilizziamo
                    solo materiali certificati e componentistica di primarie marche, per garantire
                    lunga durata e massima affidabilità nel tempo.
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-2">
                  {['Impianti conformi D.M. 37/2008', 'Materiali certificati CE', 'Collaudo finale incluso'].map((v) => (
                    <div key={v} className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-500 shrink-0" />
                      <span className="text-slate-700 font-medium text-sm">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sezione 2: Riscaldamento a pavimento ─────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Testo */}
              <div className="order-2 md:order-1">
                <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  Comfort e risparmio energetico
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Riscaldamento a pavimento radiante
                </h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Il riscaldamento a pavimento è la soluzione moderna per il massimo comfort
                    abitativo. I pannelli radianti distribuiscono il calore in modo uniforme su
                    tutta la superficie, eliminando le correnti d&apos;aria tipiche dei
                    tradizionali radiatori e garantendo una temperatura omogenea in ogni angolo
                    dell&apos;ambiente.
                  </p>
                  <p>
                    Funzionando a temperature più basse rispetto ai radiatori convenzionali,
                    si integra perfettamente con caldaie a condensazione e pompe di calore,
                    riducendo i consumi fino al 15–20% rispetto a un impianto tradizionale.
                    Ideale sia in nuove costruzioni che in ristrutturazioni.
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-2">
                  {['Temperatura uniforme in tutto l\'ambiente', 'Compatibile con pompe di calore', 'Risparmio energetico fino al 20%'].map((v) => (
                    <div key={v} className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-500 shrink-0" />
                      <span className="text-slate-700 font-medium text-sm">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual decorativo */}
              <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,.05) 30px, rgba(255,255,255,.05) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,.05) 30px, rgba(255,255,255,.05) 31px)' }}
                />
                <div className="text-center relative z-10 p-8">
                  <div className="w-24 h-24 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                    <FaTint className="text-5xl text-cyan-400" />
                  </div>
                  <p className="text-white font-bold text-2xl mb-2">Riscaldamento radiante</p>
                  <p className="text-slate-300 text-sm">Idronico a bassa temperatura</p>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    {[['28–35°C', 'Temperatura fluido'], ['20%', 'Risparmio medio'], ['100%', 'Comfort uniforme']].map(([val, lab]) => (
                      <div key={lab}>
                        <p className="text-cyan-400 font-bold text-xl">{val}</p>
                        <p className="text-slate-400 text-xs mt-1">{lab}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sezione 3: Pannelli solari ───────────────────── */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Visual decorativo */}
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gradient-to-br from-amber-900/80 to-orange-800/60 flex items-center justify-center relative">
                <div className="absolute inset-0"
                  style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(251,191,36,0.15) 0%, transparent 60%)' }}
                />
                <div className="text-center relative z-10 p-8">
                  <div className="w-24 h-24 rounded-full bg-amber-400/20 flex items-center justify-center mx-auto mb-6">
                    <FaSun className="text-5xl text-amber-300" />
                  </div>
                  <p className="text-white font-bold text-2xl mb-2">Solare termico</p>
                  <p className="text-amber-200 text-sm">Energia rinnovabile per casa tua</p>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    {[['70%', 'ACS coperta'], ['50%', 'Riscaldamento'], ['25 anni', 'Vita utile']].map(([val, lab]) => (
                      <div key={lab}>
                        <p className="text-amber-300 font-bold text-xl">{val}</p>
                        <p className="text-amber-100/70 text-xs mt-1">{lab}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testo */}
              <div>
                <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  Energia rinnovabile
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Pannelli solari termici
                </h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    I pannelli solari termici sfruttano l&apos;energia del sole per produrre acqua
                    calda sanitaria e supportare il riscaldamento degli ambienti. Una scelta
                    intelligente che riduce sensibilmente la bolletta energetica e
                    l&apos;impatto ambientale della tua abitazione.
                  </p>
                  <p>
                    Progettiamo e installiamo impianti solari termici integrati con i sistemi di
                    riscaldamento esistenti — caldaia, pompa di calore o riscaldamento a
                    pavimento — massimizzando il rendimento in ogni stagione dell&apos;anno.
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-2">
                  {['Fino al 70% di ACS gratuita dal sole', 'Incentivi e detrazioni fiscali', 'Integrazione con impianto esistente'].map((v) => (
                    <div key={v} className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-500 shrink-0" />
                      <span className="text-slate-700 font-medium text-sm">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cosa realizziamo ─────────────────────────────── */}
        <section className="py-16 md:py-24 bg-blue-300">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Cosa realizziamo
              </h2>
              <p className="text-white/85 text-lg max-w-2xl mx-auto">
                Una gamma completa di servizi per ogni esigenza, dalla piccola abitazione
                al grande cantiere.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVIZI.map(({ Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon className="text-xl text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 leading-snug">{label}</h3>
                  <p className="text-white/75 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Come lavoriamo ───────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
                Come lavoriamo
              </h2>
              <p className="text-slate-500 text-lg">
                Un processo chiaro e trasparente, dalla prima chiamata alla consegna finale.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Linea di connessione desktop */}
              <div className="hidden md:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-cyan-300 to-cyan-500" />

              {STEPS.map(({ Icon, n, label, desc }) => (
                <div key={n} className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-400/30 mb-4 z-10">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-1">{n}</span>
                  <h3 className="text-slate-800 font-bold text-base mb-2">{label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-slate-800">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hai un progetto in mente?
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Raccontaci le tue esigenze: sopralluogo gratuito e preventivo senza impegno.
              Siamo operativi a Molfetta e in tutta la provincia di Bari.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0803352600"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white font-semibold px-7 py-3 rounded-full transition duration-300 shadow-lg shadow-cyan-500/20"
              >
                <FaPhoneAlt />
                080 3352600
              </a>
              <a
                href="https://wa.me/393487297131"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3 rounded-full transition duration-300 shadow-lg shadow-green-500/20"
              >
                <FaWhatsapp className="text-xl" />
                Scrivici su WhatsApp
              </a>
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3 rounded-full transition duration-300"
              >
                Richiedi preventivo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
