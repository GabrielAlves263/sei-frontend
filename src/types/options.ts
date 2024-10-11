export interface OptionProps {
  icon: "topics" | "tests" | "resume" | "videos" | "questions";
  paths: string[];
  currentPath?: string;
}
