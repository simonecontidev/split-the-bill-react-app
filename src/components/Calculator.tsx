import { Input, PercentButton, Totals, CustomButton } from '../components'
import { useCalculatorStore } from '../store/Calculator.store';

const percents : number[] = [5,10,15,25,50];

export const Calculator = () => {

    const store = useCalculatorStore();
  return (
    <div className='bg-white p-8 w-[375px] m-auto rounded-[25px] my-10 
    md:w-[608px] md:py-12 md:px-20
    lg:w-[920px] lg:flex lg:gap-12 lg:p-8'>

        <div className='lg: flex-1'>
        <Input 
        label='Bill' 
        value={store.bill}
        setValue={store.setBill}
        variant='bill'
        />
        
        <h2 className='font-bold text-bg mb-2'>Select tip %</h2>
        <div className='grid grid-cols-2 gap-4 mb-8'>

        {
        percents.map((percent:number) => <PercentButton key={percent} percent={percent} />)
        }
        <CustomButton/>


        </div>
    

        
        <Input 
        label='Number of people' 
        value={store.people}
        setValue={store.setPeople}
        variant='people'
        />
    </div>
        <Totals/>
    </div>
  )
}
