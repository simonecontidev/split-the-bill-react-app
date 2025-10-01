import { useCalculatorStore } from "../store/Calculator.store";


interface Props{
    percent: number;
    isCustom?: boolean
}

export const PercentButton = ({percent, isCustom = false}:Props) => {

   const store = useCalculatorStore();

   const isActive = store.tip === percent;

   const handleClick = () => {
    if(!isCustom){
        store.setTip(percent);
    }
   }

   
    const styles = isCustom 
    ? 'bg-blue-400 text-white placeholder:text-bg' 
    : 'bg-bg text-amber-50 hover:bg-blue-300 hover:text-bg'
    ;

  return (
    <button 
    className={`bg-bg text-amber-50 hover:bg-blue-300 hover:text-bg 
    ${isActive && 'bg-blue-600 text-white'}
    text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer hover:bg-blue-300 hover:text-bg ${styles}`}
    onClick={handleClick}>
        {
            isCustom ? 'Custom' : `${percent}%`
        }
    </button>
  )
}
