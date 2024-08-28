import React from 'react';
import Image from 'next/image';
import { Card } from '@/shadcn/ui/card';
import { Container } from '../containers';
import { Button } from '@/shadcn/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <Container className='flex flex-col items-start justify-start gap-2 w-full h-screen'>
      <Card className=' flex flex-col items-start justify-start p-8 rounded-3xl w-full bg-white border-gray-400'>
        <Image
          src='/assets/images/cover.avif'
          className='object-cover object-center w-full h-full'
          alt='cover'
          layout='fill'
          priority={true}
        />

        <div className='relative flex flex-col items-start justify-start mt-4 mb-4 p-4 z-10'>
          <Button className='text-gray-900 border-gray-900 rounded-3xl w-30  font-semibold bg-blue-50'>
            Experience Creative Free
          </Button>
          <div className='mt-4 flex flex-col items-start justify-start w-[65%]'>
            <h1 className='text-5xl font-semibold text-blue-900'>
              The fastest Way to create Short Videos
            </h1>
            <p className='text-gray-400 font-normal text-lg mt-4'>
              Create unlimited short videos at once. Auto generate captions, effects,
              background &amp; music.
            </p>
            <div className='flex items-center justify-center gap-8'>
              <Link
                href='https://crayo.ai/dashboard'
                className='bg-white opacity-1 p-3 rounded-3xl hover:'>
                <div className='flex gap-2 '>
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
                  <p className='text-gray-900 text-sm font-semibold'>Try now</p>
                </div>
              </Link>
              <Link
                href='https://crayo.ai/dashboard'
                className='bg-white opacity-1 p-3 rounded-3xl '>
                <div className='bg-blue-200 opacity-1 border-r-2'>
                  <div className='flex gap-2 '>
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
                    <p className='text-gray-900 text-sm font-semibold'>Try now</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='items-start relative flex overflow-visible'>
            <div className='absolute inset-0 mb-4 block '>
              <Image
                src='/assets/images/genrate.avif'
                layout='fill'
                priority={true}
                alt='genrate'
                className='object-cover object-center w-full h-full'
              />
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Hero;
