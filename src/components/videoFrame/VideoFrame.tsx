"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

interface videoFrameProps {
  url: string;
}

export default function VideoFrame({ url }: videoFrameProps) {
  return (
    <div className="relative pt-[56.25%]">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
      />
    </div>
  );
}
