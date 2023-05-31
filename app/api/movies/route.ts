import { NextResponse } from "next/server";

const API_KEY = process.env.OMDB_SECRET;//.env.local

export async function GET(req: Request) {
  const movies = await fetch(`someurl${API_KEY}`).then((res) => res.json());

  return NextResponse.json(movies);
}
