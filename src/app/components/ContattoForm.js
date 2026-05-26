"use client";

import { useState } from "react";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const SERVIZI = [
  "Impianti di climatizzazione",
  "Assistenza tecnica",
  "Impianti idrici e fognanti",
  "Altro",
];

export default function ContattoForm() {
  const [form, setForm] = useState({
    nome: "",
    telefono: "",
    email: "",
    servizio: "",
    messaggio: "",
  });
  const [stato, setStato] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStato("loading");

    try {
      const res = await fetch("/api/contatto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStato("success");
    } catch {
      setStato("error");
    }
  };

  if (stato === "success") {
    return (
      <div className="bg-slate-800 rounded-2xl p-10 shadow-lg flex flex-col items-center justify-center text-center gap-4 h-full">
        <FaCheckCircle className="text-5xl text-cyan-400" />
        <h3 className="text-2xl font-bold text-white">Richiesta inviata!</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Abbiamo ricevuto la tua richiesta e ti risponderemo il prima possibile.
        </p>
        <button
          onClick={() => {
            setStato("idle");
            setForm({ nome: "", telefono: "", email: "", servizio: "", messaggio: "" });
          }}
          className="mt-2 text-sm text-slate-400 hover:text-white transition underline"
        >
          Invia un&apos;altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 rounded-2xl p-8 shadow-lg flex flex-col gap-4 h-full"
    >
      <h2 className="text-2xl font-bold text-white mb-1">Richiedi un preventivo</h2>
      <p className="text-slate-400 text-sm mb-2">Compila il form e ti risponderemo al più presto.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-400 font-medium">Nome e cognome *</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            placeholder="Mario Rossi"
            className="bg-slate-700 text-white text-sm rounded-lg px-4 py-2.5 border border-slate-600 focus:outline-none focus:border-cyan-400 placeholder-slate-500 transition"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-400 font-medium">Telefono</label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="320 1234567"
            className="bg-slate-700 text-white text-sm rounded-lg px-4 py-2.5 border border-slate-600 focus:outline-none focus:border-cyan-400 placeholder-slate-500 transition"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-400 font-medium">Email *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="mario@esempio.it"
          className="bg-slate-700 text-white text-sm rounded-lg px-4 py-2.5 border border-slate-600 focus:outline-none focus:border-cyan-400 placeholder-slate-500 transition"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-400 font-medium">Tipo di servizio *</label>
        <select
          name="servizio"
          value={form.servizio}
          onChange={handleChange}
          required
          className="bg-slate-700 text-white text-sm rounded-lg px-4 py-2.5 border border-slate-600 focus:outline-none focus:border-cyan-400 transition"
        >
          <option value="" disabled>Seleziona un servizio…</option>
          {SERVIZI.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <label className="text-xs text-slate-400 font-medium">Messaggio</label>
        <textarea
          name="messaggio"
          value={form.messaggio}
          onChange={handleChange}
          rows={4}
          placeholder="Descrivi brevemente la tua esigenza…"
          className="bg-slate-700 text-white text-sm rounded-lg px-4 py-2.5 border border-slate-600 focus:outline-none focus:border-cyan-400 placeholder-slate-500 transition resize-none flex-1"
        />
      </div>

      {stato === "error" && (
        <p className="text-red-400 text-sm">
          Si è verificato un errore. Riprova o scrivici a{" "}
          <a href="mailto:tecnotermciccia@libero.it" className="underline">
            tecnotermciccia@libero.it
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={stato === "loading"}
        className="mt-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
      >
        <FaPaperPlane className={stato === "loading" ? "animate-bounce" : ""} />
        {stato === "loading" ? "Invio in corso…" : "Invia richiesta"}
      </button>
    </form>
  );
}
