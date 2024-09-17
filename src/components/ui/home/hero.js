import React from 'react';
import Image from 'next/image';
import { Card } from '@/shadcn/ui/card';
import { Container } from '../containers';
import { Button } from '@/shadcn/ui/button';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import LogoPage from '@/components/logopage';

const Hero = () => {
  const menuItems = [
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Insight' },
    { href: 'https://crayo.tolt.io/login', label: 'Affiliate' },
    { href: '/guide', label: 'Guide' },
  ];
  return (
    <div className='flex flex-col lg:items-start items-center lg:justify-start justify-center w-full p-4 lg:p-18 '>
      <Card className='flex flex-col items-center justify-center  lg:items-start lg:justify-start lg:p-18 rounded-3xl bg-white  bg-cover p-4 lg:w-full'>
        <div
          className='relative bg-cover h-full  w-full'
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/J9YwsU9nugMP4hdHntRplOALTI.png')",
          }}>
          <Navbar
            logo={<LogoPage></LogoPage>}
            menuItems={menuItems}
            showMenu={true}
          />
          <div className='container items-center justify-center lg:items-start lg:justify-start px-4 lg:py-16'>
            <div className='max-w-3xl sm:mx-auto sm:text-center lg:text-start'>
              <div className='inline-flex items-center bg-white bg-opacity-40 rounded-full lg:px-4 lg:py-2 p-2 mb-6'>
                <div className='w-2 h-2 bg-[#000D49] rounded-full mr-2'></div>
                <p className='text-[#000D49] lg:text-sm text-xs lg:font-medium lg:text-start'>
                  Experience Creative Freedom
                </p>
                <div className='w-2 h-2 bg-[#000D49] rounded-full ml-2'></div>
              </div>
              <div className='flex flex-col items-center lg:items-start lg:justify-start justify-center lg:w-2/3'>
                <h1
                  className='lg:text-5xl text-[35px] text-[#000d49] font-semibold mb-4 text-center lg:text-start  
                 '>
                  The fastest way to genrate Short Videos
                </h1>
                <p className='lg:text-lg text-sm mb-8 text-center lg:text-start'>
                  Create unlimited short videos at once. Auto generate captions, effects,
                  background & music.
                </p>
                <div className='flex  sm:flex-row justify-center gap-4 px-4 '>
                  <Link
                    href='https://crayo.ai/dashboard'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center bg-white text-[#000D49] font-semibold px-3 py-2 gap-2 rounded-full hover:bg-opacity-90 transition duration-300'>
                    <div className='bg-[#AFDAFA] w-[24px] h-[24px] flex items-center rounded-full'>
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
                    <span className='mr-2 '>Try now</span>
                  </Link>
                  <Link
                    href='#learn-more'
                    className='inline-flex items-center bg-white bg-opacity-40 text-[#000D49] font-semibold px-3 gap-2 py-3 rounded-full hover:bg-opacity-50 transition duration-300'>
                    <div className='bg-white w-[24px] h-[24px] flex items-center rounded-full'>
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
                    <span className='mr-2'>Learn More</span>
                  </Link>
                </div>
              </div>

              <div className=' flex items-start justify-start w-full  gap-4 mt-16'>
                <Image
                  src='/assets/images/genrate.avif'
                  alt='genrate'
                  width={3474}
                  height={122}
                  className=' w-full h-full object-cover object-center'
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-wrap justify-center items-center gap-4'>
          <div className='flex items-center bg-blue-300 bg-opacity-40 rounded-full px-4 py-2'>
            <svg
              className='w-4 h-4 mr-2'
              viewBox='0 0 15 15'
              fill='currentColor'>
              <path d='M7.5 1.5a.5.5 0 0 0-1 0v4.707L2.354 4.854a.5.5 0 1 0-.708.708l4.5 4.5a.5.5 0 0 0 .708 0l4.5-4.5a.5.5 0 0 0-.708-.708L6.5 6.207V1.5z' />
            </svg>
            <span className='text-xs font-medium text-[#000D49]'>AI Voice</span>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center bg-blue-300 bg-opacity-40 rounded-full px-4 py-2'>
              <svg
                className='w-4 h-4 mr-2'
                viewBox='0 0 16 15'
                fill='currentColor'>
                <path d='M8 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 1 1-1 0V2a.5.5 0 0 1 .5-.5z' />
                <path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z' />
              </svg>
              <span className='text-xs font-medium text-[#000D49]'>AI Backgrounds</span>
            </div>
            <div className='flex  items-center bg-blue-300 bg-opacity-40 rounded-full px-4 py-2'>
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
            <div className='flex items-center bg-blue-300 bg-opacity-40 rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
