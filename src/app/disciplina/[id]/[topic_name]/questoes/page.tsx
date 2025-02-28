import NotFound from "@/components/notFound/NotFound";
import { fetchServer } from "@/libs/fetchServer";

interface Props {
  params: { id: string; topic_name: string };
}

async function getQuestions(id: string, topic_name: string) {
  try {
    const res = await fetchServer(
      `http://localhost:8080/api/v1/topics/subjectId/${id}`
    );

    const topics = await res.json();

    const topic = topics.filter(
      (topic: any) => topic.name === topic_name.replaceAll("-", " ")
    );

    // Ainda não retorna as questões. Implementação futura
    return topic[0];
  } catch (err) {
    console.error("Erro ao carregar as questões: ", err);
    return null;
  }
}

// async function getData(id: string, topic_name: string) {
//   const res = await fetch(`http://localhost:5000/subjects/?id=${id}`, {
//     next: {
//       revalidate: 0,
//     },
//   });

//   const data: Subject[] = await res.json();

//   return data[0].topics.filter(
//     (topic) => topic.name === topic_name.replaceAll("-", " ")
//   );
// }

export default async function PageQuestoes({ params }: Props) {
  params.topic_name = decodeURI(params.topic_name);
  const topic = await getQuestions(params.id, params.topic_name);

  return (
    <>
      <NotFound>
        <p>
          Nenhuma questão sobre{" "}
          <strong className="text-orange">{topic?.name}</strong> foi encontrada!
        </p>
        <p>Novas questões serão adicionadas em breve.</p>
      </NotFound>
    </>
  );
}
