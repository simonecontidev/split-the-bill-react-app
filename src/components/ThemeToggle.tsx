"use client";
import { useTheme } from "@/theme/ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const next = () => {
    setTheme(theme === "light" ? "system" : theme === "system" ? "dark" : "light");
  };

  const label =
    theme === "light" ? "☀️ Light" :
    theme === "dark" ? "🌙 Dark" :
    "🖥️ System";

  return (
    <motion.button
      type="button"
      onClick={next}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-md px-3 py-2 bg-slate-200 text-slate-900 
                 dark:bg-slate-800 dark:text-slate-100 transition-colors"
    >
      {label}
    </motion.button>
  );
}