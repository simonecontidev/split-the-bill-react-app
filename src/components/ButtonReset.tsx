"use client";

import { useCalculatorStore } from "../store/Calculator.store";
import { motion, useAnimationControls } from "framer-motion";

interface Props {
  text: string;
}

export const ButtonReset = ({ text }: Props) => {
  const reset = useCalculatorStore((s) => s.reset);
  const bill = useCalculatorStore((s) => s.bill);
  const people = useCalculatorStore((s) => s.people);
  const tip = useCalculatorStore((s) => s.tip);

  const disabled = bill === 0 && people === 1 && tip === 0;

  const controls = useAnimationControls();
  const handle = async () => {
    reset();
    await controls.start({
      scale: [1, 1.04, 1],
      transition: { duration: 0.24, ease: "easeOut" },
    });
  };

  return (
    <motion.button
      type="button"
      onClick={handle}
      animate={controls}
      disabled={disabled}
      className="
        bg-blue-400 text-white uppercase font-bold text-center
        h-12 w-full rounded-[5px] cursor-pointer
        hover:bg-amber-50 hover:text-black
        disabled:opacity-40 disabled:pointer-events-none
        transition-colors duration-200
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
      "
      whileHover={!disabled ? { scale: 1.03, boxShadow: "0 10px 24px rgba(0,0,0,0.18)" } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {text}
    </motion.button>
  );
};