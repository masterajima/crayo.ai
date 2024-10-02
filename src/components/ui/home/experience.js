import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ExperiencePage = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className='absolute inset-0'>
        <Image
          src='/assets/images/mom.avif'
          alt='mom'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <div className='relative z-10 flex flex-col md:items-start md:justify-start items-center justify-center h-full text-[#000D49] mt-8 md:p-8 md:px-12'>
        <div className='flex items-center gap-4 justify-center p-2 border-2 rounded-full px-6 border-[#ffffff66] bg-[#ffffff66] mb-8'>
          <div className='rounded-full w-[3px] h-[3px] bg-[#000d49]'></div>
          <p>How It Works</p>
          <div className='rounded-full w-[3px] h-[3px] bg-[#000d49]'></div>
        </div>

        <div className='flex flex-col md:items-start md:justify-start items-center justify-center text-start max-w-2xl px-12 '>
          <h2 className='md:text-5xl text-2xl font-bold mb-4'>Experience ⚡Crayo </h2>
        </div>
        <div className='flex md:flex-row flex-col items-center'>
          <p className='md:text-lg md:w-2/4'>
            Crayo - your gateway to creating viral TikTok clips in seconds! Auto-generate
            captions, effects, background, and music for you.
          </p>
          <div className='flex items-end justify-end gap-2 mt-8'>
            <Link
              href='https://crayo.ai/dashboard'
              className='flex items-center justify-center gap-2 p-2 rounded-full border-[#ffffff66]  bg-white text-[#000d49]'>
              <div className='w-[36px] h-[36px] rounded-full bg-[#cfd5fb]'>
                <div className='flex flex-col items-center justify-center'>
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
              <p className='text-[#000d49]'>Try Now</p>
            </Link>
          </div>
        </div>

        <div className='flex md:items-start md:justify-start items-center justify-center w-[779px] mt-8'>
          <div className='flex items-center  justify-center gap-2 p-2 px-5 border-[#ffffff33] bg-[#ffffff4d] rounded-full'>
            <p className='text-[#000d49] text-sm'>AI Voice</p>
          </div>
          <div className='h-[11px] w-[11px] text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 173 11'
              preserveAspectRatio='none'
              style={{ width: '11', height: '11' }}>
              <path
                d='M86.5 0 L173 5.5 L86.5 11 L0 5.5 Z'
                fill='white'
              />
            </svg>
          </div>
          <div className='flex items-center  justify-center gap-2 p-2 px-8 border-[#ffffff33] bg-[#ffffff4d] rounded-full'>
            <p className='text-[#000d49] text-sm'>AI Background</p>
          </div>
          <div className='h-[20px] w-[20px] text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 173 11'
              preserveAspectRatio='none'
              style={{ width: '11', height: '11' }}>
              <path
                d='M86.5 0 L173 5.5 L86.5 11 L0 5.5 Z'
                fill='white'
              />
            </svg>
          </div>
          <div className='flex items-center  justify-center gap-2 p-2 px-8 border-[#ffffff33] bg-[#ffffff4d] rounded-full'>
            <p className='text-[#000d49] text-sm'>AI Script Genrator</p>
          </div>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 173 11'
            preserveAspectRatio='none'
            style={{ width: '11', height: '11' }}>
            <path
              d='M86.5 0 L173 5.5 L86.5 11 L0 5.5 Z'
              fill='white'
            />
          </svg>
        </div>
        <div className='flex  items-start justify-start w-full gap-10 bg-[#ffffff2e] backdrop:blur p-10 mt-10'>
          <div className='flex items-start justify-start gap-2'>
            <p className='text-[20px] text-[#000d49] font-bold'>Navigation</p>
          </div>
          <div className='flex items-start justify-start gap-2'>
            <Link
              href='https://crayo.ai/pricing'
              className='flex items-center justify-center p-1 gap-2 rounded-full px-6 bg-[#ffffff66] border-[#ffffff66]'>
              <p className='text-[#000d49]'>pricing</p>
            </Link>
          </div>
          <div className='flex items-start justify-start '>
            <Link
              href='https://crayo.ai/blog'
              className='flex items-center justify-center p-1 gap-2 rounded-full px-6 bg-[#ffffff66] border-[#ffffff66]'>
              <p className='text-[#000d49]'>Insights</p>
            </Link>
          </div>
          <div className='flex items-start justify-start gap-2'>
            <Link
              href='https://crayo.ai/blog'
              className='flex items-center justify-center p-1 gap-2 rounded-full px-6 bg-[#ffffff66] border-[#ffffff66]'>
              <p className='text-[#000d49]'>Affiliates</p>
            </Link>
          </div>
          <div className='flex items-start justify-start gap-2'>
            <Link
              href='https://crayo.ai/blog'
              className='flex items-center justify-center p-1 gap-2 rounded-full px-6 bg-[#ffffff66] border-[#ffffff66]'>
              <p className='text-[#000d49]'>Affiliates Tos</p>
            </Link>
          </div>
          <div className='flex items-start justify-start gap-2'>
            <p className='text-[20px] text-[#000d49] font-bold'>Social</p>
          </div>
          <div className='flex items-start justify-start gap-2'>
            <Link
              href='https://x.com/CrayoAI'
              className='flex items-center justify-center p-1 gap-2 rounded-full px-6 bg-[#ffffff66] border-[#ffffff66]'>
              <p className='text-[#000d49]'>Twitter</p>
            </Link>
          </div>
          <div className='flex items-start justify-start '>
            <Link
              href='https://discord.com/invite/crayo'
              className='flex items-center justify-center p-1 gap-2 rounded-full px-6 bg-[#ffffff66] border-[#ffffff66]'>
              <p className='text-[#000d49]'>Discord</p>
            </Link>
          </div>
          <div className='flex items-start justify-start gap-2'>
            <Link
              href='https://crayo.ai/blog'
              className='flex items-center justify-center p-1 gap-2 rounded-full px-6 bg-[#ffffff66] border-[#ffffff66]'>
              <p className='text-[#000d49]'>Instegram</p>
            </Link>
          </div>
        </div>
        <div className='flex justify-between gap-10 md:items-end mt-14'>
          <p className='text-[15px] text-[#000d49b3]'>Copyright © 2024 Crayo AI Inc.</p>
          <p className='text-[15px] text-[#000d49b3]'>
            <Link href='https://crayo.ai/terms-condition'>Terms & Conditions</Link>
          </p>
          <p className='text-[15px] text-[#000d49b3]'>
            <Link href='https://crayo.ai/privacy'> Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
