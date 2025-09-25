import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

// タグの型定義
export type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// ライターの型定義
export type Writer = {
  name: string;
  profile: string;
  image?: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

// ブログの型定義
export type Blog = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  tags?: Tag[];
  writer?: Writer;
};

export type Skill = {
  id: string;
  language: string;
  libraryFramework: string;
  database: string;
  others: string;
  qualification: string;
};

export type Profile = {
  profileImage: {
    url: string;
    width: number;
    height: number;
  };
  greetingStatement: string;
  career: string;
};

export type Article = Blog & MicroCMSContentId & MicroCMSDate;

if (!process.env.NEXT_PUBLIC_MICROCMS_PORTFOLIO_SERVICE_DOMAIN) {
  throw new Error('NEXT_PUBLIC_MICROCMS_PORTFOLIO_SERVICE_DOMAIN is required');
}

if (!process.env.NEXT_PUBLIC_MICROCMS_PORTFOLIO_API_KEY) {
  throw new Error('NEXT_PUBLIC_MICROCMS_PORTFOLIO_API_KEY is required');
}

if (!process.env.NEXT_PUBLIC_MICROCMS_PORTFOLIO_PROFILE_SERVICE_DOMAIN) {
  throw new Error(
    'NEXT_PUBLIC_MICROCMS_PORTFOLIO_PROFILE_SERVICE_DOMAIN is required'
  );
}

if (!process.env.NEXT_PUBLIC_MICROCMS_PORTFOLIO_SKILLS_SERVICE_DOMAIN) {
  throw new Error(
    'NEXT_PUBLIC_MICROCMS_PORTFOLIO_SKILLS_SERVICE_DOMAIN is required'
  );
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_PORTFOLIO_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_PORTFOLIO_API_KEY,
});

// ブログ一覧を取得
export const getSkill = async (queries?: MicroCMSQueries) => {
  const skillData = await client
    .getList<Skill>({
      endpoint: 'skills',
      queries,
    })
    .catch(notFound);
  return skillData;
};

export const getProfile = async (queries?: MicroCMSQueries) => {
  const skillData = await client
    .getList<Profile>({
      endpoint: 'profile',
      queries,
    })
    .catch(notFound);
  return skillData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Blog>({
      endpoint: 'blog',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

// タグの一覧を取得
export const getTagList = async (queries?: MicroCMSQueries) => {
  const skillData = await client
    .getList<Tag>({
      endpoint: 'tags',
      queries,
    })
    .catch(notFound);

  return skillData;
};

// タグの詳細を取得
export const getTag = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Tag>({
      endpoint: 'tags',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};
