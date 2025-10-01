interface Props{
    percent: number;
    isCustom?: boolean
}

export const PercentButton = ({percent, isCustom = false}:Props) => {

    const styles = isCustom 
    ? ' bg-blue-400 text-white placeholder:text-bg' 
    : 'bg-bg text-amber-50 hover:bg-blue-300 hover:text-bg'
    ;

  return (
    <button className={`text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer hover:bg-blue-300 hover:text-bg ${styles}`}>
        {
            isCustom ? 'Custom' : `${percent}%`
        }
    </button>
  )
}
