import React from 'react';
import Image from 'next/image';
import { Card } from '@/shadcn/ui/card';
import { Container } from '../containers';
import { Button } from '@/shadcn/ui/button';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import LogoComponent from '@/components/logo-component';
import FeatureTag from '@/components/feature-tag';

const Hero = ({
  logoSrc = '/assets/images/crayoBlue.png',
  logoAlt = 'Logo',
  hamburgerSrc = '/assets/images/hamburger.png',
  badgeText = 'Trusted by 1.3M+ users',
  title = 'Generate viral-ready clips in seconds',
  subtitle = 'Your all-in-one tool for creating AI voice overs, engaging subtitles, optimized game play, and more',
  ctaLink = '/',
  ctaText = 'Try Now',
  plateformLogos = [
    { src: '/assets/images/hero-tiktok.png', alt: 'TikTok', width: 110, height: 48 },
    {
      src: '/assets/images/hero-shorts.png',
      alt: 'YouTube Shorts',
      width: 90,
      height: 48,
    },
  ],
}) => {
  return (
    <div className='bg-white w-full'>
      <div className='relative flex flex-col overflow-hidden rounded-[20px] bg-[url("/assets/images/heroBg.png")] bg-cover bg-center transition-opacity duration-1000 ease-in-out opacity-100 md:m-5 md:rounded-[40px] w-full'>
        <svg
          aria-hidden='true'
          class='pointer-events-none h-full w-full fill-slate-950/15 stroke-slate-950/15 absolute inset-0 z-0 [mask-image:radial-gradient(750px_circle_at_center,white,transparent)]'
          stroke-width='1'>
          <defs>
            <pattern
              id=':R15m:'
              width='70'
              height='70'
              patternUnits='userSpaceOnUse'
              x='-1'
              y='-1'>
              <path
                d='M.5 70V.5H70'
                fill='none'
                stroke-dasharray='4 2'></path>
            </pattern>
          </defs>
          <rect
            width='100%'
            height='100%'
            stroke-width='0'
            fill='url(#:R15m:)'></rect>
        </svg>
        <header className='flex w-full items-center justify-between px-6 py-6 md:px-6 md:py-4'>
          <Link
            href='/'
            className='w-1/4 transition duration-200 hover:opacity-70'>
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={120}
              height={40}
            />
          </Link>
          <Button className='p-0 transition-transform duration-200 hover:scale-110'>
            <Image
              src={hamburgerSrc}
              alt='Menu'
              width={21}
              height={21}
            />
          </Button>
        </header>
        <div className='flex flex-grow items-center justify-center '>
          <main className='align-center container space-y-8 items-center mx-auto px-4 py-8 md:space-y-10'>
            <div className='relative w-fit place-items-center p-3 text-black inline-flex dark:bg-black dark:text-white items-center space-x-2.5 rounded-full bg-white bg-opacity-20 px-4 py-2 '>
              <div className='relative inline-flex items-center space-x-1.5 rounded-full pr-2 md:space-x-2.5'>
                <div className='flex h-3 w-3 animate-pulse items-center justify-center rounded-full bg-opacity-30 md:w-4 md:h-4 bg-[#4D7FED]'>
                  <div className='w-1.5 h-1.5 animate-pulse rounded-full md:h-2.5 md:w-2.5 bg-[#4D7FED]'></div>
                </div>
                <p className='text-md font-bold md:text-lg text-[#4D7FED]'>
                  {badgeText}
                </p>
              </div>
            </div>
            <div className='mx-auto max-w-3xl space-y-2 md:space-y-4'>
              <h1 className='text-[36px] font-bold leading-[110%] text-black md:text-[72px] md:leading-[120%]'>
                {title}
              </h1>
              <p className='text-md mb-8 md:text-3xl'>{subtitle}</p>
            </div>
            <Link
              href={ctaLink}
              className='relative inline-block rounded-2xl px-6 py-5 font-bold backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out bg-white hover:shadow text-slate-950 items-center space-x-2.5 shadow-[0_13px_22px_rgba(0,0,0,0.10)] drop-shadow-[0_9px_22px_rgba(255,255,255,0.87)]'>
              <div className='flex items-center justify-center'>
                <div className='absolute left-0 opacity-0 z-10 transition-all duration-300 ease-in-out'>
                  <Image
                    src='/assets/images/lightningBlack.png'
                    alt='bulb'
                    width={16}
                    height={16}
                    className='transparent'
                  />
                </div>
                <span className='relative h-full w-full text-lg font-bold transition-opacity text-slate-950 duration-300 ease-in-out'>
                  {ctaText}
                </span>
              </div>
            </Link>
            <div className='mt-8 pb-24'>
              <p className='text-md mb-4 md:text-xl'>Powering top creators on</p>
              <div className='align-center flex justify-center space-x-4 md:space-x-8'>
                {plateformLogos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                    alt={logo.alt}
                    className='h-[24px] w-auto md:h-[42px]'
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;
