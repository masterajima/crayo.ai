import React from 'react';
import Image from 'next/image';
import { Card } from '@/shadcn/ui/card';
import { Container } from '../containers';
import { Button } from '@/shadcn/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex flex-col items-start justify-start px-4 py-16 w-full'>
        <Card className='flex flex-col items-start justify-start p-12 rounded-3xl border-white bg-white bg-opacity-40 border-opacity-50 py-2 w-full'>
          <div className='absolute inset-0 w-full'>
            <Image
              src='/assets/images/cover.avif'
              alt='cover'
              layout='fill'
              priority={true}
              objectFit='cover'
              className='object-center w-full h-full'
            />
          </div>
          <div className='flex items-start bg-white p-2 relative overflow-hidden rounded-full'>
            <div className='flex w-2 h-2 rounded-full bg-blue-900 mr-2 bg-opacity-40'></div>
            <p className='text-blue-900 text-sm font-medium'>
              Experience Creative Freedom
            </p>
            <div className='flex w-2 h-2 rounded-full bg-blue-900 ml-2 bg-opacity-40'></div>
          </div>
          <div className='flex flex-col w-full max-w-[330px] relative break-words z-1'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4 mt-4 text-blue-900'>
              The fastest way to create Short Videos
            </h1>
            <p className='text-lg mt-4 mb-4 font-normal lg:text-start'>
              Create unlimited short videos at once. Auto generate captions, effects,
              background &amp; music.
            </p>
            <div className='flex flex-row justify-start gap-4'>
              <Link
                href='https://crayo.ai/dashboard'
                className='bg-white opacity-1 flex items-center gap-8 p-2 px-8 rounded-full'>
                <div className='bg-blue-300 opacity-1 flex flex-row w-[24px] h-[24px] pr-2 rounded-full'>
                  <div className='flex flex-row items-center overflow-visible gap-10 opacity-1'>
                    <div className='overflow-hidden h-[16px] w-[16px]'>
                      <div className='flex flex-col items-center justify-center overflow-visible'>
                        <svg
                          overflow='visible'
                          width='100%'
                          height='100%'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            stroke-linejoin='miter'
                            stroke='var(--token-9d8c7f4b-b2a9-4034-9daa-4796a213ec8e, rgb(0, 13, 73))'
                            d='M13.5 5L20.5 12L13.5 19M3.5 12L20 12'
                            stroke-width='2'></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col opacity-1 z-1'>
                  <p className='text-blue-900 mr-2'>Try now</p>
                </div>
              </Link>
              <Link
                href='https://crayo.ai/#learn-more'
                className='flex items-center px-8 rounded-full bg-white bg-opacity-40 p-2'>
                <div className='bg-blue-300 opacity-1 flex flex-row w-[24px] h-[24px] pr-2 rounded-full'>
                  <div className='flex flex-row items-center overflow-visible gap-10 opacity-1'>
                    <div className='overflow-hidden h-[16px] w-[16px]'>
                      <div className='flex flex-col items-center justify-center overflow-visible'>
                        <svg
                          overflow='visible'
                          width='100%'
                          height='100%'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            stroke-linejoin='miter'
                            stroke='var(--token-9d8c7f4b-b2a9-4034-9daa-4796a213ec8e, rgb(0, 13, 73))'
                            d='M13.5 5L20.5 12L13.5 19M3.5 12L20 12'
                            stroke-width='2'></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex  opacity-1 z-1'>
                  <p className='text-blue-900 mr-2'>Learn more</p>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-4 w-[16px] h-[17px] overflow-visible'></div>
          <div className=' flex flex-col items-start justify-start w-full overflow-hidden'>
            <div className='relative w-[500px] h-[92px]'>
              <div className='absolute inset-0 block '>
                <Image
                  src='/assets/images/genrate.avif'
                  alt='genrate'
                  layout='fill'
                  priority={true}
                  className='object-cover object-center w-full h-full'
                />
              </div>
            </div>
          </div>
          <div className='mx-auto px-4 py-8'>
            <div className='flex flex-wrap justify-center items-center gap-4'>
              <div className='flex items-center bg-white bg-opacity-40 rounded-full px-4 py-2'>
                <svg
                  style='width:100%;height:100%'
                  viewBox='0 0 15 15'
                  preserveAspectRatio='none'
                  width='100%'
                  height='100%'>
                  <use href='#svg1809950946_727'></use>
                </svg>
                <span className='text-blue-900'>AI Voice</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
