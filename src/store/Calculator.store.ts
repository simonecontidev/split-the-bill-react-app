import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Calculator {
  bill: number;
  people: number

  setBill: (newBill: number) => void;
  setPeople: (newPeople: number) => void;
}

export const useCalculatorStore = create<Calculator>()(
  devtools(
    (set) => ({
      bill: 0,
      people: 1,
    
      setBill: (newBill) =>
        set({ bill: newBill }),
        // setBill: (newBill) =>
        // set(() => ({ bill: newBill }), false, 'calculator/setBill'),


      setPeople: (newPeople: number) =>
      set(()=>({ people: newPeople })),
    }),
    { name: 'CalculatorStore' } // optional: name in Redux DevTools
  )
);