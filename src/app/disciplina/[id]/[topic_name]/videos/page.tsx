import NotFound from "@/components/notFound/NotFound";
import VideoFrameList from "@/components/videoFrame/VideoFrameList";
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

async function getVideos(id: string, topic_name: string) {
  try {
    const res = await fetchServer(
      `http://localhost:8080/api/v1/topics/subjectId/${id}`,
      {
        next: {
          revalidate: 0,
        },
      }
    );

    const topics = await res.json();

    const topic = topics.filter(
      (topic: any) => topic.name === topic_name.replaceAll("-", " ")
    );

    return topic[0].videos;
  } catch (err) {
    console.error("Erro ao buscar os vídeos: ", err);
    return [];
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

export default async function PageVideos({ params }: Props) {
  params.topic_name = decodeURI(params.topic_name);
  // const topic: Topic[] = await getData(params.id, params.topic_name);
  // const videos = topic[0].videos ?? [];

  const videos = await getVideos(params.id, params.topic_name);

  return (
    <>
      {videos.length > 0 && <VideoFrameList videos={videos} />}

      {videos.length <= 0 && (
        <NotFound>
          <p>
            Nenhuma videoaula sobre{" "}
            <strong className="text-orange">{params.topic_name}</strong> foi
            encontrada!
          </p>
          <p>Novas videoaulas serão adicionadas em breve.</p>
        </NotFound>
      )}
    </>
  );
}
