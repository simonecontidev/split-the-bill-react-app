import { Input, PercentButton } from '../components'

const percents : number[] = [5,10,15,25,50];

export const Calculator = () => {
  return (
    <div className='bg-white p-8 w-[375px] m-auto rounded-[25px]'>
        <Input label='Bill' value={0}/>
        
        <h2 className='font-bold text-bg mb-2'>Select tip %</h2>
        <div className='grid grid-cols-2 gap-4 mb-8'>
        {
        percents.map((percent:number) => <PercentButton key={percent} percent={percent} />)
        }

        <PercentButton isCustom percent={0}/>

        </div>
        
        <Input label='Number of people' value={0}/>
    </div>
  )
}
