import { NextRequest, NextResponse } from "next/server";

import type { Prisma } from "@/lib/generated/prisma";
import { getOptionalAdminContext } from "@/lib/adminAuth";
import prisma from "@/lib/prisma";

const OBJECT_ID_PATTERN = /^[a-f\d]{24}$/i;

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function normalizeOptionalText(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function normalizeManagerIds(value: unknown) {
  if (!Array.isArray(value)) return [];

  return Array.from(
    new Set(
      value.filter(
        (item): item is string =>
          typeof item === "string" && OBJECT_ID_PATTERN.test(item),
      ),
    ),
  );
}

async function createUniqueSlug(name: string, requestedSlug?: string | null) {
  const base = slugify(requestedSlug || name);

  if (!base) {
    throw new Error("Community slug could not be generated");
  }

  let candidate = base;
  let suffix = 2;

  while (await prisma.community.findUnique({ where: { slug: candidate } })) {
    candidate = `${base}-${suffix}`;
    suffix += 1;
  }

  return candidate;
}

function communitySelect() {
  return {
    id: true,
    name: true,
    slug: true,
    about: true,
    location: true,
    profilePic: true,
    coverPhoto: true,
    status: true,
    createdAt: true,
    updatedAt: true,
    _count: {
      select: {
        managers: true,
        followers: true,
        posts: true,
      },
    },
    managers: {
      orderBy: { createdAt: "asc" as const },
      select: {
        id: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            profilePic: true,
            title: true,
          },
        },
      },
    },
  } satisfies Prisma.CommunitySelect;
}

export async function GET(req: NextRequest) {
  try {
    const search = req.nextUrl.searchParams.get("search")?.trim() ?? "";
    const status = req.nextUrl.searchParams.get("status");

    const where: Prisma.CommunityWhereInput = {};

    if (status === "ACTIVE" || status === "ARCHIVED") {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { slug: { contains: search, mode: "insensitive" } },
        { about: { contains: search, mode: "insensitive" } },
      ];
    }

    const communities = await prisma.community.findMany({
      where,
      orderBy: { createdAt: "desc" },
      select: communitySelect(),
    });

    return NextResponse.json({ communities });
  } catch (error) {
    console.error("Fetch communities failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch communities" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const admin = await getOptionalAdminContext(req);
    const body = await req.json();

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const requestedSlug = normalizeOptionalText(body?.slug);
    const about = normalizeOptionalText(body?.about);
    const location = normalizeOptionalText(body?.location);
    const managerIds = normalizeManagerIds(body?.managerIds);

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const existingManagers = managerIds.length
      ? await prisma.user.findMany({
          where: { id: { in: managerIds } },
          select: { id: true },
        })
      : [];

    if (existingManagers.length !== managerIds.length) {
      return NextResponse.json(
        { error: "One or more managers were not found" },
        { status: 400 },
      );
    }

    const slug = await createUniqueSlug(name, requestedSlug);

    const community = await prisma.community.create({
      data: {
        name,
        slug,
        about,
        location,
        createdByAdminId: admin?.id ?? null,
        managers: {
          create: managerIds.map((userId) => ({ userId })),
        },
      },
      select: communitySelect(),
    });

    return NextResponse.json({ community }, { status: 201 });
  } catch (error) {
    console.error("Create community failed:", error);
    return NextResponse.json(
      { error: "Failed to create community" },
      { status: 500 },
    );
  }
}
