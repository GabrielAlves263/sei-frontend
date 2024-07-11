import Link from "next/link";
import { IconType } from "react-icons";

interface IMenuItemProps {
  text: string;
  path: string;
  currentPath: string;
  icon: IconType;
  expanded: boolean;
}

export function MenuItem({
  text,
  path,
  currentPath,
  icon: Icon,
  expanded,
}: IMenuItemProps) {
  return (
    <li>
      <Link
        href={path}
        data-active={currentPath === path}
        className={`relative flex items-center overflow-hidden p-2 rounded-lg hover:text-text gap-x-2 transition-all delay-150 duration-150 data-[active=true]:text-text data-[active=true]:bg-background
          ${expanded ? "md:ps-16" : ""}`}
      >
        <Icon className="w-6 h-6" />
        <span className={expanded ? "md:block" : "md:hidden"}>{text}</span>
      </Link>
    </li>
  );
}
