"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { BLOG_POSTS, WHATSAPP_URL } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function BlogTips() {
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
            Knowledge
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Fitness Tips & Insights
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {BLOG_POSTS.map((post) => (
            <motion.a
              key={post.title}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-colors hover:border-zinc-700"
            >
              {/* Tag + read time */}
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white ring-1 ring-white/10">
                  {post.tag}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-zinc-500">
                  <Clock className="size-3" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-zinc-200">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400">
                {post.excerpt}
              </p>

              {/* Read more */}
              <span className="flex items-center gap-1 text-sm font-medium text-zinc-500 transition-colors group-hover:text-white">
                Read more
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
