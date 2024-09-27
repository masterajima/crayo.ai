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
  backgroundImage,
  logo,
  menuItem,
  tagline,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
  heroImage,
  features,
}) => {
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
                  {tagline}
                </p>
                <div className='w-2 h-2 bg-[#000D49] rounded-full ml-2'></div>
              </div>
              <div className='flex flex-col lg:w-2/3  mx-12'>
                <h1 className='lg:text-5xl text-2xl   text-[#000d49] font-semibold mb-4 '>
                  {title}
                </h1>
                <p className='lg:text-lg text-md mb-8 '>{description}</p>
              </div>
              <div className='flex justify-center gap-4 lg:px-4 '>
                <Link
                  href={ctaPrimary.href}
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
                  <span className='mr-2 lg:p-1'>{ctaPrimary.label}</span>
                </Link>
                <Link
                  href={ctaSecondary.href}
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
                  <span className='lg:mr-2 text-xs'>{ctaSecondary.label}</span>
                </Link>
              </div>
              <div className=' flex items-start justify-start w-full overflow-hidden gap-4 mt-4'>
                <div className='flex-1  overflow-visible  '>
                  <Image
                    src={heroImage}
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
          {features.map((feature, index) => (
            <FeatureTag
              key={index}
              icon={feature.icon}
              label={feature.label}></FeatureTag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
