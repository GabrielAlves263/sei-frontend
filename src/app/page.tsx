import CardList from "@/components/card/CardList";
import Container from "@/components/container/Container";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "SEI - Página Inicial",
};

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <Container
      title="Minhas Disciplinas"
      className="grid grid-cols-[repeat(auto-fill,17rem)] justify-center gap-7"
    >
      <CardList onlyFavoriteds />
    </Container>
  );
}
