"use client";
import Container from "@/components/container/Container";
import Navigator from "@/components/navigator/Navigator";
import OptionsBar from "@/components/optionsMenu/OptionsMenu";
import { getTopicOptions } from "@/constants/options";
import { usePathname } from "next/navigation";

interface Props {
  params: {
    id: string;
    topic_name: string;
  };
  children: React.ReactNode;
}

export default function TopicLayout({ params, children }: Props) {
  params.topic_name = decodeURI(params.topic_name);
  const options = getTopicOptions(params.id, params.topic_name);

  const paths = [
    { url: `/disciplina/${params.id}`, text: params.id },
    {
      url: `/disciplina/${params.id}/${params.topic_name}`,
      text: params.topic_name,
    },
  ];

  const currentPath = usePathname();
  const contentType = currentPath.includes("videos")
    ? "Vídeos"
    : currentPath.includes("questoes")
    ? "Questões"
    : "Resumo";

  return (
    <>
      <Navigator paths={paths} />
      <OptionsBar options={options} />
      <Container
        title={`${contentType} de ${params.topic_name.replace("-", " ")}`}
        className="mx-10 flex flex-col gap-y-3"
      >
        {children}
      </Container>
    </>
  );
}
