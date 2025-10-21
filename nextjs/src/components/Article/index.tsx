import { Article } from '@/libs/microcms';
import AdBox from '../AdBox';
import ArticleList from '../ArticleList';
import SearchBox from '../SearchBox';
import TagList from '../TagList';

type Props = {
  articles: Article[];
};

export default function Articles({ articles }: Props) {
  return (
    <main className='py-3 md:py-6'>
      <h1 className='text-center text-4xl md:text-5xl font-bold mb-4 md:mb-8'>
        Articles
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8'>
        <ArticleList articles={articles} />

        <aside className='space-y-8'>
          <SearchBox />
          <TagList
            tags={[
              '何かのtag',
              'React',
              'Next.js',
              'TypeScript',
              '何かのtag',
              'React',
              'Next.js',
              'TypeScript',
            ]}
          />
          <AdBox />
        </aside>
      </div>
    </main>
  );
}
