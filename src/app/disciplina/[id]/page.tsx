import Container from "@/components/container/Container";
import Navigator from "@/components/navigator/Navigator";
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
  const paths = [`/disciplina/${params.id}`];

  return (
    <>
      <Navigator paths={paths} />
      <Container title={params.id}></Container>
    </>
  );
}
