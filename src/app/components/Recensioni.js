"use client";

import { useEffect, useRef, useState } from "react";

export default function Recensioni() {
  const [recensioni, setRecensioni] = useState([]);
  const [visibili, setVisibili] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // form state
  const [nome, setNome] = useState("");
  const [testo, setTesto] = useState("");
  const [valutazione, setValutazione] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  const getTime = (r) => {
    if (r?.createdAt) {
      const t = Date.parse(r.createdAt);
      if (!Number.isNaN(t)) return t;
    }
    if (r?.data) {
      const t = Date.parse(r.data);
      if (!Number.isNaN(t)) return t;
    }
    return 0;
  };

  const computeTop3 = (list) =>
    [...list]
      .sort((a, b) => {
        if ((b.valutazione || 0) !== (a.valutazione || 0)) {
          return (b.valutazione || 0) - (a.valutazione || 0);
        }
        return getTime(b) - getTime(a);
      })
      .slice(0, 3);

  useEffect(() => {
    fetch("/api/recensioni", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRecensioni(data);
          setVisibili(computeTop3(data)); // iniziale: top 3 per valutazione poi data
        }
      })
      .catch(() => {});
  }, []);

  // close panel on outside click
  useEffect(() => {
    if (!isPanelOpen) return;
    const onClick = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsPanelOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isPanelOpen]);

  const formatDate = (r) => {
    if (r?.createdAt) return new Date(r.createdAt).toLocaleDateString();
    if (r?.data) return r.data;
    return "";
  };

  const resetForm = () => {
    setNome("");
    setTesto("");
    setValutazione(0);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    if (!nome || !testo || valutazione === 0 || isSubmitting) return;

    setIsSubmitting(true);

    const nuova = {
      nome,
      testo,
      valutazione,
      createdAt: new Date().toISOString(),
      data: new Date().toLocaleDateString(),
    };

    try {
      const res = await fetch("/api/recensioni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuova),
      });

      if (!res.ok) throw new Error("Errore di rete");

      setRecensioni((prev) => [nuova, ...prev]);

      // sostituisci sempre la meno recente tra le 3 visibili
      setVisibili((prev) => {
        const current = Array.isArray(prev) ? [...prev] : [];
        let kept = current;
        if (current.length >= 3) {
          const orderedByOldestFirst = [...current].sort(
            (a, b) => getTime(a) - getTime(b)
          );
          kept = orderedByOldestFirst.slice(1); // drop la più vecchia
        }
        const next = [nuova, ...kept];
        return next.sort((a, b) => getTime(b) - getTime(a)).slice(0, 3);
      });

      resetForm();
      setIsPanelOpen(false);
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-sky-300 text-white py-8 px-6 md:px-12">
      <div className="max-w-xl mx-auto">
        <div className="relative bg-slate-800 rounded-xl p-5 md:p-6 shadow-lg hover:shadow-amber-400/30 transition">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg md:text-xl font-bold text-white">
              Recensioni
            </h2>

            <div className="relative">
              <button
                ref={buttonRef}
                type="button"
                onClick={() => setIsPanelOpen((s) => !s)}
                className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-3 py-1.5 rounded transition text-xs md:text-sm"
              >
                Lascia la tua recensione
              </button>

              {isPanelOpen && (
                <div
                  ref={panelRef}
                  className="absolute right-0 mt-2 w-72 rounded-lg bg-slate-800 p-3 shadow-lg ring-1 ring-slate-700"
                >
                  <h3 className="text-xs font-semibold text-white mb-2">
                    Nuova recensione
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-2.5">
                    <input
                      type="text"
                      placeholder="Il tuo nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full rounded bg-slate-700 border border-slate-600 px-2.5 py-1.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-xs"
                    />

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-300">Valutazione:</span>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setValutazione(star)}
                          className={`text-base leading-none ${
                            star <= valutazione ? "text-amber-400" : "text-slate-500"
                          }`}
                          title={`${star} stella${star > 1 ? "e" : ""}`}
                          aria-label={`${star} stelle`}
                        >
                          ★
                        </button>
                      ))}
                    </div>

                    <textarea
                      placeholder="Scrivi la tua recensione..."
                      value={testo}
                      onChange={(e) => setTesto(e.target.value)}
                      className="w-full rounded bg-slate-700 border border-slate-600 px-2.5 py-1.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-xs"
                      rows={3}
                    />

                    <div className="flex items-center justify-end gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          resetForm();
                          setIsPanelOpen(false);
                        }}
                        className="px-2.5 py-1.5 text-gray-300 hover:text-white text-xs"
                      >
                        Annulla
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-3 py-1.5 rounded bg-amber-500 text-slate-900 font-semibold hover:bg-amber-600 transition ${
                          isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                        } text-xs`}
                      >
                        {isSubmitting ? "Invio..." : "Pubblica"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Lista recensioni compatta dentro al riquadro */}
          <div className="mt-4 divide-y divide-slate-700">
            {visibili.length === 0 ? (
              <p className="text-white/90 text-xs">Nessuna recensione ancora.</p>
            ) : (
              visibili.map((r, i) => (
                <div key={i} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white truncate">
                      {r.nome}
                    </h4>
                    <span className="text-[11px] text-gray-400 whitespace-nowrap">
                      {formatDate(r)}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-sm ${
                          star <= (r.valutazione || 0)
                            ? "text-amber-400"
                            : "text-slate-600"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mt-1.5 text-gray-300 text-xs leading-5">
                    {r.testo}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
