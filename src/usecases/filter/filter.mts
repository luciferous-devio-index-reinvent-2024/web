import { DATABASE } from "../../data/database.mjs";
import { Post } from "../../types/database.mjs";
import { FilterCondition, FilterResult } from "../../types/filter.mjs";

type ResultExecCount = {
  categories: { [key: string]: number };
  tags: { [key: string]: number };
};

export function execFilter(condition: FilterCondition): FilterResult {
  const filteredPost = execFilterPosts(condition);
  const count = execCount(filteredPost);

  return {
    posts: filteredPost,
    categories: DATABASE.categories.map((x) => {
      return {
        text: x,
        count: count.categories[x] ?? 0,
      };
    }),
    tags: DATABASE.tags.map((x) => {
      return {
        text: x,
        count: count.tags[x] ?? 0,
      };
    }),
  };
}

function execFilterPosts(condition: FilterCondition): Post[] {
  let result = DATABASE.posts;

  for (const category of condition.categories) {
    result = result.filter((x) => x.category === category);
  }

  for (const tag of condition.tags) {
    result = result.filter((x) => x.tags.includes(tag));
  }

  return result;
}

function execCount(posts: Post[]): ResultExecCount {
  const result: ResultExecCount = {
    categories: {},
    tags: {},
  };

  for (const post of posts) {
    result.categories[post.category] =
      (result.categories[post.category] ?? 0) + 1;
    for (const tag of post.tags) {
      result.tags[tag] = (result.tags[tag] ?? 0) + 1;
    }
  }

  return result;
}
