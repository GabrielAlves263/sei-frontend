"use client";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidBook } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiCompassFill } from "react-icons/ri";
import { TbHomeFilled } from "react-icons/tb";
import { MenuItem } from "./MenuItem";

export function SideMenu() {
  const currentPath = usePathname();

  return (
    <Disclosure>
      <DisclosureButton className="absolute top-4 left-4 inline-flex items-center peer justify-center rounded-lg p-2 mt-2 ms-3 text-sm text-text hover:text-primary hover:bg-primary-dark md:hidden focus:outline-none focus:ring-2 focus:ring-primary group">
        <HiMenuAlt2 className="block w-6 h-6" aria-hidden="true" />
      </DisclosureButton>

      <nav className="px-3 py-4 w-1/2 h-screen bg-sidebar z-20 fixed top-0 -left-96 md:w-60 md:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <Link href="/" className="flex justify-center mb-5">
          <Image src="/logo.svg" width={100} height={100} alt="Logo" />
        </Link>
        <ul className="flex-1 space-y-2 font-medium text-text-light text-sm">
          <MenuItem
            text="Dashboard"
            path="/"
            currentPath={currentPath}
            icon={TbHomeFilled}
          />
          <MenuItem
            text="Explore"
            path="/explore"
            currentPath={currentPath}
            icon={RiCompassFill}
          />
          <MenuItem
            text="Notas"
            path="/notas"
            currentPath={currentPath}
            icon={BiSolidBook}
          />
          <MenuItem
            text="Calendário"
            path="/calendario"
            currentPath={currentPath}
            icon={FaCalendarAlt}
          />
        </ul>
      </nav>
    </Disclosure>
  );
}
