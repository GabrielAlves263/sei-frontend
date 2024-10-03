import { HiOutlineBookOpen } from "react-icons/hi";
import { LuPencil } from "react-icons/lu";
import { RxVideo } from "react-icons/rx";

interface IHorizontalCardProps {
  text: string;
}

export default function HorizontalCard({ text }: IHorizontalCardProps) {
  return (
    <article className="flex justify-between items-center h-10 bg-primary-dark rounded-lg text-text-contrast">
      <h1 className="ml-6 text-base font-semibold">{text}</h1>
      <div className="h-full flex items-center justify-center px-3 gap-x-3 bg-primary rounded-r-lg">
        <HiOutlineBookOpen className="size-6" />
        <RxVideo className="size-6" />
        <LuPencil className="size-6" />
      </div>
    </article>
  );
}
