// src/components/PerfectSplitEasterEgg.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";

export function PerfectSplitEasterEgg({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="egg"
          initial={{ opacity: 0, scale: 0.6, rotate: -10, y: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, rotate: 10, y: -6 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="pointer-events-none absolute -top-3 -right-2 flex items-center gap-1"
          aria-live="polite"
        >
          <span className="text-xl">🥳</span>
          <span className="sr-only">Perfect split!</span>

          {/* mini-confetti */}
          <div className="relative w-0 h-0">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.6 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, (i - 2.5) * 6, (i - 2.5) * 10],
                  y: [0, -8 - i * 2, -14 - i * 3],
                  scale: [0.6, 1, 0.6],
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute block h-1.5 w-1.5 rounded-full"
                style={{
                  background:
                    ["#60a5fa", "#f472b6", "#34d399", "#f59e0b", "#a78bfa", "#22d3ee"][i],
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}