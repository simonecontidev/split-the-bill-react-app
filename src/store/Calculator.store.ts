import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Calculator {
  bill: number;
  people: number;
  tip: number;

  setBill: (newBill: number) => void;
  setPeople: (newPeople: number) => void;
  setTip: (newTip: number) => void;


  //value calculated
  tipAmount:()=> number;
  total:()=> number;
}

export const useCalculatorStore = create<Calculator>()(
  devtools(
    (set, get) => ({
      bill: 0,
      people: 1,
      tip: 5,

    
      setBill: (newBill) =>
      set({ bill: newBill }),
        // setBill: (newBill) =>
        // set(() => ({ bill: newBill }), false, 'calculator/setBill'),

      setPeople: (newPeople: number) =>
      set(()=>({ people: newPeople })),

      setTip: (newTip: number) =>
      set(() => ({ tip: newTip })),




    tipAmount: () => (get().bill * get().tip / 100) / get().people,

    total: () => (get().bill + get().tipAmount()) / get().people,
    })
    


  )
);