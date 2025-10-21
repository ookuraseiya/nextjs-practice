import React from 'react';
import { Skill } from '@/libs/microcms';
import SkillItem from '../SkillItem';

type Props = {
  skill: Skill;
};

export default async function SkillsContent({ skill }: Props) {
  const skillSections = [
    { key: 'language', content: skill.language },
    {
      key: 'libraryFramework',
      content: skill.libraryFramework,
    },
    { key: 'database', content: skill.database },
    { key: 'others', content: skill.others },
    {
      key: 'qualification',
      content: skill.qualification,
      colSpan: 2,
    },
  ];

  return (
    <div className='text-center py-3 md:py-6'>
      <h1 className='text-4xl md:text-5xl font-bold mb-2 md:mb-4'>Skill</h1>
      <p className='text-sm lg:text-xl font-bold mb-6 md:mb-11 text-subFontColor'>
        実際に業務で使用した年数を記述しています
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
        {skillSections.map(({ key, content, colSpan }) => (
          <SkillItem key={key} htmlContent={content} colSpan={colSpan} />
        ))}
      </div>
    </div>
  );
}
