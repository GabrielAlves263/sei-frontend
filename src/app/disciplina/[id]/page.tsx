import HorizontalCard from "@/components/card/HorizontalCard";
import Container from "@/components/container/Container";
import Navigator from "@/components/navigator/Navigator";
import { Subject } from "@/types/subject";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(`http://localhost:5000/subjects/?id=${params.id}`);

  if (!res.ok) {
    return {
      title: "Disciplina não encontrada",
    };
  }

  const data: Subject[] = await res.json();

  if (data.length === 0) {
    return {
      title: "Disciplina não encontrada",
    };
  }

  return {
    title: data[0].name,
  };
}

async function getData(id: string) {
  const res = await fetch(`http://localhost:5000/subjects/?id=${id}`);

  if (!res.ok) {
    return {
      name: "Erro: Disciplina não encontrada",
    };
  }

  const data: Subject[] = await res.json();

  if (data.length === 0) {
    return {
      name: "Erro: Disciplina não encontrada",
    };
  }

  return {
    name: data[0].name,
  };
}

export default async function PageSubject({ params }: Props) {
  const paths = [`/disciplina/${params.id}`];
  const subject = await getData(params.id);

  return (
    <>
      <Navigator paths={paths} />
      <Container title={subject.name} className="mx-10 flex flex-col gap-y-3">
        <HorizontalCard text="Funções" />
        <HorizontalCard text="Limites" />
        <HorizontalCard text="Derivadas" />
        <HorizontalCard text="Regras de Derivação" />
        <HorizontalCard text="Máximos e Mínimos" />
        <HorizontalCard text="Regra de L'Hopital" />
        <HorizontalCard text="Integrais" />
      </Container>
    </>
  );
}
