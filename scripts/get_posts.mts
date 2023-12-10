import { Post, Database } from "../src/types/database.mjs";
import { writeFileSync } from "fs";

type EnvironmentVariables = {
  databaseId: string;
  notionToken: string;
};

type DatabaseDefinition = {
  categories: string[];
  tags: string[];
};

async function main() {
  const posts = await getPosts();
  const definition = await retriveDatabase();

  const text = craeteText(posts, definition);
  write(text);
}

function sleep(sec: number): Promise<void> {
  return new Promise((ok) => {
    setTimeout(() => ok(), sec * 1000);
  });
}

function loadEnvironments(): EnvironmentVariables {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const notionToken = process.env.NOTION_TOKEN;

  if (databaseId == null || notionToken == null) {
    // @ts-ignore
    throw new Error("環境変数が足りません", {
      cause: { databaseId, notionToken },
    });
  }

  return {
    databaseId,
    notionToken,
  };
}

function convertToPost(data: any): Post {
  const properties = data["properties"];
  return {
    title: properties["Title"]["title"][0]["plain_text"],
    url: properties["URL"]["url"],
    category: properties["Category"]["select"]["name"],
    tags: properties["Tags"]["multi_select"].map((x: any) => x["name"]),
    date: properties["Date"]["rich_text"][0]["plain_text"],
    author_name: properties["AuthorName"]["rich_text"][0]["plain_text"],
    author_url: properties["AuthorUrl"]["url"],
    author_avatar: properties["AuthorAvatar"]["url"],
    thumbnail: properties["Thumbnail"]["url"],
  };
}

async function getPosts(): Promise<Post[]> {
  const result: Post[] = [];

  const env = loadEnvironments();

  let token: string | null = null;
  do {
    let payload: any = {
      filter: {
        and: [
          {
            property: "Edited",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Disabled",
            checkbox: {
              equals: false,
            },
          },
        ],
      },
      sorts: [
        {
          property: "RawDate",
          direction: "descending",
        },
      ],
    };
    if (token != null) {
      payload["start_cursor"] = token;
    }
    const resp = await fetch(
      `https://api.notion.com/v1/databases/${env.databaseId}/query`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
          Authorization: `Bearer ${env.notionToken}`,
        },
        body: JSON.stringify(payload),
      },
    );
    if (resp.status !== 200) {
      // @ts-ignore
      throw new Error("Postの取得に失敗しました", { cause: { resp } });
    }
    const data: any = await resp.json();
    token = data["next_cursor"];
    result.push(...data["results"].map(convertToPost));
    await sleep(1);
  } while (token != null);

  return result;
}

async function retriveDatabase(): Promise<DatabaseDefinition> {
  const env = loadEnvironments();

  const resp = await fetch(
    `https://api.notion.com/v1/databases/${env.databaseId}`,
    {
      method: "GET",
      headers: {
        "Notion-Version": "2022-06-28",
        Authorization: `Bearer ${env.notionToken}`,
      },
    },
  );

  if (resp.status !== 200) {
    // @ts-ignore
    throw new Error("データベースの情報の取得に失敗しました", {
      cause: { resp },
    });
  }
  const data: any = await resp.json();
  const properties: any = data["properties"];
  return {
    categories: properties["Category"]["select"]["options"].map(
      (x: any) => x.name,
    ),
    tags: properties["Tags"]["multi_select"]["options"]
      .map((x: any) => x.name)
      .sort(),
  };
}

function craeteText(posts: Post[], definition: DatabaseDefinition): string {
  const database: Database = {
    posts,
    categories: definition.categories,
    tags: definition.tags,
  };

  return (
    [
      'import { Database } from "../types/database.mjs";',
      "",
      "export const DATABASE: Database = ",
    ].join("\n") +
    JSON.stringify(database, null, 2) +
    ";"
  );
}

function write(text: string) {
  writeFileSync("src/data/database.mts", text);
}

await main();
