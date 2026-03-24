import { NextResponse } from "next/server";
import { getAggregatedNewsDetailed } from "@/lib/news";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const raw = Number(searchParams.get("limit"));
    const limit = Number.isFinite(raw) ? Math.min(50, Math.max(1, raw)) : 30;
    const data = await getAggregatedNewsDetailed(limit);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "aggregation_failed" }, { status: 500 });
  }
}
