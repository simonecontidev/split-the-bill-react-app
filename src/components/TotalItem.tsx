// src/components/TotalItem.tsx
import { AnimatedNumber } from "./AnimatedNumber";

export const TotalItem = ({
  text,
  value,
  prefix = "€",
}: {
  text: string;
  value: number;
  prefix?: string;
}) => {
  return (
    <div className="flex justify-between mb-7">
      <div>
        <p className="font-bold">{text}</p>
        <p className="text-[0.8125rem] text-gray-400">/ person</p>
      </div>
      <AnimatedNumber value={value} prefix={prefix} />
    </div>
  );
};