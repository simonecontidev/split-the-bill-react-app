import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // ⬅️ importante
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;