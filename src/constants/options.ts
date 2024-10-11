import { OptionProps } from "@/types/options";

export const getSubjectOptions = (
  id: string,
  semester?: string
): OptionProps[] => [
  {
    icon: "topics",
    paths: [`/disciplina/${id}`],
  },
  {
    icon: "tests",
    paths: [
      `/disciplina/${id}/simulados`,
      `/disciplina/${id}/simulados/${semester ? semester : ""}`,
    ],
  },
];

export const getTopicOptions = (
  id: string,
  topicName: string
): OptionProps[] => [
  {
    icon: "resume",
    paths: [`/disciplina/${id}/${topicName}`],
  },
  {
    icon: "videos",
    paths: [`/disciplina/${id}/${topicName}/videos`],
  },
  {
    icon: "questions",
    paths: [`/disciplina/${id}/${topicName}/questions`],
  },
  {
    icon: "tests",
    paths: [`/disciplina/${id}/simulados`],
  },
];
