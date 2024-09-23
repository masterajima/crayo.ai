import React from 'react';
import Link from 'next/link';
import { Card } from '@/shadcn/ui/card';
import Image from 'next/image';
const FunctionPage = () => {
  return (
    <div className='flex flex-col lg:items-start items-center justify-center lg:justify-start  bg-[#ffffff] md:p-[50px] md:w-full gap-4'>
      <div className='flex items-center justify-center rounded-full p-2 gap-3 bg-gradient-to-r from-[#dbf0ff] via-[#f6dfff] to-[#dfe2ff] border-[#ffffff80] w-2/3'>
        <div className='bg-[#000d49] rounded-full w-3 h-3'></div>
        <p className='md:text-[16px] text-sm font-[Inter] text-[#000d49]'>
          How it Works
        </p>
        <div className='bg-[#000d49] rounded-full w-3 h-3'></div>
      </div>
      <div className='flex flex-col md:items-start items-center md:justify-start justify-center md:w-1/2 mt-8'>
        <h2 className='lg:text-5xl text-3xl font-semibold text-[#000d49] md:text-start '>
          Ultimate ⭐ tool for Social Media growth
        </h2>
        <div className='flex flex-col lg:items-start items-center justify-center lg:justify-start  mt-4'>
          <p className='text-lg  text-[#000D49B3] lg:w-2/3 text-center'>
            Create unlimited shorts videos at once. Auto generate captions, effects,
            background and music.
          </p>
        </div>
      </div>
      <div className='flex flex-col lg:items-end items-center lg:justify-end justify-center gap-5'>
        <div className='flex flex-col items-end'>
          <div className='flex items-end justify-end gap-3'>
            <Link
              href='https://crayo.ai/dashboard'
              className='bg-[#dde6ff] flex items-center gap-2 p-2 rounded-3xl px-3'>
              <div className='w-[26px] h-[26px] z-1 rounded-full bg-white'>
                <svg
                  overflow='visible'
                  width='23'
                  height='23'
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
              <p className='text-[#000D49] lg:text-[14px] text-sm font-[Inter]'>
                Try Now
              </p>
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-6  lg:gap-8 gap-10 items-center justify-center '>
        <Card className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#f2f6ff] border-[#f2f6ff] rounded-3xl lg:p-8 p-4 relative'>
          <div className=' flex flex-col  border-[#e9f0ff] bg-[#f2f6ff]'>
            <div className='absolute  top-0 right-0'>
              <Image
                src='/assets/images/insta.avif'
                alt='insta'
                width={189}
                height={189}
                className='object-cover object-top-right'
              />
            </div>
          </div>

          <div className='flex flex-col items-start justify-strat gap-4 mt-[200px]'>
            <h3 className='text-[#000d49] lg:text-[17px] md:text-[21px] text-xl font-bold'>
              Instagram Reels
            </h3>

            <p className='text-[15px] text-[#000d4980] md:w-2/3'>
              Turn Instagram reels into exciting conetent by adding gameplay to keep
              viewers entertained.{' '}
            </p>
          </div>
        </Card>
        <Card className='flex flex-col items-start justify-start bg-[#f2f6ff] border-[#f2f6ff] rounded-3xl lg:p-8 p-4 relative'>
          <div className=' top-0 right-0 absolute'>
            <Image
              src='/assets/images/tiktok.avif'
              alt='insta'
              width={189}
              height={189}
              className='object-cover object-top-right'
            />
          </div>

          <div className='flex flex-col items-start gap-4 mt-[200px]'>
            <h3 className='text-[#000d49] lg:text-[17px] text-xl font-bold'>
              TikTok Videos
            </h3>

            <p className='lg:text-[15px] text-[#000d4980] md:w-2/3'>
              Use AI to make money from the CPB program by creating entertaining content
              using Crayo.
            </p>
          </div>
        </Card>
        <Card className='flex flex-col items-start justify-start bg-[#f2f6ff] border-[#f2f6ff] rounded-3xl lg:p-8 p-4 relative'>
          <div className=' top-0 right-0  absolute'>
            <Image
              src='/assets/images/cam.avif'
              alt='insta'
              width={189}
              height={189}
              className='object-cover object-top-right'
            />
          </div>

          <div className='flex flex-col items-start justify-start mt-[200px] gap-4'>
            <h3 className='text-[#000d49] text-[17px] font-bold'>Faceless Content</h3>

            <p className='lg:text-[15px] text-xl text-[#000d4980] lg:w-2/3'>
              Create a video using just a script and create captivating content.
            </p>
          </div>
        </Card>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-6 p-4 lg:gap-8 gap-10 items-center justify-center '>
        <Card className='flex flex-col items-start justify-start bg-[#f2f6ff] border-[#f2f6ff] rounded-3xl lg:p-8  relative '>
          <div className='absolute top-0 right-0 '>
            <Image
              src='/assets/images/reddit.avif'
              alt='insta'
              width={189}
              height={189}
              className='object-cover object-top-right'
            />
          </div>

          <div className='flex flex-col items-start justify-start mt-[200px] gap-4 '>
            <h3 className='text-[#000d49] lg:text-[17px] text-xl font-bold'>
              Reddit Stories
            </h3>

            <p className='text-[15px] text-[#000d4980] lg:w-2/3'>
              Use AI to take a Reddit story and turn it into an AI generated video.
            </p>
          </div>
        </Card>
        <Card className='flex flex-col bg-[#f2f6ff] border-[#f2f6ff] rounded-3xl lg:p-8 relative'>
          <div className='absolute top-0 right-0'>
            <Image
              src='/assets/images/youtube.avif'
              alt='insta'
              width={189}
              height={189}
              className='object-cover object-top-right'
            />
          </div>

          <div className='flex flex-col items-start justify-start mt-[200px] gap-4'>
            <h3 className='text-[#000d49] lg:text-[17px] text-xl font-bold'>
              YouTube Shorts
            </h3>

            <p className='text-[15px] text-[#000d4980] lg:w-2/3'>
              Turn Instagram reels into exciting content by adding game play to keep
              viewers entertained.
            </p>
          </div>
        </Card>

        <Card className='flex flex-col items-start justify-start bg-[#f2f6ff] border-[#f2f6ff] rounded-3xl lg:p-8 relative'>
          <div className='flex flex-col items-center justify-center'>
            <div className='absolute top-0 right-0'>
              <Image
                src='/assets/images/notes.avif'
                alt='insta'
                width={189}
                height={189}
                className='object-cover object-top-right'
              />
            </div>

            <div className='flex flex-col items-start justify-start mt-[200px] gap-4 '>
              <h3 className='text-[#000d49] lg:text-[17px] text-xl font-bold'>
                Instagram Reels
              </h3>

              <p className='text-[15px] text-[#000d4980] lg:w-2/3'>
                Turn Instagram reels into exciting content by adding gameplay to keep
                viewers entertained.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default FunctionPage;
