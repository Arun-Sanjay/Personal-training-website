"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { AnimatedBarbell, FloatingParticles } from "./motion-graphics";

function CountUp({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || target === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl font-bold text-white md:text-3xl">
        {target > 0 ? (
          <>
            {count}
            {suffix}
          </>
        ) : (
          <span className="text-white">&#10003;</span>
        )}
      </div>
      <div className="mt-1 text-sm text-zinc-400">{label}</div>
    </div>
  );
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
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

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-32 pt-24 sm:px-8 lg:px-16">
      {/* Gradient blobs — white/silver glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-40 -left-40 h-80 w-80 rounded-full bg-white/[0.06] blur-[120px]" />
        <div className="animate-blob animation-delay-2000 absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-white/[0.04] blur-[120px]" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-white/[0.05] blur-[120px]" />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* ── Left: Text content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          {/* Floating badge */}
          <motion.div variants={item} className="mb-8 inline-block">
            <div className="animate-pulse-subtle inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-sm backdrop-blur-sm">
              <span>🏋️</span>
              <span className="text-zinc-300">
                30 Sessions for{" "}
                <span className="font-semibold text-white">₹24,000</span>
              </span>
            </div>
          </motion.div>

          {/* Label */}
          <motion.p
            variants={item}
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400"
          >
            Personal Training
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-5xl md:text-6xl"
          >
            Your Personal Trainer,
            <br />
            Anywhere in Bangalore
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 md:text-lg lg:mx-0"
          >
            In-person training at your home, office, or gym. Customized workout
            plans, nutrition coaching, and a personal fitness app — all in one.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[#0A0A0A] transition-all hover:bg-zinc-200 active:scale-95"
            >
              Start Your Transformation
            </a>
            <a
              href="#pricing"
              className="rounded-lg border border-zinc-700 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-zinc-500 hover:bg-zinc-900 active:scale-95"
            >
              View Plans
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Animated barbell ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" as const }}
          className="hidden lg:block"
        >
          <AnimatedBarbell className="w-full max-w-lg mx-auto" />
        </motion.div>
      </div>

      {/* Stats bar — sits at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" as const }}
        className="absolute bottom-12 left-0 right-0 z-10 px-4 sm:px-8 lg:px-16"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
          <CountUp target={100} suffix="+" label="Sessions Completed" />
          <div className="hidden h-8 w-px bg-zinc-800 sm:block" />
          <CountUp target={0} suffix="" label="Anywhere in Bangalore" />
          <div className="hidden h-8 w-px bg-zinc-800 sm:block" />
          <CountUp target={0} suffix="" label="Diet + Training + App" />
        </div>
      </motion.div>
    </section>
  );
}
