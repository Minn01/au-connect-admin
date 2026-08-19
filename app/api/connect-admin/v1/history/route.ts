import { NextRequest, NextResponse } from "next/server";

import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from "@/constants";
import { AdminAuthError, requireAdmin } from "@/lib/adminAuth";
import { enumValue, positiveInteger } from "@/lib/apiQuery";
import { ReportTargetType, UserAccountStatus } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import type { HistoryItem, HistoryType } from "@/types/History";

const historyTypes = new Set<HistoryType>([
  "MODERATION",
  "VERIFICATION",
  "ANNOUNCEMENT",
  "COMMUNITY",
]);

function readable(value: string) {
  return value
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/* dev note :)
* admin actions history which were recorded are fetched from this api
* it combines records: 
* user verification actions
* community actions 
* reporting actions
* and announcements
*/
// 
export async function GET(request: NextRequest) {
  try {
    await requireAdmin(request);

    const searchParams = request.nextUrl.searchParams;
    const page = positiveInteger(searchParams.get("page"), 1);
    const limit = Math.min(
      positiveInteger(searchParams.get("limit"), DEFAULT_PAGE_SIZE),
      MAX_PAGE_SIZE,
    );
    const type = enumValue(searchParams.get("type"), historyTypes);

    if (type === null) {
      return NextResponse.json(
        { error: "An invalid history type was supplied." },
        { status: 400 },
      );
    }

    // Each source contributes enough rows to correctly calculate the requested
    // page after all sources are merged and sorted chronologically.
    const sourceLimit = page * limit;
    const include = (candidate: HistoryType) => !type || type === candidate;

    const [
      moderationActions,
      verificationHistory,
      announcements,
      communities,
      moderationCount,
      verificationCount,
      announcementCount,
      communityCount,
      totalUsers,
      pendingReports,
      pendingVerifications,
      restrictedUsers,
    ] = await Promise.all([
      include("MODERATION")
        ? prisma.moderationAction.findMany({
            orderBy: { createdAt: "desc" },
            take: sourceLimit,
          })
        : Promise.resolve([]),
      include("VERIFICATION")
        ? prisma.accountVerificationHistory.findMany({
            orderBy: { createdAt: "desc" },
            take: sourceLimit,
            select: {
              id: true,
              action: true,
              actor: true,
              note: true,
              createdAt: true,
              request: {
                select: {
                  id: true,
                  user: { select: { id: true, username: true } },
                },
              },
            },
          })
        : Promise.resolve([]),
      include("ANNOUNCEMENT")
        ? prisma.announcement.findMany({
            orderBy: { createdAt: "desc" },
            take: sourceLimit,
            select: {
              id: true,
              title: true,
              status: true,
              createdByAdminId: true,
              createdAt: true,
            },
          })
        : Promise.resolve([]),
      include("COMMUNITY")
        ? prisma.community.findMany({
            orderBy: { createdAt: "desc" },
            take: sourceLimit,
            select: {
              id: true,
              name: true,
              createdByAdminId: true,
              createdAt: true,
            },
          })
        : Promise.resolve([]),
      include("MODERATION") ? prisma.moderationAction.count() : 0,
      include("VERIFICATION") ? prisma.accountVerificationHistory.count() : 0,
      include("ANNOUNCEMENT") ? prisma.announcement.count() : 0,
      include("COMMUNITY") ? prisma.community.count() : 0,
      prisma.user.count(),
      prisma.report.count({ where: { status: "PENDING" } }),
      prisma.accountVerificationRequest.count({ where: { status: "PENDING" } }),
      prisma.user.count({
        where: {
          accountStatus: {
            in: [UserAccountStatus.SUSPENDED, UserAccountStatus.BANNED],
          },
        },
      }),
    ]);

    const moderationUserIds = moderationActions
      .filter((item) => item.targetType === ReportTargetType.USER)
      .map((item) => item.targetId);
    const moderationPostIds = moderationActions
      .filter((item) => item.targetType === ReportTargetType.POST)
      .map((item) => item.targetId);
    const adminIds = [
      ...announcements.map((item) => item.createdByAdminId),
      ...communities.map((item) => item.createdByAdminId),
    ].filter((id): id is string => Boolean(id));

    const [moderatedUsers, moderatedPosts, admins] = await Promise.all([
      moderationUserIds.length
        ? prisma.user.findMany({
            where: { id: { in: moderationUserIds } },
            select: { id: true, username: true },
          })
        : [],
      moderationPostIds.length
        ? prisma.post.findMany({
            where: { id: { in: moderationPostIds } },
            select: { id: true, title: true, username: true },
          })
        : [],
      adminIds.length
        ? prisma.admin.findMany({
            where: { id: { in: adminIds } },
            select: { id: true, name: true, email: true },
          })
        : [],
    ]);

    const userNames = new Map(moderatedUsers.map((user) => [user.id, user.username]));
    const postNames = new Map(
      moderatedPosts.map((post) => [
        post.id,
        post.title || `Post by ${post.username}`,
      ]),
    );
    const adminNames = new Map(
      admins.map((admin) => [admin.id, admin.name || admin.email]),
    );

    const items: HistoryItem[] = [
      ...moderationActions.map((item) => {
        const isUser = item.targetType === ReportTargetType.USER;
        const targetLabel = isUser
          ? userNames.get(item.targetId) || "Deleted user"
          : postNames.get(item.targetId) || "Deleted post";

        return {
          id: `moderation:${item.id}`,
          type: "MODERATION" as const,
          action: item.action,
          description: `${readable(item.action)} · ${targetLabel}`,
          actor: null,
          note: item.note,
          target: {
            id: item.targetId,
            label: targetLabel,
            href: isUser ? "/user-management" : `/reports/${item.targetId}`,
          },
          createdAt: item.createdAt.toISOString(),
        };
      }),
      ...verificationHistory.map((item) => ({
        id: `verification:${item.id}`,
        type: "VERIFICATION" as const,
        action: item.action,
        description: `${readable(item.action)} verification · ${item.request.user.username}`,
        actor: item.actor,
        note: item.note,
        target: {
          id: item.request.id,
          label: item.request.user.username,
          href: "/user-verification",
        },
        createdAt: item.createdAt.toISOString(),
      })),
      ...announcements.map((item) => ({
        id: `announcement:${item.id}`,
        type: "ANNOUNCEMENT" as const,
        action: "CREATED",
        description: `Created ${readable(item.status)} announcement · ${item.title}`,
        actor: item.createdByAdminId
          ? adminNames.get(item.createdByAdminId) || null
          : null,
        note: null,
        target: {
          id: item.id,
          label: item.title,
          href: "/announcements",
        },
        createdAt: item.createdAt.toISOString(),
      })),
      ...communities.map((item) => ({
        id: `community:${item.id}`,
        type: "COMMUNITY" as const,
        action: "CREATED",
        description: `Created community · ${item.name}`,
        actor: item.createdByAdminId
          ? adminNames.get(item.createdByAdminId) || null
          : null,
        note: null,
        target: {
          id: item.id,
          label: item.name,
          href: "/community",
        },
        createdAt: item.createdAt.toISOString(),
      })),
    ].sort(
      (left, right) =>
        new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime(),
    );

    const total =
      moderationCount + verificationCount + announcementCount + communityCount;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;

    return NextResponse.json({
      items: items.slice(start, start + limit),
      summary: {
        totalUsers,
        pendingReports,
        pendingVerifications,
        restrictedUsers,
      },
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1 && totalPages > 0,
      },
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    console.error("Fetch dashboard history failed:", error);
    return NextResponse.json(
      { error: "Could not load dashboard history." },
      { status: 500 },
    );
  }
}
