import { Subject, Topic } from "@/types/subject";
import HorizontalCard from "./HorizontalCard";

interface HorizontalCardListProps {
  id: string;
}

async function getData(id: string) {
  const res = await fetch(`http://localhost:5000/subjects/?id=${id}`, {
    next: {
      revalidate: 0,
    },
  });

  const data: Subject[] = await res.json();

  return data[0].topics;
}

export default async function HorizontalCardList({
  id,
}: HorizontalCardListProps) {
  const topics = await getData(id);

  return (
    <>
      {topics.map((topic: Topic) => (
        <HorizontalCard
          key={topic.id}
          text={topic.name}
          path={`/disciplina/${id}/${topic.name.replace(" ", "-")}`}
        />
      ))}
    </>
  );
}
