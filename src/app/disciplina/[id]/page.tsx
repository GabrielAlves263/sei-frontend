import HorizontalCardList from "@/components/card/HorizontalCardList";
import Container from "@/components/container/Container";
import Navigator from "@/components/navigator/Navigator";
import OptionsBar from "@/components/optionsMenu/OptionsMenu";
import { getSubjectOptions } from "@/constants/options";
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
  const options = getSubjectOptions(params.id);

  return (
    <>
      <Navigator paths={paths} />
      <OptionsBar options={options} />
      <Container title={subject.name} className="mx-10 flex flex-col gap-y-3">
        <HorizontalCardList id={params.id} />
      </Container>
    </>
  );
}
