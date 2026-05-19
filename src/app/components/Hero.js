import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden font-sans bg-white">
      {/* Sfondo immagine intera */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src="/sfondoDefinitivo4.png"
          alt="Impianto termoidraulico"
          fill
          className="object-fill"
          priority
        />
      </div>

      {/* Overlay leggero */}
      {/* <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.15), rgba(10,25,47,0.25))",
        }}
      /> */}

      {/* Contenuto */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 w-full">
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white drop-shadow-lg">
          I nostri servizi
        </h2> */}

        <div className="grid md:grid-cols-3 gap-6 mt-100 items-stretch">
  <div className="bg-slate-800/80 backdrop-blur rounded-xl p-4 shadow-lg h-full flex flex-col text-center">
    <Image
      src="/logofuocoacqua.png"
      alt="Impianti di climatizzazione - logo"
      width={55}
      height={55}
      className="mb-2 mx-auto object-contain"
    />

    <h3 className="text-lg font-semibold mb-2 text-white min-h-[52px] flex items-center justify-center">
      Impianti di climatizzazione invernale/estiva
    </h3>

    <p className="text-gray-300 text-sm mb-4 min-h-[40px]">
      Installiamo impianti di climatizzazione per ogni ambiente
    </p>

    <div className="mt-auto">
      <a
        href="#climatizzazione"
        className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white font-semibold px-5 py-2 rounded transition duration-300 text-sm"
      >
        Scopri di più
      </a>
    </div>
  </div>

  <div className="bg-slate-800/80 backdrop-blur rounded-xl p-4 shadow-lg h-full flex flex-col text-center">
    <Image
      src="/logoattrezzo.png"
      alt="Assistenza tecnica - logo"
      width={55}
      height={55}
      className="mb-2 mx-auto object-contain"
    />

    <h3 className="text-lg font-semibold mb-2 text-white min-h-[52px] flex items-center justify-center">
      Assistenza tecnica
    </h3>

    <p className="text-gray-300 text-sm mb-4 min-h-[40px]">
      Caldaie, condizionatori, pompe di calore
    </p>

    <div className="mt-auto">
      <a
        href="/assistenza"
        className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white font-semibold px-5 py-2 rounded transition duration-300 text-sm"
      >
        Scopri di più
      </a>
    </div>
  </div>

  <div className="bg-slate-800/80 backdrop-blur rounded-xl p-4 shadow-lg h-full flex flex-col text-center">
    <Image
      src="/logocasa.png"
      alt="Impianti idrici e fognanti - logo"
      width={55}
      height={55}
      className="mb-2 mx-auto object-contain"
    />

    <h3 className="text-lg font-semibold mb-2 text-white min-h-[52px] flex items-center justify-center">
      Impianti idrici e fognanti
    </h3>

    <p className="text-gray-300 text-sm mb-4 min-h-[40px]">
      Realizzazioni e rifacimento impianti termici, idrici e gas
    </p>

    <div className="mt-auto">
      <a
        href="#idrici"
        className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white font-semibold px-5 py-2 rounded transition duration-300 text-sm"
      >
        Scopri di più
      </a>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}