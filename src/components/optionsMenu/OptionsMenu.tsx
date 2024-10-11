"use client";
import { OptionProps } from "@/types/options";
import { usePathname } from "next/navigation";
import Option from "./Option";

interface OptionBarProps {
  options: OptionProps[];
}

export default function OptionsBar({ options }: OptionBarProps) {
  const currentPath = usePathname();

  return (
    <nav className="flex items-center justify-center w-fit h-10 bg-primary rounded-xl px-4 py-2">
      <ul className="flex gap-4">
        {options.map((option) => (
          <Option
            key={option.path}
            icon={option.icon}
            path={option.path}
            currentPath={currentPath}
          />
        ))}
      </ul>
    </nav>
  );
}
