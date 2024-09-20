import { Card } from '@/shadcn/ui/card';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/shadcn/ui/button';

const ToolsPage = () => {
  return (
    <div className='flex flex-col items-center justify-between space-y-2 bg-gradient-to-b from-[#f0f7ff] to-white w-full px-4 py-3 text-center md:space-y-12 md:px-40 md:py-16 '>
      <div className='flex items-center gap-2 p-2 px-3 py-1 text-black place-items-center dark:text-white dark:bg-black bg-white bg-opacity-20 sm:px-4 rounded-full'>
        <Image
          src='/assets/images/bulb.png'
          alt='bulb'
          width={16}
          height={16}></Image>
        <span className='text-[#4D7FED] text-sm font-bold sm:text-base'>FEATURES</span>
      </div>
      <div className='flex flex-col items-center justify-center space-y-2 w-full px-4 md:px-20'>
        <h3 className='font-semibold text-gray-900 text-[32px] md:text-[48px] leading-[120%]'>
          Crayo has the tools to support any use-case for your short-form content.
        </h3>
      </div>
      <div className='flex align-center justify-center pt-10 relative'>
        <div className=' top-[7%] left-[0%] md:top-[8%] md:left-[15%] items-start rounded-xl space-y-2 bg-white text-start p-2.5 shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9f1fe] md:max-w-[275px] md:space-y-5 md:rounded-3xl  md:p-5'>
          <div className='aspect-[260/137]  w-full'>
            <Image
              src='/assets/images/video.png'
              alt='video'
              width={300}
              height={300}
              className='rounded-xl border border-slate-200 object-cover  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0'
            />
          </div>
          <div className='flex w-full justify-between items-center space-x-2 md:space-x-4'>
            <h6 className='text-[14px] max-w-[125px] leading-[125%] font-bold md:max-w-none md:text-[21px]'>
              Splitscreen video
            </h6>
            <Button className='rounded-full bg-[#4D7FED]/10 p-2 transition-all duration-200 hover:opacity-200'>
              <Image
                src='/assets/images/plusBlue.png'
                alt='plus'
                width={8}
                height={8}
                className='transition-transform'
              />
            </Button>
          </div>
        </div>
        <div className='absolute top-[-3%] left-[34%] md:top-[-1%] md:left-[-40%] z-10 max-w-[160px] space-y-2 rounded-xl bg-white items-start cursor-pointer p-2.5 text-start shadow-[o_13px_22px(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9F1FE] md:max-w-[275px] md:rounded-3xl md:p-5'>
          <div className='relative aspect-[260/137] w-full'>
            <Image
              src='/assets/images/fake-text.png'
              alt='fake '
              width={300}
              height={300}
              className='rounded-xl border border-slate-200 object-cover'
            />
          </div>
          <div className='flex w-full items-center justify-between space-x-2 md:space-x-4'>
            <h6 className='max-w-[125px] font-bold text-[14px] leading-[110%] md:max-w-none'>
              Fake Texts video
            </h6>
            <Button className='rounded-full  bg-[#4D7FED]/10 p-2 transition-all duration-200 hover:opacity-70'>
              <Image
                src='/assets/images/plusBlue.png'
                alt='plus'
                width={8}
                height={8}
                className='transition-transform'
              />
            </Button>
          </div>
        </div>
        <div className='absolute top-[13%] right-[5%] md:right-[15%] md:top-[8%] z-10 max-w-[160px] space-y-2 cursor-pointer items-start rounded-xl bg-white p-2.5 shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 md:max-w-[275px] md:space-y-5 md:rounded-3xl md:p-5'>
          <div className='relative w-full aspect-[260/137]'>
            <Image
              src='/assets/images/avatar.png'
              alt='avtar'
              width={300}
              height={300}
              className='object-cover rounded-xl border border-slate-200'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
