"use client";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { ButtonRound } from "../button/ButtonRound";

interface ICardProps {
  text: string;
}

export function Card({ text }: ICardProps) {
  const [favorited, setFavorited] = useState(false);

  const defaultColor = "text-white opacity-80";
  const alternatedColor = "text-gold";

  const toggleFavorited = () => {
    setFavorited((curr) => !curr);
  };

  return (
    <article className="bg-primary w-72 h-52 rounded-3xl gap-x-16 gap-y-4">
      <div className="flex justify-between items-center px-4">
        <Image src={"/book.png"} alt={"Disciplina"} width={132} height={132} />
        <ButtonRound
          color={favorited ? alternatedColor : defaultColor}
          action={toggleFavorited}
          icon={MdOutlineStar}
        />
      </div>
      <div className="flex items-center justify-center text-text-contrast relative -bottom-3 bg-primary-dark w-full h-16 rounded-b-3xl font-bold px-4">
        <h4>{text}</h4>
      </div>
    </article>
  );
}
