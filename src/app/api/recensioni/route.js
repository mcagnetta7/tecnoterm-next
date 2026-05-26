import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export const dynamic = "force-dynamic";

const KEY = "recensioni";

export async function GET() {
  try {
    const recensioni = await kv.get(KEY);
    return NextResponse.json(Array.isArray(recensioni) ? recensioni : [], { status: 200 });
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

    const attuali = await kv.get(KEY);
    const aggiornate = [nuova, ...(Array.isArray(attuali) ? attuali : [])];

    await kv.set(KEY, aggiornate);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    console.error("[recensioni][POST]", e);
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
