'use client';
import { Tag } from '@/libs/microcms';
import { formatDate } from '@/libs/utils';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  id: string;
  title: string;
  eyecatch: { url: string };
  tags: Tag[];
  createdAt: string;
};

export default function ArticleCard({
  id,
  title,
  eyecatch,
  tags,
  createdAt,
}: Props) {
  return (
    <Link
      href={`/articles/${id}`}
      className='border-b pb-4 block hover:opacity-90 transition'
    >
      <div className='overflow-hidden rounded-md border border-gray-300 relative aspect-[3/2]'>
        <Image
          src={eyecatch.url}
          alt={title}
          fill
          // className='object-cover'
        />
      </div>
      <p className='text-sm my-2'>{formatDate(createdAt)}</p>
      <div className='flex flex-wrap gap-2 mb-2'>
        {tags.map(({ id, name }) => (
          <span
            key={id}
            className='px-3 py-1 bg-white rounded-full text-sm border border-gray-200'
          >
            {name}
          </span>
        ))}
      </div>
      <h2 className='text-lg font-bold mt-2'>{title}</h2>
    </Link>
  );
}
