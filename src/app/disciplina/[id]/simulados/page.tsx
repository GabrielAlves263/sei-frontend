import Container from "@/components/container/Container";
import LabelList from "@/components/label/LabelList";
import Navigator from "@/components/navigator/Navigator";
import OptionsBar from "@/components/optionsMenu/OptionsMenu";
import { getSubjectOptions } from "@/constants/options";
import { fetchServer } from "@/libs/fetchServer";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const subject = await getSubject(params.id);

  if (!subject) {
    return {
      title: "Disciplina não encontrada",
    };
  }

  return {
    title: subject.name,
  };
}

async function getSubject(id: string) {
  try {
    const res = await fetchServer(
      `http://localhost:8080/api/v1/subjects/${id}`
    );

    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

// async function getData(id: string) {
//   const res = await fetch(`http://localhost:5000/subjects/?id=${id}`);

//   if (!res.ok) {
//     return {
//       name: "Erro: Disciplina não encontrada",
//     };
//   }

//   const data: Subject[] = await res.json();

//   if (data.length === 0) {
//     return {
//       name: "Erro: Disciplina não encontrada",
//     };
//   }

//   return {
//     name: data[0].name,
//   };
// }

export default async function PageSimulados({ params }: Props) {
  const subject = await getSubject(params.id);
  const paths = [
    { url: `/disciplina/${params.id}`, text: subject.name },
    { url: `/disciplina/${params.id}/simulados`, text: "Simulados" },
  ];
  const options = getSubjectOptions(params.id);

  return (
    <>
      <Navigator paths={paths} />
      <OptionsBar options={options} />
      <Container
        title={`Avaliações de ${subject.name}`}
        className="grid grid-cols-[repeat(auto-fill,17rem)] justify-center gap-7"
      >
        <LabelList id={params.id} />
      </Container>
    </>
  );
}
