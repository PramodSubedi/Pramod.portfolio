"use client";

import dynamic from "next/dynamic";

// Leaflet touches window/document at import time, which breaks Next.js
// server rendering — load it client-only. `ssr: false` is only allowed
// inside a Client Component, hence this wrapper.
const ResearchFootprints = dynamic(
  () => import("./ResearchFootprints"),
  { ssr: false }
);

export default function ResearchFootprintsClient() {
  return <ResearchFootprints />;
}
