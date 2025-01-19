"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Header from "../header/Header";
import { SideMenu } from "../sideMenu/SideMenu";

interface IWrapperProps {
  children: React.ReactNode;
}

export function Wrapper({ children }: IWrapperProps) {
  const [expanded, setExpanded] = useState(true);

  const pathName = usePathname();

  const toggleExpanded = () => {
    setExpanded((curr) => !curr);
  };

  return pathName.includes("/login") ? (
    children
  ) : (
    <div className="flex">
      <SideMenu expanded={expanded} toggleExpanded={toggleExpanded} />
      <main
        className={`flex flex-1 flex-col flex-wrap justify-center mr-4 p-6 transition-all duration-200 delay-150 gap-y-6
    ${expanded ? "md:ml-60" : "md:ml-16"}`}
      >
        <Header />
        {children}
      </main>
    </div>
  );
}
