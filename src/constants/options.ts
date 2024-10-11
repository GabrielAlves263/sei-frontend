import { OptionProps } from "@/types/options";

export const getSubjectOptions = (id: string): OptionProps[] => [
  {
    icon: "topics",
    path: `/disciplina/${id}`,
  },
  {
    icon: "tests",
    path: `/disciplina/${id}/simulados`,
  },
];

export const getTopicOptions = (
  id: string,
  topicName: string
): OptionProps[] => [
  {
    icon: "resume",
    path: `/disciplina/${id}/${topicName}`,
  },
  {
    icon: "videos",
    path: `/disciplina/${id}/${topicName}/videos`,
  },
  {
    icon: "questions",
    path: `/disciplina/${id}/${topicName}/questions`,
  },
  {
    icon: "tests",
    path: `/disciplina/${id}/simulados`,
  },
];
