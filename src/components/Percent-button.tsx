interface Props{
    percent: number;
    isCustom?: boolean
}

export const PercentButton = ({percent, isCustom = false}:Props) => {
  return (
    <button className='text-2xl font-bold bg-bg text-amber-50 rounded-[5px] w-full h-12 cursor-pointer hover:bg-blue-300 hover:text-bg'>
        {
            isCustom ? 'Custom' : `${percent}%`
        }
    </button>
  )
}
