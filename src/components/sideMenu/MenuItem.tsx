import Link from "next/link";
import { type IconType } from "react-icons";

interface IMenuItemProps {
  text: string;
  path: string;
  currentPath: string;
  icon: IconType;
  expanded: boolean;
  action?: () => void;
}

export function MenuItem({
  text,
  path,
  currentPath,
  icon: Icon,
  expanded,
  action,
}: IMenuItemProps) {
  return (
    <li className="group flex items-center">
      <Link
        onClick={action}
        href={path}
        data-active={currentPath === path}
        className={`relative flex items-center w-full overflow-hidden p-2 rounded-lg hover:text-text gap-x-2 transition-all delay-75 duration-150
          data-[active=true]:text-text data-[active=true]:bg-background
          ${expanded ? "md:ps-12" : ""}`}
      >
        <Icon className="w-6 h-6" />
        <span className={expanded ? "md:block" : "md:hidden"}>{text}</span>
      </Link>

      {!expanded && (
        <span
          className="absolute left-full rounded-md px-2 py-1 ml-6 bg-sidebar
        text-sm text-text-contrast dark:text-text opacity-20 -translate-x-3 transition-all invisible
        md:group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
        >
          {text}
        </span>
      )}
    </li>
  );
}
