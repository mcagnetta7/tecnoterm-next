import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden font-sans">
      {/* Sfondo immagine */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-termoidraulico.jpg"
          alt="Impianto termoidraulico"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Overlay sfumato */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(10,25,47,0.7))",
        }}
      />

      {/* Contenuto */}
      <div className="relative z-20 max-w-3xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
          Impianti e servizi su misura realizzati a regola d’arte
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          TECNOTERM di Ciccia Antonio opera da oltre 25 anni nel settore termoidraulico, offrendo soluzioni efficienti e affidabili per il comfort domestico e aziendale.
Ci occupiamo con competenza e serietà dell’installazione e manutenzione di impianti termici, idrici, a gas e di climatizzazione.
Dalla fase di sopralluogo all’assistenza post-installazione, garantiamo qualità, sicurezza e precisione in ogni intervento.

        </p>
        <a
          href="#contatti"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold shadow-lg hover:from-yellow-300 hover:to-orange-400 transition duration-300"
        >
          Contattaci ora
        </a>
      </div>
    </section>
  );
}