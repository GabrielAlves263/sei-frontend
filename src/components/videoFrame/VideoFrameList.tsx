import { Video } from "@/types/subject";
import VideoFrame from "./VideoFrame";

interface VideoFrameListProps {
  videos: Video[];
}

export default function VideoFrameList({ videos }: VideoFrameListProps) {
  return (
    <>
      {videos.map((video) => (
        <VideoFrame key={video.id} url={video.url} />
      ))}
    </>
  );
}
