"use client";
import ThemeProvider from "@/providers/themeProvider";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "../header/Header";
import { SideMenu } from "../sideMenu/SideMenu";

interface IWrapperProps {
  children: React.ReactNode;
}

function isAuthPage(pathName: string): boolean {
  return pathName.includes("/login") || pathName.includes("/register");
}

export function Wrapper({ children }: IWrapperProps) {
  const [expanded, setExpanded] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  const pathName = usePathname();

  if (!isAuthPage(pathName) && status !== "authenticated") {
    router.push("/login");
  }

  const toggleExpanded = () => {
    setExpanded((curr) => !curr);
  };

  return isAuthPage(pathName) ? (
    children
  ) : (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
    </ThemeProvider>
  );
}
