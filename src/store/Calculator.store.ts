import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Calculator {
  bill: number;
  setBill: (newBill: number) => void;
}

export const useCalculatorStore = create<Calculator>()(
  devtools(
    (set) => ({
      bill: 0,
      setBill: (newBill) =>
        set({ bill: newBill }, false, 'calculator/setBill'),
        // setBill: (newBill) =>
        // set(() => ({ bill: newBill }), false, 'calculator/setBill'),
    }),
    { name: 'CalculatorStore' } // optional: name in Redux DevTools
  )
);