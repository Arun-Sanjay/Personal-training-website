"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { BANGALORE_AREAS, WHATSAPP_URL } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};

const pin = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 15 },
  },
};

export default function LocationMap() {
  return (
    <section className="px-4 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Coverage
          </p>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            I Train Across All of Bangalore
          </h2>
          <p className="text-sm text-zinc-400">
            No location is too far. Your home, office, gym, or park.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm"
        >
          {/* Stylized map background */}
          <div className="relative mx-auto aspect-[4/3] max-w-2xl">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            {/* Radial zones */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {[200, 150, 100].map((size, i) => (
                <div
                  key={size}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
                  style={{
                    width: size * 2,
                    height: size * 2,
                    left: "50%",
                    top: "50%",
                    background: i === 2
                      ? "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)"
                      : "transparent",
                  }}
                />
              ))}
            </div>

            {/* City label */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-600">
                Bangalore
              </p>
            </div>

            {/* Animated pins */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              {BANGALORE_AREAS.map((area) => (
                <motion.div
                  key={area.name}
                  variants={pin}
                  className="group absolute"
                  style={{ left: `${area.x}%`, top: `${area.y}%` }}
                >
                  {/* Pin glow */}
                  <div className="absolute -inset-2 rounded-full bg-white/5 opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Pin dot */}
                  <div className="relative flex size-3 items-center justify-center">
                    <div className="absolute size-3 animate-ping rounded-full bg-white/20" />
                    <div className="relative size-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                  </div>

                  {/* Label */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded bg-white/10 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                      {area.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Connecting lines from center to nearby pins */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
              {BANGALORE_AREAS.slice(0, 6).map((area) => (
                <motion.line
                  key={`line-${area.name}`}
                  x1="50" y1="50" x2={area.x} y2={area.y}
                  stroke="white" strokeWidth="0.15" strokeDasharray="1 2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.15 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 1 }}
                />
              ))}
            </svg>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <MapPin className="size-4" />
              Tell me your location — I&apos;ll come to you
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
