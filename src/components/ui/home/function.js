import React from 'react';
import Link from 'next/link';
import { Card } from '@/shadcn/ui/card';
import Image from 'next/image';
import FeatureCard from '@/components/feature-card';
const FunctionPage = () => {
  const features = [
    {
      imageSrc: '/assets/images/insta.avif',
      title: 'Instagram Reels',
      description:
        'Turn Instagram reels into exciting content by adding game play to keep viewers entertained.',
    },
    {
      imageSrc: '/assets/images/tiktok.avif',
      title: 'TikTok Videos',
      description:
        'Use AI to make money from the CPB program by creating entertaining content using Crayo.',
    },
    {
      imageSrc: '/assets/images/cam.avif',
      title: 'Faceless Content',
      description: 'Create a video using just a script and create captivating content.',
    },
    {
      imageSrc: '/assets/images/reddit.avif',
      title: 'Reddit Stories',
      description:
        'Use AI to take a Reddit story and turn it into an AI generated video.',
    },
    {
      imageSrc: '/assets/images/youtube.avif',
      title: 'YouTube Shorts',
      description:
        'Turn Instagram reels into exciting content by adding gameplay to keep viewers entertained.',
    },
    {
      imageSrc: '/assets/images/notes.avif',
      title: 'Instagram Reels',
      description:
        'Turn Instagram reels into exciting content by adding gameplay to keep viewers entertained.',
    },
  ];
  return (
    <div className='flex flex-col items-start justify-start bg-[#ffffff] md:p-[50px] w-full gap-4'>
      <div className='flex items-start justify-start rounded-full p-2 gap-3 bg-gradient-to-r from-[#dbf0ff] via-[#f6dfff] to-[#dfe2ff] border-[#ffffff80]'>
        <div className='bg-[#000d49] rounded-full w-3 h-3'></div>
        <p className='text-[16px] font-[Inter] text-[#000d49]'>How it Works</p>
        <div className='bg-[#000d49] rounded-full w-3 h-3'></div>
      </div>
      <div className='flex flex-col md:items-start md:justify-start items-center justify-center  md:w-1/2'>
        <h2 className='md:text-5xl text-2xl font-semibold text-[#000d49] text-start'>
          Ultimate ⭐ tool for Social Media growth
        </h2>
        <div className='flex flex-col md:items-start md:justify-start items-center justify-center mt-4'>
          <p className='md:text-lg text-sm text-[#000D49B3] md:w-2/3 w-full'>
            Create unlimited shorts videos at once. Auto generate captions, effects,
            background and music.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-end justify-end gap-5'>
        <div className='flex flex-col items-end'>
          <div className='flex items-end justify-end gap-3'>
            <Link
              href='https://crayo.ai/dashboard'
              className='bg-[#dde6ff] flex items-center gap-2 p-2 rounded-3xl px-6'>
              <div className='w-[20px] h-[20px] z-1 rounded-full bg-white'>
                <svg
                  overflow='visible'
                  width='15'
                  height='15'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  {' '}
                  <path
                    stroke-linejoin='miter'
                    stroke='var(--token-9d8c7f4b-b2a9-4034-9daa-4796a213ec8e, rgb(0, 13, 73))'
                    d='M13.5 5L20.5 12L13.5 19M3.5 12L20 12'
                    stroke-width='2'></path>{' '}
                </svg>
              </div>
              <p className='text-[#000D49] text-[14px] font-[Inter]'>Try Now</p>
            </Link>
          </div>
        </div>
        <div className='flex items-end justify-end gap-2'>
          <div className='w-[16px] h-[17px] mx-auto'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-exclamation-circle'
              width='22'
              height='22'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#2c3e50'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'>
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
              <path d='M12 9v4' />
              <path d='M12 16v.01' />
            </svg>
          </div>
          <p className='text-[#000d4980] text-[12px] font-[Inter]'>
            Connect with creatives.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8  '>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}></FeatureCard>
        ))}
      </div>
    </div>
  );
};
export default FunctionPage;
