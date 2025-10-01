import { useCalculatorStore } from "../store/Calculator.store";

interface Props {
  text: string;
}

export const ButtonReset = ({ text }: Props) => {
  const reset = useCalculatorStore((state) => state.reset);

  return (
    <button
      onClick={reset}
      type="button"
      className="bg-blue-400 text-white uppercase font-bold text-center h-12 w-full rounded-[5px] cursor-pointer hover:bg-amber-50 hover:text-black transition-colors"
    >
      {text}
    </button>
  );
};