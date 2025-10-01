import { ButtonReset, TotalItem } from "../components"
import { useCalculatorStore } from "../store/Calculator.store"

export const Totals = () => {

    const store = useCalculatorStore();
  return (
    <div className="bg-black rounded-[15px] py-6 text-white px-8 lg:w-[413px] lg:flex lg: flex-col lg:justify-between">
        <div>
        <TotalItem text='Tip Amount' value={store.tipAmount()}/>
        <TotalItem text='Total' value={store.total()} />
        </div>
        <ButtonReset text="Reset the tips"/>

    </div>
  )
}
