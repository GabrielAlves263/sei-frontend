import Link from "next/link";
import { TbHomeFilled } from "react-icons/tb";

interface NavigatorProps {
  paths: { url: string; text: string }[];
}

export default function Navigator({ paths }: NavigatorProps) {
  return (
    <nav className="flex items-center w-full h-12">
      <Link href="/">
        <TbHomeFilled className="size-6 mr-2 hover:text-primary-dark" />
      </Link>
      <ul className="flex">
        {paths.map((path) => (
          <li
            key={path.url}
            className="flex font-bold text-primary-dark mx-1 gap-1"
          >
            <span>/</span>
            <Link href={path.url}>
              <h2 className="hover:underline">{path.text}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
