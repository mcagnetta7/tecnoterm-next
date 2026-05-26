"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Stelle({ valore, onClick }) {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onClick && onClick(s)}
          className={`text-4xl leading-none transition-transform hover:scale-110 ${
            s <= valore ? "text-amber-400" : "text-slate-600"
          } ${onClick ? "cursor-pointer" : "cursor-default"}`}
          aria-label={`${s} stelle`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function RecensioniPage() {
  const [recensioni, setRecensioni] = useState([]);
  const [form, setForm] = useState({ nome: "", testo: "", valutazione: 0 });
  const [stato, setStato] = useState("idle"); // idle | loading | success | error
  const [visibili, setVisibili] = useState(4);

  useEffect(() => {
    fetch("/api/recensioni", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => Array.isArray(d) && setRecensioni(d))
      .catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome || !form.testo || form.valutazione === 0) return;
    setStato("loading");

    const nuova = {
      ...form,
      createdAt: new Date().toISOString(),
      data: new Date().toLocaleDateString("it-IT"),
    };

    try {
      const res = await fetch("/api/recensioni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuova),
      });
      if (!res.ok) throw new Error();
      setRecensioni((prev) => [nuova, ...prev]);
      setForm({ nome: "", testo: "", valutazione: 0 });
      setStato("success");
      setTimeout(() => setStato("idle"), 4000);
    } catch {
      setStato("error");
      setTimeout(() => setStato("idle"), 4000);
    }
  };

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=1920&q=80&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-blue-950/70" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Lascia una recensione
            </h1>
            <p className="text-white/90 text-lg">
              La tua opinione è importante per noi e per chi cerca un servizio affidabile.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-2xl mx-auto px-6">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800 rounded-2xl p-8 md:p-10 shadow-xl flex flex-col gap-6"
            >
              <h2 className="text-2xl font-bold text-white">Scrivi la tua esperienza</h2>

              {/* Nome */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  Nome e cognome *
                </label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))}
                  required
                  placeholder="Mario Rossi"
                  className="bg-slate-700 text-white text-sm rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus:border-cyan-400 placeholder-slate-500 transition"
                />
              </div>

              {/* Stelle */}
              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  Valutazione *
                </label>
                <Stelle valore={form.valutazione} onClick={(s) => setForm((p) => ({ ...p, valutazione: s }))} />
                {form.valutazione === 0 && (
                  <p className="text-xs text-slate-500">Seleziona un numero di stelle</p>
                )}
              </div>

              {/* Testo */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  Recensione *
                </label>
                <textarea
                  value={form.testo}
                  onChange={(e) => setForm((p) => ({ ...p, testo: e.target.value }))}
                  required
                  rows={5}
                  placeholder="Racconta la tua esperienza con Tecnoterm…"
                  className="bg-slate-700 text-white text-sm rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus:border-cyan-400 placeholder-slate-500 transition resize-none"
                />
              </div>

              {/* Feedback */}
              {stato === "success" && (
                <p className="text-cyan-400 text-sm font-medium">
                  ✓ Grazie! La tua recensione è stata pubblicata.
                </p>
              )}
              {stato === "error" && (
                <p className="text-red-400 text-sm font-medium">
                  Si è verificato un errore. Riprova più tardi.
                </p>
              )}

              <button
                type="submit"
                disabled={stato === "loading"}
                className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
              >
                {stato === "loading" ? "Invio in corso…" : "Pubblica recensione"}
              </button>
            </form>
          </div>
        </section>

        {/* Lista recensioni */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">
              Cosa dicono di noi
            </h2>

            {recensioni.length === 0 ? (
              <p className="text-center text-slate-400">Ancora nessuna recensione. Sii il primo!</p>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recensioni.slice(0, visibili).map((r, i) => (
                    <div
                      key={i}
                      className="bg-slate-800 rounded-2xl p-6 shadow-md flex flex-col gap-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-white">{r.nome}</span>
                        <span className="text-xs text-slate-400">{r.data || new Date(r.createdAt).toLocaleDateString("it-IT")}</span>
                      </div>
                      <Stelle valore={r.valutazione} />
                      <p className="text-slate-300 text-sm leading-relaxed">{r.testo}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center justify-center gap-6">
                  {visibili < recensioni.length && (
                    <button
                      onClick={() => setVisibili((v) => v + 4)}
                      className="inline-flex flex-col items-center gap-1.5 text-slate-500 hover:text-cyan-500 transition group"
                    >
                      <span className="text-sm font-semibold">Mostra altro</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}

                  {visibili > 4 && (
                    <button
                      onClick={() => setVisibili(4)}
                      className="inline-flex flex-col items-center gap-1.5 text-slate-500 hover:text-cyan-500 transition group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                      <span className="text-sm font-semibold">Mostra meno</span>
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
