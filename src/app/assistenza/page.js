"use client";

import { Suspense } from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import {
  FaFire,
  FaSnowflake,
  FaWater,
  FaLeaf,
  FaPhoneAlt,
  FaWhatsapp,
  FaFilePdf,
  FaTimes,
  FaShieldAlt,
  FaCertificate,
  FaTools,
  FaAward,
  FaChevronDown,
} from "react-icons/fa";

/* ─── Categorie filtro ─────────────────────────────────── */
const CATEGORIE = [
  { id: "tutte",          label: "Tutti i prodotti" },
  { id: "pompe",          label: "Pompe di calore" },
  { id: "scaldabagni",    label: "Scaldabagni" },
  { id: "caldaie",        label: "Caldaie" },
  { id: "climatizzatori", label: "Climatizzatori" },
];

/* ─── Stili brand ──────────────────────────────────────── */
const BRAND_COLOR = {
  Sylber:  { bg: "bg-orange-500/20", text: "text-orange-300", border: "border-orange-500/30" },
  Unical:  { bg: "bg-blue-500/20",   text: "text-blue-300",   border: "border-blue-500/30"   },
  General: { bg: "bg-cyan-500/20",   text: "text-cyan-300",   border: "border-cyan-500/30"   },
};

/* ─── Stili tag ────────────────────────────────────────── */
const TAG_STYLE = {
  "Metano":          { bg: "bg-amber-500/20",   text: "text-amber-300"   },
  "Elettrico":       { bg: "bg-green-500/20",   text: "text-green-300"   },
  "Pompa di calore": { bg: "bg-green-500/20",   text: "text-green-300"   },
  "+++A":            { bg: "bg-emerald-500/20", text: "text-emerald-300" },
  "ECO":             { bg: "bg-teal-500/20",    text: "text-teal-300"    },
  "Unità esterna":   { bg: "bg-slate-600/40",   text: "text-slate-300"   },
  "Unità interna":   { bg: "bg-slate-600/40",   text: "text-slate-300"   },
};

