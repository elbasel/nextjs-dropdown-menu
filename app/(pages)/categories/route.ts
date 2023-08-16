import { NextResponse } from "next/server";
import categories from "@store/categories.json";

export async function GET() {
  return NextResponse.json(categories.data.categories);
}
