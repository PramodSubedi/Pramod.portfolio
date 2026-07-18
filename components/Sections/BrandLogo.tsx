"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Satellite } from "lucide-react";

const words = [
  "Forestry",
  "Geospatial Science",
  "Remote Sensing",
  "Natural Hazards",
  "Environmental Research",
];

export default function BrandLogo() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 3500);
    return () => clearInterval(t);
  }, []);

  const compact = false;
  const logoSize = compact ? "h-10 w-10" : "h-14 w-14";
  const titleClass = compact ? "text-[0.72rem]" : "text-sm";
  const subtitleClass = compact ? "h-4 text-[0.65rem]" : "h-5 text-xs";

  return (
    <motion.div className="flex items-center gap-4 select-none" initial={false} whileHover={{ filter: "brightness(1.04)" }}>
      {/* Satellite icon */}
      <motion.span
        initial={{ rotate: -12, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ rotate: 5 }}
        className={`text-emerald-400 ${logoSize} flex items-center justify-center`}
      >
        <Satellite className={compact ? "h-5 w-5" : "h-6 w-6"} />
      </motion.span>

      {/* small contour (optional) */}
      <motion.div className={`relative ${logoSize} hidden md:block`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} aria-hidden>
        <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
          <motion.ellipse cx="50" cy="50" rx="38" ry="28" stroke="#2FBF71" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9 }} />
          <motion.ellipse cx="50" cy="50" rx="28" ry="20" stroke="#2FBF71" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.12 }} />
          <motion.ellipse cx="50" cy="50" rx="18" ry="12" stroke="#2FBF71" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.24 }} />
          <motion.circle cx="50" cy="50" r="2.8" fill="#2FBF71" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.45, delay: 0.6 }} />
        </svg>
      </motion.div>

      <div className="leading-tight relative">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`font-semibold uppercase text-white ${titleClass} tracking-[0.22em]`}
        >
          Pramod Subedi
        </motion.h1>

        <div className={`overflow-hidden ${subtitleClass} mt-0.5`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`tracking-wider uppercase text-gray-400 ${subtitleClass}`}
            >
              {words[idx]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* soft scan beam — runs once on mount */}
        <motion.span
          aria-hidden
          initial={{ left: "-30%", opacity: 0 }}
          animate={{ left: "120%", opacity: [0, 1, 0] }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "28%",
            height: "100%",
            pointerEvents: "none",
            mixBlendMode: "screen",
            filter: "blur(6px)",
            background: "linear-gradient(90deg, rgba(47,191,113,0.06), rgba(47,191,113,0.14), rgba(47,191,113,0.06))",
            borderRadius: 6,
          }}
        />
      </div>
    </motion.div>
  );
}