import { fetchServer } from "@/libs/fetchServer";
import { Topic } from "@/types/subject";
import HorizontalCard from "./HorizontalCard";

interface HorizontalCardListProps {
  id: string;
}

async function getTopics(id: string) {
  try {
    const res = await fetchServer(
      `http://localhost:8080/api/v1/topics/subjectId/${id}`,
      {
        next: {
          revalidate: 0,
        },
      }
    );

    return await res.json();
  } catch (err) {
    console.error("Erro ao buscar os tópicos: ", err);
    return [];
  }
}

// async function getData(id: string) {
//   const res = await fetch(`http://localhost:5000/subjects/?id=${id}`, {
//     next: {
//       revalidate: 0,
//     },
//   });

//   const data: Subject[] = await res.json();

//   return data[0].topics;
// }

export default async function HorizontalCardList({
  id,
}: HorizontalCardListProps) {
  const topics = await getTopics(id);

  return (
    <>
      {topics.map((topic: Topic) => (
        <HorizontalCard
          key={topic.id}
          text={topic.name}
          path={`/disciplina/${id}/${topic.name.replaceAll(" ", "-")}`}
        />
      ))}
    </>
  );
}