/* ─── Prodotti ─────────────────────────────────────────── */
const PRODOTTI = [
  /* Pompe di calore */
  {
    name: "Vega M",        brand: "Sylber", categoria: "pompe",
    catLabel: "Pompa di calore", tags: [],
    desc: "Pompa di calore aria-acqua ad alta efficienza, ideale per riscaldamento e raffrescamento residenziale.",
    image: "/pompa-sylber.jpeg", Icon: FaLeaf,
    datasheet: "https://www.sylber.it/prodotti/pompe-calore",
  },
  {
    name: "HP.QOR",        brand: "Unical", categoria: "pompe",
    catLabel: "Pompa di calore", tags: [],
    desc: "Pompa di calore split con tecnologia inverter per massima resa in tutte le stagioni.",
    image: "/pompa-unical-1.jpeg", Icon: FaLeaf,
    datasheet: "https://www.unicalag.it/upload/blocchi/X4979allegatoDATI_TECNICI1-1X_hp_qor_07-2024_it.pdf",
  },
  {
    name: "HP.OWER",       brand: "Unical", categoria: "pompe",
    catLabel: "Pompa di calore", tags: [],
    desc: "Soluzione monoblock compatta ad alta efficienza energetica, semplice da installare.",
    image: "/pompa-unical-2.jpeg", Icon: FaLeaf,
    datasheet: "https://www.unicalag.it/upload/blocchi/X4028allegatoDATI_TECNICI1-1X_hp_ower-one-r_05-2025_it.pdf",
  },
  /* Scaldabagni */
  {
    name: "HP 200P",       brand: "Unical", categoria: "scaldabagni",
    catLabel: "Scaldabagno", tags: ["Elettrico", "Pompa di calore"],
    desc: "Scaldabagno a pompa di calore da 200 litri: fino al 70% di risparmio rispetto al boiler elettrico tradizionale.",
    image: null, Icon: FaWater,
    datasheet: "https://www.unicalag.it/prodotti/scaldacqua",
  },
  {
    name: "Devyl",         brand: "Sylber", categoria: "scaldabagni",
    catLabel: "Scaldabagno", tags: ["Metano"],
    desc: "Scaldabagno a gas a camera aperta, affidabile e dal rapido riscaldamento dell'acqua.",
    image: null, Icon: FaWater,
    datasheet: "https://www.sylber.it/prodotti/scaldabagni",
  },
  {
    name: "Artù",          brand: "Sylber", categoria: "scaldabagni",
    catLabel: "Scaldabagno", tags: ["Metano"],
    desc: "Scaldabagno a gas a camera stagna con scarico forzato, sicuro e adatto a qualsiasi ambiente.",
    image: null, Icon: FaWater,
    datasheet: "https://www.sylber.it/prodotti/scaldabagni",
  },
  /* Caldaie */
  {
    name: "Style 25C",     brand: "Sylber", categoria: "caldaie",
    catLabel: "Caldaia", tags: [],
    desc: "Caldaia murale a condensazione con design elegante e tecnologia a basse emissioni NOx.",
    image: "/caldaia-sylber.jpeg", Icon: FaFire,
    datasheet: "https://www.sylber.it/prodotti/caldaie",
  },
  {
    name: "Linea K35B",    brand: "Sylber", categoria: "caldaie",
    catLabel: "Caldaia", tags: [],
    desc: "Caldaia a condensazione da 35 kW, ideale per abitazioni di medie e grandi dimensioni.",
    image: "/caldaia-sylber.jpeg", Icon: FaFire,
    datasheet: "https://www.sylber.it/prodotti/caldaie",
  },
  {
    name: "EK!+24",        brand: "Unical", categoria: "caldaie",
    catLabel: "Caldaia", tags: [],
    desc: "Caldaia murale a condensazione con interfaccia intuitiva e alto rendimento stagionale.",
    image: "/caldaia-unical.jpeg", Icon: FaFire,
    datasheet: "https://www.unicalag.it/prodotti/caldaie",
  },
  {
    name: "X+C24",         brand: "Unical", categoria: "caldaie",
    catLabel: "Caldaia", tags: [],
    desc: "Caldaia a condensazione combinata per riscaldamento e produzione istantanea di acqua calda sanitaria.",
    image: "/caldaia-unical.jpeg", Icon: FaFire,
    datasheet: "https://www.unicalag.it/prodotti/caldaie",
  },
  /* Climatizzatori */
  {
    name: "YA3",           brand: "Unical", categoria: "climatizzatori",
    catLabel: "Climatizzatore", tags: ["+++A"],
    desc: "Climatizzatore inverter di classe A+++, silenzioso e potente per il massimo comfort.",
    image: null, Icon: FaSnowflake,
    datasheet: "https://www.unicalag.it/prodotti/climatizzatori",
  },
  {
    name: "KMUN10-13",     brand: "Unical", categoria: "climatizzatori",
    catLabel: "Climatizzatore", tags: ["ECO"],
    desc: "Linea ECO a basso consumo energetico con refrigerante R32 a ridotto impatto ambientale.",
    image: null, Icon: FaSnowflake,
    datasheet: "https://www.unicalag.it/prodotti/climatizzatori",
  },
  {
    name: "AOHH12KNCA",   brand: "General", categoria: "climatizzatori",
    catLabel: "Climatizzatore", tags: ["Unità esterna"],
    desc: "Unità esterna ad alta efficienza della serie HH, compatibile con sistema multi-split.",
    image: "/condizionatore-fujitsu.jpeg", Icon: FaSnowflake,
    datasheet: "https://www.fujitsu-general.com/eu/it/products/",
  },
  {
    name: "ASHH12KNCA",   brand: "General", categoria: "climatizzatori",
    catLabel: "Climatizzatore", tags: ["Unità interna"],
    desc: "Unità interna della serie HH con design ultra-sottile e funzione self-cleaning integrata.",
    image: "/condizionatore-fujitsu.jpeg", Icon: FaSnowflake,
    datasheet: "https://www.fujitsu-general.com/eu/it/products/",
  },
];

