import Pagination from '@/components/Pagination';
import ArticleCard from '../ArticleCard';
import { Article } from '@/libs/microcms';

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <section>
      <div className='grid sm:grid-cols-2 gap-8'>
        {articles.map(({ id, title, eyecatch, tags, createdAt }) => (
          <ArticleCard
            key={id}
            id={id}
            title={title}
            eyecatch={eyecatch}
            tags={tags}
            createdAt={createdAt}
          />
        ))}
      </div>

      {/* <div className='flex justify-center mt-8'> */}
      <Pagination totalCount={50} current={1} basePath='/articles' />
      {/* </div> */}
    </section>
  );
}
