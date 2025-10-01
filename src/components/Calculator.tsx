import { Input } from '../components'


export const Calculator = () => {
  return (
    <div className='bg-white p-8 w-[375px] m-auto rounded-[25px]'>
        <Input label='Bill' value={0}/>
        <Input label='Number of people' value={0}/>
    </div>
  )
}
