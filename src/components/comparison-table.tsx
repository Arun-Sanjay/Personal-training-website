"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { COMPARISON } from "@/lib/constants";

export default function ComparisonTable() {
  return (
    <section className="px-4 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Why Personal Training
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Gym Membership vs. Personal Trainer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_80px_80px] gap-4 border-b border-zinc-800 px-6 py-4 sm:grid-cols-[1fr_120px_120px]">
            <div />
            <p className="text-center text-xs font-medium uppercase tracking-wider text-zinc-500">
              Gym
            </p>
            <p className="text-center text-xs font-medium uppercase tracking-wider text-white">
              Personal Trainer
            </p>
          </div>

          {/* Rows */}
          {COMPARISON.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_80px_80px] gap-4 px-6 py-3.5 sm:grid-cols-[1fr_120px_120px] ${
                i < COMPARISON.length - 1 ? "border-b border-zinc-800/50" : ""
              }`}
            >
              <p className="text-sm text-zinc-300">{row.feature}</p>

              {/* Gym column */}
              <div className="flex items-center justify-center">
                {typeof row.gym === "boolean" ? (
                  row.gym ? (
                    <Check className="size-4 text-zinc-500" />
                  ) : (
                    <X className="size-4 text-zinc-700" />
                  )
                ) : (
                  <span className="text-xs text-zinc-400">{row.gym}</span>
                )}
              </div>

              {/* PT column */}
              <div className="flex items-center justify-center">
                {typeof row.pt === "boolean" ? (
                  row.pt ? (
                    <Check className="size-4 text-white" />
                  ) : (
                    <X className="size-4 text-zinc-700" />
                  )
                ) : (
                  <span className="text-xs font-semibold text-white">
                    {row.pt}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
