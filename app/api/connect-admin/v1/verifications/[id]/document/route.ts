import { NextRequest, NextResponse } from "next/server";
import {
  StorageSharedKeyCredential,
  generateBlobSASQueryParameters,
  BlobSASPermissions,
} from "@azure/storage-blob";
import prisma from "@/lib/prisma";
import {
  AZURE_STORAGE_ACCOUNT_KEY,
  AZURE_STORAGE_ACCOUNT_NAME,
  AZURE_STORAGE_CONTAINER_NAME,
} from "@/lib/env";
import { AdminAuthError, requireAdmin } from "@/lib/adminAuth";

const SAS_DURATION_MS = 15 * 60 * 1000; // 15 min

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // check admin auth (route level)
    await requireAdmin(req);

    const { id } = await params;
    const blobName = req.nextUrl.searchParams.get("blobName");

    if (!blobName) {
      return NextResponse.json(
        { error: "blobName is required" },
        { status: 400 },
      );
    }

    const request = await prisma.accountVerificationRequest.findUnique({
      where: { id },
      select: { id: true, documents: true },
    });

    if (!request) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Verify the blobName belongs to this request
    const docs = request.documents as Array<{ blobName: string }>;
    const allowed = docs.some((d) => d.blobName === blobName);
    if (!allowed) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const credential = new StorageSharedKeyCredential(
      AZURE_STORAGE_ACCOUNT_NAME,
      AZURE_STORAGE_ACCOUNT_KEY,
    );

    const sasToken = generateBlobSASQueryParameters(
      {
        containerName: AZURE_STORAGE_CONTAINER_NAME,
        blobName,
        permissions: BlobSASPermissions.parse("r"),
        expiresOn: new Date(Date.now() + SAS_DURATION_MS),
      },
      credential,
    ).toString();

    const url = `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${AZURE_STORAGE_CONTAINER_NAME}/${blobName}?${sasToken}`;

    return NextResponse.json({ url });
  } catch (err) {
    if (err instanceof AdminAuthError) {
      return NextResponse.json(
        { error: err.message },
        { status: err.status },
      );
    }

    console.error("Fetch verification document failed:", err);
    return NextResponse.json(
      { error: "Failed to create verification document URL." },
      { status: 500 },
    );
  }
}
