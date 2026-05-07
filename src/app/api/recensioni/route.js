import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const filePath = path.join(process.cwd(), "data", "recensioni.json");

async function ensureFile() {
  try {
    await fs.access(filePath);
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, "[]", "utf-8");
  }
}

async function safeReadJson() {
  await ensureFile();
  const raw = await fs.readFile(filePath, "utf-8");
  try {
    return JSON.parse(raw);
  } catch (e) {
    // JSON corrotto → backup e reset
    try { await fs.writeFile(filePath + ".bak", raw, "utf-8"); } catch {}
    await fs.writeFile(filePath, "[]", "utf-8");
    return [];
  }
}

export async function GET() {
  try {
    const recensioni = await safeReadJson();
    return NextResponse.json(recensioni, { status: 200 });
  } catch (e) {
    console.error("[recensioni][GET]", e);
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const nuova = await request.json();

    if (
      !nuova ||
      typeof nuova.nome !== "string" ||
      typeof nuova.testo !== "string" ||
      typeof nuova.valutazione !== "number"
    ) {
      return NextResponse.json({ error: "Payload non valido" }, { status: 400 });
    }

    const attuali = await safeReadJson();
    const aggiornate = [nuova, ...(Array.isArray(attuali) ? attuali : [])];

    // ⚠️ In produzione su Vercel il FS è read-only → usa un DB/KV
    await fs.writeFile(filePath, JSON.stringify(aggiornate, null, 2), "utf-8");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    console.error("[recensioni][POST]", e);
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
