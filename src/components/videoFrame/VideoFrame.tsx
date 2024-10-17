"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

interface videoFrameProps {
  url: string;
}

export default function VideoFrame({ url }: videoFrameProps) {
  return <ReactPlayer url={url} controls className="aspect-video" />;
}
