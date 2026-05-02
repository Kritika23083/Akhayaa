"use client";

import dynamic from "next/dynamic";

const AkhayaBackground = dynamic(
  () => import("@/components/three/AkhayaBackground"),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_50%_10%,rgba(215,180,111,0.20),transparent_28rem),linear-gradient(180deg,#fbf4e9_0%,#f4ead9_100%)]" />
    ),
  },
);

export function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <AkhayaBackground />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,241,230,0.22)_0%,rgba(248,241,230,0.58)_58%,rgba(248,241,230,0.92)_100%)]" />
      <div className="akhaya-noise absolute inset-0 opacity-[0.18]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#fff8ee]/80 to-transparent" />
    </div>
  );
}
