import Header2 from "../components/Header2";
import Partner from "../components/Partner";
import Prodotti from "../components/Prodotti";

export default function Assistenza() {
  return (
    <main className="min-h-screen bg-sky-300">
      <Header2 />

      {/* Sezione bianca sotto l'header */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 mt-6 md:mt-8">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Assistenza e Manutenzione
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Soluzioni di assistenza tecnica e manutenzione programmata per impianti termici e HVAC.
              Interventi eseguiti da tecnici qualificati, uso di ricambi originali e procedure conformi
              alle normative vigenti.
            </p>
            <p className="mt-3 text-slate-600">
              Supportiamo i principali marchi con diagnosi rapide, riparazioni mirate e piani di
              manutenzione per garantire efficienza energetica, sicurezza e continuità operativa dei tuoi impianti.
            </p>
          </div>
          <Partner />
          <Prodotti />
        </div>
      </section>
    </main>
  );
}