import { Card } from '@/shadcn/ui/card';
import { Image } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const ToolsPage = () => {
  return (
    <div className='flex flex-col items-center justify-center p-12  w-full'>
      <Card className='flex flex-col items-center justify-center rounded-3xl border-gray-800  bg-gray-900 p-18 w-full h-full'>
        <div className='flex flex-col items-center justify-center mt-8'>
          <Link
            href='/'
            className='flex bg-[#ffffff0f] items-center justify-center p-2 rounded-full px-3 border-white'>
            <div className='flex items-center p-2 rounded-lg px-6 py-2 gap-8 border-white'>
              <div className='w-3 h-3 rounded-full text-white bg-white'></div>
              <p className='text-white'>Features</p>
              <div className='w-3 h-3 rounded-full text-white bg-white'></div>
            </div>
          </Link>
          <div className=' gap-4 flex flex-col items-center mt-8'>
            <h2 className='w-[350px] text-[35px] font-semibold text-white'>
              All in one tool for{' '}
              <span className='text-white text-[35px]'>viral Shorts using AI</span>
            </h2>
            <p className='text-[15px] text-white'>
              Create unlimited shorts videos at once. Auto generate captions, effects,
              background &amp; music.
            </p>
          </div>
          <div className='flex flex-wrap gap-10 mt-6'>
            <div className='flex items-center justify-center gap-4'>
              <Link
                href='https://crayo.ai/dashboard'
                className='bg-[#ffffff0f] flex items-center gap-2 px-6 rounded-full p-2'>
                <div className='flex  items-center '>
                  <div className='flex flex-col items-center'>
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
                        stroke='var(--token-10a952ba-a5c3-4aa6-9d31-a877066a81ee, rgb(255, 255, 255))'
                        d='M13.5 5L20.5 12L13.5 19M3.5 12L20 12'
                        stroke-width='2'></path>{' '}
                    </svg>
                  </div>
                </div>
                <div className='flex z-2 items-center justify-center'>
                  <p className='text-white'>Try Now</p>
                </div>
              </Link>
              <Link
                href='https://crayo.ai/dashboard'
                className='bg-[#ffffff0f] flex items-center gap-2 px-6 rounded-full p-2'>
                <div className='flex  items-center '>
                  <div className='flex flex-col items-center'>
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
                        stroke='var(--token-10a952ba-a5c3-4aa6-9d31-a877066a81ee, rgb(255, 255, 255))'
                        d='M13.5 5L20.5 12L13.5 19M3.5 12L20 12'
                        stroke-width='2'></path>{' '}
                    </svg>
                  </div>
                </div>
                <div className='flex z-2 items-center justify-center'>
                  <p className='text-white'>Try Now</p>
                </div>
              </Link>
            </div>
          </div>
          <Card className='flex  items-center justify-center rounded-3xl bg-[#ffffff0f] border-[#e9f0ff1a] h-[540px]  w-2/3 mt-8 gap-12 mb-8'>
            <div className='flex flex-col items-start'>
              <div className='flex itmems-start p-2 rounded-full px-3 gap-2 bg-[#e9f0ff0a] border-[#9ab6ff] border-2 rotate-[-0.0522561rad] -translate-x-1/2 -translate-y-1/2 mb-4'>
                <div className='h-[33px] w-[33px]'>
                  <div className='w-full h-full  '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='icon icon-tabler icon-tabler-music'
                      width='33'
                      height='33'
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
                      <path d='M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
                      <path d='M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
                      <path d='M9 17v-13h10v13' />
                      <path d='M9 8h10' />
                    </svg>
                  </div>
                </div>

                <span className='text-white text-lg font-[Inter] tracking-tight'>
                  Popular Music
                </span>
              </div>

              <div className='flex items-center p-2 rounded-full px-3 gap-2 bg-[#9ab7ff1a] border-[#9ab6ff] -translate-x-1/2 -translate-y-1/2 rotate-[-0.0522561rad]'>
                <div className='h-[24px] w-[24px]'>
                  <div className='w-full h-full  bg-white'>
                    <svg style={{ width: '7', height: '7' }}>
                      <use href='#svg1124643241'></use>
                    </svg>
                  </div>
                </div>
                <span className='text-white text-lg font-[Inter] tracking-tight'>
                  Voice Narrator
                </span>
              </div>

              <div className='flex items-center p-2 rounded-full px-3 gap-2 bg-[#9ab7ff1a] border-[#9ab6ff] -translate-x-1/2 -translate-y-1/2 rotate-[-0.0522561rad]'>
                <div className='h-[24px] w-[24px]'>
                  <div className='w-full h-full  bg-white'>
                    <svg style={{ width: '7', height: '7' }}>
                      <use href='#svg1124643241'></use>
                    </svg>
                  </div>
                </div>
                <span className='text-white text-lg font-[Inter] tracking-tight'>
                  Background Video
                </span>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default ToolsPage;
