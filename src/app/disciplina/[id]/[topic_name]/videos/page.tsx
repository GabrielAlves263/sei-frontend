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

export default async function PageVideos({ params }: Props) {
  params.topic_name = decodeURI(params.topic_name);
  const topic: Topic[] = await getData(params.id, params.topic_name);

  return (
    <>
      <div
        key={topic[0].id}
        dangerouslySetInnerHTML={
          topic[0].resume
            ? { __html: topic[0].resume }
            : { __html: "Resumo não encontrado!" }
        }
      />
    </>
  );
}
