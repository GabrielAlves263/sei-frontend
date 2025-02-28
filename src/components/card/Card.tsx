"use client";
import { fetchClient } from "@/libs/fetchClient";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { ButtonRound } from "../button/ButtonRound";

interface ICardProps {
  text: string;
  path: string;
  favorited?: boolean;
  userId: string;
  subjectId: number;
}

async function removeUserSubject(userId: string, subjectId: number) {
  try {
    await fetchClient(
      `http://localhost:8080/api/v1/users/${userId}/subjects/${subjectId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Erro ao adicionar disciplina: ", err);
  }
}

async function addUserSubject(userId: string, subjectId: number) {
  try {
    await fetchClient(
      `http://localhost:8080/api/v1/users/${userId}/subjects/${subjectId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Erro ao adicionar disciplina: ", err);
  }
}

export function Card({
  text,
  path,
  favorited: isFavorited = false,
  userId,
  subjectId,
}: ICardProps) {
  const [favorited, setFavorited] = useState(isFavorited);

  const defaultColor = "text-white opacity-80";
  const alternatedColor = "text-gold";

  const toggleFavorited = async (e: MouseEvent) => {
    e.stopPropagation();
    setFavorited((curr) => !curr);
    if (!favorited) {
      await addUserSubject(userId, subjectId);
    } else {
      await removeUserSubject(userId, subjectId);
    }
  };

  return (
    <article className="bg-primary w-[17rem] h-52 rounded-3xl gap-x-16 gap-y-4">
      <div className="flex justify-between items-center px-4">
        <Link href={path}>
          <Image
            src={"/book.png"}
            alt={"Disciplina"}
            width={132}
            height={132}
          />
        </Link>
        <ButtonRound
          color={favorited ? alternatedColor : defaultColor}
          action={toggleFavorited}
          icon={MdOutlineStar}
        />
      </div>
      <Link href={path}>
        <div className="flex items-center justify-center text-center text-text-contrast relative -bottom-3 bg-primary-dark w-full h-16 rounded-b-3xl font-bold px-4">
          <h4>{text}</h4>
        </div>
      </Link>
    </article>
  );
}
