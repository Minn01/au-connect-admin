import { NextRequest, NextResponse } from "next/server";

import { AdminAuthError, requireAdmin } from "@/lib/adminAuth";
import {
  AdminActionType,
  ReportTargetType,
  UserAccountStatus,
} from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";

type Params = { params: Promise<{ id: string }> };

type ActionBody = {
  action?: string;
  note?: string;
  durationDays?: number;
};

const userActions = new Set<AdminActionType>([
  AdminActionType.WARN_USER,
  AdminActionType.SUSPEND_USER,
  AdminActionType.BAN_USER,
  AdminActionType.REACTIVATE_USER,
]);

export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    // admin verification check
    await requireAdmin(request);

    const { id } = await params;
    if (!/^[a-f\d]{24}$/i.test(id)) {
      return NextResponse.json(
        { error: "A valid user ID is required." },
        { status: 400 },
      );
    }

    // get params
    const body = (await request.json()) as ActionBody;
    const requestedAction = body.action?.toUpperCase().replaceAll("-", "_");
    const action = requestedAction as AdminActionType | undefined;
    const note = body.note?.trim() ?? "";

    // validation checks
    if (!action || !userActions.has(action)) {
      return NextResponse.json(
        { error: "Action must be warn, suspend, ban, or reactivate." },
        { status: 400 },
      );
    }

    if (!note) {
      return NextResponse.json(
        { error: "A reason for the moderation action is required." },
        { status: 400 },
      );
    }

    if (note.length > 1000) {
      return NextResponse.json(
        { error: "The moderation reason cannot exceed 1,000 characters." },
        { status: 400 },
      );
    }

    if (
      action === AdminActionType.SUSPEND_USER &&
      (!Number.isInteger(body.durationDays) ||
        !body.durationDays ||
        body.durationDays < 1 ||
        body.durationDays > 365)
    ) {
      return NextResponse.json(
        { error: "A suspension duration between 1 and 365 days is required." },
        { status: 400 },
      );
    }

    // check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id },
      select: { id: true, accountStatus: true },
    });

    if (!existingUser) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // reactivate user case
    if (
      action === AdminActionType.REACTIVATE_USER &&
      // if action == reactivate but user status is already active
      existingUser.accountStatus === UserAccountStatus.ACTIVE
    ) {
      return NextResponse.json(
        { error: "This user is already active." },
        { status: 409 },
      );
    }

    // suspend user case
    let suspendedUntil: Date | null | undefined;
    if (action === AdminActionType.SUSPEND_USER) {
      suspendedUntil = new Date();
      suspendedUntil.setDate(suspendedUntil.getDate() + body.durationDays!);
    } else if (
      action === AdminActionType.BAN_USER ||
      action === AdminActionType.REACTIVATE_USER
    ) {
      // if user is unbanned or banned the suspend date is null
      suspendedUntil = null;
    }

    const { user, moderationAction } = await prisma.$transaction(async (tx) => {
      const user = await tx.user.update({
        where: { id },
        data: {
          ...(action === AdminActionType.WARN_USER && {
            warningCount: { increment: 1 },
          }),
          ...(action === AdminActionType.SUSPEND_USER && {
            accountStatus: UserAccountStatus.SUSPENDED,
            suspendedUntil,
          }),
          ...(action === AdminActionType.BAN_USER && {
            accountStatus: UserAccountStatus.BANNED,
            suspendedUntil,
          }),
          ...(action === AdminActionType.REACTIVATE_USER && {
            accountStatus: UserAccountStatus.ACTIVE,
            suspendedUntil,
          }),
        },
        select: {
          id: true,
          accountStatus: true,
          suspendedUntil: true,
          warningCount: true,
          updatedAt: true,
        },
      });

      // for warning user, a moderation notice is created 
      if (action === AdminActionType.WARN_USER) {
        await tx.moderationNotice.create({
          data: {
            recipientId: id,
            action,
            reason: note,
            isRead: false,
          },
        });
      }

      // moderation action defines the actions taken by the admin
      const moderationAction = await tx.moderationAction.create({
        data: {
          targetType: ReportTargetType.USER,
          targetId: id,
          action,
          note,
          durationDays:
            action === AdminActionType.SUSPEND_USER
              ? body.durationDays
              : undefined,
        },
        select: {
          id: true,
          action: true,
          note: true,
          durationDays: true,
          createdAt: true,
        },
      });

      return { user, moderationAction };
    });

    return NextResponse.json({
      user,
      moderationAction,
      message: "The moderation action was applied successfully.",
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    console.error("Apply user moderation action failed:", error);
    return NextResponse.json(
      { error: "Could not apply the moderation action." },
      { status: 500 },
    );
  }
}
