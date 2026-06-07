import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaTint,
  FaFire,
  FaSun,
  FaWrench,
  FaIndustry,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaTools,
} from 'react-icons/fa';

export const metadata = {
  title: 'Impianti Idrici, Termici e Fognari a Molfetta | Tecnoterm',
  description:
    'Tecnoterm realizza impianti idrici, termici, solari e fognari a Molfetta e provincia di Bari. Riparazioni idrauliche, montaggio sanitari e rifacimento impianti chiavi in mano.',
};

const SERVIZI = [
  { Icon: FaFire,     label: 'Impianti Termici',         desc: 'Realizziamo impianti termici civili e industriali per garantire massimo comfort ed efficienza energetica, con sistemi a pavimento radiante e impianti tradizionali.' },
  { Icon: FaTint,     label: 'Impianti Idrici',           desc: 'Realizzazione e installazione di impianti idrici completi con attenzione ai dettagli e componenti certificati per sicurezza e affidabilità nel tempo.' },
  { Icon: FaSun,      label: 'Impianti Solari',           desc: 'Installiamo pannelli solari per migliorare l\'efficienza energetica degli edifici, soluzioni innovative e sostenibili per sfruttare l\'energia rinnovabile.' },
  { Icon: FaIndustry, label: 'Impianti Fognari',          desc: 'Realizziamo impianti fognari efficienti e conformi agli standard di sicurezza, con materiali resistenti e tecniche affidabili per sistemi duraturi.' },
  { Icon: FaWrench,   label: 'Riparazioni Idrauliche',    desc: 'Interventi rapidi e professionali per la riparazione di guasti idraulici, perdite, tubazioni e malfunzionamenti di ogni tipo.' },
  { Icon: FaTools,    label: 'Montaggi',                  desc: 'Montaggio di sanitari, rubinetterie e componenti idraulici con precisione e cura dei dettagli per funzionalità, estetica e affidabilità.' },
];


