import React from 'react';
import { Card } from '@/shadcn/ui/card';
import CardComponent from '@/components/card';
import StoryTopicInput from '@/components/story-topic';
import StoryTone from '@/components/story-tone';
import MaxWordAInput from '@/components/max-word';
import GenrateScript from '@/components/genrate-script';
import Image from 'next/image';

const FeaturesPage = ({ number, title, imageSrc,description }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-4 items-center md:items-start justify-center md:justify-start lg:p-12 md:p-8  w-full'>
    
      <CardComponent className='md:w-[30%]'>
        <div className='flex flex-row space-x-2.5 px-5 pt-5'>
          <div className='relative h-8 w-8 flex items-center justify-center rounded-full border border-slate-300 bg-slate-200 bg-opacity-20 '>
            <p className='text-sm text-blue-300'>2</p>
          </div>
          <p className='text-md font-bold text-[21px] md:text-lg'>Customize and style</p>
        </div>
        <Image
          src='/assets/images/stepTwo.png'
          alt='step'
          width={1000}
          height={222}
          className='w-full'
        />
        <div className='p-7'>
          <p className='text-md font-medium text-center text-sm leading-[130%] md:text-[18px]'>
            Select background video, voice and a music from free templates.
          </p>
        </div>
      </CardComponent>
      <CardComponent className='md:w-[30%] '>
        <div className='flex space-x-2.5 px-5 pt-5'>
          <div className='relative w-8 h-8 flex items-center justify-center rounded-full bg-opacity-20 bg-slate-200 before:absolute '>
            <p className='text-md text-blue-300 text-[21px] md:text-lg font-bold'>3</p>
          </div>
          <p className='font-bold text-md md:text-lg'>Finish & Export</p>
        </div>
        <Image
          src='/assets/images/step.png'
          alt='step'
          width='1000'
          height='222'
          className='w-full '
        />
        <div className='p-7'>
          <p className='text-md font-medium text-center text-sm leading-[110%] md:text-[18px]'>
            Choose export format and download generated videos, script or narration.
          </p>
        </div>
      </CardComponent>
    </div>
  );
};

export default FeaturesPage;
