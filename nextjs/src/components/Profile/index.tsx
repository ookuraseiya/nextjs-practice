import Image from 'next/image';
import { Profile } from '@/libs/microcms';

type Props = {
  profile: Profile;
};

export default function ProfileContent({ profile }: Props) {
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
