import { Database } from "../types/database.mjs";

export const DATABASE: Database = {
  posts: [
    {
      title:
        "Amazon Q がいたるところに出てきて混乱したので整理してみた #AWSreinvet",
      url: "https://dev.classmethod.jp/articles/amazon-q-lineup/",
      category: "やってみた",
      tags: ["Amazon Q"],
      date: "2023.12.01",
      author_name: "千葉淳",
      author_url: "https://dev.classmethod.jp/author/chiba-jun/",
      author_avatar:
        "https://secure.gravatar.com/avatar/e529688ab54d94cc7c18333cb3b34615",
      thumbnail:
        "https://devio2023-media.developers.io/wp-content/uploads/2023/11/eyecatch-reinvent-2023-just-try-yattemita.png",
    },
    {
      title:
        "[いよいよ今日から開催!] AWS re:Invent 2023のMedia &#038; EntertainmentとSportsなセッション情報をざっくりまとめてみた #AWSreInvent",
      url: "https://dev.classmethod.jp/articles/me-and-sports-programming-highlights-at-reinvent-2023/",
      category: "その他",
      tags: ["Prepare"],
      date: "2023.11.27",
      author_name: "清水俊也",
      author_url: "https://dev.classmethod.jp/author/shimizu-toshiya/",
      author_avatar:
        "https://secure.gravatar.com/avatar/80852b0b9d9b1563550a67113079cd92",
      thumbnail:
        "https://devio2023-media.developers.io/wp-content/uploads/2023/11/eyecatch_reinvent-2023-developersio.png",
    },
    {
      title:
        "AWS B2B Data Interchange の基本的な使い方が学べるワークショップに参加しました（STG352） #AWSreInvent",
      url: "https://dev.classmethod.jp/articles/reinvent-2023-stg352/",
      category: "セッションレポート",
      tags: ["ハンズオン/ワークショップ", "AWS B2B Data Interchange"],
      date: "2023.11.29",
      author_name: "yhana",
      author_url: "https://dev.classmethod.jp/author/yhana/",
      author_avatar:
        "https://secure.gravatar.com/avatar/de4d4e7fb87254ce1114c99eababd626",
      thumbnail:
        "https://devio2023-media.developers.io/wp-content/uploads/2023/11/eyecatch_reinvent-2023-session-report.png",
    },
    {
      title:
        "「Building a multi-tenant SaaS control plane: An inside look」に参加し、マルチテナント SaaS でのコントロールプレーン実装方法を学びました #PEX401 #AWSreInvent",
      url: "https://dev.classmethod.jp/articles/reinvent2023-report-pex401/",
      category: "セッションレポート",
      tags: ["SaaS on AWS", "Amazon API Gateway", "Amazon CloudWatch"],
      date: "2023.12.04",
      author_name: "いわさ",
      author_url: "https://dev.classmethod.jp/author/iwasa-takahito/",
      author_avatar:
        "https://secure.gravatar.com/avatar/67a42539347bd5d9e9988a5c901696d8",
      thumbnail:
        "https://devio2023-media.developers.io/wp-content/uploads/2023/11/eyecatch_reinvent-2023-session-report.png",
    },
    {
      title:
        "【速報】Graviton4 と R8g インスタンスが発表されました！(Preview) #AWSreInvent",
      url: "https://dev.classmethod.jp/articles/graviton4-r8g-instance-preview/",
      category: "AWS新サービスアップデート情報",
      tags: [
        "AWS Graviton4",
        "Amazon EC2",
        "AWS Graviton",
        "Preview",
        "Private Preview",
      ],
      date: "2023.11.29",
      author_name: "もこ",
      author_url: "https://dev.classmethod.jp/author/moko/",
      author_avatar:
        "https://secure.gravatar.com/avatar/f3783143b9bd375234e357b1caef2645",
      thumbnail:
        "https://devio2023-media.developers.io/wp-content/uploads/2023/11/image-4-2.png",
    },
    {
      title:
        "[レポート] Building effective IAM policies に参加しました #AWSreInvent #SEC305",
      url: "https://dev.classmethod.jp/articles/reinvent2023-report-sec305-ja/",
      category: "セッションレポート",
      tags: ["AWS Identity and Access Management (IAM)"],
      date: "2023.12.04",
      author_name: "yusuke",
      author_url: "https://dev.classmethod.jp/author/takahashi-yusuke/",
      author_avatar:
        "https://secure.gravatar.com/avatar/1b0f61942689d83abcd1bc84b3cc0c60",
      thumbnail:
        "https://devio2023-media.developers.io/wp-content/uploads/2023/11/eyecatch_reinvent-2023-session-report.png",
    },
    {
      title:
        "[アップデート] Amazon SQSのFIFOキュー高スループットモードの制限がバージニア北部などで70,000に引き上げられました #AWSreInvent",
      url: "https://dev.classmethod.jp/articles/update-amazon-sqs-fifo-increased-throughput-quota/",
      category: "AWS新サービスアップデート情報",
      tags: ["Amazon Simple Queue Service (SQS)", "FIFO Queue"],
      date: "2023.11.28",
      author_name: "武田隆志",
      author_url: "https://dev.classmethod.jp/author/takeda-takashi/",
      author_avatar:
        "https://secure.gravatar.com/avatar/0e3a8032be7c11bb86798f12d7c89dce",
      thumbnail:
        "https://devio2023-media.developers.io/wp-content/uploads/2023/11/eyecatch_reinvent-2023-newservice-update.png",
    },
    {
      title:
        "「機械学習、アナリティクス系 “推し” アップデート紹介」というタイトルでre:Invent 2023の振り返り勉強会「CM re:Growth 2023」に登壇しました #AWSreInvent #cmregrowth",
      url: "https://dev.classmethod.jp/articles/regrowth2023-aiml-updates/",
      category: "その他",
      tags: [
        "登壇レポート",
        "AI/ML",
        "Generative AI",
        "Amazon SageMaker",
        "Amazon Bedrock",
        "Amazon Q",
      ],
      date: "2023.12.09",
      author_name: "nokomoro3",
      author_url: "https://dev.classmethod.jp/author/shogo-nakamura/",
      author_avatar:
        "https://secure.gravatar.com/avatar/b3cc0e7ba8e6c941f08a2e6f69d3e4c2",
      thumbnail:
        "https://devio2023-media.developers.io/wp-content/uploads/2023/12/regrowth2023-tokyo.png",
    },
    {
      title: "Venetian の Trend Micro at Yardbird に行ってみた #AWSreInvent",
      url: "https://dev.classmethod.jp/articles/visiting-trend-micro-at-yardbird-venetian-awsreinvent/",
      category: "ラスベガスだより",
      tags: ["Trend Micro"],
      date: "2023.11.29",
      author_name: "若槻龍太",
      author_url: "https://dev.classmethod.jp/author/wakatsuki-ryuta/",
      author_avatar:
        "https://secure.gravatar.com/avatar/6fd9af3e25312c368c79efb4efaff1b5",
      thumbnail:
        "https://devio2023-media.developers.io/wp-content/uploads/2023/11/20231128_095718.jpg",
    },
    {
      title: "[ レポート ] Sphere 行ってみた #SphereVegas",
      url: "https://dev.classmethod.jp/articles/reinvent2023-sphere-report/",
      category: "ラスベガスだより",
      tags: ["Sphere"],
      date: "2023.11.27",
      author_name: "たかくに",
      author_url: "https://dev.classmethod.jp/author/takakuni/",
      author_avatar:
        "https://secure.gravatar.com/avatar/08dd0b93e011904f40d60d5a1b54c671",
      thumbnail:
        "https://devio2023-media.developers.io/wp-content/uploads/2023/11/IMG_9553-2-scaled.jpg",
    },
  ],
  categories: [
    "ラスベガスだより",
    "AWS新サービスアップデート情報",
    "やってみた",
    "その他",
    "セッションレポート",
  ],
  tags: [
    "AI/ML",
    "AWS B2B Data Interchange",
    "AWS Graviton",
    "AWS Graviton4",
    "AWS Identity and Access Management (IAM)",
    "Amazon API Gateway",
    "Amazon Bedrock",
    "Amazon CloudWatch",
    "Amazon EC2",
    "Amazon Q",
    "Amazon SageMaker",
    "Amazon Simple Queue Service (SQS)",
    "FIFO Queue",
    "Generative AI",
    "Prepare",
    "Preview",
    "Private Preview",
    "SaaS on AWS",
    "Sphere",
    "Trend Micro",
    "ハンズオン/ワークショップ",
    "登壇レポート",
  ],
};
