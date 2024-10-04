"use client";
import { usePathname } from "next/navigation";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import Option from "./Option";

interface OptionBarProps {
  id: string;
  semester?: string;
}

export default function OptionsBar({ id, semester }: OptionBarProps) {
  const currentPath = usePathname();

  return (
    <nav className="flex items-center justify-center w-fit h-10 bg-primary rounded-xl px-4 py-2">
      <ul className="flex gap-4">
        <Option
          icon={AiOutlineFileSearch}
          path={`/disciplina/${id}`}
          currentPath={currentPath}
        />
        <Option
          icon={GoChecklist}
          path={
            semester
              ? `/disciplina/${id}/simulados/${semester}`
              : `/disciplina/${id}/simulados`
          }
          currentPath={currentPath}
        />
      </ul>
    </nav>
  );
}
