"use client";
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
    <>
      <button
        data-drawer-target="sidebar"
        data-drawer-toggle="sidebar"
        aria-controls="sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-text rounded-lg sm:hidden hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <span className="sr-only">Open sidebar</span>
        <HiMenuAlt2 className="w-6 h-6" />
      </button>

      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <nav className="h-full flex flex-col px-3 py-4 overflow-y-auto bg-sidebar rounded-r-3xl">
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
      </aside>
    </>
  );
}
