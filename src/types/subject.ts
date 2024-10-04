export interface Topic {
  id: number;
  name: string;
}

export interface Subject {
  id: number;
  name: string;
  favorited: boolean;
  topics: Topic[];
}
