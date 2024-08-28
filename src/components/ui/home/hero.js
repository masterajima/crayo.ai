import React from 'react';
import Image from 'next/image';
import { Card } from '@/shadcn/ui/card';
import { Container } from '../containers';
import { Button } from '@/shadcn/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='bg-cover relative w-full rounded-3xl flex flex-col'>
      <div className='px-4 py-3'>
        <Card className='w-full bg-white bg-opacity-40 border-gray-900 flex flex-col items-start justify-start px-4 py-8 p-8 rounded-3xl '>
          <Image
            src='/assets/images/cover.avif'
            alt='cover'
            layout='fill'
            priority={true}
            className='object-cover w-full '
          />
          <div className='relative  px-4 py-16'>
            <div className='flex flex-col items-start justify-start '>
              <div className='mb-8'>
                <div className='inline-flex items-start bg-white bg-opacity-40 border border-white border-opacity-50 rounded-full px-6 py-2'>
                  <div className='w-2 h-2 bg-blue-900 rounded-full mr-2'></div>
                  <p className='text-blue-900 text-sm font-medium'>
                    Experience Creative Freedom
                  </p>
                  <div className='w-2 h-2 bg-blue-900 ml-2 rounded-full'></div>
                </div>
              </div>
              <h1 className='text-4xl md:text-6xl text-blue-900  font-bold text-start '>
                The fastest way to Create Short Videos{' '}
              </h1>
              <p className='text-xl text-blue-900 mb-8 mt-8 w-1/2 px-2'>
                Create Unlimited short Video at once.Auto genrate captions,effects
                background and music
              </p>
              <div className='flex flex-col sm:flex-row gap-8'>
                <Link
                  href='https://crayo.ai/dashboard'
                  className='bg-white text-blue-900 font-semibold  flex py-2  px-4 rounded-full items-center justify-center hover:border-yellow-400'>
                  <div className='bg-blue-300 opacity-1 w-5 h-5 rounded-full'>
                    <svg
                      class='w-3 h-3'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        stroke-linejoin='miter'
                        stroke='currentColor'
                        d='M13.5 5L20.5 12L13.5 19M3.5 12L20 12'
                        stroke-width='2'></path>
                    </svg>
                  </div>

                  <span className='text-blue-900 font-medium '>Try now</span>
                </Link>
                <Link
                  href='#learnmore'
                  className='bg-white text-blue-900 bg-opacity-40 text-sm font-semibold p-1 rounded-full'>
                  <div className='bg-blue-300 bg-opacity-40 w-5 h-5 rounded-full'>
                    <svg
                      class='w-3 h-3'
                      viewBox='0 0 24 24'
                      fill='#551A8B'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        stroke-linejoin='miter'
                        stroke='currentColor'
                        d='M13.5 5L20.5 12L13.5 19M3.5 12L20 12'
                        stroke-width='2'></path>
                    </svg>
                  </div>
                  <span className='text-blue-900'>Learn More</span>
                </Link>
              </div>
            </div>
            <div className='absolute bottom-0 left-0 right-0'>
              <div className='mx-auto px-4 py-4'>
                <div className='flex justify-center gap-4'>
                  <div className='flex items-center bg-white bg-opacity-40 rounded-full px-4 py-2'>
                    <svg
                      class='w-4 h-4 mr-2'
                      viewBox='0 0 15 15'
                      fill='currentColor'>
                      <use href='#svg1809950946_727'></use>
                    </svg>
                    <span className='text-xs font-medium text-blue-900'>AI Voice</span>
                  </div>
                  <div className='flex items-center bg-white bg-opacity-40 rounded-full px-4 py-2'>
                    <svg
                      class='w-4 h-4 mr-2'
                      viewBox='0 0 16 15'
                      fill='currentColor'>
                      <use href='#svg-206371420_443'></use>
                    </svg>
                    <span className='text-xs font-medium text-blue-900'>
                      AI Script genrator
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
