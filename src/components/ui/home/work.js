import React from 'react';
import { Container } from '../containers';
import Link from 'next/link';

const WorkCrayo = ({
  tagline = 'How it Works',
  title = 'From Ideas to Short Videos in Seconds',
  description = 'Create unlimited shorts videos at once. Auto generate captions, effects, background & music.',
  ctaLink = 'https://discord.gg/crayo',
  ctaText = 'Join our Discord',
}) => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col items-center justify-center font-semibold text-4xl mt-6 w-full'>
        <div className='flex px-6 rounded-full py-2 bg-gradient-to-br from-[#dbf0ff] to-[#dfe2ff] via-[#dfe2ff] p-3'>
          <div className='flex items-center gap-6'>
            <div className='w-2 h-2 rounded-full  bg-[#000d49]'></div>

            <p className='text-[#000d49] font-medium text-sm text-center mx-auto'>
              {tagline}
            </p>
            <div className='w-2 h-2 rounded-full  bg-[#000d49] '></div>
          </div>
        </div>
        <div className='flex flex-col items-center md:items-center mt-6 '>
          <h2 clssName='font-bold lg:text-[35px] text-4xl text-blue-900'>{title}</h2>
        </div>
      </div>
      <div className='flex flex-col items-start justify-start'>
        <p className='text-gray-400 text-[15px] text-[#000D49B3]'>{description}</p>
      </div>
      <div className='flex items-end justify-end mt-8'>
        <Link
          href={ctaLink}
          className='bg-[#dde6ff] p-2 px-6 py-2 flex gap-4 rounded-full'>
          <div className=' w-[26px] h-[26px] bg-white rounded-full flex z-2'>
            <div className='flex  items-center justify-center z-2'>
              <div className='w-[20px] h-[20px] z-1'>
                <div className='flex flex-col items-center'>
                  <svg
                    overflow='visible'
                    width='22'
                    height='22'
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
          <div className='flex flex-col z-1'>
            <p className='text-[#000d49] text-sm font-bold '>{ctaText}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WorkCrayo;
