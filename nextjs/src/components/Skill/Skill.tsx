import React from 'react';
import { formatRichText } from '@/libs/utils';
import { Skill } from '@/libs/microcms';

const SkillItem = ({
  htmlContent,
  colSpan = 1,
}: {
  htmlContent: string;
  colSpan?: number;
}) => {
  const htmlContentStyle = `
              [&_h3]:text-xl 
              [&_h3]:lg:text-2xl
              [&_h3]:font-semibold
              [&_h3]:mb-4
              [&_table]:w-full 
              [&_table]:border-collapse
              [&_tr]:w-full
              [&_th]:w-1/2
              [&_th]:text-base
              [&_th]:lg:text-xl
              [&_th]:font-bold
              [&_th]:py-2
              [&_td]:py-3
              [&_td]:text-sm
              [&_td]:lg:text-base
            `;
  return (
    <div
      className={`bg-white rounded-lg p-5 ${
        colSpan === 2 ? 'md:col-span-2' : ''
      }`}
    >
      <div
        className={htmlContentStyle}
        dangerouslySetInnerHTML={{ __html: formatRichText(htmlContent) }}
      />
    </div>
  );
};

type Props = {
  skills: Skill;
};

export default async function SkillContent({ skills }: Props) {
  const skillSections = [
    { key: 'language', content: skills.language },
    {
      key: 'libraryFramework',
      content: skills.libraryFramework,
    },
    { key: 'database', content: skills.database },
    { key: 'others', content: skills.others },
    {
      key: 'qualification',
      content: skills.qualification,
      colSpan: 2,
    },
  ];

  return (
    <div className='container mx-auto py-6 text-center'>
      <h1 className='text-4xl md:text-5xl font-bold mb-6 md:mb-11'>Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
        {skillSections.map(({ key, content, colSpan }) => (
          <SkillItem key={key} htmlContent={content} colSpan={colSpan} />
        ))}
      </div>
    </div>
  );
}
