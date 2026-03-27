"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ────────────────────────────────────────────
   ANIMATED BARBELL — draws itself, then floats
   ──────────────────────────────────────────── */

const draw = (delay: number, duration = 0.8) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay, duration, ease: "easeInOut" as const }, opacity: { delay, duration: 0.2 } },
  },
});

/* Plate component — realistic weight plate with 3D gradients */
function Plate({
  x,
  height,
  width,
  label,
  delay,
}: {
  x: number;
  height: number;
  width: number;
  label: string;
  delay: number;
}) {
  const y = 130 - height / 2;
  const id = `plate-${x}-${width}`;
  return (
    <motion.g initial="hidden" animate="visible">
      <defs>
        {/* 3D gradient — light hits from top-left */}
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.14" />
          <stop offset="40%" stopColor="white" stopOpacity="0.06" />
          <stop offset="100%" stopColor="white" stopOpacity="0.02" />
        </linearGradient>
        {/* Edge highlight */}
        <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="50%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* Plate body */}
      <motion.rect
        x={x} y={y} width={width} height={height} rx={6}
        fill={`url(#${id}-fill)`}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay, duration: 0.6, ease: "easeOut" as const }}
        style={{ transformOrigin: `${x + width / 2}px 130px` }}
      />
      {/* Plate border */}
      <motion.rect
        x={x} y={y} width={width} height={height} rx={6}
        fill="none" stroke={`url(#${id}-edge)`} strokeWidth="1.5"
        variants={draw(delay, 0.7)}
      />
      {/* Inner ring detail (like real Olympic plates) */}
      <motion.circle
        cx={x + width / 2} cy={130} r={Math.min(width, height) * 0.28}
        fill="none" stroke="white" strokeWidth="0.8" opacity="0.12"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.12 }}
        transition={{ delay: delay + 0.5, duration: 0.4 }}
      />
      {/* Weight label */}
      {label && (
        <motion.text
          x={x + width / 2} y={134} textAnchor="middle" fontSize={width > 25 ? 13 : 10}
          fill="white" fillOpacity="0.3" fontWeight="800"
          fontFamily="var(--font-geist-sans)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.6, duration: 0.4 }}
        >
          {label}
        </motion.text>
      )}
      {/* Top highlight shine */}
      <motion.rect
        x={x + 3} y={y + 3} width={width - 6} height={4} rx={2}
        fill="white" fillOpacity="0.08"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.7, duration: 0.3 }}
      />
    </motion.g>
  );
}

