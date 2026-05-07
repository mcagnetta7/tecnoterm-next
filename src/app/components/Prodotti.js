"use client";

import Image from "next/image";
import { useState } from "react";
import { TbFlame, TbSnowflake, TbSolarPanel, TbWindmill, TbDroplet, TbBattery, TbTemperature, TbZoomIn, TbArrowsDiagonal, TbDownload } from "react-icons/tb";

const products = [
  // Caldaie
  {
    name: "Caldaia Sylber",
    Icon: null,
    image: "/caldaia-sylber.jpeg",
    category: "Caldaie",
    desc: "Rendimento elevato e minori emissioni.",
    datasheet: "",
  },
  {
    name: "Caldaia Unical",
    Icon: null,
    image: "/caldaia-unical.jpeg",
    category: "Caldaie",
    desc: "Sistema di riscaldamento affidabile e efficiente.",
    datasheet: "",
  },
  {
    name: "Caldaia ibrida",
    Icon: TbFlame,
    category: "Caldaie",
    desc: "Combina gas e pompa di calore per massima efficienza.",
    datasheet: "",
  },
  // Pompe di Calore
  {
    name: "Sylber Vega M",
    Icon: null,
    image: "/pompa-sylber.jpeg",
    category: "Pompe di Calore",
    desc: "Climatizzazione efficiente tutto l'anno.",
    datasheet: "https://www.sylber.it/prodotti/pompe-calore?range=71AAWAOWSF&utm_source=chatgpt.com",
  },
  {
    name: "Unical HP QOR",
    Icon: null,
    image: "/pompa-unical-1.jpeg",
    category: "Pompe di Calore",
    desc: "Riscaldamento e raffreddamento split.",
    datasheet: "https://www.unicalag.it/upload/blocchi/X4979allegatoDATI_TECNICI1-1X_hp_qor_07-2024_it.pdf?utm_source=chatgpt.com",
  },
  {
    name: "Unical HP OWER ONE",
    Icon: null,
    image: "/pompa-unical-2.jpeg",
    category: "Pompe di Calore",
    desc: "Sfrutta il calore geotermico per prestazioni superiori.",
    datasheet: "https://www.unicalag.it/upload/blocchi/X4028allegatoDATI_TECNICI1-1X_hp_ower-one-r_05-2025_it.pdf?utm_source=chatgpt.com",
  },
  // Condizionatori
  {
    name: "Condizionatore Fujitsu",
    Icon: null,
    image: "/condizionatore-fujitsu.jpeg",
    category: "Condizionatori",
    desc: "Climatizzazione silenzioso e a bassissimi consumi.",
    datasheet: "",
  },
  {
    name: "Condizionatore inverter",
    Icon: TbTemperature,
    category: "Condizionatori",
    desc: "Tecnologia inverter per efficienza energetica.",
    datasheet: "",
  },
  {
    name: "Condizionatore multisplit",
    Icon: TbTemperature,
    category: "Condizionatori",
    desc: "Climatizzazione di più ambienti con una unità esterna.",
    datasheet: "",
  },
];

export default function Prodotti() {
  const categories = ["Caldaie", "Pompe di Calore", "Condizionatori"];
  const [expandedImage, setExpandedImage] = useState(null);

  return (
    <section className="mt-12 md:mt-16" aria-labelledby="prodotti-heading">
      <h2 id="prodotti-heading" className="text-xl md:text-2xl font-semibold text-slate-900 text-center">
        Prodotti rappresentativi
      </h2>
      <p className="mt-3 text-base text-slate-600 text-center">
        Componenti chiave per efficienza, integrazione e continuità operativa degli impianti.
      </p>

      {categories.map((category) => (
        <div key={category} className="mt-12">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-6">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter((product) => product.category === category)
              .map(({ name, Icon, image, category, desc, datasheet }) => (
                <div
                  key={name}
                  className="group rounded-2xl bg-sky-300 p-5 shadow-lg hover:shadow-xl transition flex flex-col items-center"
                >
                  {/* Icona o Immagine */}
                  <div className="relative rounded-2xl bg-white/90 text-sky-700 p-5 group-hover:bg-white/95 transition flex items-center justify-center w-48 h-48">
                    {image ? (
                      <>
                        <Image
                          src={image}
                          alt={name}
                          width={200}
                          height={200}
                          className="object-contain hover:opacity-80 transition"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedImage(image);
                          }}
                          className="absolute top-2 right-2 bg-sky-500 text-white p-2 cursor-pointer rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-sky-600"
                          aria-label="Ingrandisci immagine"
                        >
                          <TbArrowsDiagonal className="h-4 w-4" />
                        </button>
                      </>
                    ) : (
                      <Icon className="h-50 w-50" aria-hidden="true" />
                    )}
                  </div>
                  
                  {/* Badge sotto l'icona */}
                  <div className="flex flex-wrap gap-2 justify-center mt-3">
                    <span className="text-xs uppercase tracking-wide px-2 py-1 rounded-full bg-white/80 text-slate-700 font-medium text-center">
                      Manutenzione
                    </span>
                    <span className="text-xs uppercase tracking-wide px-2 py-1 rounded-full bg-sky-100 text-sky-800 font-medium text-center">
                      Efficienza
                    </span>
                    <span className="text-xs uppercase tracking-wide px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium text-center">
                      Affidabilità
                    </span>
                  </div>

                  {/* Contenuto */}
                  <div className="flex flex-col text-center mt-3 flex-grow">
                    <h4 className="text-sm font-semibold text-slate-900 leading-snug">
                      {name}
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed mt-2">
                      {desc}
                    </p>
                  </div>

                  {/* Pulsante Scheda Tecnica */}
                  {datasheet && (
                    <a
                      href={datasheet}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white text-xs font-semibold rounded-lg hover:bg-sky-700 transition"
                      aria-label={`Scarica scheda tecnica ${name}`}
                    >
                      <TbDownload className="h-4 w-4" />
                      Scheda Tecnica
                    </a>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Modal per immagine ingrandita */}
      {expandedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-2xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              ✕
            </button>
            <Image
              src={expandedImage}
              alt="Immagine ingrandita"
              width={600}
              height={600}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}