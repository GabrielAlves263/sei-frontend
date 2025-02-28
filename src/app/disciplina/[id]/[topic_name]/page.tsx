import { fetchServer } from "@/libs/fetchServer";
import { Metadata } from "next";

interface Props {
  params: { id: string; topic_name: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  params.topic_name = decodeURI(params.topic_name);

  return {
    title: params.topic_name.replaceAll("-", " "),
  };
}

async function getResume(id: string, topic_name: string) {
  try {
    const res = await fetchServer(
      `http://localhost:8080/api/v1/topics/subjectId/${id}`
    );

    const topics = await res.json();

    const topic = topics.filter(
      (topic: any) => topic.name === topic_name.replaceAll("-", " ")
    );

    return topic[0].resume;
  } catch (err) {
    console.error("Erro ao carregar o resumo: ", err);
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

export default async function PageResume({ params }: Props) {
  params.topic_name = decodeURI(params.topic_name);

  const resume = await getResume(params.id, params.topic_name);

  console.log("Topic:");
  console.log(resume);

  return (
    <>
      {resume ? (
        <div>
          <h4 className="font-semibold">{resume.title}</h4>
          <p className="text-justify indent-14">{resume.text}</p>
        </div>
      ) : (
        <p>Resumo não encontrado!</p>
      )}
    </>
  );
}
