import { type Subject } from "@/types/subject";
import Label from "./Label";

interface LabelListProps {
  id: string;
}

async function getData(id: string) {
  const res = await fetch(`http://localhost:5000/subjects/?id=${id}`, {
    next: {
      revalidate: 0,
    },
  });

  const data: Subject[] = await res.json();

  return data[0].tests;
}

export default async function LabelList({ id }: LabelListProps) {
  const tests = await getData(id);

  return (
    <>
      {tests.map((test) => (
        <Label
          key={test.id}
          text={test.semester}
          path={`/disciplina/1/simulados/${test.id}`}
        />
      ))}
    </>
  );
}
