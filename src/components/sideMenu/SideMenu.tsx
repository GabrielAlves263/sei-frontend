"use client";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidBook, BiSolidExit } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiCompassFill } from "react-icons/ri";
import { TbHomeFilled } from "react-icons/tb";
import { MenuItem } from "./MenuItem";

interface ISideMenuProps {
  expanded: boolean;
  toggleExpanded: () => void;
}

export function SideMenu({ expanded, toggleExpanded }: ISideMenuProps) {
  const currentPath = usePathname();

  return (
    <Disclosure as="aside">
      <DisclosureButton
        className="absolute top-4 left-2 inline-flex peer items-center justify-center rounded-lg p-2 mt-2 ms-3 text-sm text-text hover:text-primary hover:bg-primary-dark md:hidden focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Toggle Menu"
      >
        <HiMenuAlt2 className="block w-6 h-6" aria-hidden="true" />
      </DisclosureButton>

      <nav
        className={`flex flex-col px-3 py-4 h-screen w-60 bg-sidebar rounded-r-xl z-20 fixed top-0 -left-96 md:left-0 peer-focus:left-0 delay-150 transition-all duration-200
        ${expanded ? "md:w-60" : "md:w-16"}`}
      >
        <button
          onClick={toggleExpanded}
          className={`hidden w-5 h-5 md:flex items-center p-1 relative top-2  text-paper bg-primary rounded-3xl transition-all delay-150 duration-150 ease
            ${expanded ? "left-[13.5rem]" : "left-10"}`}
          aria-label="Toggle menu width"
        >
          <FaAngleLeft className={expanded ? "rotate-0" : "rotate-180"} />
        </button>

        <Link href="/" className="flex justify-center mb-5">
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="Logo"
            className={`transition-all ${expanded ? "md:w-24" : "md:w-8"}`}
            draggable="false"
          />
        </Link>

        <ul className="flex-1 space-y-4 font-medium text-text-light text-sm">
          <MenuItem
            text="Dashboard"
            path="/"
            currentPath={currentPath}
            icon={TbHomeFilled}
            expanded={expanded}
          />
          <MenuItem
            text="Explore"
            path="/explore"
            currentPath={currentPath}
            icon={RiCompassFill}
            expanded={expanded}
          />
          <MenuItem
            text="Notas"
            path="/notas"
            currentPath={currentPath}
            icon={BiSolidBook}
            expanded={expanded}
          />
          <MenuItem
            text="Calendário"
            path="/calendario"
            currentPath={currentPath}
            icon={FaCalendarAlt}
            expanded={expanded}
          />

          <hr
            className={` mx-auto h-[1px] bg-text-light border-none rounded-sm
            ${expanded ? "w-2/3" : "w-full"}`}
          />

          <MenuItem
            text="Configurações"
            path="/settings"
            currentPath={currentPath}
            icon={MdSettings}
            expanded={expanded}
          />

          <MenuItem
            text="Sair"
            path="/quit"
            currentPath={currentPath}
            icon={BiSolidExit}
            expanded={expanded}
          />
        </ul>
      </nav>
    </Disclosure>
  );
}
