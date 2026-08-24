import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Provider from "./Provider";
import { getCurrentAdmin } from "@/lib/adminAuth";
import prisma from "@/lib/prisma";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AC Admin",
  description: "AU Connect Admin Page",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentAdmin = await getCurrentAdmin();
  const currentUser = currentAdmin
    ? await prisma.user.findUnique({
        where: { email: currentAdmin.email },
        select: { profilePic: true },
      })
    : null;
  const admin = currentAdmin
    ? {
        id: currentAdmin.id,
        email: currentAdmin.email,
        name: currentAdmin.name,
        role: currentAdmin.role,
        profilePic: currentUser?.profilePic ?? null,
      }
    : null;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-screen overflow-hidden flex flex-row">
        <Sidebar admin={admin} />
        <main className="min-w-0 flex-1 overflow-y-auto">
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
