import { OptionProps } from "@/types/options";
import Link from "next/link";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GoBook, GoChecklist, GoPencil, GoVideo } from "react-icons/go";

function renderIcon(icon: string) {
  if (icon === "topics") {
    return <AiOutlineFileSearch className="size-8" />;
  } else if (icon === "tests") {
    return <GoChecklist className="size-8" />;
  } else if (icon === "resume") {
    return <GoBook className="size-8" />;
  } else if (icon === "videos") {
    return <GoVideo className="size-8" />;
  } else if (icon === "questions") {
    return <GoPencil className="size-8" />;
  }
}

export default function Option({ icon, paths, currentPath = "" }: OptionProps) {
  return (
    <li>
      <Link
        href={paths[0]}
        data-active={paths.includes(currentPath)}
        className="text-text dark:text-paper hover:opacity-50 data-[active=true]:text-paper dark:data-[active=true]:text-text"
      >
        {renderIcon(icon)}
      </Link>
    </li>
  );
}
