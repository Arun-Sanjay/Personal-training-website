"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_PLANS, WHATSAPP_URL } from "@/lib/constants";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`relative flex flex-col rounded-2xl border p-8 backdrop-blur-sm ${
                plan.popular
                  ? "border-white/30 bg-zinc-900/80 shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                  : "border-zinc-800 bg-zinc-900/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-zinc-400">/{plan.period}</span>
                </div>
                {plan.originalPrice && (
                  <p className="mt-1 text-sm text-zinc-500 line-through">
                    {plan.originalPrice}
                  </p>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-white" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-lg py-3 text-center text-sm font-semibold transition-all active:scale-95 ${
                  plan.popular
                    ? "bg-white text-[#0A0A0A] hover:bg-zinc-200"
                    : "border border-zinc-700 text-white hover:border-zinc-500 hover:bg-zinc-800"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
