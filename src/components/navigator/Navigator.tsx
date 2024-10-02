import Link from "next/link";
import { TbHomeFilled } from "react-icons/tb";

interface INavigatorProps {
  paths: Array<string>;
}

export default function Navigator({ paths }: INavigatorProps) {
  return (
    <nav className="flex items-center w-full h-12">
      <Link href="/">
        <TbHomeFilled className="size-6 mr-2 hover:text-primary-dark" />
      </Link>
      <ul className="flex">
        {paths[0] && (
          <li className="flex font-bold text-primary-dark mx-1 gap-1">
            <span>/</span>
            <Link href={paths[0]}>
              <h2 className="hover:underline">Cálculo I</h2>
            </Link>
          </li>
        )}
        {paths[1] && (
          <li className="flex items-center font-bold text-primary-dark mx-1 gap-1">
            <span>/</span>
            <Link href={paths[1]}>
              <h2 className="hover:underline">Funções</h2>
            </Link>
          </li>
        )}
        {paths[2] && (
          <li className="flex items-center font-bold text-primary-dark mx-1 gap-1">
            <span>/</span>
            <Link href={paths[2]}>
              <h2 className="hover:underline">Resumo</h2>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
