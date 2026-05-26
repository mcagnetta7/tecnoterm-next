import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

export const dynamic = "force-dynamic";

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

const KEY = "recensioni";

export async function GET() {
  try {
    const recensioni = await redis.get(KEY);
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

    const attuali = await redis.get(KEY);
    const aggiornate = [nuova, ...(Array.isArray(attuali) ? attuali : [])];

    await redis.set(KEY, aggiornate);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    console.error("[recensioni][POST]", e);
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
