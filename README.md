# 💸 Split the Bill — React + TypeScript App

A simple yet polished **tip & bill splitter** built with **React + TypeScript + Zustand + Tailwind CSS**.  
Designed with smooth micro-interactions (Framer Motion) and a clean UI that feels “alive”.

![preview](./public/preview.jpg)

---

## ✨ Features

### 🧮 Smart Calculator

- Input for **bill amount**, **number of people**, and **tip percentage** (preset or custom).
- Real-time computation of:
  - Tip amount per person
  - Total per person

### 🌗 Auto Light / Dark Theme

- Syncs automatically with the system setting.
- Optional **toggle** to switch between `Light / Dark / System`.
- Zero flash on load thanks to inline theme preload script.

### 🧠 Smooth Animations (Framer Motion)

- **Fade + Scale** when results appear or update.
- **Slide-up** transitions for input sections.
- **Button feedback**: subtle scale & shadow on hover/tap.
- **Animated counter**: totals count up dynamically to the new value.
- **Pulse** effect on the “Calculate” button.
- **Easter egg 🥳** when the split is perfectly even (no decimals).

### 💾 State Management

- **Zustand** store for centralized, reactive state.
- Persisted in `localStorage` — your last calculation is saved.

### ♿ Accessibility

- Keyboard focus & `aria-pressed` on toggle buttons.
- `aria-live` regions for updated totals.

### 🧰 Stack

| Tool                  | Purpose                         |
| --------------------- | ------------------------------- |
| **React 18 + Vite**   | Base framework & bundler        |
| **TypeScript**        | Type-safe logic                 |
| **Tailwind CSS v4**   | Utility-first styling           |
| **Framer Motion**     | Animations & micro-interactions |
| **Zustand**           | State management                |
| **ESLint + Prettier** | Clean code & consistency        |

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/split-the-bill-react.git
cd split-the-bill-react
```

npm install

# or

pnpm install

npm run dev
Then visit 👉 http://localhost:5173

### Folder Structure

src/
├─ components/
│ ├─ AnimatedNumber.tsx # Counter for totals
│ ├─ PercentButton.tsx # Tip percentage buttons
│ ├─ ButtonReset.tsx # Reset button
│ ├─ Totals.tsx # Results panel
│ └─ PerfectSplitEasterEgg.tsx# 🎉 Easter egg
│
├─ store/
│ └─ Calculator.store.ts # Zustand logic
│
├─ theme/
│ └─ ThemeProvider.tsx # Auto dark/light system sync
│
├─ ui/
│ ├─ MotionButton.tsx # Reusable animated button
│ └─ motion.tsx # Reusable animation variants
│
├─ utils/
│ └─ money.ts # Helper for perfect split check
│
├─ App.tsx
└─ main.tsx
