"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  UtensilsCrossed,
  ClipboardList,
  Smartphone,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const icons = {
  Dumbbell,
  UtensilsCrossed,
  ClipboardList,
  Smartphone,
} as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
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

export default function Services() {
  return (
    <section id="services" className="px-4 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Services
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything You Need to Transform
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {SERVICES.map((service) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-colors"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-zinc-800 text-white transition-colors group-hover:bg-white/10">
                  <Icon className="size-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
                <span className="inline-block rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-white">
                  {service.tag}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
