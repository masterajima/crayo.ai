import React from 'react';
import { Card } from '@/shadcn/ui/card';
import CardComponent from '@/components/card';
import StoryTopicInput from '@/components/story-topic';
import StoryTone from '@/components/story-tone';
import MaxWordAInput from '@/components/max-word';
import GenrateScript from '@/components/genrate-script';

const FeaturesPage = () => {
  const storyTopics = ['Clockwork Detective', 'Garden of Whispers', 'Mystory Manor'];
  const storyTone = ['Funny', 'Mystory', 'Horror'];
  return (
    <div className='flex flex-col items-center md:items-start justify-center md:justify-start lg:p-12 md:p-8  w-full'>
      <CardComponent className='md:w-[30%]'>
        <div className='flex flex-col w-full h-[480px] lg:items-start '>
          <div className='flex flex-col items-start justify-start  gap-4 lg:px-3 mt-6'>
            <p className='lg:text-[11.6px] text-sm font-semibold  text-[#000d49] w-full'>
              Enter your story topic
            </p>
            <StoryTopicInput topics={storyTopics} />
            <div className='flex flex-col items-start justify-start'>
              <div className='flex p-2 border-[#e9f0ff] '>
                <div className='flex flex-col'>
                  <p className='text-[#000d49] font-normal text-[11.6px]'>
                    Select Story Tone
                  </p>
                </div>
              </div>

              <StoryTone tones={storyTone} />
              <div className='flex flex-col items-start mt-6'>
                <p className='text-[#000d49] text-[11.6px]'>Max Words</p>
              </div>
              <MaxWordAInput />
              <GenrateScript />
              <div className='flex flex-col items-start justify-start'>
                <p className='text-[18px] text-[#000d49]'>1-</p>
                <h3 className='text-[#000d49] text-[17px] font-bold'>
                  Write and Outline
                </h3>
                <p className='text-[15px] text-[#000d49] w-1/2 text-sm text-start'>
                  Start with writing script using a prompt or using template suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
};

export default FeaturesPage;
