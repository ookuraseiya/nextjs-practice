import AdBox from '@/components/AdBox';
import RecommendedArticles from '@/components/RecommendedArticles';
import RelatedArticles from '@/components/RelatedArticles';
import Toc from '@/components/Toc';
import { DUMMY_ARTICLE_DATA } from '@/constants';
import { getArticleDetail } from '@/libs/microcms';
import { formatDate, formatRichText } from '@/libs/utils';
import Image from 'next/image';

const htmlContentStyle = `
  w-full
  
  /* 見出し */
  [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:border-b [&>h1]:border-gray-300 [&>h1]:my-7 [&>h1]:mb-4
  [&>h2]:text-xl [&>h2]:font-bold [&>h2]:my-7 [&>h2]:mb-4
  [&>h3]:text-lg [&>h3]:font-bold [&>h3]:my-7 [&>h3]:mb-4
  [&>h4]:text-base [&>h4]:font-bold [&>h4]:my-7 [&>h4]:mb-4
  [&>h5]:text-sm [&>h5]:font-bold [&>h5]:my-7 [&>h5]:mb-4

  /* 段落 */
  [&>p]:my-3 [&>p]:leading-8

  /* コードブロック */
  [&>pre]:overflow-x-scroll 
  [&>pre>code]:block [&>pre>code]:overflow-x-auto [&>pre>code]:p-4
  [&_div_pre]:bg-[#282a36] [&_div_pre]:text-[#f8f8f2] [&_div_pre]:p-2 [&_div_pre]:w-full [&_div_pre]:overflow-x-scroll [&_div_pre]:text-[0.9rem]

  /* ファイル名付きコードブロック */
  [&_div[data-filename]::before]:content-[attr(data-filename)]
  [&_div[data-filename]::before]:bg-[#282a36]
  [&_div[data-filename]::before]:text-white
  [&_div[data-filename]::before]:text-[0.8rem]
  [&_div[data-filename]::before]:font-mono
  [&_div[data-filename]::before]:px-4
  [&_div[data-filename]::before]:py-1
  [&_div[data-filename]::before]:rounded-t-md
  [&_div[data-filename]::before]:inline-block
  [&_div[data-filename]::before]:mt-4
  [&_div[data-filename]::before]:mb-0

  /* リスト */
  [&_ul]:my-2 [&_ul]:ml-8 [&_ul]:list-disc
  [&_ol]:my-2 [&_ol]:ml-8 [&_ol]:list-decimal
  [&_li]:my-1

  /* リンク */
  [&_a]:underline [&_a]:break-all

  /* 画像 */
  [&>figure>img]:max-w-full [&>figure>img]:h-auto [&>figure>img]:my-4

  /* 引用 */
  [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-8

  /* 区切り線 */
  [&>hr]:my-16 [&>hr]:h-px [&>hr]:bg-gray-300 [&>hr]:border-0

  /* テーブル */
  [&>table]:w-full [&>table]:my-8 [&>th]:bg-gray-100 [&>th]:text-left [&>th]:p-4 [&>td]:text-left [&>td]:p-4
`;

export default async function Page({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  // const { articleId } = await params;
  // const article = await getArticleDetail(articleId);
  // const { title, tags, eyecatch, content, createdAt, updatedAt } = article;
  const { title, tags, eyecatch, content, createdAt, updatedAt } =
    DUMMY_ARTICLE_DATA;
  return (
    <main className='py-3 md:py-6'>
      <div className='flex gap-8 justify-between'>
        <article className='w-full lg:w-3/4 rounded-lg p-6 bg-white'>
          <h1 className='text-xl md:text-3xl font-bold mb-4'>{title}</h1>
          <p className='flex flex-wrap gap-2 mb-2'>
            {tags.map(({ id, name }) => (
              <span
                key={id}
                className='px-3 py-1 bg-white rounded-full text-sm border border-gray-200'
              >
                {name}
              </span>
            ))}
          </p>

          <p className='text-sm mb-2'>投稿日：{formatDate(createdAt)}</p>
          <p className='text-sm mb-2'>更新日：{formatDate(updatedAt)}</p>

          <div className='overflow-hidden rounded-md border border-gray-300 mb-6'>
            <Image
              src={eyecatch.url}
              alt={title}
              width={eyecatch.width}
              height={eyecatch.height}
              className='w-full h-auto object-cover'
            />
          </div>

          <div
            className={htmlContentStyle}
            dangerouslySetInnerHTML={{ __html: formatRichText(content) }}
          />
        </article>

        <aside className='hidden lg:block w-1/4 space-y-8'>
          <AdBox />
          {/* <div className='sticky top-[20vh]'> */}
          <Toc content={content} />
          {/* </div> */}
        </aside>
      </div>
      <RecommendedArticles />
      <RelatedArticles />
    </main>
  );
}
