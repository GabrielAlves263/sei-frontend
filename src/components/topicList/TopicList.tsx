import { Subject, Topic } from "@/types/subject";
import Link from "next/link";

interface TopicListProps {
  id: string;
  currentPath: string;
}

async function getData(id: string): Promise<Topic[]> {
  const res = await fetch(`http://localhost:5000/subjects/?id=${id}`);
  const data: Subject[] = await res.json();

  return data[0].topics;
}

export default async function TopicList({ id, currentPath }: TopicListProps) {
  const topics = await getData(id);
  currentPath = decodeURI(currentPath);

  return (
    <ul className="flex flex-col gap-2 mx-9 text-nowrap">
      {topics.map((topic) => (
        <li key={topic.id}>
          <Link
            data-active={currentPath.includes(
              `/disciplina/${id}/${topic.name.replaceAll(" ", "-")}`
            )}
            href={`/disciplina/${id}/${topic.name.replaceAll(" ", "-")}`}
            className="data-[active=true]:text-primary-dark"
          >
            {topic.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
