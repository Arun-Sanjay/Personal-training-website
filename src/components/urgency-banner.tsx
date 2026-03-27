"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-[60] overflow-hidden bg-white"
        >
          <div className="flex items-center justify-center gap-2 px-4 py-2 text-center text-sm text-[#0A0A0A]">
            <span className="relative mr-1 flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-red-500" />
            </span>
            <span>
              <span className="font-semibold">Limited slots available this month</span>
              {" — "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:no-underline"
              >
                Book your free trial today
              </a>
            </span>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 text-zinc-500 hover:text-zinc-800"
              aria-label="Dismiss"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
