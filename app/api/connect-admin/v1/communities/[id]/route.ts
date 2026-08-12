import { NextRequest, NextResponse } from "next/server";

import type { CommunityStatus, Prisma } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";

type Params = {
  params: Promise<{ id: string }>;
};

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
  if (!Array.isArray(value)) return null;

  return Array.from(
    new Set(
      value.filter(
        (item): item is string =>
          typeof item === "string" && OBJECT_ID_PATTERN.test(item),
      ),
    ),
  );
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

async function resolveSlug(
  communityId: string,
  name: string,
  requestedSlug: string | null,
) {
  const base = slugify(requestedSlug || name);

  if (!base) {
    throw new Error("Community slug could not be generated");
  }

  let candidate = base;
  let suffix = 2;

  while (true) {
    const existing = await prisma.community.findUnique({
      where: { slug: candidate },
      select: { id: true },
    });

    if (!existing || existing.id === communityId) {
      return candidate;
    }

    candidate = `${base}-${suffix}`;
    suffix += 1;
  }
}

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    if (!OBJECT_ID_PATTERN.test(id)) {
      return NextResponse.json(
        { error: "A valid community ID is required" },
        { status: 400 },
      );
    }

    const community = await prisma.community.findUnique({
      where: { id },
      select: communitySelect(),
    });

    if (!community) {
      return NextResponse.json(
        { error: "Community not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ community });
  } catch (error) {
    console.error("Fetch community failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch community" },
      { status: 500 },
    );
  }
}

export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    if (!OBJECT_ID_PATTERN.test(id)) {
      return NextResponse.json(
        { error: "A valid community ID is required" },
        { status: 400 },
      );
    }

    const existing = await prisma.community.findUnique({
      where: { id },
      select: { id: true, name: true },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Community not found" },
        { status: 404 },
      );
    }

    const body = await req.json();
    const name =
      typeof body?.name === "string" && body.name.trim()
        ? body.name.trim()
        : existing.name;
    const requestedSlug =
      typeof body?.slug === "string" && body.slug.trim()
        ? body.slug.trim()
        : null;
    const about = normalizeOptionalText(body?.about);
    const location = normalizeOptionalText(body?.location);
    const status = body?.status;
    const managerIds = normalizeManagerIds(body?.managerIds);

    if (status && status !== "ACTIVE" && status !== "ARCHIVED") {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    if (managerIds) {
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
    }

    const slug = await resolveSlug(id, name, requestedSlug);

    await prisma.$transaction(async (tx) => {
      await tx.community.update({
        where: { id },
        data: {
          name,
          slug,
          about,
          location,
          ...(status && { status: status as CommunityStatus }),
        },
      });

      if (managerIds) {
        await tx.communityManager.deleteMany({ where: { communityId: id } });

        if (managerIds.length) {
          await tx.communityManager.createMany({
            data: managerIds.map((userId) => ({
              communityId: id,
              userId,
            })),
          });
        }
      }
    });

    const community = await prisma.community.findUnique({
      where: { id },
      select: communitySelect(),
    });

    return NextResponse.json({ community });
  } catch (error) {
    console.error("Update community failed:", error);
    return NextResponse.json(
      { error: "Failed to update community" },
      { status: 500 },
    );
  }
}
