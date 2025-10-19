import React from 'react';
import { formatRichText } from '@/libs/utils';

type Props = {
  htmlContent: string;
  colSpan?: number;
};

export default function SkillItem({ htmlContent, colSpan = 1 }: Props) {
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
}
