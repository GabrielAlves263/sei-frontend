"use client";
import Container from "@/components/container/Container";
import Navigator from "@/components/navigator/Navigator";
import OptionsBar from "@/components/optionsMenu/OptionsMenu";
import { getTopicOptions } from "@/constants/options";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const TopicList = dynamic(() => import("@/components/topicList/TopicList"), {
  ssr: true,
});

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
      <div className="flex flex-row gap-4">
        <Container
          title={`${contentType} de ${params.topic_name.replace("-", " ")}`}
          className="mx-10 flex flex-col items-center gap-y-9"
        >
          {children}
        </Container>
        {/* <div className="flex flex-col gap-4">
          <Container title="Tópicos" titleColor="primary-dark">
            <TopicList id={params.id} currentPath={currentPath} />
          </Container>
        </div> */}
      </div>
    </>
  );
}
