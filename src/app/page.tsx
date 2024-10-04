import CardList from "@/components/card/CardList";
import Container from "@/components/container/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEI - Página Inicial",
};

export default async function Home() {
  const data = await fetch("http://localhost:5000/subjects");

  const subjects = await data.json();

  return (
    <Container
      title="Minhas Disciplinas"
      className="grid grid-cols-[repeat(auto-fill,17rem)] justify-center gap-7"
    >
      <CardList onlyFavoriteds />
    </Container>
  );
}
