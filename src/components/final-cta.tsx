"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL, PHONE_NUMBER } from "@/lib/constants";
import { PulseRings, AnimatedHeartbeat } from "./motion-graphics";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-16">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[150px]" />
      </div>

      {/* Pulse rings background */}
      <PulseRings />

      {/* Heartbeat line decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2"
      >
        <AnimatedHeartbeat className="mx-auto max-w-2xl opacity-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to Start Your
          <br />
          Transformation?
        </h2>
        <p className="mb-10 text-base text-zinc-400 md:text-lg">
          Book a free trial session. No commitment, no pressure.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-white px-10 py-4 text-base font-semibold text-[#0A0A0A] transition-all hover:bg-zinc-200 active:scale-95 md:text-lg"
        >
          Message Me on WhatsApp
        </a>
        <p className="mt-6 text-sm text-zinc-500">
          Or call:{" "}
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="text-zinc-300 underline underline-offset-4 hover:text-white"
          >
            {PHONE_NUMBER}
          </a>
        </p>
      </motion.div>
    </section>
  );
}
