import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/libs/microcms';
import { mockArticles } from './dummyData';
import { NOT_FOUND_IMAGE_URL } from '@/constants';

type Props = {
  articles: Article[];
};

// export default function RecommendedArticles({ articles }: Props) {
// TODO: おすすめ記事（おすすめ判定）かつ最新の記事を3件表示する
export default function RecommendedArticles() {
  //   if (articles.length === 0) return null;

  const articles = mockArticles;

  return (
    <div className='border-t border-gray-200 mt-10 pt-6'>
      <h3 className='text-xl font-bold mb-4'>おすすめの記事</h3>
      <ul className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {articles.map(({ id, title, eyecatch }) => (
          <li
            key={id}
            className='group border rounded-lg overflow-hidden shadow-sm'
          >
            <Link href={`/articles/${id}`}>
              <div className='relative w-full aspect-[3/2]'>
                <Image
                  src={eyecatch.url || NOT_FOUND_IMAGE_URL}
                  alt={title}
                  fill
                />
              </div>
              <div className='p-3'>
                <h4 className='font-semibold text-base line-clamp-2'>
                  {title}
                </h4>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
