import type { PropsWithChildren } from "react";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";
import type { Variants } from "framer-motion";

const easeOut = cubicBezier(0.16, 1, 0.3, 1);
const easeIn  = cubicBezier(0.4, 0, 1, 1);

export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35, ease: easeOut } },
  exit:    { opacity: 0, transition: { duration: 0.25, ease: easeIn } },
};

export const scaleFadeVariants: Variants = {
  initial: { opacity: 0, scale: 0.98, y: 8 },
  animate: { opacity: 1, scale: 1,    y: 0, transition: { duration: 0.35, ease: easeOut } },
  exit:    { opacity: 0, scale: 0.98, y: -6, transition: { duration: 0.25, ease: easeIn } },
};

export const slideUpVariants: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
  exit:    { opacity: 0, y: 8, transition: { duration: 0.25, ease: easeIn } },
};

export function FadeIn({ children }: PropsWithChildren) {
  return (
    <motion.div variants={fadeVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

export function ScaleFadeIn({ children }: PropsWithChildren) {
  return (
    <motion.div variants={scaleFadeVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

export function SlideUp({ children }: PropsWithChildren) {
  return (
    <motion.div variants={slideUpVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

export function Show({ when, children }: { when: boolean; children: React.ReactNode }) {
  return <AnimatePresence mode="popLayout">{when ? <FadeIn>{children}</FadeIn> : null}</AnimatePresence>;
}