# AU CONNECT Admin Authentication & Authorization

This document defines the authentication and authorization rules for the AU CONNECT Admin application.

Use these rules whenever creating or modifying admin API routes.

## Core Rule

Every protected API endpoint must answer two questions:

1. **Is this request coming from a valid administrator?**
2. **Does that administrator have permission to perform this action?**

Authentication and authorization must be enforced on the server.

Never rely only on frontend UI restrictions.

---

# Authentication Helpers

Admin authentication helpers are located in:

```text
lib/adminAuth.ts
```

## `requireAdmin(request)`

Use this for any endpoint that requires a logged-in administrator.

```ts
const admin = await requireAdmin(request);
```

It verifies:

* The `au_connect_admin_session` cookie exists.
* The session token is valid.
* The token has not expired.
* The administrator exists in the database.
* The administrator's status is `ACTIVE`.

It returns trusted administrator information such as:

```ts
admin.id
admin.email
admin.role
```

Always use this trusted data instead of accepting an `adminId`, email, or role from the request body.

---

# Authorization Helpers

## Any Active Administrator

Use:

```ts
const admin = await requireAdmin(request);
```

Example uses:

* Viewing reports
* Viewing moderation data
* Reading admin dashboard information

---

## Selected Roles

Use `requireRole()` when only certain roles should perform an action.

```ts
const admin = await requireAdmin(request);

requireRole(admin, [
  AdminRole.SUPER_ADMIN,
  AdminRole.ADMIN,
]);
```

Example uses:

* Creating announcements
* Verification decisions
* Sensitive moderation actions

---

## Super Admin Only

Use:

```ts
const admin = await requireAdmin(request);

requireSuperAdmin(admin);
```

Example uses:

* Creating administrators
* Changing administrator roles
* Disabling administrators
* Reactivating administrators
* Other administrator-management operations

---

# Roles

The admin system currently contains:

```text
SUPER_ADMIN
ADMIN
MODERATOR
```

General hierarchy:

```text
SUPER_ADMIN
    ↓
ADMIN
    ↓
MODERATOR
```

A higher role may generally perform actions available to lower roles unless an endpoint explicitly defines otherwise.

### SUPER_ADMIN

May perform all administrative operations, including:

* Manage administrators
* Create administrators
* Change roles
* Disable/reactivate administrators
* Manage announcements
* Manage verification requests
* Moderate users/content
* Handle reports

### ADMIN

May perform general administrative operations such as:

* Manage announcements
* Manage verification requests
* Handle reports
* Moderate users/content

Admins must not be allowed to grant themselves additional privileges.

### MODERATOR

Primarily handles:

* Reports
* Content moderation
* Routine moderation actions

Moderators should not manage administrator accounts or other highly privileged configuration.

---

# Standard API Route Pattern

Protected API routes should generally follow this structure:

```ts
import { NextRequest, NextResponse } from "next/server";

import {
  AdminAuthError,
  requireAdmin,
} from "@/lib/adminAuth";

export async function GET(request: NextRequest) {
  try {
    const admin = await requireAdmin(request);

    // Protected operation here.

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }

    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
```

---

# Role-Protected Route Example

```ts
export async function POST(request: NextRequest) {
  try {
    const admin = await requireAdmin(request);

    requireRole(admin, [
      AdminRole.SUPER_ADMIN,
      AdminRole.ADMIN,
    ]);

    const body = await request.json();

    // Perform protected operation.

    return NextResponse.json(
      { success: true },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }

    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
```

---

# Super Admin Route Example

```ts
export async function POST(request: NextRequest) {
  try {
    const admin = await requireAdmin(request);

    requireSuperAdmin(admin);

    // Super-admin-only operation.

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
```

---

# Important Security Rules

## Never Trust Admin Information From the Client

Do not do this:

```ts
const body = await request.json();

const adminId = body.adminId;
const role = body.role;
```

The browser can modify these values.

Instead:

```ts
const admin = await requireAdmin(request);

const adminId = admin.id;
const role = admin.role;
```

---

## Authentication Must Happen Before Sensitive Operations

Correct:

```ts
const admin = await requireAdmin(request);

// Query/change sensitive data afterwards.
```

Avoid accessing sensitive information before authentication.

---

## Frontend Restrictions Are Not Security

It is fine to hide buttons based on role:

```tsx
{admin.role === "SUPER_ADMIN" && (
  <DeleteAdminButton />
)}
```

But the API endpoint must still perform:

```ts
requireSuperAdmin(admin);
```

A user can manually call an API endpoint even if the UI does not show the button.

---

# Proxy

`proxy.ts` provides an outer authentication barrier.

However:

**Do not rely on `proxy.ts` as the only authorization mechanism.**

Every sensitive API route must still call:

```ts
requireAdmin()
```

and, where appropriate:

```ts
requireRole()
```

or:

```ts
requireSuperAdmin()
```

This ensures the endpoint remains protected even if proxy configuration changes.

---

# Request Validation

Authentication does not replace input validation.

The normal order should be:

```text
1. Authenticate
2. Authorize
3. Parse request
4. Validate request
5. Perform operation
6. Return response
```

For example:

```ts
const admin = await requireAdmin(request);

requireRole(admin, [
  AdminRole.SUPER_ADMIN,
  AdminRole.ADMIN,
]);

const body = await request.json();

const parsed = SomeSchema.safeParse(body);

if (!parsed.success) {
  return NextResponse.json(
    { error: "Invalid request" },
    { status: 400 },
  );
}
```

---

# Audit Information

When an operation needs to record who performed it, always use:

```ts
admin.id
```

from:

```ts
const admin = await requireAdmin(request);
```

Example:

```ts
await prisma.moderationAction.create({
  data: {
    performedById: admin.id,
    // ...
  },
});
```

Never accept `performedById` from the browser.

---

# Quick Decision Guide

When creating a new endpoint, ask:

```text
Is this endpoint public?
    │
    ├── YES → No admin auth helper required.
    │
    └── NO
         ↓
Can every active administrator use it?
    │
    ├── YES → requireAdmin()
    │
    └── NO
         ↓
Can ADMIN + SUPER_ADMIN use it?
    │
    ├── YES → requireAdmin() + requireRole()
    │
    └── NO
         ↓
SUPER_ADMIN only
         ↓
requireAdmin() + requireSuperAdmin()
```

---

# Summary

Remember these three helpers:

```text
requireAdmin()
```

**Who are you, and are you an active administrator?**

```text
requireRole()
```

**Is your role allowed to perform this operation?**

```text
requireSuperAdmin()
```

**Are you a SUPER_ADMIN?**

For every new protected admin API endpoint:

```text
Authenticate → Authorize → Validate → Execute
```

That is the default AU CONNECT Admin security pattern.
