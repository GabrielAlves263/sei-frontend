import Link from "next/link";
import { HiOutlineBookOpen } from "react-icons/hi";
import { LuPencil } from "react-icons/lu";
import { RxVideo } from "react-icons/rx";

interface IHorizontalCardProps {
  text: string;
  path: string;
}

export default function HorizontalCard({ text, path }: IHorizontalCardProps) {
  return (
    <article className="flex justify-between items-center h-10 bg-primary-dark rounded-lg text-text-contrast">
      <Link
        href={path || ""}
        className="w-full h-full flex items-center rounded-l-lg hover:text-primary hover:underline"
      >
        <h1 className="ml-6 text-base font-semibold">{text}</h1>
      </Link>
      <div className="h-full flex items-center justify-center px-3 gap-x-3 bg-primary rounded-r-lg">
        <Link href={path || ""}>
          <HiOutlineBookOpen className="size-6" />
        </Link>
        <Link href={`${path}/videos` || ""}>
          <RxVideo className="size-6" />
        </Link>
        <Link href={`${path}/questoes` || ""}>
          <LuPencil className="size-6" />
        </Link>
      </div>
    </article>
  );
}
