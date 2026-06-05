import { NextResponse } from "next/server";
import { fetchLiveScores } from "@/lib/football-api";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function GET() {
  const matches = await fetchLiveScores();
  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    source: process.env.API_FOOTBALL_KEY ? "api-football" : "demo",
    matches,
  });
}
