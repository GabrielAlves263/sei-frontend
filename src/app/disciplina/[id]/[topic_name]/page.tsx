import Container from "@/components/container/Container";
import Navigator from "@/components/navigator/Navigator";
import OptionsBar from "@/components/optionsMenu/OptionsMenu";
import { getTopicOptions } from "@/constants/options";
import { Subject, Topic } from "@/types/subject";
import { Metadata } from "next";

interface Props {
  params: { id: string; topic_name: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  params.topic_name = decodeURI(params.topic_name);

  return {
    title: params.topic_name.replaceAll("-", " "),
  };
}

async function getData(id: string, topic_name: string) {
  const res = await fetch(`http://localhost:5000/subjects/?id=${id}`, {
    next: {
      revalidate: 0,
    },
  });

  const data: Subject[] = await res.json();

  return data[0].topics.filter(
    (topic) => topic.name === topic_name.replaceAll("-", " ")
  );
}

export default async function PageResume({ params }: Props) {
  params.topic_name = decodeURI(params.topic_name);

  const paths = [
    { url: `/disciplina/${params.id}`, text: params.id },
    {
      url: `/disciplina/${params.id}/${params.topic_name}`,
      text: params.topic_name,
    },
    { url: `/disciplina/${params.id}/${params.topic_name}`, text: "Resumo" },
  ];

  const topic: Topic[] = await getData(params.id, params.topic_name);

  const options = getTopicOptions(params.id, params.topic_name);
  console.log(options);

  return (
    <>
      <Navigator paths={paths} />
      <OptionsBar options={options} />
      <Container
        title={`Resumo de ${topic[0].name}`}
        className="mx-10 flex flex-col gap-y-3"
      >
        <div
          key={topic[0].id}
          dangerouslySetInnerHTML={
            topic[0].resume
              ? { __html: topic[0].resume }
              : { __html: "Resumo não encontrado!" }
          }
        />
      </Container>
    </>
  );
}
