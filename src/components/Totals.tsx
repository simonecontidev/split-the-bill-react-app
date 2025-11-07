// src/components/Totals.tsx
import { ButtonReset, TotalItem } from "../components";
import { useCalculatorStore } from "../store/Calculator.store";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import type { Variants } from "framer-motion";
import { PerfectSplitEasterEgg } from "./PerfectSplitEasterEgg";
import { isPerfectSplit } from "../utils/money";

const easeOut = cubicBezier(0.16, 1, 0.3, 1);
const easeIn  = cubicBezier(0.4, 0, 1, 1);

const containerVariants: Variants = {
  initial: { opacity: 0, scale: 0.98, y: 8 },
  animate: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.35, ease: easeOut, when: "beforeChildren", staggerChildren: 0.06 },
  },
  exit: { opacity: 0, scale: 0.98, y: -6, transition: { duration: 0.25, ease: easeIn } },
};

const rowVariants: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.2, ease: easeIn } },
};

export const Totals = () => {
  const store = useCalculatorStore();
  const tipAmount = store.tipAmount();
  const total = store.total();
  const show = tipAmount > 0 || total > 0;

  const perfect = isPerfectSplit(total, 2);
  const animKey = `${tipAmount.toFixed(2)}-${total.toFixed(2)}`;

  return (
    <AnimatePresence mode="popLayout">
      {show && (
        <motion.div
          key={animKey}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative bg-black rounded-[15px] py-6 text-white px-8 lg:w-[413px] lg:flex lg:flex-col lg:justify-between"
        >
          <PerfectSplitEasterEgg show={perfect} />

          <div aria-live="polite">
            <motion.div variants={rowVariants}>
              <TotalItem text="Tip Amount" value={tipAmount} />
            </motion.div>
            <motion.div variants={rowVariants}>
              <TotalItem text="Total" value={total} />
            </motion.div>
          </div>

          <motion.div layout className="mt-6">
            <ButtonReset text="Reset the tips" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};