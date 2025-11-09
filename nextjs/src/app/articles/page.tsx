import React from 'react';
// import { getArticles } from '@/libs/microcms';
import Article from '@/components/Article';
import { DUMMY_ARTICLES_DATA } from '@/constants';

export default async function Page() {
  // const articles = await getArticles();
  return <Article articles={DUMMY_ARTICLES_DATA.contents} />;
}
