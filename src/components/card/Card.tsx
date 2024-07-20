import Image from "next/image";

export function Card() {
  return (
    <article>
      <Image src={"/book.png"} alt={"Disciplina"} width={280} height={211} />
    </article>
  );
}
