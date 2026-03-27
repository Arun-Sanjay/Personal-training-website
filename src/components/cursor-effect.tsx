"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorEffect() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only on desktop
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden lg:block"
      animate={{
        x: pos.x - 160,
        y: pos.y - 160,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
    >
      <div className="size-80 rounded-full bg-white/[0.02] blur-[80px]" />
    </motion.div>
  );
}
