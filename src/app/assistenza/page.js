"use client";

import { useState } from "react";
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
  FaSearchPlus,
  FaTimes,
  FaFilePdf,
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
    name: "Vega M",
    brand: "Sylber",
    categoria: "pompe",
    catLabel: "Pompa di calore",
    tags: [],
    desc: "Pompa di calore aria-acqua ad alta efficienza, ideale per riscaldamento e raffrescamento residenziale.",
    image: "/pompa-sylber.jpeg",
    Icon: FaLeaf,
    datasheet: "https://www.sylber.it/prodotti/pompe-calore",
  },
  {
    name: "HP.QOR",
    brand: "Unical",
    categoria: "pompe",
    catLabel: "Pompa di calore",
    tags: [],
    desc: "Pompa di calore split con tecnologia inverter per massima resa in tutte le stagioni.",
    image: "/pompa-unical-1.jpeg",
    Icon: FaLeaf,
    datasheet: "https://www.unicalag.it/upload/blocchi/X4979allegatoDATI_TECNICI1-1X_hp_qor_07-2024_it.pdf",
  },
  {
    name: "HP.OWER",
    brand: "Unical",
    categoria: "pompe",
    catLabel: "Pompa di calore",
    tags: [],
    desc: "Soluzione monoblock compatta ad alta efficienza energetica, semplice da installare.",
    image: "/pompa-unical-2.jpeg",
    Icon: FaLeaf,
    datasheet: "https://www.unicalag.it/upload/blocchi/X4028allegatoDATI_TECNICI1-1X_hp_ower-one-r_05-2025_it.pdf",
  },

  /* Scaldabagni */
  {
    name: "HP 200P",
    brand: "Unical",
    categoria: "scaldabagni",
    catLabel: "Scaldabagno",
    tags: ["Elettrico", "Pompa di calore"],
    desc: "Scaldabagno a pompa di calore da 200 litri: fino al 70% di risparmio rispetto al boiler elettrico tradizionale.",
    image: null,
    Icon: FaWater,
    datasheet: "https://www.unicalag.it/prodotti/scaldacqua",
  },
  {
    name: "Devyl",
    brand: "Sylber",
    categoria: "scaldabagni",
    catLabel: "Scaldabagno",
    tags: ["Metano"],
    desc: "Scaldabagno a gas a camera aperta, affidabile e dal rapido riscaldamento dell'acqua.",
    image: null,
    Icon: FaWater,
    datasheet: "https://www.sylber.it/prodotti/scaldabagni",
  },
  {
    name: "Artù",
    brand: "Sylber",
    categoria: "scaldabagni",
    catLabel: "Scaldabagno",
    tags: ["Metano"],
    desc: "Scaldabagno a gas a camera stagna con scarico forzato, sicuro e adatto a qualsiasi ambiente.",
    image: null,
    Icon: FaWater,
    datasheet: "https://www.sylber.it/prodotti/scaldabagni",
  },

  /* Caldaie */
  {
    name: "Style 25C",
    brand: "Sylber",
    categoria: "caldaie",
    catLabel: "Caldaia",
    tags: [],
    desc: "Caldaia murale a condensazione con design elegante e tecnologia a basse emissioni NOx.",
    image: "/caldaia-sylber.jpeg",
    Icon: FaFire,
    datasheet: "https://www.sylber.it/prodotti/caldaie",
  },
  {
    name: "Linea K35B",
    brand: "Sylber",
    categoria: "caldaie",
    catLabel: "Caldaia",
    tags: [],
    desc: "Caldaia a condensazione da 35 kW, ideale per abitazioni di medie e grandi dimensioni.",
    image: "/caldaia-sylber.jpeg",
    Icon: FaFire,
    datasheet: "https://www.sylber.it/prodotti/caldaie",
  },
  {
    name: "EK!+24",
    brand: "Unical",
    categoria: "caldaie",
    catLabel: "Caldaia",
    tags: [],
    desc: "Caldaia murale a condensazione con interfaccia intuitiva e alto rendimento stagionale.",
    image: "/caldaia-unical.jpeg",
    Icon: FaFire,
    datasheet: "https://www.unicalag.it/prodotti/caldaie",
  },
  {
    name: "X+C24",
    brand: "Unical",
    categoria: "caldaie",
    catLabel: "Caldaia",
    tags: [],
    desc: "Caldaia a condensazione combinata per riscaldamento e produzione istantanea di acqua calda sanitaria.",
    image: "/caldaia-unical.jpeg",
    Icon: FaFire,
    datasheet: "https://www.unicalag.it/prodotti/caldaie",
  },

  /* Climatizzatori */
  {
    name: "YA3",
    brand: "Unical",
    categoria: "climatizzatori",
    catLabel: "Climatizzatore",
    tags: ["+++A"],
    desc: "Climatizzatore inverter di classe A+++, silenzioso e potente per il massimo comfort.",
    image: null,
    Icon: FaSnowflake,
    datasheet: "https://www.unicalag.it/prodotti/climatizzatori",
  },
  {
    name: "KMUN10-13",
    brand: "Unical",
    categoria: "climatizzatori",
    catLabel: "Climatizzatore",
    tags: ["ECO"],
    desc: "Linea ECO a basso consumo energetico con refrigerante R32 a ridotto impatto ambientale.",
    image: null,
    Icon: FaSnowflake,
    datasheet: "https://www.unicalag.it/prodotti/climatizzatori",
  },
  {
    name: "AOHH12KNCA",
    brand: "General",
    categoria: "climatizzatori",
    catLabel: "Climatizzatore",
    tags: ["Unità esterna"],
    desc: "Unità esterna ad alta efficienza della serie HH, compatibile con sistema multi-split.",
    image: "/condizionatore-fujitsu.jpeg",
    Icon: FaSnowflake,
    datasheet: "https://www.fujitsu-general.com/eu/it/products/",
  },
  {
    name: "ASHH12KNCA",
    brand: "General",
    categoria: "climatizzatori",
    catLabel: "Climatizzatore",
    tags: ["Unità interna"],
    desc: "Unità interna della serie HH con design ultra-sottile e funzione self-cleaning integrata.",
    image: "/condizionatore-fujitsu.jpeg",
    Icon: FaSnowflake,
    datasheet: "https://www.fujitsu-general.com/eu/it/products/",
  },
];

