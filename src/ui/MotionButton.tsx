"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type Variant = "primary" | "percent" | "ghost";

export function MotionButton({
  children,
  onClick,
  className,
  active = false,
  disabled = false,
  variant = "primary",
  ariaPressed,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  variant?: Variant;
  ariaPressed?: boolean;
}) {
  // Colori di base per variante (Tailwind v4 + animate su style)
  const baseClasses = clsx(
    "inline-flex items-center justify-center rounded-lg px-4 py-3 font-semibold transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:opacity-40 disabled:pointer-events-none",
    variant === "primary" && "text-white",
    variant === "percent" && "text-white",
    variant === "ghost" && "border border-white/15 text-white/90",
    className
  );

  // Colori target in base allo stato (Framer anima backgroundColor/color in modo fluido)
  const colors = (() => {
    switch (variant) {
      case "primary":
        return active
          ? { backgroundColor: "rgb(2 132 199)", color: "#fff" } // bg-sky-600
          : { backgroundColor: "rgb(14 165 233)", color: "#fff" }; // bg-sky-500
      case "percent":
        return active
          ? { backgroundColor: "rgb(2 132 199)", color: "#0a0a0a" } // attivo più evidente
          : { backgroundColor: "rgb(30 41 59)", color: "#fff" }; // bg-slate-800
      case "ghost":
      default:
        return active
          ? { backgroundColor: "rgba(255,255,255,0.08)", color: "#fff" }
          : { backgroundColor: "transparent", color: "rgba(255,255,255,0.9)" };
    }
  })();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={ariaPressed ?? active}
      className={baseClasses}
      // Animazioni interazione
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
      }}
      whileTap={{ scale: 0.98 }}
      animate={{
        ...colors,
        // ombra più soft quando attivo
        boxShadow: active ? "0 10px 30px rgba(2, 132, 199, 0.25)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      // safety per utenti con reduced motion (opzionale)
      // style={{ willChange: "transform, box-shadow, background-color, color" }}
    >
      {children}
    </motion.button>
  );
}