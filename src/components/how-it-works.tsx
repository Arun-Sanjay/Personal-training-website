"use client";

import { motion } from "framer-motion";
import { MessageCircle, UserCheck, Rocket } from "lucide-react";
import { STEPS } from "@/lib/constants";

const icons = {
  MessageCircle,
  UserCheck,
  Rocket,
} as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            How It Works
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Start in 3 Simple Steps
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid gap-8 md:grid-cols-3"
        >
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute top-16 right-[16.67%] left-[16.67%] hidden h-px bg-gradient-to-r from-zinc-800 via-white/15 to-zinc-800 md:block" />

          {STEPS.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <motion.div
                key={step.title}
                variants={item}
                className="relative text-center"
              >
                <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-white">
                  <Icon className="size-6" />
                </div>
                <span className="mb-2 block text-xs font-medium text-zinc-500">
                  Step {i + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
