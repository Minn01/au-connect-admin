import type { Metadata } from "next";

import SystemState from "./components/SystemState";

export const metadata: Metadata = {
  title: "Page not found · AC Admin",
};

export default function NotFound() {
  return <SystemState kind="not-found" />;
}
