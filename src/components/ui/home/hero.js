import React from 'react';
import Image from 'next/image';
import { Card } from '@/shadcn/ui/card';
import { Container } from '../containers';
import { Button } from '@/shadcn/ui/button';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import LogoComponent from '@/components/logo-component';

const Hero = ({backgroundImage,logo,menuItem,tagline,title,description}) => {
  const menuItems = [
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Insight' },
    { href: 'https://crayo.tolt.io/login', label: 'Affiliate' },
    { href: '/guide', label: 'Guide' },
  ];
  return (
    <div className='flex flex-col lg:items-start items-center justify-center lg:justify-start w-full lg:p-18  '>
      <Card className='flex flex-col lg:items-start lg:justify-start items-center justify-center lg:p-18 rounded-3xl bg-white  bg-cover w-full'>
        <div
          className='relative bg-cover  w-full'
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/J9YwsU9nugMP4hdHntRplOALTI.png')",
          }}>
          <Navbar
            logo={<LogoComponent></LogoComponent>}
            menuItems={menuItems}></Navbar>
          <div
            className='
          lg:px-18 lg:mx-12 lg:py-16 mx-auto'>
            <div className='max-w-3xl '>
              <div className='inline-flex items-center bg-white bg-opacity-40 rounded-full lg:px-4 py-2 mb-6'>
                <div className='w-3 h-3 bg-[#000D49] rounded-full '></div>
                <p className='text-[#000D49] lg:text-sm text-xs font-medium'>
                  Experience Creative Freedom
                </p>
                <div className='w-2 h-2 bg-[#000D49] rounded-full ml-2'></div>
              </div>
              <div className='flex flex-col lg:w-2/3  mx-12'>
                <h1 className='lg:text-5xl text-2xl   text-[#000d49] font-semibold mb-4 '>
                  The fastest ✨ way to create Short Videos
                </h1>
                <p className='lg:text-lg text-md mb-8 '>
                  Create unlimited short videos at once. Auto generate captions, effects,
                  background & music.
                </p>
              </div>
              <div className='flex   justify-center gap-4   lg:px-4 '>
                <Link
                  href='https://crayo.ai/dashboard'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center bg-white text-[#000D49] font-semibold px-6 lg:py-1 rounded-full hover:bg-opacity-90 transition duration-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='icon icon-tabler icon-tabler-arrow-right'
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
                    <path d='M5 12l14 0' />
                    <path d='M13 18l6 -6' />
                    <path d='M13 6l6 6' />
                  </svg>
                  <span className='mr-2 lg:p-1'>Try now</span>
                </Link>
                <Link
                  href='#learn-more'
                  className='inline-flex items-center bg-white bg-opacity-40 text-[#000D49] font-semibold px-6 lg:py-3 rounded-full hover:bg-opacity-50 transition duration-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='icon icon-tabler icon-tabler-arrow-right'
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
                    <path d='M5 12l14 0' />
                    <path d='M13 18l6 -6' />
                    <path d='M13 6l6 6' />
                  </svg>
                  <span className='lg:mr-2 text-xs'>Learn More</span>
                </Link>
              </div>
              <div className=' flex items-start justify-start w-full overflow-hidden gap-4 mt-4'>
                <div className='flex-1  overflow-visible  '>
                  <Image
                    src='/assets/images/genrate.avif'
                    width={500}
                    height={500}
                    alt=''
                    className='object-cover object-center w-full h-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div className=' px-4 py-8'>
        <div className='flex flex-wrap justify-center items-center gap-6'>
          <div className='flex items-center bg-blue-300 bg-opacity-40 rounded-full gap-2 px-6 py-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'>
              <path
                fill='#297dd6'
                d='M16.934 8.965A8.002 8.002 0 0 0 1 10c0 1.892.657 3.631 1.756 5.001C3.564 16.01 4 17.125 4 18.306V22h9l.001-3H15a2 2 0 0 0 2-2v-2.929l1.96-.84c.342-.146.372-.494.224-.727zM3 10a6 6 0 0 1 11.95-.779l.057.442l1.543 2.425l-1.55.664V17h-3.998L11 20H6v-1.694c0-1.639-.591-3.192-1.685-4.556A5.97 5.97 0 0 1 3 10m18.154 8.102l-1.665-1.11A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.51-4.993l1.664-1.11A10.95 10.95 0 0 1 23 12c0 2.258-.68 4.356-1.846 6.102'
              />
            </svg>
            <span className='text-xs font-medium text-[#000D49]'>AI Voice</span>
          </div>
          <div className='flex gap-4'>
            <div className='flex items-center bg-blue-300 bg-opacity-40 rounded-full px-6 lg:py-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'>
                <path
                  fill='#297dd6'
                  d='M12 3C6.5 3 2 6.58 2 11a7.22 7.22 0 0 0 2.75 5.5c0 .6-.42 2.17-2.75 4.5c2.37-.11 4.64-1 6.47-2.5c1.14.33 2.34.5 3.53.5c5.5 0 10-3.58 10-8s-4.5-8-10-8m0 14c-4.42 0-8-2.69-8-6s3.58-6 8-6s8 2.69 8 6s-3.58 6-8 6'
                />
              </svg>
              <span className='text-xs  text-[#000D49]'>AI Backgrounds</span>
            </div>
            <div className='flex  items-center bg-blue-300 bg-opacity-40 rounded-full px-4 lg:py-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'>
                <path
                  fill='#297dd6'
                  d='M7.154 13.539q.31 0 .54-.23q.229-.23.229-.54t-.23-.54t-.54-.229t-.538.23t-.23.54q0 .309.23.539t.539.23m0-2.77q.31 0 .54-.23q.229-.23.229-.539t-.23-.54t-.54-.23t-.538.23t-.23.54t.23.54t.539.23m0-2.77q.31 0 .54-.23t.229-.54t-.23-.539t-.54-.23t-.538.23t-.23.54t.23.54t.539.229m3.077 5.27H14.5v-1h-4.27zm0-2.77H17.5v-1h-7.27zm0-2.77H17.5v-1h-7.27zM3 20.078V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4z'
                />
              </svg>
              <span className='text-xs  text-[#000D49]'>AI Script Generator</span>
            </div>
            <div className='flex items-center bg-blue-300 bg-opacity-40 rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
