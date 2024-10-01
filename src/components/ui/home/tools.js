import { Card } from '@/shadcn/ui/card';
import { Image } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import FeatureCase from '@/components/feature-case';

const ToolsPage = () => {
  return (
    <div className='flex flex-col items-center justify-between space-y-8 bg-gradient-to-b from-[F0F7FF] to-white px-4 py-3 text-center md:space-y-12 md:px-14 md:py-16'>
      <div className='relative w-fit place-items-center text-center text-black dark:bg-black inline-flex items-center dark:text-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 bg-white bg-opacity-20'>
        <Image
          src='assets/images/Lightbulb.png'
          alt=''
          width={16}
          height={16}
          className='mr-2'
        />
        <span className='text-sm font-bold sm:text-base'>Features</span>
      </div>
      <div className='flex flex-col w-full space-y-2 px-4 md:px-20 md:space-y-4'>
        <h3 className='text-[32px] leading-[120%] md:text-[48px]'>
          Crayo has the tools to support any use-case for your short-form content.
        </h3>
      </div>
      <div className='align-center relative flex w-full items-center justify-center pt-10'>
        <div className='absolute top-[7%] left-[0%] md:top-[8%] md:left-[15%] max-w-[160px] z-10 cursor-pointer items-start rounded-xl bg-white space-y-2 p-2.5 text-start shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9F1FE] md:max-w-[275px] md:space-y-5 md:rounded-3xl md:p-5'>
          <div className='relative aspect-[260/137] w-full'>
            <Image
              src='/assets/images/features-video.png'
              alt=''
              width={300}
              height={300}
              className='rounded-xl w-full border border-slate-200 object-cover'
            />
          </div>
          <div className='flex items-center justify-between w-full space-x-2 md:space-x-4'>
            <h6 className='max-w-[125px] font-bold text-[14px] leading-[110%] md:tex'>
              Splitscreen video
            </h6>
            <button className='rounded-full p-2 transition-all duration-200 hover:opacity-70'>
              <Image
                src='/assets/images/plusBlue.png'
                width={8}
                height={8}
                alt='button'
                className='transition-transform duration-300'></Image>
            </button>
          </div>
        </div>
        <div className=''></div>
      </div>
    </div>
  );
};

export default ToolsPage;
