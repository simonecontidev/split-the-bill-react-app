interface Props{
 text: string;
 value: number;   
}



export const TotalItem = ({text, value} = Props) => {
  return (
    <div>
        <div className="flex justify-between mb-7">
            <div>
             <p className="font-bold">{text}</p>
             <p className="text-[.8125rem] text-grey-100">/ person</p>
            </div>
            <p className="font-bold text-[2rem] text-sky-100 md:text-5xl">{value.toFixed(2)}</p>
        </div>
    </div>
  )
}
