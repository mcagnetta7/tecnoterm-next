"use client";

import { useState } from "react";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function PreventivoForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    descrizione: "",
  });
  const [stato, setStato] = useState("idle");

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
        body: JSON.stringify({ ...form, servizio: "Preventivo dalla home" }),
      });

      if (!res.ok) throw new Error();

      setStato("success");
    } catch {
      setStato("error");
    }
  };

  if (stato === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-3">
        <FaCheckCircle className="text-4xl text-cyan-400" />
        <h3 className="text-lg font-bold text-white">Richiesta inviata!</h3>
        <p className="text-slate-300 text-sm">
          Ti risponderemo il prima possibile.
        </p>
        <button
          onClick={() => {
            setStato("idle");
            setForm({ nome: "", email: "", descrizione: "" });
          }}
          className="mt-2 text-xs text-slate-400 hover:text-white transition underline"
        >
          Invia un&apos;altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs text-white/80 font-medium">Nome e cognome *</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            placeholder="Mario Rossi"
            className="bg-white/10 text-white text-sm rounded-lg px-4 py-2.5 border border-white/20 focus:outline-none focus:border-cyan-400 placeholder-white/50 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-white/80 font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="mario@esempio.it"
            className="bg-white/10 text-white text-sm rounded-lg px-4 py-2.5 border border-white/20 focus:outline-none focus:border-cyan-400 placeholder-white/50 transition"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs text-white/80 font-medium">Descrizione del problema *</label>
        <textarea
          name="descrizione"
          value={form.descrizione}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Descrivi brevemente la tua esigenza…"
          className="bg-white/10 text-white text-sm rounded-lg px-4 py-2.5 border border-white/20 focus:outline-none focus:border-cyan-400 placeholder-white/50 transition resize-none"
        />
      </div>

      {stato === "error" && (
        <p className="text-red-300 text-sm">
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
        className="flex items-center justify-center gap-2 bg-white text-blue-300 font-semibold px-6 py-2.5 rounded-full hover:bg-blue-100 disabled:opacity-60 transition duration-300"
      >
        <FaPaperPlane className={stato === "loading" ? "animate-bounce" : ""} />
        {stato === "loading" ? "Invio in corso…" : "Richiedi preventivo"}
      </button>
    </form>
  );
}
