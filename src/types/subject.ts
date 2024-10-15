export interface Video {
  id: string;
  url: "string";
}

export interface Question {
  id: string;
}

export interface Topic {
  id: number;
  name: string;
  resume: string;
  videos: Video[];
  questions: Question[];
}

export interface Ap {
  id: string;
  name: string;
  url: string;
}

export interface Test {
  id: string;
  semester: string;
  aps: Ap[];
}

export interface Subject {
  id: number;
  name: string;
  favorited: boolean;
  topics: Topic[];
  tests: Test[];
}
