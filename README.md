# 💸 Split the Bill — React + TypeScript App

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-EF007B?logo=framer)](https://www.framer.com/motion/)
[![Zustand](https://img.shields.io/badge/Zustand-State%20Manager-orange?logo=react)](https://github.com/pmndrs/zustand)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)](https://vitejs.dev/)

---

A simple yet polished **tip & bill splitter** built with **React + TypeScript + Zustand + Tailwind CSS**.  
Designed with smooth micro-interactions (Framer Motion) and a clean UI that feels “alive”.

Percent presets + custom entry, subtle celebratory micro-interactions when totals align.
Dark/Light mode with system sync and accessible contrast ratios.
Calculate and split totals in seconds: tip presets + custom input, tax handling, and uneven shares per person with immediate feedback.
Smooth UX details: input masking, live validation, rounding modes, and a celebratory micro-animation when amounts resolve cleanly.
Dark/Light mode with system sync and WCAG-aware contrast, fully keyboard-navigable controls, and clear error states.
Snappy state updates and zero layout shift for a distraction-free flow on mobile and desktop.

[Live Demo](https://splitbill.simoneconti.work/) 

---

## ✨ Features

### 🧮 Smart Calculator

- Input for **bill amount**, **number of people**, and **tip percentage** (preset or custom).
- Real-time computation of:
  - Tip amount per person  
  - Total per person  

---

### 🌗 Auto Light / Dark Theme

- Syncs automatically with the system setting.  
- Optional **toggle** to switch between `Light / Dark / System`.  
- Zero flash on load thanks to inline theme preload script.  

---

### 🧠 Smooth Animations (Framer Motion)

- **Fade + Scale** when results appear or update.  
- **Slide-up** transitions for input sections.  
- **Button feedback:** subtle scale & shadow on hover/tap.  
- **Animated counter:** totals count up dynamically to the new value.  
- **Pulse** effect on the “Calculate” button.  
- **Easter egg 🥳** when the split is perfectly even (no decimals).  

---

### 💾 State Management

- **Zustand** store for centralized, reactive state.  
- Persisted in `localStorage` — your last calculation is saved automatically.  

---

### ♿ Accessibility

- Keyboard focus & `aria-pressed` on toggle buttons.  
- `aria-live` regions for updated totals.  

---

## 🧰 Stack

| Tool | Purpose |
|------|----------|
| **React 18 + Vite** | Base framework & bundler |
| **TypeScript** | Type-safe logic |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Animations & micro-interactions |
| **Zustand** | State management |
| **ESLint + Prettier** | Clean code & consistency |

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/split-the-bill-react.git
cd split-the-bill-react
```

### 2️⃣ Install dependencies

npm install
# or
pnpm install

### 3️⃣ Run the development server
npm run dev

Then open 👉 http://localhost:5173￼

---

## 📁 Folder Structure
src/
├─ components/
│  ├─ AnimatedNumber.tsx         # Counter for totals
│  ├─ PercentButton.tsx          # Tip percentage buttons
│  ├─ ButtonReset.tsx            # Reset button
│  ├─ Totals.tsx                 # Results panel
│  └─ PerfectSplitEasterEgg.tsx  # 🎉 Easter egg
│
├─ store/
│  └─ Calculator.store.ts        # Zustand logic
│
├─ theme/
│  └─ ThemeProvider.tsx          # Auto dark/light system sync
│
├─ ui/
│  ├─ MotionButton.tsx           # Reusable animated button
│  └─ motion.tsx                 # Reusable animation variants
│
├─ utils/
│  └─ money.ts                   # Helper for perfect split check
│
├─ App.tsx
└─ main.tsx

---

## Design Philosophy

“Utility meets delight.”

	•	Focus: clarity, precision, feedback
	•	Aesthetic: minimal yet tactile
	•	Goal: make a simple task feel rewarding
	•	Motion: soft, responsive, meaningful
	•	Mood: friendly, confident, efficient

---

## License

This project is open-source under the MIT License.
You’re free to use, modify, and adapt it with attribution.

“Small details make great experiences.” 💸
