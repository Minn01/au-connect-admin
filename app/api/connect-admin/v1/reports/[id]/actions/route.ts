import { AdminAuthError, requireAdmin } from "@/lib/adminAuth";
import {
  AdminActionType,
  PostModerationStatus,
  ReportStatus,
  ReportTargetType,
  UserAccountStatus,
} from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const adminActions = new Set(Object.values(AdminActionType));

const userActions = new Set<AdminActionType>([
  AdminActionType.MARK_UNDER_REVIEW,
  AdminActionType.REOPEN_CASE,
  AdminActionType.DISMISS_REPORTS,
  AdminActionType.WARN_USER,
  AdminActionType.SUSPEND_USER,
  AdminActionType.BAN_USER,
]);

const postActions = new Set<AdminActionType>([
  AdminActionType.MARK_UNDER_REVIEW,
  AdminActionType.REOPEN_CASE,
  AdminActionType.DISMISS_REPORTS,
  AdminActionType.KEEP_POST,
  AdminActionType.REMOVE_POST,
  AdminActionType.REMOVE_POST_WARN_AUTHOR,
]);

type ActionBody = {
  action?: string;
  note?: string;
  durationDays?: number;
};

// dedicated endpoint for moderation action for user management
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // admin auth check (route level)
    await requireAdmin(request);

    const { id } = await params;

    if (!/^[a-f\d]{24}$/i.test(id)) {
      return NextResponse.json(
        { error: "A valid report target ID is required." },
        { status: 400 },
      );
    }

    const body = (await request.json()) as ActionBody;
    const requestedAction = body.action?.toUpperCase().replaceAll("-", "_");

    if (
      !requestedAction ||
      !adminActions.has(requestedAction as AdminActionType)
    ) {
      return NextResponse.json(
        { error: "A valid admin action is required." },
        { status: 400 },
      );
    }

    const action = requestedAction as AdminActionType;
    const note = body.note?.trim() || undefined;
    const report = await prisma.report.findFirst({
      where: { targetId: id },
      select: { targetType: true },
    });

    if (!report) {
      return NextResponse.json(
        { error: "No report case was found for this target." },
        { status: 404 },
      );
    }

    const allowedActions =
      report.targetType === ReportTargetType.USER ? userActions : postActions;

    if (!allowedActions.has(action)) {
      return NextResponse.json(
        {
          error: `${action} cannot be applied to a ${report.targetType} case.`,
        },
        { status: 400 },
      );
    }

    if (action === AdminActionType.SUSPEND_USER) {
      if (
        !Number.isInteger(body.durationDays) ||
        !body.durationDays ||
        body.durationDays < 1 ||
        body.durationDays > 365
      ) {
        return NextResponse.json(
          {
            error: "A suspension duration between 1 and 365 days is required.",
          },
          { status: 400 },
        );
      }
    }

    const userTargetActions: AdminActionType[] = [
      AdminActionType.WARN_USER,
      AdminActionType.SUSPEND_USER,
      AdminActionType.BAN_USER,
    ];
    const changesUser = userTargetActions.includes(action);
    let warningRecipientId: string | undefined;
    let warningPostId: string | undefined;
    let postAuthorId: string | undefined;

    if (report.targetType === ReportTargetType.USER && changesUser) {
      const user = await prisma.user.findUnique({
        where: { id },
        select: { id: true },
      });

      if (!user) {
        return NextResponse.json(
          { error: "The reported user no longer exists." },
          { status: 404 },
        );
      }

      if (action === AdminActionType.WARN_USER) {
        warningRecipientId = user.id;
      }
    }

    const postTargetActions: AdminActionType[] = [
      AdminActionType.KEEP_POST,
      AdminActionType.REMOVE_POST,
      AdminActionType.REMOVE_POST_WARN_AUTHOR,
    ];
    const changesPost = postTargetActions.includes(action);

    if (report.targetType === ReportTargetType.POST && changesPost) {
      const post = await prisma.post.findUnique({
        where: { id },
        select: { id: true, userId: true },
      });

      if (!post) {
        return NextResponse.json(
          { error: "The reported post no longer exists." },
          { status: 404 },
        );
      }

      postAuthorId = post.userId;
      if (action === AdminActionType.REMOVE_POST_WARN_AUTHOR) {
        warningRecipientId = post.userId;
        warningPostId = post.id;
      }
    }

    const reportStatus =
      action === AdminActionType.MARK_UNDER_REVIEW ||
      action === AdminActionType.REOPEN_CASE
        ? ReportStatus.REVIEWED
        : action === AdminActionType.DISMISS_REPORTS ||
            action === AdminActionType.KEEP_POST
          ? ReportStatus.DISMISSED
          : ReportStatus.ACTION_TAKEN;

    const { updatedReports, moderationAction } = await prisma.$transaction(
      async (tx) => {
        if (report.targetType === ReportTargetType.USER && changesUser) {
          if (action === AdminActionType.WARN_USER) {
            await tx.user.update({
              where: { id },
              data: { warningCount: { increment: 1 } },
            });
          }

          if (action === AdminActionType.SUSPEND_USER) {
            const suspendedUntil = new Date();
            suspendedUntil.setDate(
              suspendedUntil.getDate() + body.durationDays!,
            );
            await tx.user.update({
              where: { id },
              data: {
                accountStatus: UserAccountStatus.SUSPENDED,
                suspendedUntil,
              },
            });
          }

          if (action === AdminActionType.BAN_USER) {
            await tx.user.update({
              where: { id },
              data: {
                accountStatus: UserAccountStatus.BANNED,
                suspendedUntil: null,
              },
            });
          }
        }

        if (report.targetType === ReportTargetType.POST && changesPost) {
          if (action === AdminActionType.KEEP_POST) {
            await tx.post.update({
              where: { id },
              data: {
                moderationStatus: PostModerationStatus.VISIBLE,
                removedAt: null,
              },
            });
          }

          if (
            action === AdminActionType.REMOVE_POST ||
            action === AdminActionType.REMOVE_POST_WARN_AUTHOR
          ) {
            await tx.post.update({
              where: { id },
              data: {
                moderationStatus: PostModerationStatus.REMOVED,
                removedAt: new Date(),
              },
            });
          }

          if (action === AdminActionType.REMOVE_POST_WARN_AUTHOR) {
            await tx.user.update({
              where: { id: postAuthorId! },
              data: { warningCount: { increment: 1 } },
            });
          }
        }

        if (warningRecipientId) {
          await tx.moderationNotice.create({
            data: {
              recipientId: warningRecipientId,
              action,
              reason: note,
              targetPostId: warningPostId,
              isRead: false,
            },
          });
        }

        const updatedReports = await tx.report.updateMany({
          where: { targetId: id },
          data: { status: reportStatus },
        });
        const moderationAction = await tx.moderationAction.create({
          data: {
            targetType: report.targetType,
            targetId: id,
            action,
            note,
            durationDays:
              action === AdminActionType.SUSPEND_USER
                ? body.durationDays
                : undefined,
          },
        });

        return { updatedReports, moderationAction };
      },
    );

    return NextResponse.json({
      data: {
        action: moderationAction.action,
        reportStatus,
        updatedReportCount: updatedReports.count,
        createdAt: moderationAction.createdAt,
      },
      message: "The moderation action was applied successfully.",
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }

    console.error("Error applying moderation action:", error);
    return NextResponse.json(
      { error: "Internal server error while applying the moderation action." },
      { status: 500 },
    );
  }
}