export function AnimatedBarbell({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -8, 0], rotate: [0, 0.3, 0, -0.3, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
    >
      <svg
        viewBox="0 0 480 260"
        fill="none"
        className="w-full h-auto"
        style={{ filter: "drop-shadow(0 0 50px rgba(255,255,255,0.08))" }}
      >
        <defs>
          {/* Bar metallic gradient */}
          <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.35" />
            <stop offset="35%" stopColor="white" stopOpacity="0.15" />
            <stop offset="65%" stopColor="white" stopOpacity="0.08" />
            <stop offset="100%" stopColor="white" stopOpacity="0.2" />
          </linearGradient>
          {/* Bar shine highlight */}
          <linearGradient id="bar-shine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          {/* Collar gradient */}
          <linearGradient id="collar-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="white" stopOpacity="0.06" />
          </linearGradient>
          {/* Ambient glow */}
          <radialGradient id="glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Ambient glow behind barbell ── */}
        <motion.ellipse
          cx="240" cy="130" rx="200" ry="80"
          fill="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />

        <motion.g initial="hidden" animate="visible">
          {/* ══════ MAIN BAR ══════ */}
          {/* Bar shadow */}
          <motion.rect
            x="80" y="126" width="320" height="10" rx="5"
            fill="white" fillOpacity="0.03"
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0, duration: 1, ease: "easeInOut" as const }}
            style={{ transformOrigin: "240px 130px" }}
          />
          {/* Bar body */}
          <motion.rect
            x="80" y="122" width="320" height="16" rx="8"
            fill="url(#bar-grad)"
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0, duration: 1, ease: "easeInOut" as const }}
            style={{ transformOrigin: "240px 130px" }}
          />
          {/* Bar top shine */}
          <motion.rect
            x="80" y="122" width="320" height="5" rx="3"
            fill="url(#bar-shine)"
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.1, duration: 1, ease: "easeInOut" as const }}
            style={{ transformOrigin: "240px 124px" }}
          />
          {/* Bar outline */}
          <motion.rect
            x="80" y="122" width="320" height="16" rx="8"
            fill="none" stroke="white" strokeWidth="0.8" opacity="0.2"
            variants={draw(0, 1)}
          />

          {/* ══════ LEFT PLATES (3 plates: 20kg, 10kg, 5kg) ══════ */}
          <Plate x={14} height={180} width={36} label="20" delay={0.4} />
          <Plate x={54} height={150} width={28} label="10" delay={0.6} />
          <Plate x={86} height={120} width={22} label="5" delay={0.75} />

          {/* ══════ LEFT COLLAR / CLAMP ══════ */}
          <motion.rect
            x="112" y="105" width="16" height="50" rx="4"
            fill="url(#collar-grad)" stroke="white" strokeWidth="0.8" opacity="0.6"
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" as const }}
            style={{ transformOrigin: "120px 130px" }}
          />
          {/* Clamp bolt detail */}
          <motion.circle
            cx="120" cy="130" r="3"
            fill="none" stroke="white" strokeWidth="0.8" opacity="0.3"
            initial={{ opacity: 0 }} animate={{ opacity: 0.3 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
          <motion.circle
            cx="120" cy="130" r="1"
            fill="white" fillOpacity="0.2"
            initial={{ opacity: 0 }} animate={{ opacity: 0.2 }}
            transition={{ delay: 1.3, duration: 0.3 }}
          />

          {/* ══════ RIGHT PLATES (3 plates: 5kg, 10kg, 20kg) ══════ */}
          <Plate x={430} height={180} width={36} label="20" delay={0.4} />
          <Plate x={398} height={150} width={28} label="10" delay={0.6} />
          <Plate x={372} height={120} width={22} label="5" delay={0.75} />

          {/* ══════ RIGHT COLLAR / CLAMP ══════ */}
          <motion.rect
            x="352" y="105" width="16" height="50" rx="4"
            fill="url(#collar-grad)" stroke="white" strokeWidth="0.8" opacity="0.6"
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" as const }}
            style={{ transformOrigin: "360px 130px" }}
          />
          <motion.circle
            cx="360" cy="130" r="3"
            fill="none" stroke="white" strokeWidth="0.8" opacity="0.3"
            initial={{ opacity: 0 }} animate={{ opacity: 0.3 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
          <motion.circle
            cx="360" cy="130" r="1"
            fill="white" fillOpacity="0.2"
            initial={{ opacity: 0 }} animate={{ opacity: 0.2 }}
            transition={{ delay: 1.3, duration: 0.3 }}
          />

          {/* ══════ GRIP KNURLING (center) ══════ */}
          {/* Diamond knurl pattern */}
          {Array.from({ length: 16 }).map((_, i) => {
            const xPos = 192 + i * 6;
            return (
              <motion.g key={`knurl-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 + i * 0.02, duration: 0.2 }}
              >
                <line x1={xPos} y1="124" x2={xPos + 3} y2="130"
                  stroke="white" strokeWidth="0.6" opacity="0.2" />
                <line x1={xPos + 3} y1="130" x2={xPos} y2="136"
                  stroke="white" strokeWidth="0.6" opacity="0.2" />
              </motion.g>
            );
          })}

          {/* Grip ring markers */}
          {[195, 210, 270, 285].map((xPos) => (
            <motion.line
              key={`ring-${xPos}`}
              x1={xPos} y1="121" x2={xPos} y2="139"
              stroke="white" strokeWidth="1.2" opacity="0.15"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ delay: 1.5, duration: 0.3 }}
            />
          ))}

          {/* ══════ WEIGHT TOTAL LABEL ══════ */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <rect x="206" y="228" width="68" height="22" rx="11"
              fill="white" fillOpacity="0.06" stroke="white" strokeWidth="0.5" opacity="0.15" />
            <text x="240" y="243" textAnchor="middle" fontSize="10"
              fill="white" fillOpacity="0.4" fontWeight="700"
              fontFamily="var(--font-geist-sans)">
              70 KG
            </text>
          </motion.g>

          {/* ══════ FLOOR SHADOW ══════ */}
          <motion.ellipse
            cx="240" cy="252" rx="140" ry="4"
            fill="white" fillOpacity="0.03"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   WEIGHT PROGRESS CHART — animated line chart
   ──────────────────────────────────────────── */

const chartData = [
  { week: 0, weight: 85, x: 60, y: 30 },
  { week: 4, weight: 81, x: 150, y: 62 },
  { week: 8, weight: 77, x: 240, y: 94 },
  { week: 12, weight: 73, x: 330, y: 126 },
];

const curvePath = "M 60 30 C 95 30, 120 60, 150 62 S 210 90, 240 94 S 300 122, 330 126";

export function WeightProgressChart({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 390 200" fill="none" className="w-full h-auto">
        {/* ── Grid lines ── */}
        {[30, 62, 94, 126, 158].map((y, i) => (
          <motion.line
            key={y}
            x1="50" y1={y} x2="340" y2={y}
            stroke="white" strokeWidth="0.5" strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          />
        ))}

        {/* ── Y-axis labels (weight) ── */}
        {[
          { y: 34, label: "85 kg" },
          { y: 66, label: "81 kg" },
          { y: 98, label: "77 kg" },
          { y: 130, label: "73 kg" },
          { y: 162, label: "69 kg" },
        ].map((item, i) => (
          <motion.text
            key={item.label}
            x="42" y={item.y} textAnchor="end" fontSize="9"
            fill="white" fillOpacity="0.35" fontFamily="var(--font-geist-sans)"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
          >
            {item.label}
          </motion.text>
        ))}

        {/* ── X-axis labels (weeks) ── */}
        {chartData.map((d, i) => (
          <motion.text
            key={d.week}
            x={d.x} y="175" textAnchor="middle" fontSize="9"
            fill="white" fillOpacity="0.35" fontFamily="var(--font-geist-sans)"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
          >
            {d.week === 0 ? "Start" : `Week ${d.week}`}
          </motion.text>
        ))}

        {/* ── Target weight dashed line ── */}
        <motion.line
          x1="50" y1="158" x2="340" y2="158"
          stroke="white" strokeWidth="1" strokeDasharray="6 4" opacity="0.15"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
        />
        <motion.text
          x="348" y="162" fontSize="8"
          fill="white" fillOpacity="0.25" fontFamily="var(--font-geist-sans)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.4 }}
        >
          Goal
        </motion.text>

        {/* ── Gradient area under curve ── */}
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.12" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={`${curvePath} L 330 158 L 60 158 Z`}
          fill="url(#chartGradient)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        />

        {/* ── Main curve ── */}
        <motion.path
          d={curvePath}
          stroke="white" strokeWidth="2.5" strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))" }}
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" as const }}
        />

        {/* ── Data points ── */}
        {chartData.map((d, i) => (
          <motion.g key={d.week}>
            {/* Outer glow ring */}
            <motion.circle
              cx={d.x} cy={d.y} r="8"
              fill="white" fillOpacity="0.06"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1.2 + i * 0.2, duration: 0.4, type: "spring" }}
            />
            {/* Dot */}
            <motion.circle
              cx={d.x} cy={d.y} r="4"
              fill="#0A0A0A" stroke="white" strokeWidth="2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1.2 + i * 0.2, duration: 0.4, type: "spring" }}
            />
            {/* Weight value label */}
            <motion.text
              x={d.x} y={d.y - 14} textAnchor="middle" fontSize="10"
              fill="white" fillOpacity="0.7" fontWeight="600"
              fontFamily="var(--font-geist-sans)"
              initial={{ opacity: 0, y: 5 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 + i * 0.2, duration: 0.3 }}
            >
              {d.weight}kg
            </motion.text>
          </motion.g>
        ))}

        {/* ── Change indicator ── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <rect x="260" y="4" width="70" height="22" rx="11" fill="white" fillOpacity="0.1" />
          <text x="295" y="18" textAnchor="middle" fontSize="10" fill="white" fillOpacity="0.8" fontWeight="600"
            fontFamily="var(--font-geist-sans)">
            -12 kg ↓
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────
   FLOATING PARTICLES — background fitness icons
   ──────────────────────────────────────────── */

const particleConfigs = [
  { path: "M4 2L6 6L10 6L7 9L8 13L4 10L0 13L1 9L-2 6L2 6Z", x: "8%", size: 14, delay: 0, dur: 18 },
  { path: "M5 0a5 5 0 110 10a5 5 0 010-10z", x: "22%", size: 10, delay: 4, dur: 22 },
  { path: "M3 0L6 10L0 4L6 4L0 10Z", x: "38%", size: 12, delay: 2, dur: 16 },
  { path: "M5 0a5 5 0 110 10a5 5 0 010-10z", x: "52%", size: 8, delay: 6, dur: 20 },
  { path: "M4 2L6 6L10 6L7 9L8 13L4 10L0 13L1 9L-2 6L2 6Z", x: "68%", size: 12, delay: 1, dur: 19 },
  { path: "M3 0L6 10L0 4L6 4L0 10Z", x: "82%", size: 10, delay: 5, dur: 17 },
  { path: "M5 0a5 5 0 110 10a5 5 0 010-10z", x: "92%", size: 14, delay: 3, dur: 21 },
  { path: "M4 2L6 6L10 6L7 9L8 13L4 10L0 13L1 9L-2 6L2 6Z", x: "15%", size: 10, delay: 7, dur: 15 },
  { path: "M3 0L6 10L0 4L6 4L0 10Z", x: "75%", size: 8, delay: 8, dur: 23 },
];

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particleConfigs.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: p.x, bottom: "-5%" }}
          animate={{
            y: [0, -800, -1200],
            opacity: [0, 0.15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 10 14" fill="none">
            <path d={p.path} stroke="white" strokeWidth="0.8" opacity="0.5" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────
   ANIMATED HEARTBEAT LINE — ECG-style
   ──────────────────────────────────────────── */

const ecgPath =
  "M0 50 L30 50 L35 50 L40 48 L45 52 L50 50 L55 50 L58 50 L62 20 L66 75 L70 35 L74 55 L78 50 L100 50 L130 50 L135 48 L140 52 L145 50 L150 50 L153 50 L157 20 L161 75 L165 35 L169 55 L173 50 L200 50";

export function AnimatedHeartbeat({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 200 100" fill="none" className="w-full h-auto">
        <motion.path
          d={ecgPath}
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))" }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────
   PULSE RINGS — expanding circles for CTAs
   ──────────────────────────────────────────── */

export function PulseRings({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center ${className ?? ""}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/10"
          initial={{ width: 100, height: 100, opacity: 0.3 }}
          animate={{
            width: [100, 400],
            height: [100, 400],
            opacity: [0.2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
