"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function VideoSection() {
  return (
    <section className="px-4 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            See It in Action
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Training That Comes to You
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50"
        >
          {/* Video placeholder */}
          <div className="relative aspect-video">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800/50 to-zinc-900" />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mb-6 flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-white/20"
              >
                <Play className="ml-1 size-8 text-white" fill="white" />
                {/* Ring pulse */}
                <span className="absolute inset-0 animate-ping rounded-full border border-white/10" />
              </a>
              <p className="text-lg font-semibold text-white">Watch Training Highlights</p>
              <p className="mt-2 text-sm text-zinc-400">
                See what a typical session looks like
              </p>
            </div>

            {/* Corner decorations */}
            <div className="absolute left-6 top-6 flex items-center gap-2">
              <div className="size-3 rounded-full bg-red-500/80" />
              <span className="text-xs font-medium text-zinc-500">REC</span>
            </div>
            <div className="absolute bottom-6 right-6 text-xs font-mono text-zinc-600">
              01:45 / 02:30
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
              <div className="h-full w-[65%] bg-white/40" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
