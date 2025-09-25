import React from 'react';
import { getProfile, getSkill } from '@/libs/microcms';
import ProfileContent from '@/components/Profile/Profile';
import SkillContent from '@/components/Skill/Skill';

export default async function Skill() {
  const skillsData = await getSkill();
  const [data] = skillsData.contents;
  const profileData = await getProfile();
  const [profile] = profileData.contents;

  return (
    <>
      <ProfileContent profile={profile} />
      <SkillContent skills={data} />
    </>
  );
}
