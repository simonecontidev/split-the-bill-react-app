"use client";

import { useCalculatorStore } from "../store/Calculator.store";
import { motion } from "framer-motion";

interface Props {
  percent: number;
  isCustom?: boolean;
}

export const PercentButton = ({ percent, isCustom = false }: Props) => {
  const store = useCalculatorStore();
  const isActive = store.tip === percent;

  const handleClick = () => {
    if (!isCustom) store.setTip(percent);
  };

  // classi base + transizioni colore fluide
  const base =
    "w-full h-12 rounded-[5px] font-bold text-2xl select-none " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
    "transition-colors duration-200";

  // stile visuale (usa le tue utility: bg-bg, ecc.)
  const idle = isCustom
    ? "bg-blue-400 text-white placeholder:text-bg"
    : "bg-bg text-amber-50 hover:bg-blue-300 hover:text-bg";

  const active = "bg-blue-600 text-white";

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-pressed={!isCustom && isActive}
      className={`${base} ${idle} ${!isCustom && isActive ? active : ""}`}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 24px rgba(0,0,0,0.18)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {isCustom ? "Custom" : `${percent}%`}
    </motion.button>
  );
};