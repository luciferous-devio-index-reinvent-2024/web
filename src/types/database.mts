export type Post = {
  title: string;
  url: string;
  category: string;
  tags: string[];
  date: string;
  author_name: string;
  author_url: string;
  author_avatar: string;
  thumbnail: string;
};

export type Database = {
  posts: Post[];
  categories: string[];
  tags: string[];
};
