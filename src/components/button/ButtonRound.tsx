import { IconType } from "react-icons";

interface IButtonRoundProps {
  icon: IconType;
  action: () => void;
  bgColor?: string;
  color?: string;
}

export function ButtonRound({
  icon: Icon,
  action,
  bgColor = "bg-white bg-opacity-30",
  color = "text-white opacity-80",
}: IButtonRoundProps) {
  return (
    <button
      onClick={action}
      className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${bgColor}`}
    >
      <Icon className={`w-6 h-6 ${color}`} />
    </button>
  );
}
