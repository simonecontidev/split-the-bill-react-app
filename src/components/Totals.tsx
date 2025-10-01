import { TotalItem } from "../components"

export const Totals = () => {
  return (
    <div className="bg-black rounded-[15px] py-6 text-white px-8 lg:w-[413px]">
        <TotalItem text='Tip Amount' value={0}/>
        <TotalItem text='Total' value={32.79} />
    </div>
  )
}
