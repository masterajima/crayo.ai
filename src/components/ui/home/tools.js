import { Card } from '@/shadcn/ui/card';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import FeatureCase from '@/components/feature-case';
import ToolCard from '@/components/tool-card';

const ToolsPage = ({
  title = 'Features',
  subtitle = 'Crayo has the tools to support any use-case for your short-form content.',
  centerText = 'Use countless viral-tested B-roll, overlays, fonts & more',
  ctaLink = 'https://crayo.ai/dashboard',
  ctaText = 'Try all Features',
  features = [
    {
      image: '/assets/images/features-video.png',
      title: 'Splitscreen video',
      position: 'top-[7%] left-[0%] md:top-[8%] md:left-[15%]',
    },
    {
      image: '/assets/images/features-fake-text.png',
      title: 'Fake Texts video',
      position: 'top-[-3%] left-[34%] md:top-[-1%] md:left-[40%]',
    },
  ],
}) => {
  return (
    <div className='flex flex-col items-center justify-between space-y-8 bg-gradient-to-b from-[F0F7FF] to-white px-4 py-3 text-center md:space-y-12 md:px-14 md:py-16'>
      <div className='relative w-fit place-items-center text-center text-black dark:bg-black inline-flex items-center dark:text-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 bg-white bg-opacity-20'>
        <Image
          src='/assets/images/Lightbulb.png'
          alt='bulb'
          width={16}
          height={16}
          className='mr-2'
        />
        <span className='text-sm font-bold sm:text-base'>{title}</span>
      </div>
      <div className='flex flex-col w-full space-y-2 px-4 md:px-20 md:space-y-4'>
        <h3 className='text-[32px] leading-[120%] md:text-[48px] font-bold md:w-2/3 md:text-center md:mx-auto'>
          {subtitle}
        </h3>
      </div>
      <div className='align-center relative flex w-full items-center justify-center pt-10'>
        {features.map((feature, index) => (
          <ToolCard
            key={index}
            {...feature}></ToolCard>
        ))}
        <div className='p-18 align-center flex h-[350px] w-[350px] items-center flex-row justify-center rounded-full md:h-[750px] md:w-[750px]'>
          <div className='md:p-18 align-center flex h-[275px] w-[275px] rounded-full p-4 bg-[#4d7fed26] md:h-[600px] md:w-[600px] '>
            <div className='text-[21px] font-bold md:text-[32px] '>
              <span className='relative inline-block'>
                <strong>{centerText}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link href={ctaLink}></Link>
      <button
        className=' inline-flex items-center justify-center rounded-2xl text-lg
      font-semibold ring-offset-background focus-visible:outline-none transition-colors
      focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50 px-6 py-4 bg-primary bg-black text-white
      text-primary'>
        {ctaText}
      </button>
    </div>
  );
};

export default ToolsPage;
