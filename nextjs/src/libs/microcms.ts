import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

export type Tag = {
  id: string;
  name: string;
};

export type Eyecatch = {
  url: string;
  height: number;
  width: number;
};

export type Article = {
  id: string;
  title: string;
  eyecatch: Eyecatch;
  tags: Tag[];
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
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

if (!process.env.NEXT_PUBLIC_MICROCMS_TECH_BLOG_SERVICE_DOMAIN) {
  throw new Error('NEXT_PUBLIC_MICROCMS_TECH_BLOG_SERVICE_DOMAIN is required');
}

if (!process.env.NEXT_PUBLIC_MICROCMS_TECH_BLOG_API_KEY) {
  throw new Error('NEXT_PUBLIC_MICROCMS_TECH_BLOG_API_KEY is required');
}

if (!process.env.NEXT_PUBLIC_MICROCMS_TECH_BLOG_BLOGS_SERVICE_DOMAIN) {
  throw new Error(
    'NEXT_PUBLIC_MICROCMS_TECH_BLOG_BLOGS_SERVICE_DOMAIN is required'
  );
}

// Initialize Client SDK.
const portfolioClient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_PORTFOLIO_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_PORTFOLIO_API_KEY,
});

const techBlogClient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_TECH_BLOG_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_TECH_BLOG_API_KEY,
});

export const getSkill = async (queries?: MicroCMSQueries) => {
  const data = await portfolioClient
    .getList<Skill>({
      endpoint: 'skill',
      queries,
    })
    .catch(notFound);
  return data;
};

export const getProfile = async (queries?: MicroCMSQueries) => {
  const data = await portfolioClient
    .getList<Profile>({
      endpoint: 'profile',
      queries,
    })
    .catch(notFound);
  return data;
};

export const getArticles = async (queries?: MicroCMSQueries) => {
  const data = await techBlogClient
    .getList<Article>({
      endpoint: 'blogs',
      queries,
    })
    .catch(notFound);
  return data;
};

// タグの一覧を取得
// export const getTagList = async (queries?: MicroCMSQueries) => {
//   const data = await client
//     .getList<Tag>({
//       endpoint: 'tags',
//       queries,
//     })
//     .catch(notFound);

//   return data;
// };

// // タグの詳細を取得
// export const getTag = async (contentId: string, queries?: MicroCMSQueries) => {
//   const detailData = await client
//     .getListDetail<Tag>({
//       endpoint: 'tags',
//       contentId,
//       queries,
//     })
//     .catch(notFound);

//   return detailData;
// };
