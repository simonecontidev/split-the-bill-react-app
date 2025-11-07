import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import { useCalculatorStore } from "../store/Calculator.store";

const PRESET_TIPS = new Set([5, 10, 15, 25, 50]);

export const CustomButton = () => {
  const { tip, setTip } = useCalculatorStore();
  const [isEditable, setIsEditable] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");

  const openEditor = () => {
    setInputValue(PRESET_TIPS.has(tip) ? "" : (tip ? String(tip) : ""));
    setIsEditable(true);
  };

  const decimalRegExp = /^\d*\.?\d*$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    if (!decimalRegExp.test(currentValue)) return;
    setInputValue(currentValue);
  };

  const commitValue = () => {
    if (inputValue === "") {
      setIsEditable(false);
      return;
    }
    const num = Number(inputValue);
    if (Number.isNaN(num) || num <= 0 || num > 100) {
      setIsEditable(false);
      return;
    }
    if (PRESET_TIPS.has(num)) {
      setTip(num);
      setInputValue("");
      setIsEditable(false);
      return;
    }
    setTip(num);
    setIsEditable(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") commitValue();
    if (e.key === "Escape") setIsEditable(false);
  };

  const showCustomValue = !PRESET_TIPS.has(tip) && tip > 0;

  return (
    <>
      {isEditable ? (
        <input
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={commitValue}
          autoFocus
          inputMode="decimal"
          placeholder="Custom %"
          className="outline-black text-2xl text-center text-black font-bold bg-white rounded-[5px] cursor-text w-full h-12"
          type="text"
        />
      ) : (
        <button
          type="button"
          onClick={openEditor}
          className="text-2xl text-white font-bold bg-sky-400 rounded-[5px] cursor-pointer hover:bg-black hover:text-sky-50 w-full h-12"
        >
          {showCustomValue ? `${tip}%` : "Custom"}
        </button>
      )}
    </>
  );
};