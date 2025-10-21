import React from 'react';
import { getProfile, getSkill } from '@/libs/microcms';
import ProfileContent from '@/components/Profile';
import SkillContent from '@/components/Skill';

export default async function Page() {
  const skillData = await getSkill();
  const [skill] = skillData.contents;
  const profileData = await getProfile();
  const [profile] = profileData.contents;

  return (
    <>
      <ProfileContent profile={profile} />
      <SkillContent skill={skill} />
    </>
  );
}
