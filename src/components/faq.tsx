"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="px-4 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#CCFF00]">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Accordion defaultValue={[]} className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 backdrop-blur-sm data-[state=open]:border-zinc-700"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-white hover:text-[#CCFF00] hover:no-underline [&[data-state=open]]:text-[#CCFF00]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-zinc-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
