import { Card } from "@/components/card/Card";
import Container from "@/components/container/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEI - Página Inicial",
};

export default function Home() {
  return (
    <Container
      title="Minhas Disciplinas"
      className="grid grid-cols-[repeat(auto-fill,17rem)] justify-center gap-7"
    >
      <Card text="Disciplina" path="/disciplina/disciplina"></Card>
      <Card text="Disciplina" path="/disciplina"></Card>
      <Card text="Disciplina" path="/disciplina"></Card>
      <Card text="Disciplina" path="/disciplina"></Card>
      <Card text="Disciplina" path="/disciplina"></Card>
    </Container>
  );
}
