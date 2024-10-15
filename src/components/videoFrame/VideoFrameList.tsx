import { Video } from "@/types/subject";
import VideoFrame from "./VideoFrame";

interface VideoFrameListProps {
  videos: Video[];
}

export default function VideoFrameList({ videos }: VideoFrameListProps) {
  return (
    <ul className="flex flex-col gap-y-9 md:px-12 lg:px-32">
      {videos.map((video) => (
        <VideoFrame key={video.id} url={video.url} />
      ))}
    </ul>
  );
}
