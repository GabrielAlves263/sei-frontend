import { type Subject } from "@/types/subject";
import Label from "./Label";

interface LabelListProps {
  id: string;
  semester?: string;
}

async function getData(id: string, semester: string | undefined) {
  const res = await fetch(`http://localhost:5000/subjects/?id=${id}`, {
    next: {
      revalidate: 0,
    },
  });

  const data: Subject[] = await res.json();

  return semester === undefined
    ? data[0].tests
    : data[0].tests.filter((test) => test.semester === semester);
}

export default async function LabelList({ id, semester }: LabelListProps) {
  const tests = await getData(id, semester);

  return (
    <>
      {semester === undefined
        ? tests.map((test) => (
            <Label
              key={test.id}
              text={test.semester}
              path={`/disciplina/1/simulados/${test.semester.replace(
                ".",
                "-"
              )}`}
            />
          ))
        : tests[0].aps.map((ap) => (
            <Label key={ap.id} text={ap.name} path={ap.url} isAP />
          ))}
    </>
  );
}
