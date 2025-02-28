import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { fetchServer } from "@/libs/fetchServer";
import { Subject } from "@/types/subject";
import { getServerSession } from "next-auth";
import Link from "next/link";
import NotFound from "../notFound/NotFound";
import { Card } from "./Card";

interface CardListProps {
  onlyFavoriteds?: boolean;
}

async function getSubjects(onlyFavoriteds: boolean, userId?: string) {
  const url =
    onlyFavoriteds && userId
      ? `http://localhost:8080/api/v1/subjects/idUser/${userId}`
      : "http://localhost:8080/api/v1/subjects";

  try {
    const res = await fetchServer(url, {
      next: {
        revalidate: 0,
      },
    });

    return await res.json();
  } catch (err) {
    console.error("Erro ao buscar disciplinas:", err);
    return [];
  }
}

// async function getSubjects(onlyFavoriteds: boolean) {
//   const url = onlyFavoriteds
//     ? "http://localhost:5000/subjects/?favorited=true"
//     : "http://localhost:5000/subjects";

//   const res = await fetch(url, {
//     next: {
//       revalidate: 0,
//     },
//   });

//   return res.json();
// }

export default async function CardList({
  onlyFavoriteds = false,
}: CardListProps) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  const userSubjects = await getSubjects(true, userId);
  const favoriteIds = new Set(
    userSubjects.map((subject: Subject) => subject.id)
  );

  const subjects = onlyFavoriteds ? userSubjects : await getSubjects(false);

  return (
    <>
      {subjects.length > 0 ? (
        subjects.map((subject: Subject) => (
          <Card
            key={subject.id}
            text={subject.name}
            userId={userId}
            subjectId={subject.id}
            path={`/disciplina/${subject.id}`}
            favorited={favoriteIds.has(subject.id)}
          />
        ))
      ) : (
        <>
          <NotFound className="col-span-3">
            <p>Você ainda não adicionou disciplinas!</p>
            <p>
              Selecione disciplinas na aba{" "}
              <Link href={"/explore"}>
                <strong className="text-orange">Explore</strong>
              </Link>
            </p>
          </NotFound>
        </>
      )}
    </>
  );
}
