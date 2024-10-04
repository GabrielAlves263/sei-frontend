import Link from "next/link";
import { type IconType } from "react-icons";

interface OptionProps {
  icon: IconType;
  path: string;
  currentPath: string;
}

export default function Option({ icon: Icon, path, currentPath }: OptionProps) {
  return (
    <li>
      <Link
        href={path}
        data-active={currentPath === path}
        className="text-text dark:text-paper hover:opacity-50 data-[active=true]:text-paper dark:data-[active=true]:text-text"
      >
        <Icon className="size-8" />
      </Link>
    </li>
  );
}
