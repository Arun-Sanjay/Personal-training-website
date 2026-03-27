"use client";

import { motion } from "framer-motion";
import { Camera, Heart, MessageCircle as Comment } from "lucide-react";
import { INSTAGRAM_POSTS } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function InstagramFeed() {
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
            Follow Along
          </p>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            @prem_l1
          </h2>
          <p className="text-sm text-zinc-400">Tips, workouts, and behind-the-scenes</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-3 md:grid-cols-3"
        >
          {INSTAGRAM_POSTS.map((post, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/prem_l1/"
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="group relative aspect-square overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-800 to-zinc-900"
            >
              {/* Geometric pattern placeholder */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      i % 3 === 0
                        ? "radial-gradient(circle at 30% 40%, white 1px, transparent 1px)"
                        : i % 3 === 1
                        ? "linear-gradient(45deg, white 1px, transparent 1px)"
                        : "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: i % 3 === 0 ? "20px 20px" : i % 3 === 1 ? "15px 15px" : "25px 25px",
                  }}
                />
              </div>

              {/* Tag */}
              <div className="absolute left-3 top-3">
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                  {post.tag}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0A0A0A]/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <div className="flex items-center gap-4 text-white">
                  <span className="flex items-center gap-1 text-sm">
                    <Heart className="size-4" fill="white" /> {120 + i * 23}
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <Comment className="size-4" /> {8 + i * 3}
                  </span>
                </div>
                <p className="max-w-[80%] text-center text-xs text-zinc-300">
                  {post.caption}
                </p>
              </div>

              {/* Instagram icon */}
              <div className="absolute bottom-3 right-3">
                <Camera className="size-4 text-white/20" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href="https://www.instagram.com/prem_l1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:border-zinc-600 hover:bg-zinc-900"
          >
            <Camera className="size-4" />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