export default function ImpiantiIdriciPage() {
  return (
    <>
      <Header />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1646009445351-b8192e095f3a?w=1920&q=80&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-blue-950/70" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
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

        {/* ── Sezione 1: Impianti Termici ──────────────────── */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src="/impianti/termici.jpeg" alt="Impianto termico Molfetta" fill className="object-cover" />
              </div>

              <div>
                <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  Riscaldamento civile e industriale
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Impianti Termici
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Realizziamo impianti termici civili e industriali progettati per garantire
                  il massimo comfort e un&apos;elevata efficienza energetica. Installiamo sistemi
                  a pavimento radiante e impianti tradizionali, utilizzando tecnologie moderne
                  e materiali di qualità per assicurare prestazioni affidabili, consumi ridotti
                  e lunga durata nel tempo.
                </p>
                <div className="mt-8 flex flex-col gap-2">
                  {['Impianti a pavimento radiante', 'Impianti tradizionali a radiatori', 'Tecnologie moderne e certificate'].map((v) => (
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

        {/* ── Sezione 2: Impianti Idrici ───────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div className="order-2 md:order-1">
                <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  Sicurezza e funzionalità
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Impianti Idrici
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Ci occupiamo della realizzazione e installazione di impianti idrici completi,
                  studiati per offrire sicurezza, funzionalità ed efficienza. Ogni intervento
                  viene eseguito con attenzione ai dettagli e con l&apos;utilizzo di componenti
                  certificati, per garantire un impianto affidabile e durevole nel tempo.
                </p>
                <div className="mt-8 flex flex-col gap-2">
                  {['Componenti certificati CE', 'Impianti acqua calda e fredda', 'Conformità alle normative vigenti'].map((v) => (
                    <div key={v} className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-500 shrink-0" />
                      <span className="text-slate-700 font-medium text-sm">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src="/impianti/idrici.jpeg" alt="Impianti idrici Molfetta" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Sezione 3: Impianti Solari ───────────────────── */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src="/impianti/solari.jpeg" alt="Impianti solari termici Molfetta" fill className="object-cover" />
              </div>

              <div>
                <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  Energia rinnovabile
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Impianti Solari
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Installiamo pannelli solari progettati per migliorare l&apos;efficienza energetica
                  degli edifici e ridurre i consumi. Offriamo soluzioni innovative e sostenibili,
                  pensate per sfruttare al meglio l&apos;energia rinnovabile e garantire risparmio
                  economico e rispetto per l&apos;ambiente.
                </p>
                <div className="mt-8 flex flex-col gap-2">
                  {['Soluzioni innovative e sostenibili', 'Risparmio economico garantito', 'Integrazione con impianto esistente'].map((v) => (
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

        {/* ── Sezione 4: Impianti Fognari ─────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div className="order-2 md:order-1">
                <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  Efficienza e sicurezza
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Impianti Fognari
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Realizziamo impianti fognari efficienti e conformi agli standard di sicurezza,
                  occupandoci di ogni fase del lavoro con professionalità e precisione. Grazie
                  all&apos;utilizzo di materiali resistenti e tecniche affidabili, assicuriamo
                  sistemi funzionali e duraturi nel tempo.
                </p>
                <div className="mt-8 flex flex-col gap-2">
                  {['Conformi agli standard di sicurezza', 'Materiali resistenti e certificati', 'Ogni fase seguita con precisione'].map((v) => (
                    <div key={v} className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-500 shrink-0" />
                      <span className="text-slate-700 font-medium text-sm">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src="/impianti/fognari.jpeg" alt="Impianti fognari Molfetta" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Sezione 5: Riparazioni Idrauliche ────────────── */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gradient-to-br from-red-900/60 to-slate-800 flex items-center justify-center relative">
                <div className="absolute inset-0"
                  style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, rgba(239,68,68,0.1) 0%, transparent 60%)' }}
                />
                <div className="text-center relative z-10 p-8">
                  <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                    <FaWrench className="text-5xl text-red-300" />
                  </div>
                  <p className="text-white font-bold text-2xl mb-2">Riparazioni</p>
                  <p className="text-red-200 text-sm">Intervento rapido e professionale</p>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    {[['Rapido', 'Intervento'], ['Sicuro', 'Ripristino'], ['✓', 'Garanzia']].map(([val, lab]) => (
                      <div key={lab}>
                        <p className="text-red-300 font-bold text-xl">{val}</p>
                        <p className="text-slate-400 text-xs mt-1">{lab}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  Pronto intervento
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Riparazioni Idrauliche
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Effettuiamo interventi rapidi e professionali per la riparazione di guasti
                  idraulici, perdite, tubazioni e malfunzionamenti di ogni tipo. Garantiamo
                  assistenza e soluzioni efficaci per ripristinare il corretto funzionamento
                  degli impianti in totale sicurezza.
                </p>
                <div className="mt-8 flex flex-col gap-2">
                  {['Interventi rapidi su guasti e perdite', 'Ripristino in totale sicurezza', 'Soluzioni efficaci e durature'].map((v) => (
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

        {/* ── Sezione 6: Montaggi ──────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div className="order-2 md:order-1">
                <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  Precisione e cura dei dettagli
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Montaggi
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Eseguiamo il montaggio di sanitari, rubinetterie e componenti idraulici con
                  precisione e cura dei dettagli. Ogni installazione viene eseguita al meglio
                  per garantire funzionalità, estetica e affidabilità nel tempo.
                </p>
                <div className="mt-8 flex flex-col gap-2">
                  {['Sanitari e rubinetterie', 'Componenti idraulici di qualità', 'Funzionalità ed estetica garantite'].map((v) => (
                    <div key={v} className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-500 shrink-0" />
                      <span className="text-slate-700 font-medium text-sm">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src="/impianti/montaggi.jpeg" alt="Montaggi idraulici Molfetta" fill className="object-cover" />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
