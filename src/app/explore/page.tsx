import CardList from "@/components/card/CardList";
import Container from "@/components/container/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEI - Explorar",
};

export default async function PageExplore() {
  return (
    <Container
      title="Disciplinas"
      className="grid grid-cols-[repeat(auto-fill,17rem)] justify-center gap-7"
    >
      <CardList />
    </Container>
  );
}
