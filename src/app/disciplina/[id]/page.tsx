import Container from "@/components/container/Container";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.id,
  };
}

export default function PageSubject({ params }: Props) {
  return <Container title={params.id}></Container>;
}
