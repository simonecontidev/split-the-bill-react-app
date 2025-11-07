"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export function AnimatedNumber({
  value,
  prefix = "€",
  suffix = "",
  duration = 0.5,
  decimals = 2,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}) {
  // memorizza l’ultimo valore per animare da lì
  const motionValue = useMotionValue(value);
  const prevValue = useRef(value);

  // conversione motion → testo leggibile
  const rounded = useTransform(motionValue, (latest) => {
    return `${prefix}${latest.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    // anima dal valore precedente al nuovo
    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
      onComplete: () => {
        // micro pulse "vivo"
        animate(motionValue, value * 1.015, { duration: 0.12, ease: "easeOut" })
          .then(() =>
            animate(motionValue, value, { duration: 0.12, ease: "easeInOut" })
          );
      },
    });

    prevValue.current = value;
    return controls.stop;
  }, [value, motionValue, duration]);

  return (
    <motion.span
      layout
      className="font-bold text-3xl md:text-4xl text-sky-100 inline-block"
    >
      {rounded}
    </motion.span>
  );
}