import React from 'react';
import Link from 'next/link';
import { Card } from '@/shadcn/ui/card';
import Image from 'next/image';
const FunctionPage = () => {
  return (
    <div className='flex flex-col items-start justify-start bg-[#ffffff] p-[50px] w-full gap-4'>
      <div className='flex items-start justify-start rounded-full p-2 gap-3 bg-gradient-to-r from-[#dbf0ff] via-[#f6dfff] to-[#dfe2ff] border-[#ffffff80]'>
        <div className='bg-[#000d49] rounded-full w-3 h-3'></div>
        <p className='text-[16px] font-[Inter] text-[#000d49]'>How it Works</p>
        <div className='bg-[#000d49] rounded-full w-3 h-3'></div>
      </div>
      <div className='flex flex-col lg:items-start lg:justify-start  w-1/2'>
        <h2 className='text-5xl font-semibold text-[#000d49]'>
          Ultimate tool for Social Media growth
        </h2>
        <p className='text-[15px] font-[Inter] text-[#000D49B3]'>
          Create unlimited shorts videos at once. Auto generate captions, effects,
          background and music.
        </p>
      </div>
      <div className='flex flex-col items-start gap-5'>
        <div className='flex flex-col items-stretch'>
          <div className='flex items-center gap-3'>
            <Link
              href='https://crayo.ai/dashboard'
              className='bg-[#dde6ff] flex items-center gap-2 p-2 rounded-3xl px-6'>
              <div className='w-[24px] h-[24px] z-1 rounded-full bg-white'>
                <svg
                  overflow='visible'
                  width='11'
                  height='11'
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
        <div className='flex items-center justify-center gap-2'>
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
      <div className='flex  items-start justify-start lg:p-6 gap-8 '>
        <Card className='flex flex-col items-start justify-start bg-[#f2f6ff] border-[#f2f6ff] rounded-3xl lg:p-8 '>
          <div className='relative flex flex-col  border-[#e9f0ff] bg-[#f2f6ff]'>
            <div className='absolute right-25 top-25 z-1 w-[189px]'>
              <div className='absolute inset-0 border-[#e9f0ff]'>
                <Image
                  src='/assets/images/insta.avif'
                  alt='insta'
                  width={189}
                  height={189}
                  className='object-cover object-top-right'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col items-start gap-4'>
            <h3 className='text-[#000d49] text-[17px] font-bold'>Instagram Reels</h3>

            <p className='text-[15px] text-[#000d4980] w-[378px]'>
              Turn Instagram reels into exciting conetent by adding gameplay to keep
              viewers entertained.{' '}
            </p>
          </div>
        </Card>
        <Card className='flex flex-col items-start justify-start bg-[#f2f6ff] border-[#f2f6ff] rounded-3xl lg:p-8 '>
          <div className=' top-0 right-0  border-[#e9f0ff]'>
            <Image
              src='/assets/images/tiktok.avif'
              alt='insta'
              width={189}
              height={189}
              className='object-cover object-top-right'
            />
          </div>

          <div className='flex flex-col items-start gap-4'>
            <h3 className='text-[#000d49] text-[17px] font-[Inter]'>Instagram Reels</h3>

            <p className='text-[15px] text-[#000d4980] w-[378px]'>
              Turn Instagram reels into exciting conetent by adding gameplay to keep
              viewers entertained.{' '}
            </p>
          </div>
        </Card>
        <Card className='flex flex-col items-start justify-start bg-[#f2f6ff] border-[#f2f6ff] rounded-3xl lg:p-8 '>
          <div className=' top-0 right-0  border-[#e9f0ff]'>
            <Image
              src='/assets/images/cam.avif'
              alt='insta'
              width={189}
              height={189}
              className='object-cover object-top-right'
            />
          </div>

          <div className='flex flex-col items-start gap-4'>
            <h3 className='text-[#000d49] text-[17px] font-[Inter]'>Instagram Reels</h3>

            <p className='text-[15px] text-[#000d4980] w-[378px]'>
              Turn Instagram reels into exciting conetent by adding gameplay to keep
              viewers entertained.{' '}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default FunctionPage;
