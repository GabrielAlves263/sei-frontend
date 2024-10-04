import { Subject } from "@/types/subject";
import { Card } from "./Card";

interface CardListProps {
  onlyFavoriteds?: boolean;
}

async function getSubjects(onlyFavoriteds: boolean) {
  const url = onlyFavoriteds
    ? "http://localhost:5000/subjects/?favorited=true"
    : "http://localhost:5000/subjects";

  const res = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function CardList({
  onlyFavoriteds = false,
}: CardListProps) {
  const subjects = await getSubjects(onlyFavoriteds);

  return (
    <>
      {subjects.map((subject: Subject) => (
        <Card
          key={subject.id}
          text={subject.name}
          path={`/disciplina/${subject.id}`}
          favorited={subject.favorited}
        />
      ))}
    </>
  );
}
