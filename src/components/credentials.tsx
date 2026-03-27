"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Users, GraduationCap } from "lucide-react";
import { CREDENTIALS } from "@/lib/constants";

const icons = { Award, Calendar, Users, GraduationCap } as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Credentials() {
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
            Credentials
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Qualified & Experienced
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {CREDENTIALS.map((cred) => {
            const Icon = icons[cred.icon];
            return (
              <motion.div
                key={cred.value}
                variants={item}
                className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center backdrop-blur-sm"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-white/5 text-white">
                  <Icon className="size-6" />
                </div>
                <p className="mb-1 text-2xl font-bold text-white">{cred.value}</p>
                <p className="text-xs text-zinc-400">{cred.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
