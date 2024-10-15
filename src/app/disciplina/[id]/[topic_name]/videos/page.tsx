import NotFound from "@/components/notFound/NotFound";
import VideoFrameList from "@/components/videoFrame/VideoFrameList";
import { Subject, Topic } from "@/types/subject";
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

async function getData(id: string, topic_name: string) {
  const res = await fetch(`http://localhost:5000/subjects/?id=${id}`, {
    next: {
      revalidate: 0,
    },
  });

  const data: Subject[] = await res.json();

  return data[0].topics.filter(
    (topic) => topic.name === topic_name.replaceAll("-", " ")
  );
}

export default async function PageVideos({ params }: Props) {
  params.topic_name = decodeURI(params.topic_name);
  const topic: Topic[] = await getData(params.id, params.topic_name);
  const videos = topic[0].videos ?? [];

  return (
    <div className="flex flex-col items-center gap-y-9">
      {videos.length > 0 ? (
        <VideoFrameList videos={videos} />
      ) : (
        <NotFound>
          <p>
            Nenhuma videoaula sobre{" "}
            <strong className="text-orange">{topic[0].name}</strong> foi
            encontrada!
          </p>
          <p>Novas videoaulas serão adicionadas em breve.</p>
        </NotFound>
      )}
    </div>
  );
}
