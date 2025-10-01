interface Props{
    text: string;

}

export const ButtonReset = ({text}: Props) => {
  return (
    <button className="white bg-blue-400 uppercase font-bold text-center h-12 w-full rounded-[5px] cursor-pointer hover:bg-amber-50 hover:text-black transition-colors">{text}</button>
  )
}
