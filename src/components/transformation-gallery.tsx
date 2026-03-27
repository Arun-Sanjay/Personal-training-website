"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TRANSFORMATIONS, WHATSAPP_URL } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function TransformationGallery() {
  return (
    <section className="px-4 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Transformations
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Real Results, Real People
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TRANSFORMATIONS.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-colors hover:border-zinc-700"
            >
              {/* Before / After cards */}
              <div className="mb-5 flex items-center gap-3">
                {/* Before */}
                <div className="flex-1 rounded-xl bg-zinc-800/80 p-4 text-center">
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                    Before
                  </p>
                  <p className="text-xl font-bold text-zinc-400">
                    {t.beforeWeight}
                  </p>
                </div>

                <ArrowRight className="size-4 shrink-0 text-zinc-600" />

                {/* After */}
                <div className="flex-1 rounded-xl bg-white/5 p-4 text-center ring-1 ring-white/10">
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                    After
                  </p>
                  <p className="text-xl font-bold text-white">
                    {t.afterWeight}
                  </p>
                </div>
              </div>

              {/* Metric badge */}
              <div className="mb-4 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/10">
                {t.metric} in {t.duration}
              </div>

              {/* Person */}
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Start your transformation
            <ArrowRight className="size-4" />
          </a>
          <p className="mt-4 text-xs text-zinc-600">
            Results may vary. Names changed for privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
