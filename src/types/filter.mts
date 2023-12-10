import { Post } from "./database.mjs";

export type FilterCondition = {
  categories: string[];
  tags: string[];
};

export type FilterItem = {
  text: string;
  count: number;
};

export type FilterResult = {
  posts: Post[];
  categories: FilterItem[];
  tags: FilterItem[];
};
