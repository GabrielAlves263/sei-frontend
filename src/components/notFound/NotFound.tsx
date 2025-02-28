import Image from "next/image";
import { ReactNode } from "react";

interface NotFoundProps {
  imgSrc?: string;
  children: ReactNode;
  className?: string;
}

export default function NotFound({
  children,
  imgSrc = "/notFound.png",
  className = "",
}: NotFoundProps) {
  return (
    <div className={`flex flex-col items-center gap-y-9 ${className}`}>
      <Image
        src={imgSrc}
        alt={"Não encontrado"}
        width={256}
        height={256}
        draggable="false"
      />
      <div className="flex flex-col text-center text-xl text-primary-dark font-bold">
        {children}
      </div>
    </div>
  );
}
