import Container from "@/components/container/Container";
import LabelList from "@/components/label/LabelList";
import Navigator from "@/components/navigator/Navigator";
import OptionsBar from "@/components/optionsMenu/OptionsMenu";
import { getSubjectOptions } from "@/constants/options";
import { Subject } from "@/types/subject";
import { Metadata } from "next";

interface Props {
  params: { id: string; semester: string };
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

export default async function PageSimulados({ params }: Props) {
  const paths = [`/disciplina/${params.id}`];
  const subject = await getData(params.id);
  const options = getSubjectOptions(params.id);

  return (
    <>
      <Navigator paths={paths} />
      <OptionsBar options={options} />
      <Container
        title={`Avaliações de ${subject.name}`}
        className="grid grid-cols-[repeat(auto-fill,16rem)] justify-center gap-7"
      >
        <LabelList
          id={params.id}
          semester={params.semester.replaceAll("-", ".")}
        />
      </Container>
    </>
  );
}
