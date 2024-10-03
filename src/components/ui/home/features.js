import React from 'react';
import { Card } from '@/shadcn/ui/card';
import CardComponent from '@/components/card';
import StoryTopicInput from '@/components/story-topic';
import StoryTone from '@/components/story-tone';
import MaxWordAInput from '@/components/max-word';
import GenrateScript from '@/components/genrate-script';
import Image from 'next/image';
import FeatureCard from '@/components/feature-card';

const FeaturesPage = () => {
  const features = [
    {
      number: '1',
      title: 'Write and outline',
      imageSrc: '/assets/images/stepOne.png',
      description:
        'Start with writing script using a prompt or using template suggestions.',
    },
    {
      number: '2',
      title: 'Customize and style',
      imageSrc: '/assets/images/stepTwo.png',
      description: 'Select background video, voice and a music from free templates.',
    },
    {
      number: '3',
      title: 'Finish & Export',
      imageSrc: '/assets/images/step.png',
      description:
        'Choose export format and download generated videos, script or narration.',
    },
  ];
  return (
    <div className='flex flex-col lg:flex-row gap-4 items-center md:items-start justify-center md:justify-start lg:p-12 md:p-8  w-full'>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          {...feature}></FeatureCard>
      ))}
    </div>
  );
};

export default FeaturesPage;
