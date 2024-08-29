import React from 'react';
import Image from 'next/image';
import { Card } from '@/shadcn/ui/card';
import { Container } from '../containers';
import { Button } from '@/shadcn/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-start  w-full p-22'>
      <Card className='flex flex-col items-start justify-start p-18 rounded-3xl bg-white  bg-cover w-full'>
        <div
          className='relative bg-cover  w-full'
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/J9YwsU9nugMP4hdHntRplOALTI.png')",
          }}>
          <div className='container mx-auto px-4 py-16'>
            <div className='max-w-3xl mx-auto text-center'>
              <div className='inline-flex items-center bg-white bg-opacity-40 rounded-full px-4 py-2 mb-6'>
                <div className='w-2 h-2 bg-[#000D49] rounded-full mr-2'></div>
                <p className='text-[#000D49] text-sm font-medium'>
                  Experience Creative Freedom
                </p>
                <div className='w-2 h-2 bg-[#000D49] rounded-full ml-2'></div>
              </div>
              <h1 className='text-4xl md:text-5xl  text-blue-900 font-semibold mb-4 text-center'>
                The fastest way to create Short Videos
              </h1>
              <p className='text-lg mb-8 text-center'>
                Create unlimited short videos at once. Auto generate captions, effects,
                background & music.
              </p>
              <div className='flex  sm:flex-row justify-center space-y-4 sm:space-y-2 sm:space-x-2 px-4 p-2'>
                <Link
                  href='https://crayo.ai/dashboard'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center bg-white text-[#000D49] font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300'>
                  <span className='mr-4'>Try now</span>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'></path>
                  </svg>
                </Link>
                <Link
                  href='#learn-more'
                  className='inline-flex items-center bg-white bg-opacity-40 text-[#000D49] font-semibold px-6 py-3 rounded-full hover:bg-opacity-50 transition duration-300'>
                  <span className='mr-2'>Learn More</span>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'></path>
                  </svg>
                </Link>
              </div>
              <div className='relative flex items-start justify-start w-full overflow-hidden gap-4 mt-4'>
                <div className='flex-1 h-[98px] overflow-visible relative w-[300px]'>
                  <div className='block absolute inset-0'>
                    <Image
                      src='/assets/images/genrate.avif'
                      alt='genrate'
                      layout='fill'
                      className='object-cover object-center w-full h-full'
                      priority='true'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container mx-auto px-4 py-8'>
            <div className='flex flex-wrap justify-center items-center gap-4'>
              <div className='flex items-center bg-white bg-opacity-40 rounded-full px-4 py-2'>
                <svg
                  className='w-4 h-4 mr-2'
                  viewBox='0 0 15 15'
                  fill='currentColor'>
                  <path d='M7.5 1.5a.5.5 0 0 0-1 0v4.707L2.354 4.854a.5.5 0 1 0-.708.708l4.5 4.5a.5.5 0 0 0 .708 0l4.5-4.5a.5.5 0 0 0-.708-.708L6.5 6.207V1.5z' />
                </svg>
                <span className='text-xs font-medium text-[#000D49]'>AI Voice</span>
              </div>
              <div className='flex items-center bg-white bg-opacity-40 rounded-full px-4 py-2'>
                <svg
                  className='w-4 h-4 mr-2'
                  viewBox='0 0 16 15'
                  fill='currentColor'>
                  <path d='M8 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 1 1-1 0V2a.5.5 0 0 1 .5-.5z' />
                  <path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z' />
                </svg>
                <span className='text-xs font-medium text-[#000D49]'>
                  AI Backgrounds
                </span>
              </div>
              <div className='flex items-center bg-white bg-opacity-40 rounded-full px-4 py-2'>
                <svg
                  className='w-4 h-4 mr-2'
                  viewBox='0 0 16 15'
                  fill='currentColor'>
                  <path d='M11 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z' />
                </svg>
                <span className='text-xs font-medium text-[#000D49]'>
                  AI Script Generator
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
