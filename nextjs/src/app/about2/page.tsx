import Image from 'next/image';

type Profile = {
  profileImage: {
    url: string;
    width: number;
    height: number;
  };
  greetingStatement: string;
  career: string;
};

const jsonData = {
  contents: [
    {
      id: 'wyd-pc_nk',
      profileImage: {
        url: 'https://images.microcms-assets.io/assets/4a6e17fe58a0421293b8ab1e269b0cf1/1fc288517b4e441ea3351cce35422290/Image.jpg',
        height: 372,
        width: 496,
      },
      greetingStatement:
        '初めまして大倉聖也と言います。大阪にある情報系の大学を2024年2月に卒業後は東京にある受託開発をメインに行っているIT企業に勤めています。現在はスマホアプリと社内ツールの開発に携わっています。個人ではNext.jsとTypeScriptをよく触っています。',
      career: `主な経歴：
              ・2021/02 ~ 2023/06：
                Web系のスタートアップ企業でインターン（アルバイト）入社。主にWeb制作・開発や社内システム開発に携わった。
              ・2022/06 ~ 2024/03：
                中小IT企業でインターン（アルバイト）入社。主にWeb制作・開発や社内システム開発に携わった。
              ・2024/04 ~ 2025/09（今現在）：
                東京にあるIT企業で新卒入社。主にスマホアプリ・社内ツール開発に携わっている。`,
    },
  ],
};

export default function AboutPage() {
  const profile: Profile = {
    profileImage: jsonData.contents[0].profileImage,
    greetingStatement: jsonData.contents[0].greetingStatement,
    career: jsonData.contents[0].career,
  };
  return (
    <section className='container mx-auto py-6'>
      <h2 className='text-4xl md:text-5xl font-bold text-center mb-6 md:mb-11'>
        About
      </h2>
      <div className='flex flex-col md:flex-row items-center gap-10'>
        <div className='flex-shrink-0'>
          <Image
            src={profile.profileImage.url}
            alt='プロフィール画像'
            width={400}
            height={400}
            className='rounded-full w-40 lg:w-60 h-40 lg:h-60 object-cover'
          />
        </div>
        <div className='text-sm lg:text-xl leading-relaxed whitespace-pre-line'>
          <p className='mb-6'>{profile.greetingStatement}</p>
          <p>{profile.career}</p>
        </div>
      </div>
    </section>
  );
}