const BRAND_LOGOS = [
  { name: "Sylber",  src: "/sylber-logo.jpg",    url: "https://www.sylber.it"          },
  { name: "Unical",  src: "/unical-logo.jpeg",   url: "https://www.unicalag.it"        },
  { name: "General", src: "/genfujitsu-logo.png", url: "https://www.fujitsu-general.com/eu/it/" },
];

/* ─── Card prodotto ─────────────────────────────────────── */
function ProductCard({ name, brand, catLabel, tags, desc, image, Icon, datasheet, onExpand }) {
  const bc = BRAND_COLOR[brand] ?? { bg: "bg-slate-500/20", text: "text-slate-300", border: "border-slate-500/30" };

  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-md flex flex-col border border-slate-700/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300">

      {/* Immagine prodotto */}
      <div className="relative bg-slate-700 h-52 flex items-center justify-center overflow-hidden">
        {image ? (
          <>
            <Image
              src={image}
              alt={`${brand} ${name}`}
              fill
              className="object-contain p-4"
            />
            {/* Pulsante ingrandisci */}
            <button
              onClick={() => onExpand(image, `${brand} ${name}`)}
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition opacity-0 group-hover:opacity-100"
              aria-label="Ingrandisci immagine"
            >
              <FaSearchPlus className="text-sm" />
            </button>
            <div className="absolute inset-0 group cursor-zoom-in" onClick={() => onExpand(image, `${brand} ${name}`)}>
              <div className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                <FaSearchPlus className="text-sm" />
              </div>
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
        {/* Brand + categoria */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-slate-400 uppercase tracking-wider">{catLabel}</span>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${bc.bg} ${bc.text} ${bc.border}`}>
            {brand}
          </span>
        </div>

        {/* Nome */}
        <h3 className="text-white font-bold text-xl leading-snug">{name}</h3>

        {/* Tag */}
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

        {/* Descrizione */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>

        {/* Scheda tecnica */}
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
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain rounded-xl"
          />
        </div>
        <p className="text-center text-slate-400 text-sm mt-3">{alt}</p>
      </div>
    </div>
  );
}

/* ─── Pagina ─────────────────────────────────────────────── */
export default function AssistenzaPage() {
  const [attiva, setAttiva] = useState("tutte");
  const [modal, setModal] = useState({ src: null, alt: "" });

  const prodottiFiltrati = attiva === "tutte"
    ? PRODOTTI
    : PRODOTTI.filter((p) => p.categoria === attiva);

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

        {/* Catalogo */}
        <section className="py-16 md:py-24 bg-slate-50">
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

      {/* Modal immagine */}
      <ImageModal
        src={modal.src}
        alt={modal.alt}
        onClose={() => setModal({ src: null, alt: "" })}
      />
    </>
  );
}
