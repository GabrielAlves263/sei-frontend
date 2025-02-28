import { fetchServer } from "@/libs/fetchServer";
import NotFound from "../notFound/NotFound";
import Label from "./Label";

interface LabelListProps {
  id: string;
  semester?: string;
}

async function getTests(id: string, semester: string | undefined) {
  try {
    const res = await fetchServer(
      `http://localhost:8080/api/v1/subjects/${id}`,
      {
        next: {
          revalidate: 0,
        },
      }
    );

    const subject = await res.json();

    return subject.pastExams;
  } catch (err) {
    console.error(err);
    return null;
  }
}

// async function getData(id: string, semester: string | undefined) {
//   const res = await fetch(`http://localhost:5000/subjects/?id=${id}`, {
//     next: {
//       revalidate: 0,
//     },
//   });

//   const data: Subject[] = await res.json();

//   return semester === undefined
//     ? data[0].tests
//     : data[0].tests.filter((test) => test.semester === semester);
// }

export default async function LabelList({ id, semester }: LabelListProps) {
  const tests = await getTests(id, semester);
  console.log("Testes:");
  console.log(tests);

  return (
    <>
      {/* {semester === undefined
        ? tests.map((test: any, index: number) => (
            <Label
              key={index}
              text={test.semester}
              path={`/disciplina/1/simulados/${test.semester.replace(
                ".",
                "-"
              )}`}
            />
          ))
        : tests[0].aps.map((ap) => (
            <Label key={ap.id} text={ap.name} path={ap.url} isAP />
          ))} */}
      {tests ? (
        tests.map((test: any, index: number) => (
          <Label key={index} text={test.title} path={test.url} isAP />
        ))
      ) : (
        <NotFound className="col-span-4">
          <p>Nenhuma avaliação foi encontrada!</p>
          <p>Novas avaliações serão adicionadas em breve.</p>
        </NotFound>
      )}
    </>
  );
}
