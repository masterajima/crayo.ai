import React from 'react';
import { Container } from '../containers';
import Link from 'next/link';

const WorkCrayo = () => {
  return (
    <div className='flex flex-col lg:items-start items-center justify-center lg:justify-start  w-full '>
      <div className='flex flex-col lg:items-start items-center md:items-start justify-center md:justify-start font-semibold text-4xl mt-8 w-full lg:px-8'>
        <div className='flex px-4 rounded-full py-2 bg-gradient-to-br from-[#dbf0ff] to-[#dfe2ff] via-[#dfe2ff] p-3 '>
          <div className='flex items-center gap-6'>
            <div className='w-2 h-2 rounded-full  bg-[#000d49]'></div>

            <p className='text-[#000d49] font-medium lg:text-sm text-xs text-center mx-auto'>
              How it Works
            </p>
            <div className='w-2 h-2 rounded-full  bg-[#000d49] '></div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start mt-8 '>
          <h2 className='font-semibold lg:text-5xl text-4xl text-[#000d49] lg:w-2/3 lg:text-start'>
            From Idea💡 to Short Videos in Second
          </h2>
        </div>
      </div>
      <div className='flex flex-col lg:items-start items-center lg:justify-start justify-center mt-8'>
        <p className='text-gray-400 text-[15px] font-[Inter] text-[#000D49B3] lg:w-2/3'>
          Create unlimited shorts videos at once. Auto generate captions, effects,
          background &amp; music.
        </p>
      </div>
      <div className='flex items-start justify-start mt-8 px-8'>
        <Link
          href='https://discord.gg/crayo'
          className='bg-[#dde6ff] lg:p-2 px-6 py-2 flex gap-2 rounded-full'>
          <div className=' w-[20px] h-[20px] bg-white rounded-full flex z-2'>
            <div className='flex  items-center justify-center z-2'>
              <div className='w-[16px] h-[16px] z-1'>
                <div className='flex  items-start'>
                  <svg
                    overflow='visible'
                    width='16'
                    height='16'
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
              </div>
            </div>
          </div>
          <div className='flex items-start justify-start'>
            <p className='text-[#000d49] text-sm '>Join our Discord</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WorkCrayo;
