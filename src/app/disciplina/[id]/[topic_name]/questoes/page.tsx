import NotFound from "@/components/notFound/NotFound";
import { Subject, Topic } from "@/types/subject";

interface Props {
  params: { id: string; topic_name: string };
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

export default async function PageQuestoes({ params }: Props) {
  params.topic_name = decodeURI(params.topic_name);
  const topic: Topic[] = await getData(params.id, params.topic_name);
  const questions = topic[0].questions ?? [];

  return (
    <>
      {questions.length > 0 ? (
        "Questões"
      ) : (
        <NotFound>
          <p>
            Nenhuma questão sobre{" "}
            <strong className="text-orange">{topic[0].name}</strong> foi
            encontrada!
          </p>
          <p>Novas questões serão adicionadas em breve.</p>
        </NotFound>
      )}
    </>
  );
}
