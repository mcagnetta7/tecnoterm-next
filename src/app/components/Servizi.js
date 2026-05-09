import Image from "next/image";
import { FaSnowflake, FaTools } from "react-icons/fa";

export default function Servizi() {
  return (
    <section className="bg-sky-300 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800">
          I nostri servizi
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Climatizzazione */}
          <div className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-amber-400/30 transition duration-300">
            <Image
              src="/logofuocoacqua.png" // <-- sostituisci con il path reale in /public
              alt="Impianti di climatizzazione - logo"
              width={70}
              height={70}
              className="mb-0 mx-auto object-contain"
              priority={false}
            />
            <h3 className="text-xl font-semibold mb-3">Impianti di climatizazione invernale/estiva</h3>
            <p className="text-gray-300 text-sm">
              Installiamo impianti di climatizzazione per ogni ambiente
            </p>
          </div>

          {/* Riscaldamento */}
          <div className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-amber-400/30 transition duration-300">
            <Image
              src="/logoattrezzo.png" // <-- sostituisci con il path reale in /public
              alt="Assistenza tecnica - logo"
              width={70}
              height={70}
              className="mb-0 mx-auto object-contain"
              priority={false}
            />
            <h3 className="text-xl font-semibold mb-3">Assistenza tecnica</h3>
            <p className="text-gray-300 text-sm mb-6">
              Caldaie, condizionatori, pompe di calore
            </p>

            {/* Bottone Scopri di più */}
            <div className="text-center">
              <a
                href="/assistenza"
                className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white font-semibold px-6 py-2 rounded hover:scale-105 transition duration-300 transform"
              >
                Scopri di più
              </a>
            </div>
          </div>

          {/* Impianti */}
          <div className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-amber-400/30 transition duration-300">
            <Image
              src="/logocasa.png" // <-- sostituisci con il path reale in /public
              alt="Impianti idrici e fognanti - logo"
              width={70}
              height={70}
              className="mb-0 mx-auto object-contain"
              priority={false}
            />
            <h3 className="text-xl font-semibold mb-3">Impianti idrici e fognanti</h3>
            <p className="text-gray-300 text-sm">
              Realizzazioni e rifacimento impianti termici, idrici e gas
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}