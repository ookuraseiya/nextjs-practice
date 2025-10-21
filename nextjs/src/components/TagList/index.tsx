import Link from 'next/link';

type Props = {
  tags: string[];
};

export default function TagList({ tags }: Props) {
  return (
    <div className='border border-gray-300 rounded-md p-4 hidden lg:block'>
      <h3 className='font-bold mb-2'>タグ</h3>
      <div className='flex flex-wrap gap-2'>
        {tags.map((tag, index) => (
          <Link
            href={`/tags/${tag}`}
            key={tag + index}
            className='px-3 py-1 bg-white rounded-full text-sm border border-gray-200 hover:bg-gray-100 transition'
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
