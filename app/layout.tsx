import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "AC Admin",
  description: "AU Connect Admin Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-row">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
