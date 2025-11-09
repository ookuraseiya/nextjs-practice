import Link from 'next/link';
import { LIMIT } from '@/constants';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = '',
  q,
}: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT) }).map(
    (_, i) => i + 1
  );

  return (
    <ul className='flex justify-center items-center gap-2 mt-10'>
      {pages.map((p) => (
        <li key={p}>
          {current !== p ? (
            <Link
              href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}
              className='flex justify-center items-center w-9 h-9 rounded-md text-gray-800 hover:bg-gray-200 transition-colors duration-200'
            >
              {p}
            </Link>
          ) : (
            <span className='flex justify-center items-center w-9 h-9 rounded-md bg-yellow-400 text-white font-semibold'>
              {p}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
