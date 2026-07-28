"use client";

import dynamic from "next/dynamic";

// Reads matchMedia synchronously during render to decide whether to mount at
// all, so it must never be rendered on the server. `ssr: false` only works
// from a Client Component.
const CustomCursor = dynamic(() => import("./CustomCursor").then((m) => m.CustomCursor), { ssr: false });

export function ClientOnlyChrome() {
  return <CustomCursor />;
}
