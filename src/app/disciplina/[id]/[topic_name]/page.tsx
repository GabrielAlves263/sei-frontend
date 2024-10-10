import Container from "@/components/container/Container";
import Navigator from "@/components/navigator/Navigator";
import OptionsBar from "@/components/optionsMenu/OptionsMenu";
import { Subject, Topic } from "@/types/subject";
import { Metadata } from "next";

interface Props {
  params: { id: string; topic_name: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  params.topic_name = params.topic_name.replace("-", " ");

  return {
    title: params.topic_name,
  };
}

async function getData(id: string, topic_name: string) {
  const res = await fetch(`http://localhost:5000/subjects/?id=${id}`, {
    next: {
      revalidate: 0,
    },
  });

  const data: Subject[] = await res.json();

  return data[0].topics.filter((topic) => topic.name === topic_name);
}

export default async function PageResume({ params }: Props) {
  const paths = [
    `/disciplina/${params.id}`,
    `/disciplina/${params.id}/${params.topic_name.replace(" ", "-")}`,
    `/disciplina/${params.id}/${params.topic_name.replace(" ", "-")}`,
  ];

  const topic: Topic[] = await getData(params.id, params.topic_name);

  return (
    <>
      <Navigator paths={paths} />
      <OptionsBar id={params.id} />
      <Container
        title={`Resumo de ${topic[0].name}`}
        className="mx-10 flex flex-col gap-y-3"
      >
        <div
          key={topic[0].id}
          dangerouslySetInnerHTML={{ __html: topic[0].resume }}
        />
      </Container>
    </>
  );
}
