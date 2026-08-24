"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Flag,
  LogOut,
  Megaphone,
  ShieldCheck,
  ShieldUser,
  Users,
  UsersRound,
  FileClock,
} from "lucide-react";
import {
  ADMIN_LOGOUT_API_PATH,
  ANNOUNCEMENTS_PAGE_PATH,
  ADMINISTRATORS_PAGE_PATH,
  COMMUNITY_PAGE_PATH,
  MAIN_PAGE_PATH,
  REPORTS_PAGE_PATH,
  USER_MANAGEMENT_PAGE_PATH,
  USER_VERIFICATION_PAGE_PATH,
  LOGIN_PAGE_PATH,
} from "@/constants";
import ConfirmModal from "@/app/components/ConfirmModal";
import { useResolvedAdminMediaUrl } from "@/lib/useResolvedAdminMediaUrl";

type CurrentAdmin = {
  id: string;
  email: string;
  name: string | null;
  role: "SUPER_ADMIN" | "ADMIN" | "MODERATOR";
  profilePic: string | null;
};

const roleLabels: Record<CurrentAdmin["role"], string> = {
  SUPER_ADMIN: "Super Admin",
  ADMIN: "Admin",
  MODERATOR: "Moderator",
};

const navItems = [
  { label: "Dashboard", href: MAIN_PAGE_PATH, icon: FileClock },
  { label: "User Management", href: USER_MANAGEMENT_PAGE_PATH, icon: Users },
  { label: "User Verification", href: USER_VERIFICATION_PAGE_PATH, icon: BadgeCheck },
  { label: "Reports", href: REPORTS_PAGE_PATH, icon: Flag },
  { label: "Community", href: COMMUNITY_PAGE_PATH, icon: UsersRound },
  { label: "Announcements", href: ANNOUNCEMENTS_PAGE_PATH, icon: Megaphone },
  { label: "Administrators", href: ADMINISTRATORS_PAGE_PATH, icon: ShieldUser },
];

const exactAppPagePaths = [
  MAIN_PAGE_PATH,
  USER_MANAGEMENT_PAGE_PATH,
  USER_VERIFICATION_PAGE_PATH,
  REPORTS_PAGE_PATH,
  COMMUNITY_PAGE_PATH,
  ANNOUNCEMENTS_PAGE_PATH,
  ADMINISTRATORS_PAGE_PATH,
];

export default function Sidebar({ admin }: { admin: CurrentAdmin | null }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [isLogoutConfirmationOpen, setIsLogoutConfirmationOpen] = useState(false);
  const [profileImageFailed, setProfileImageFailed] = useState(false);
  const profileImageUrl = useResolvedAdminMediaUrl(admin?.profilePic);
  const showProfileImage = Boolean(profileImageUrl) && !profileImageFailed;

  const isKnownPage =
    exactAppPagePaths.includes(pathname) || /^\/reports\/[^/]+$/.test(pathname);

  if (pathname === LOGIN_PAGE_PATH || !isKnownPage) return null;

  return (
    <div
      className={`relative h-screen shrink-0 bg-white transition-[width] duration-300 ease-in-out ${
        isOpen ? "w-69" : "w-14"
      }`}
    >
      <aside
        className={`absolute inset-y-0 left-0 z-40 flex w-69 flex-col border-r border-slate-200 bg-white shadow-sm transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5">
          <Image
            src="/au-connect-logo.png"
            alt="AU Connect"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            AU Connect
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-2 px-3 py-4">
          <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Menu
          </p>
          {navItems.filter((item) =>
            item.href !== ADMINISTRATORS_PAGE_PATH || admin?.role === "SUPER_ADMIN"
          ).map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== MAIN_PAGE_PATH && pathname.startsWith(`${item.href}/`));
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-red-600 text-white shadow-sm shadow-red-200"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                <Icon className="h-4.5 w-4.5 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-slate-100 p-3">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-red-100 text-sm font-bold uppercase text-red-700">
              {showProfileImage ? (
                <Image
                  src={profileImageUrl}
                  alt={`${admin?.name ?? "Administrator"}'s profile`}
                  fill
                  sizes="40px"
                  className="object-cover"
                  unoptimized
                  onError={() => setProfileImageFailed(true)}
                />
              ) : (
                admin?.name?.charAt(0) ?? admin?.email.charAt(0) ?? "A"
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-900">
                {admin?.name ?? "AU Administrator"}
              </p>
              <p className="truncate text-xs text-slate-500">
                {admin?.email ?? "Account unavailable"}
              </p>
              {admin && (
                <p className="mt-1 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-red-600">
                  <ShieldCheck size={11} /> {roleLabels[admin.role]}
                </p>
              )}
            </div>

            <form id="logout-form" action={ADMIN_LOGOUT_API_PATH} method="post">
              <button
                type="button"
                onClick={() => setIsLogoutConfirmationOpen(true)}
                aria-label="Sign out"
                title="Sign out"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-red-100 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
              >
                <LogOut size={18} />
              </button>
            </form>
          </div>
        </div>
      </aside>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Hide navigation menu" : "Show navigation menu"}
        aria-expanded={isOpen}
        title={isOpen ? "Hide menu" : "Show menu"}
        className={`absolute top-5 z-50 grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-[left,background-color,color] duration-300 ease-in-out hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200 ${
          isOpen ? "left-64" : "left-2.5"
        }`}
      >
        {isOpen ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>

      <ConfirmModal
        isOpen={isLogoutConfirmationOpen}
        title="Sign out?"
        description="You will need to sign in again to access the AU Connect admin dashboard."
        confirmLabel="Sign out"
        confirmForm="logout-form"
        onClose={() => setIsLogoutConfirmationOpen(false)}
      />
    </div>
  );
}
