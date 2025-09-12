import React from 'react';
import { getSkill } from '@/libs/microcms';
import { formatRichText } from '@/libs/utils';

const SkillTable = ({
  htmlContent,
  colSpan = 1,
}: {
  htmlContent: string;
  colSpan?: number;
}) => {
  const htmlContainerStyle = `
              [&_h3]:text-2xl 
              [&_h3]:font-semibold
              [&_h3]:mb-4 
              [&_table]:w-full 
              [&_table]:border-collapse
              [&_tr]:w-full
              [&_th]:w-1/2
              [&_th]:text-xl
              [&_th]:font-bold
              [&_th]:py-2
              [&_td]:py-3
              [&_td]:px-5
            `;
  return (
    <div
      className={`bg-white rounded-lg py-6 ${
        colSpan === 2 ? 'md:col-span-2' : ''
      }`}
    >
      <div
        className={htmlContainerStyle}
        dangerouslySetInnerHTML={{ __html: formatRichText(htmlContent) }}
      />
    </div>
  );
};

export default async function Skills() {
  const skillsData = await getSkill(); // use clientで使用すると無限レンダリング起きる
  const [data] = skillsData.contents;

  const skillSections = [
    { key: 'language', content: data.language },
    {
      key: 'libraryFramework',
      content: data.libraryFramework,
    },
    { key: 'database', content: data.database },
    { key: 'others', content: data.others },
    {
      key: 'qualification',
      content: data.qualification,
      colSpan: 2,
    },
  ];

  return (
    <div className='container mx-auto p-6 text-center'>
      <h1 className='text-4xl font-bold mb-6'>Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
        {skillSections.map(({ key, content, colSpan }) => (
          <SkillTable key={key} htmlContent={content} colSpan={colSpan} />
        ))}
      </div>
    </div>
  );
}
