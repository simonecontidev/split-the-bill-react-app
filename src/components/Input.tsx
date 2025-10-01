interface Props{
    label: string;
    value: number;
}

export const Input = ({label, value}:Props) => {
  return (
    <div className="flex flex-col mb-8">
      <label className="font-bold text-black mb-2" 
      htmlFor="">
        {label}
      </label>
      
      <input 
      id='bill' 
      type="text" 
      value={value}
      className="bg-grey-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black cursor-pointer h-12 text-right pr-4 text-2xl font-bold"
      />
    </div>
  )
}
