import { Card } from "@/components/card/Card";
import Header from "@/components/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEI - Página Inicial",
};

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="font-bold">Adicione disciplinas na aba Explore</h1>

      <div className="flex flex-col w-full bg-paper rounded-xl pb-16">
        <h1 className="flex px-[4.5rem] py-3 font-bold h-16 items-center">
          Minhas disciplinas
        </h1>
        <div className="flex flex-wrap gap-7 px-[4.5rem]">
          <Card text="Disciplina"></Card>
          <Card text="Disciplina"></Card>
          <Card text="Disciplina"></Card>
          <Card text="Disciplina"></Card>
          <Card text="Disciplina"></Card>
        </div>
      </div>
    </>
  );
}
