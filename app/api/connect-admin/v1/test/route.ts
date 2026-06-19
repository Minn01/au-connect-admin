import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// TODO: test route to be removed
export async function GET() {
  const users = await prisma.user.findMany({
    take: 5,
  });

  return NextResponse.json(users);
}
