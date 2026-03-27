"use client";

import { SOCIAL_PROOF } from "@/lib/constants";

export default function SocialProof() {
  const doubled = [...SOCIAL_PROOF, ...SOCIAL_PROOF];

  return (
    <section className="overflow-hidden border-y border-zinc-800/50 bg-zinc-950 py-6">
      <div className="mb-4 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
          Trusted by professionals from
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-zinc-950 to-transparent" />

        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {doubled.map((company, i) => (
            <span
              key={`${company}-${i}`}
              className="text-lg font-bold tracking-wider text-zinc-700"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
