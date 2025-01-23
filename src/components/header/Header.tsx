"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMoon, FaUser } from "react-icons/fa6";
import { MdNotifications, MdSunny } from "react-icons/md";
import { ButtonRound } from "../button/ButtonRound";
import Search from "./Search";

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(false);
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    darkTheme ? setTheme("light") : setTheme("dark");
    setDarkTheme((curr) => !curr);
  };

  const router = useRouter();

  return (
    <header className="flex justify-between mt-12 md:mt-0">
      <Search />
      <div className="flex space-x-4">
        <ButtonRound
          action={() => {}}
          icon={MdNotifications}
          bgColor="bg-paper"
          color="text-text"
        />
        <ButtonRound
          action={toggleTheme}
          icon={darkTheme ? MdSunny : FaMoon}
          bgColor="bg-paper"
          color="text-text"
        />
        <ButtonRound
          action={() => router.push("/login")}
          icon={FaUser}
          bgColor="bg-paper"
          color="text-text"
        />
      </div>
    </header>
  );
}
