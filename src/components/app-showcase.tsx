"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { APP_FEATURES, WHATSAPP_URL } from "@/lib/constants";
import { WeightProgressChart } from "./motion-graphics";

function PhoneMockup() {
  const workouts = [
    { name: "Barbell Squat", sets: "4×8", weight: "60 kg", done: true },
    { name: "Romanian Deadlift", sets: "3×10", weight: "50 kg", done: true },
    { name: "Leg Press", sets: "3×12", weight: "100 kg", done: false },
    { name: "Walking Lunges", sets: "3×12", weight: "16 kg", done: false },
    { name: "Leg Curl", sets: "3×15", weight: "30 kg", done: false },
  ];

  return (
    <div className="relative mx-auto w-[280px]">
      {/* Phone frame */}
      <div className="rounded-[2.5rem] border-2 border-zinc-700 bg-zinc-900 p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl border-x-2 border-b-2 border-zinc-700 bg-zinc-900" />

        {/* Screen */}
        <div className="overflow-hidden rounded-[2rem] bg-[#0A0A0A]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pb-2 pt-8">
            <span className="text-[10px] text-zinc-500">9:41</span>
            <div className="flex gap-1">
              <div className="h-1.5 w-3 rounded-full bg-zinc-600" />
              <div className="h-1.5 w-3 rounded-full bg-zinc-600" />
              <div className="h-1.5 w-4 rounded-sm bg-zinc-500" />
            </div>
          </div>

          {/* App header */}
          <div className="px-5 pb-3 pt-2">
            <p className="text-[10px] uppercase tracking-wider text-zinc-500">
              Today&apos;s Workout
            </p>
            <h4 className="text-sm font-bold text-white">
              Lower Body — Push
            </h4>
            <div className="mt-2 flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[40%] rounded-full bg-white" />
              </div>
              <span className="text-[10px] text-zinc-400">2/5</span>
            </div>
          </div>

          {/* Workout list */}
          <div className="space-y-0.5 px-3 pb-6">
            {workouts.map((w) => (
              <div
                key={w.name}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
                  w.done ? "bg-white/5" : "bg-zinc-900/50"
                }`}
              >
                <div
                  className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                    w.done
                      ? "border-white bg-white/20"
                      : "border-zinc-700"
                  }`}
                >
                  {w.done && <Check className="size-3 text-white" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-xs font-medium ${
                      w.done ? "text-zinc-400" : "text-white"
                    }`}
                  >
                    {w.name}
                  </p>
                  <p className="text-[10px] text-zinc-500">
                    {w.sets} · {w.weight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-white/[0.03] blur-2xl" />
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section id="app" className="px-4 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Your Fitness App
            </p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Track Everything
              <br />
              in One Place
            </h2>
            <ul className="mb-8 space-y-4">
              {APP_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-white" />
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Weight chart inline */}
            <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
                Progress Tracking
              </p>
              <WeightProgressChart className="w-full" />
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition-all hover:bg-zinc-200 active:scale-95"
            >
              Included Free with Any Plan
            </a>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
