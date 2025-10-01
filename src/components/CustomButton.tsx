import React, { useState, type ChangeEvent, type KeyboardEvent } from "react";

export const CustomButton = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleClick = () => setIsEditable(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;

    // solo numeri e un punto decimale
    const decimalRegExp = /^\d*\.?\d*$/;
    if (!decimalRegExp.test(currentValue)) return;

    setInputValue(currentValue);
  };

  // opzionale: conferma con Enter, esci con blur
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") setIsEditable(false);
  };

  const handleBlur = () => setIsEditable(false);

  // opzionale: validazione range 0–100
  const isOutOfRange =
    inputValue !== "" && !Number.isNaN(Number(inputValue)) &&
    (Number(inputValue) < 0 || Number(inputValue) > 100);

  return (
    <>
      {isEditable ? (
        <div className="w-full">
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            value={inputValue}
            inputMode="decimal"
            aria-invalid={isOutOfRange}
            placeholder="Custom %"
            className="outline-black text-2xl text-center text-black font-bold bg-white rounded-[5px] cursor-text hover:bg-white hover:text-black w-full h-12"
            type="text"
          />
          {isOutOfRange && (
            <p className="mt-1 text-sm text-red-600 font-semibold">
              Insert a value between 0 and 100
            </p>
          )}
        </div>
      ) : (
        <button
          type="button"
          className="text-2xl text-white font-bold bg-sky-400 rounded-[5px] cursor-pointer hover:bg-black hover:text-sky-50 w-full h-12"
          onClick={handleClick}
        >
          Custom
        </button>
      )}
    </>
  );
};