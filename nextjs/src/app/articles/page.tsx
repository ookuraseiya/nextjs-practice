import React from 'react';
import { getArticles } from '@/libs/microcms';
import Article from '@/components/Article';

export default async function Page() {
  const articles = await getArticles();
  return <Article articles={articles.contents} />;
}
