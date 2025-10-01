import { useState } from "react";

interface Props{
    label: string;
    value: number;
    variant: "bill" | "people";
}

export const Input = ({label, value, variant}:Props) => {

  const[localValue, setLocalValue] = useState(value.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    
    /* verify that the input is a number */
    const numberRegExp = /^\d*$/;

    /* allow decimal numbers */
    const decimalRegExp = /^\d*\.?\d*$/;

    const regExp = variant === 'bill' ? decimalRegExp : numberRegExp;

    const isValid = regExp.test(userInput)
    if(!isValid) return;
    setLocalValue(userInput);
  }
  return (
    <div className="flex flex-col mb-8">

        <div className="flex justify-between mb-2">
            <label className="font-bold text-black mb-2" 
            htmlFor="">
                {label}
            </label>
      
            <p className= "text-red-500 font-bold hidden">Can't be zero</p>
        </div>
      <input 
      id='bill' 
      type="text" 
      value={localValue}
      onChange={handleChange}
      className="bg-grey-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black cursor-pointer h-12 text-right pr-4 text-2xl font-bold w-full"
      />
    </div>
  )
}
