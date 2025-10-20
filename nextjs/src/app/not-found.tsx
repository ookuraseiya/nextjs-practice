import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='h-[82vh] flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl md:text-5xl font-semibold tracking-tight text-balance sm:text-7xl'>
          404 Not Found
        </h1>
        <p className='mt-6 text-xl md:text-2xl font-medium text-pretty'>
          お探しのページは見つかりませんでした。
        </p>
        <div className='mt-5 md:mt-10 flex items-center justify-center gap-x-6 text-xl md:text-2xl'>
          <Link href='/'>
            Go back home <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
