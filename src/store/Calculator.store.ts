import { create } from "zustand";

interface Calculator {
    bill: number;
}

export const useCalculatorStore = create<Calculator>(() => ({
    bill: 100,
}));