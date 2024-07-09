import Link from "next/link";
import { IconType } from "react-icons";

interface IMenuItemProps {
  text: string;
  path: string;
  currentPath: string;
  icon: IconType;
}

export function MenuItem({
  text,
  path,
  currentPath,
  icon: Icon,
}: IMenuItemProps) {
  return (
    <li>
      <Link
        href={path}
        data-active={currentPath === path}
        className="flex items-center ps-16 p-2 rounded-lg hover:text-text gap-x-2 transition duration-75 data-[active=true]:text-text data-[active=true]:bg-background"
      >
        <Icon className="w-5 h-5 " />
        <span>{text}</span>
      </Link>
    </li>
  );
}
