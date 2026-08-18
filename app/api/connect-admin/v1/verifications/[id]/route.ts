import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";

const reviewSchema = z.object({
  action: z.enum(["APPROVED", "REJECTED", "UNAPPROVE"]),
  reviewNote: z.string().max(800).optional(),
  reviewedBy: z.string().min(1).default("Admin"),
});

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const request = await prisma.accountVerificationRequest.findUnique({
    where: { id },
    select: {
      id: true,
      role: true,
      documentType: true,
      documents: true,
      note: true,
      status: true,
      reviewNote: true,
      reviewedBy: true,
      reviewedAt: true,
      createdAt: true,
      user: {
        select: {
          id: true,
          username: true,
          email: true,
          profilePic: true,
          accountVerificationStatus: true,
          accountVerificationRole: true,
          createdAt: true,
        },
      },
      history: {
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          action: true,
          actor: true,
          note: true,
          createdAt: true,
        },
      },
    },
  });

  if (!request) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(request);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const body = await req.json().catch(() => null);
  const parsed = reviewSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { action, reviewNote, reviewedBy } = parsed.data;

  const existing = await prisma.accountVerificationRequest.findUnique({
    where: { id },
    select: { id: true, userId: true, status: true },
  });

  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const isUnapprove = action === "UNAPPROVE";

  // Reviewing a decision is only allowed from PENDING; unapproving (reversing
  // a decision) is only allowed from an already-APPROVED request.
  if (!isUnapprove && existing.status !== "PENDING") {
    return NextResponse.json(
      { error: "Only PENDING requests can be reviewed" },
      { status: 409 },
    );
  }

  if (isUnapprove && existing.status !== "APPROVED") {
    return NextResponse.json(
      { error: "Only APPROVED requests can be unapproved" },
      { status: 409 },
    );
  }

  // Unapproving sends the request back to the review queue as PENDING and
  // clears the previous review outcome so it can be decided again.
  const nextStatus = isUnapprove ? "PENDING" : action;

  const updated = await prisma.$transaction(async (tx) => {
    const result = await tx.accountVerificationRequest.update({
      where: { id },
      data: {
        status: nextStatus,
        reviewedBy: isUnapprove ? null : reviewedBy,
        reviewNote: isUnapprove ? null : reviewNote ?? null,
        reviewedAt: isUnapprove ? null : new Date(),
        history: {
          create: {
            action: nextStatus,
            actor: reviewedBy,
            note: isUnapprove
              ? reviewNote ?? "Approval reversed"
              : reviewNote,
          },
        },
      },
    });

    await tx.user.update({
      where: { id: existing.userId },
      data: { accountVerificationStatus: nextStatus },
    });

    return result;
  });

  return NextResponse.json(updated);
}
