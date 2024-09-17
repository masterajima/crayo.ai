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
    <div className='flex flex-col lg:items-start items-center lg:justify-start justify-center w-full   lg:p-18 '>
      <Card className='flex flex-col items-center justify-center  lg:items-start lg:justify-start lg:p-18 rounded-3xl bg-white  bg-cover  w-full'>
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
          <div className='container items-center justify-center lg:items-start lg:justify-start px-4 py-16'>
            <div className='lg:max-w-3xl sm:mx-auto sm:text-center lg:text-start'>
              <div className='inline-flex items-center bg-white bg-opacity-40 rounded-full lg:px-4 py-2 p-2 mb-6'>
                <div className='w-2 h-2 bg-[#000D49] rounded-full mr-2'></div>
                <p className='text-[#000D49] lg:text-sm text-xs lg:font-medium lg:text-start'>
                  Experience Creative Freedom
                </p>
                <div className='w-2 h-2 bg-[#000D49] rounded-full ml-2'></div>
              </div>
              <div className='flex flex-col items-center lg:items-start lg:justify-start justify-center '>
                <h1
                  className='lg:text-5xl text-3xl text-[#000d49] font-semibold mb-4 text-center lg:text-start  
                 '>
                  The fastest way to create Short Videos
                </h1>
                <p className='lg:text-lg text-sm mb-8 text-[#000D49B3] text-center lg:text-start'>
                  Create unlimited short videos at once. Auto generate captions, effects,
                  background & music.
                </p>
              </div>
              <div className='flex items-center justify-center gap-4 lg:px-4 '>
                <Link
                  href='https://crayo.ai/dashboard'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center bg-white text-[#000D49] font-semibold lg:px-6 px-3 lg:py-2 py-1 gap-4 rounded-full hover:bg-opacity-90 transition duration-300'>
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
                  <span className='mr-2 text-sm '>Try now</span>
                </Link>
                <Link
                  href='#learn-more'
                  className='inline-flex items-center bg-white bg-opacity-40 text-[#000D49] font-semibold px-3 gap-2 lg:py-3 py-1 rounded-full hover:bg-opacity-50 transition duration-300'>
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
                  <span className='mr-2 text-sm'>Learn More</span>
                </Link>
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
      <div className='flex mt-8'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='icon icon-tabler icon-tabler-diamonds'
          width='22'
          height='22'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='#2c3e50'
          fill='#AFDAFA'
          stroke-linecap='round'
          stroke-linejoin='round'>
          <path
            stroke='none'
            d='M0 0h24v24H0z'
            fill='none'
          />
          <path d='M10.831 20.413l-5.375 -6.91c-.608 -.783 -.608 -2.223 0 -3l5.375 -6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608 .783 .608 2.223 0 3l-5.375 6.911a1.457 1.457 0 0 1 -2.338 0z' />
        </svg>

        <div className='flex items-center gap-2 bg-[#AFDAFA] bg-opacity-40 rounded-full px-6 lg:py-2 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'>
            <path
              fill='#AFDAFA'
              d='M9 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L17 14.07V17a2 2 0 0 1-2 2h-1.999L13 22H4v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 9 2m12.154 16.102l-1.665-1.11A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.51-4.993l1.664-1.11A10.95 10.95 0 0 1 23 12c0 2.258-.68 4.356-1.846 6.102'
            />
          </svg>
          <span className='text-sm font-medium text-[#000D49]'>AI Voice</span>
        </div>
        <div className='flex mt-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='icon icon-tabler icon-tabler-diamonds'
            width='22'
            height='22'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='#2c3e50'
            fill='#AFDAFA'
            stroke-linecap='round'
            stroke-linejoin='round'>
            <path
              stroke='none'
              d='M0 0h24v24H0z'
              fill='none'
            />
            <path d='M10.831 20.413l-5.375 -6.91c-.608 -.783 -.608 -2.223 0 -3l5.375 -6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608 .783 .608 2.223 0 3l-5.375 6.911a1.457 1.457 0 0 1 -2.338 0z' />
          </svg>

          <div className='flex items-center gap-2 bg-[#AFDAFA] bg-opacity-40 rounded-full px-4 lg:py-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'>
              <path
                fill='#AFDAFA'
                d='M19.67 8.14a2 2 0 0 0-1.42-1.43A48 48 0 0 0 12 6.38a48 48 0 0 0-6.25.33a2 2 0 0 0-1.42 1.43A21.3 21.3 0 0 0 4 12a21.4 21.4 0 0 0 .33 3.88a2 2 0 0 0 1.42 1.4a48 48 0 0 0 6.25.33a48 48 0 0 0 6.25-.33a2 2 0 0 0 1.42-1.4A21.4 21.4 0 0 0 20 12a21.3 21.3 0 0 0-.33-3.86m-9.31 6.25V9.63L14.55 12l-4.19 2.38Z'
              />
            </svg>
            <span className='text-xs font-medium text-[#000D49]'>AI Backgrounds</span>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='icon icon-tabler icon-tabler-diamonds'
            width='22'
            height='22'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='#2c3e50'
            fill='#AFDAFA'
            stroke-linecap='round'
            stroke-linejoin='round'>
            <path
              stroke='none'
              d='M0 0h24v24H0z'
              fill='none'
            />
            <path d='M10.831 20.413l-5.375 -6.91c-.608 -.783 -.608 -2.223 0 -3l5.375 -6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608 .783 .608 2.223 0 3l-5.375 6.911a1.457 1.457 0 0 1 -2.338 0z' />
          </svg>
        </div>
      </div>
      <div className='flex gap-2 bg-[#AFDAFA] items-center  bg-opacity-40 rounded-full px-4 py-2 mt-8'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 21 21'>
          <g
            fill='#AFDAFA'
            fill-rule='evenodd'>
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M11 16.517c4.418 0 8-3.026 8-6.758S15.418 3 11 3S3 6.026 3 9.759c0 1.457.546 2.807 1.475 3.91L3.5 18.25l3.916-2.447a9.2 9.2 0 0 0 3.584.714'
            />
            <path
              fill='currentColor'
              d='M10.999 11c.5 0 1-.5 1-1s-.5-1-1-1S10 9.5 10 10s.499 1 .999 1m-4 0c.5 0 1-.5 1-1s-.5-1-1-1S6 9.5 6 10s.499 1 .999 1m8 0c.5 0 1.001-.5 1.001-1s-.5-1-1-1s-1 .5-1 1s.5 1 1 1'
            />
          </g>
        </svg>
        <span className='text-xs font-medium text-[#000D49]'>AI Script Generator</span>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='icon icon-tabler icon-tabler-diamonds'
        width='22'
        height='22'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='#2c3e50'
        fill='#AFDAFA'
        stroke-linecap='round'
        stroke-linejoin='round'>
        <path
          stroke='none'
          d='M0 0h24v24H0z'
          fill='none'
        />
        <path d='M10.831 20.413l-5.375 -6.91c-.608 -.783 -.608 -2.223 0 -3l5.375 -6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608 .783 .608 2.223 0 3l-5.375 6.911a1.457 1.457 0 0 1 -2.338 0z' />
      </svg>

      <div className='flex items-center bg-[#AFDAFA] bg-opacity-40 rounded-full'></div>
    </div>
  );
};

export default Hero;
