import { Card } from '@/shadcn/ui/card';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import FeatureCase from '@/components/feature-case';

const ToolsPage = () => {
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
        <span className='text-sm font-bold sm:text-base'>Features</span>
      </div>
      <div className='flex flex-col w-full space-y-2 px-4 md:px-20 md:space-y-4'>
        <h3 className='text-[32px] leading-[120%] md:text-[48px] font-bold md:w-2/3 md:text-center md:mx-auto'>
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
            <h6 className='max-w-[125px] font-bold text-[14px] leading-[110%] md:tex-[21px]'>
              Splitscreen video
            </h6>
            <button className='rounded-full p-2 transition-all duration-200 hover:opacity-70'>
              <Image
                src='/assets/images/plusBlue.png'
                width={8}
                height={8}
                alt='button'
                className='transition-transform duration-300'
              />
            </button>
          </div>
        </div>
        <div className='absolute top-[-3%] left-[34%] md:top-[-1%] md:left-[40%] z-10 max-w-[160px] cursor-pointer items-start  rounded-xl bg-white space-y-2 p-2.5 text-start shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9F1FE] md:max-w-[275px] md:space-y-5 md:rounded-3xl md:p-5'>
          <div className='relative aspect-[260/137] w-full'>
            <Image
              src='/assets/images/features-fake-text.png'
              alt='fake'
              width={300}
              height={300}
              className='rounded-xl border border-slate-200 w-full object-cover'
            />
          </div>
          <div className='flex w-full items-center justify-between space-x-2 md:space-x-4'>
            <h6 className='max-w-[125px] font-bold text-[14px] leading-[110%] md:tex-[21px]'>
              Fake Texts video
            </h6>
            <button className='rounded-full p-2 transition-all duration-200 hover:opacity-70'>
              <Image
                src='/assets/images/plusBlue.png'
                width={8}
                height={8}
                alt='button'
                className='transition-transform duration-300'
              />
            </button>
          </div>
        </div>
        <div className='absolute top-[13%] right-[5%] md:top-[8%] md:right-[15%] z-10 max-w-[160px] cursor-pointer items-start rounded-xl bg-white space-y-2 p-2.5 text-start shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9F1FE] md:max-w-[275px] md:space-y-5 md:rounded-3xl md:p-5'>
          <div className='relative aspect-[260/137] w-full'>
            <Image
              src='/assets/images/features-avatar.png'
              alt='avatar'
              width={300}
              height={300}
              className='rounded-xl border border-slate-200 object-cover'
            />
          </div>
          <div className='flex flex-row items-center justify-between space-x-2 md:space-x-4'>
            <h6 className='max-w-[125px] font-bold text-[14px] leading-[110%] md:tex-[21px]'>
              AI avatars
            </h6>
            <button className='rounded-full p-2 transition-all duration-200 hover:opacity-70'>
              <Image
                src='/assets/images/plusBlue.png'
                width={8}
                height={8}
                alt='button'
                className='transition-transform duration-300'
              />
            </button>
          </div>
        </div>
        <div className='absolute bottom-[-3%] left-[3%] md:bottom-[4%] md:left-[20%] z-10 max-w-[160px] cursor-pointer items-start rounded-xl bg-white space-y-2 p-2.5 text-start shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9F1FE] md:max-w-[275px] md:space-y-5 md:rounded-3xl md:p-5'>
          <div className='relative w-full aspect-[260/137]'>
            <Image
              src='/assets/images/features-downloader.png'
              alt='downloader'
              width={300}
              height={300}
              className='rounded-xl object-cover border border-slate-200'
            />
          </div>
          <div className='flex flex-row items-center justify-between space-x-2 md:space-x-4'>
            <h6 className='max-w-[125px] font-bold text-[14px] leading-[110%] md:tex-[21px]'>
              AI avatars
            </h6>
            <button className='rounded-full p-2 transition-all duration-200 hover:opacity-70'>
              <Image
                src='/assets/images/plusBlue.png'
                width={8}
                height={8}
                alt='button'
                className='transition-transform duration-300'
              />
            </button>
          </div>
        </div>
        <div className='absolute bottom-[-2%] right-[3%] md:bottom-[4%] md:right-[20%] z-10 max-w-[160px] cursor-pointer items-start rounded-xl bg-white space-y-2 p-2.5 text-start shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9F1FE] md:max-w-[275px] md:space-y-5 md:rounded-3xl md:p-5'>
          <div className='relative w-full aspect-[260/137]'>
            <Image
              src='/assets/images/features-voiceover.png'
              alt='voiceover'
              width={300}
              height={300}
              className='rounded-xl border border-slate-200 bg-cover'
            />
          </div>
          <div className='flex w-full flex-row items-center justify-between space-x-2 md:space-x-4'>
            <h6 className='max-w-[125px] font-bold text-[14px] leading-[110%] md:tex-[21px]'>
              Voiceover story
            </h6>
            <button className='rounded-full p-2 transition-all duration-200 hover:opacity-70'>
              <Image
                src='/assets/images/plusBlue.png'
                width={8}
                height={8}
                alt='button'
                className='transition-transform duration-300'
              />
            </button>
          </div>
        </div>
        <div className='p-18 align-center flex h-[350px] w-[350px] items-center flex-row justify-center rounded-full md:h-[750px] md:w-[750px]'>
          <div className='md:p-18 align-center flex h-[275px] w-[275px] rounded-full p-4 bg-[#4d7fed26] md:h-[600px] md:w-[600px] '>
            <div className='text-[21px] font-bold md:text-[32px] '>
              <span className='relative inline-block'>
                <strong>
                  Use countless viral-tested B-roll, overlays, fonts & more
                </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link href='https://crayo.ai/dashboard'></Link>
      <button
        className=' inline-flex items-center justify-center rounded-2xl text-lg
      font-semibold ring-offset-background focus-visible:outline-none transition-colors
      focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50 px-6 py-4 bg-primary bg-black text-white
      text-primary'>
        Try all Features
      </button>
    </div>
  );
};

export default ToolsPage;