const BRAND_LOGOS = [
  { name: "Sylber",  src: "/sylber-logo.jpg",     url: "https://www.sylber.it"                  },
  { name: "Unical",  src: "/unical-logo.jpeg",    url: "https://www.unicalag.it"                },
  { name: "General", src: "/genfujitsu-logo.png", url: "https://www.fujitsu-general.com/eu/it/" },
];

/* ─── Card prodotto ─────────────────────────────────────── */
function ProductCard({ name, brand, catLabel, tags, desc, image, Icon, datasheet, onExpand }) {
  const bc = BRAND_COLOR[brand] ?? { bg: "bg-slate-500/20", text: "text-slate-300", border: "border-slate-500/30" };

  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-md flex flex-col border border-slate-700/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300">

      {/* Immagine */}
      <div
        className={`relative bg-slate-700 h-52 flex items-center justify-center overflow-hidden ${image ? "cursor-zoom-in group" : ""}`}
        onClick={() => image && onExpand(image, `${brand} ${name}`)}
      >
        {image ? (
          <>
            <Image src={image} alt={`${brand} ${name}`} fill className="object-contain p-4" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50 px-3 py-1.5 rounded-full">
                Ingrandisci
              </span>
            </div>
          </>
        ) : (
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${bc.bg}`}>
            <Icon className={`text-4xl ${bc.text}`} />
          </div>
        )}
      </div>

      {/* Corpo */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-slate-400 uppercase tracking-wider">{catLabel}</span>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${bc.bg} ${bc.text} ${bc.border}`}>
            {brand}
          </span>
        </div>

        <h3 className="text-white font-bold text-xl leading-snug">{name}</h3>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => {
              const ts = TAG_STYLE[t] ?? { bg: "bg-slate-600/40", text: "text-slate-300" };
              return (
                <span key={t} className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${ts.bg} ${ts.text}`}>
                  {t}
                </span>
              );
            })}
          </div>
        )}

        <p className="text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>

        {datasheet && (
          <a
            href={datasheet}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-cyan-600 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition duration-300"
          >
            <FaFilePdf className="text-sm" />
            Scheda tecnica ufficiale
          </a>
        )}
      </div>
    </div>
  );
}

/* ─── Modal immagine ────────────────────────────────────── */
function ImageModal({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 rounded-2xl p-4 max-w-2xl w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-full transition z-10"
          aria-label="Chiudi"
        >
          <FaTimes />
        </button>
        <div className="relative w-full h-[60vh]">
          <Image src={src} alt={alt} fill className="object-contain rounded-xl" />
        </div>
        <p className="text-center text-slate-400 text-sm mt-3">{alt}</p>
      </div>
    </div>
  );
}

/* ─── Contenuto principale (legge searchParams) ─────────── */
function AssistenzaContent() {
  const searchParams = useSearchParams();
  const [attiva, setAttiva] = useState(() => searchParams.get("cat") || "tutte");
  const [modal, setModal] = useState({ src: null, alt: "" });

  // Sincronizza se l'URL cambia (es. navigazione da menu)
  useEffect(() => {
    const cat = searchParams.get("cat");
    setAttiva(cat || "tutte");
  }, [searchParams]);

  const prodottiFiltrati = attiva === "tutte"
    ? PRODOTTI
    : PRODOTTI.filter((p) => p.categoria === attiva);

  return (
    <>
      {/* Catalogo */}
      <section id="catalogo" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* Filtri */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {CATEGORIE.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setAttiva(id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition duration-200 ${
                  attiva === id
                    ? "bg-cyan-500 text-white shadow-md shadow-cyan-400/30"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-cyan-400 hover:text-cyan-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Griglia */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {prodottiFiltrati.map((p) => (
              <ProductCard
                key={`${p.brand}-${p.name}`}
                {...p}
                onExpand={(src, alt) => setModal({ src, alt })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ImageModal
        src={modal.src}
        alt={modal.alt}
        onClose={() => setModal({ src: null, alt: "" })}
      />
    </>
  );
}

/* ─── FAQ ───────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: "Con quale frequenza va revisionata la caldaia?",
    a: "La normativa italiana prevede la manutenzione annuale obbligatoria per le caldaie a gas. Una revisione periodica garantisce il corretto funzionamento, riduce i consumi e previene guasti o situazioni di pericolo.",
  },
  {
    q: "Fate preventivi gratuiti?",
    a: "Sì, i preventivi sono gratuiti e senza impegno. Puoi contattarci telefonicamente, via WhatsApp o tramite il modulo nella pagina Contatti: valutiamo la tua situazione e ti proponiamo la soluzione più adatta.",
  },
  {
    q: "Intervenite anche in caso di guasto urgente?",
    a: "Sì, gestiamo anche interventi urgenti. Contattaci il prima possibile al numero 080 3352600 o via WhatsApp e organizziamo l'intervento nei tempi più brevi disponibili.",
  },
  {
    q: "Quali zone coprite?",
    a: "Operiamo principalmente a Molfetta e nei comuni limitrofi della provincia di Bari. Per interventi fuori zona, valutare caso per caso: contattaci per verificare la fattibilità.",
  },
  {
    q: "I ricambi utilizzati sono originali?",
    a: "Utilizziamo esclusivamente ricambi originali dei marchi che trattiamo (Sylber, Unical, General). Questo garantisce la durata nel tempo dell'intervento e mantiene valida la garanzia del produttore.",
  },
  {
    q: "Installate anche impianti nuovi o solo assistenza?",
    a: "Ci occupiamo di tutto il ciclo: progettazione, installazione, collaudo e manutenzione di impianti termici, idrici, di climatizzazione e pompe di calore, sia in nuove costruzioni che in ristrutturazioni.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition"
      >
        <span className="font-semibold text-slate-800 text-sm md:text-base">{q}</span>
        <FaChevronDown
          className={`shrink-0 text-cyan-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ─── Pagina ─────────────────────────────────────────────── */
export default function AssistenzaPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-blue-300 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Assistenza tecnica
            </h1>
            <p className="text-white/90 text-lg md:text-xl">
              Installazione, manutenzione e assistenza su impianti termici, idrici e di
              climatizzazione. Lavoriamo con i migliori marchi del settore.
            </p>
          </div>
        </section>

        {/* Brand strip */}
        <section className="bg-white py-12 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-center text-xs text-slate-400 uppercase tracking-widest mb-10 font-semibold">
              Marchi ufficiali
            </p>
            <div className="flex flex-wrap items-center justify-center gap-14 md:gap-24">
              {BRAND_LOGOS.map(({ name, src, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="opacity-60 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
                >
                  <Image
                    src={src}
                    alt={`Logo ${name}`}
                    width={name === "General" ? 180 : 140}
                    height={70}
                    className="object-contain h-14 w-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Certificazioni */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-xs text-slate-400 uppercase tracking-widest mb-10 font-semibold">
              Certificazioni e abilitazioni
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <FaShieldAlt className="text-2xl text-cyan-500" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm leading-snug">Patentino F-Gas</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Abilitazione Cat. I per la gestione e manipolazione dei gas fluorurati (Reg. UE 517/2014).
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <FaAward className="text-2xl text-orange-400" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm leading-snug">Centro Assistenza Sylber</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tecnico autorizzato per installazione, manutenzione e riparazione dei prodotti Sylber.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <FaCertificate className="text-2xl text-blue-500" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm leading-snug">Centro Assistenza Unical</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tecnico autorizzato per installazione, manutenzione e riparazione dei prodotti Unical.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <FaTools className="text-2xl text-emerald-500" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm leading-snug">D.M. 37/2008</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Abilitazione per progettazione e installazione di impianti termici, idraulici e a gas.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Catalogo + filtri (legge ?cat=) */}
        <Suspense fallback={null}>
          <AssistenzaContent />
        </Suspense>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
                Domande frequenti
              </h2>
              <p className="text-slate-500 text-lg">
                Tutto quello che c&apos;è da sapere prima di contattarci.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {FAQ_ITEMS.map((item) => (
                <FaqItem key={item.q} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-slate-800">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hai bisogno di assistenza o un preventivo?
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Contattaci subito: ti risponderemo in poco tempo e troveremo insieme la soluzione
              più adatta alle tue esigenze.
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
