import { Card } from '@/shadcn/ui/card';
import { Image } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const ToolsPage = () => {
  return (
    <div className='flex flex-col md:items-center md:justify-center lg:p-20  w-full'>
      <Card className='flex flex-col lg:items-start lg:justify-start md:items-center md:justify-center rounded-3xl border-gray-800  bg-gray-900 lg:p-18 w-full h-full'>
        <div className='flex flex-col items-start justify-start md:items-center md:justify-center mt-8'>
          <Link
            href='/'
            className='flex bg-[#ffffff0f] items-center justify-center p-2 rounded-full px-3 border-white'>
            <div className='flex items-center p-2 rounded-lg px-6 py-2 gap-8 border-white'>
              <div className='w-3 h-3 rounded-full text-white bg-white'></div>
              <p className='text-white'>Features</p>
              <div className='w-3 h-3 rounded-full text-white bg-white'></div>
            </div>
          </Link>
          <div className=' gap-4 flex flex-col items-center mt-8'>
            <h2 className='md:w-[350px] lg:w-[60%] text-[35px] font-semibold text-white'>
              All in one tool for Genrating
              <span className='text-white text-[35px]'>viral Shorts using AI</span>
            </h2>
            <p className='text-[15px] text-white'>
              Create unlimited shorts videos at once. Auto generate captions, effects,
              background &amp; music.
            </p>
          </div>
          <div className='flex flex-wrap gap-10 mt-6'>
            <div className='flex items-center justify-center gap-4'>
              <Link
                href='https://crayo.ai/dashboard'
                className='bg-[#ffffff0f] flex items-center gap-2 px-6 rounded-full p-2'>
                <div className='flex  items-center '>
                  <div className='flex flex-col items-center'>
                    <svg
                      overflow='visible'
                      width='11'
                      height='11'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      {' '}
                      <path
                        stroke-linejoin='miter'
                        stroke='var(--token-10a952ba-a5c3-4aa6-9d31-a877066a81ee, rgb(255, 255, 255))'
                        d='M13.5 5L20.5 12L13.5 19M3.5 12L20 12'
                        stroke-width='2'></path>{' '}
                    </svg>
                  </div>
                </div>
                <div className='flex z-2 items-center justify-center'>
                  <p className='text-white'>Try Now</p>
                </div>
              </Link>
              <Link
                href='https://crayo.ai/dashboard'
                className='bg-[#ffffff0f] flex items-center gap-2 px-6 rounded-full p-2'>
                <div className='flex  items-center '>
                  <div className='flex flex-col items-center'>
                    <svg
                      overflow='visible'
                      width='11'
                      height='11'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      {' '}
                      <path
                        stroke-linejoin='miter'
                        stroke='var(--token-10a952ba-a5c3-4aa6-9d31-a877066a81ee, rgb(255, 255, 255))'
                        d='M13.5 5L20.5 12L13.5 19M3.5 12L20 12'
                        stroke-width='2'></path>{' '}
                    </svg>
                  </div>
                </div>
                <div className='flex z-2 items-center justify-center'>
                  <p className='text-white'>Try Now</p>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-center gap-8 w-full px-12 p-12'>
            <Card className='flex  items-center justify-center rounded-3xl bg-[#ffffff0f] border-[#e9f0ff1a] lg:h-[540px]  w-full  p-18 lg:mt-8 gap-6 mb-8 px-8'>
              <div className='flex flex-col items-start'>
                <div className='flex itmems-start p-2 rounded-full px-3 gap-2 bg-[#e9f0ff0a] border-[#9ab6ff] border-2 rotate-[-0.0522561rad] -translate-x-1/2 -translate-y-1/2 mb-4'>
                  <div className='h-[22px] w-[22px]'>
                    <div className='w-full h-full  '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='icon icon-tabler icon-tabler-music'
                        width='33'
                        height='33'
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
                        <path d='M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
                        <path d='M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
                        <path d='M9 17v-13h10v13' />
                        <path d='M9 8h10' />
                      </svg>
                    </div>
                  </div>

                  <span className='text-white text-lg font-[Inter] tracking-tight'>
                    Popular Music
                  </span>
                </div>

                <div className='flex items-center p-2 rounded-full px-3 gap-2 bg-[#9ab7ff1a] border-[#9ab6ff] -translate-x-1/2 -translate-y-1/2 rotate-[-0.0522561rad]'>
                  <div className='h-[24px] w-[24px]'>
                    <div className='w-full h-full  bg-white'>
                      <svg style={{ width: '7', height: '7' }}>
                        <use href='#svg1124643241'></use>
                      </svg>
                    </div>
                  </div>
                  <span className='text-white text-lg font-[Inter] tracking-tight'>
                    Voice Narrator
                  </span>
                </div>

                <div className='flex items-center p-2 rounded-full px-3 gap-2 bg-[#9ab7ff1a] border-[#9ab6ff] -translate-x-1/2 -translate-y-1/2 rotate-[-0.0522561rad]'>
                  <div className='h-[24px] w-[24px]'>
                    <div className='w-full h-full  bg-white'>
                      <svg style={{ width: '7', height: '7' }}>
                        <use href='#svg1124643241'></use>
                      </svg>
                    </div>
                  </div>
                  <span className='text-white text-lg font-[Inter] tracking-tight'>
                    Background Video
                  </span>
                </div>
                <div className='flex items-center p-2 rounded-full  gap-2 bg-[#9ab7ff1a] border-[#9ab6ff] border-2 rotate-[0.000354249rad] translate-x-1/2 -translate-y-1/2 px-6'>
                  <div className='h-[24px] w-[24px]'>
                    <div className='w-full h-full  bg-white'>
                      <svg style={{ width: '100%', height: '100%' }}>
                        <use href='#svg3962925672'></use>
                      </svg>
                    </div>
                  </div>
                  <span className='text-white text-lg font-[Inter] tracking-tight '>
                    AI Image Genration
                  </span>
                </div>
                <div className='flex items-center p-2 rounded-full  gap-2 bg-[#9ab7ff1a] border-[#9ab6ff] border-2 rotate-[0.000354249rad] translate-x-1/2 -translate-y-1/2 px-6'>
                  <div className='h-[24px] w-[24px]'>
                    <div className='w-full h-full  bg-white'>
                      <svg style={{ width: '7', height: '7' }}>
                        <use href='#svg1124643241'></use>
                      </svg>
                    </div>
                  </div>
                  <span className='text-white text-lg font-[Inter] tracking-tight '>
                    Multi plateform
                  </span>
                </div>
                <div className='flex items-center p-2 rounded-full  gap-2 bg-[#9ab7ff1a] border-[#9ab6ff] border-2 rotate-[0.000354249rad] translate-x-1/2 translate-y-1/2 px-6'>
                  <div className='h-[24px] w-[24px]'>
                    <div className='w-full h-full  bg-white'>
                      <svg style={{ width: '7', height: '7' }}>
                        <use href='#svg1124643241'></use>
                      </svg>
                    </div>
                  </div>
                  <span className='text-white text-lg font-[Inter] tracking-tight '>
                    Manual Editing
                  </span>
                </div>
                <Card className='flex items-center justify-center rounded-3xl bg-[#d9d9d908] border-[#e9f0ff1a] gap-3 p-6 mt-8'>
                  <div className='flex flex-col items-start justify-start gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='icon icon-tabler icon-tabler-box-multiple'
                      width='44'
                      height='44'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='#2c3e50'
                      fill='white'
                      stroke-linecap='round'
                      stroke-linejoin='round'>
                      <path
                        stroke='none'
                        d='M0 0h24v24H0z'
                        fill='none'
                      />
                      <path d='M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z' />
                      <path d='M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2' />
                    </svg>
                    <h3 className='text-[17px] text-white font-[Inter] '>
                      Automated Video in Second
                    </h3>
                    <p className='text-[#ffffff99] text-sm'>
                      Auto generate captions, effects, background and music for you.
                    </p>
                  </div>
                </Card>
              </div>
            </Card>
            <Card
              className='flex flex-col  items-center justify-center rounded-3xl bg-[#f9fbff08] border-[#e9f0ff1a
] lg:h-[470px]  w-full p-18 lg:mt-8 gap-12 mb-8'>
              <div className='flex flex-col items-center justify-center top-[73px] absolute h-[195px] z-1 w-[232px] '>
                <div className='h-[196px] w-[135px] '>
                  <div className='w-full h-full border-[#e9f0ff1a] rounded-3xl'>
                    <svg
                      style={{ width: '100%', height: '100%' }}
                      viewBox='0 0 135 196'
                      preserveAspectRatio='none'
                      width='100%'
                      height='100%'>
                      <use href='#svg1373418638_465'></use>
                    </svg>
                  </div>
                </div>
                <div className='w-[135px] h-[215px] absolute'>
                  <div className='relative w-full h-full bg-[#d9d9d908] border-[#ffffff0f] rounded-3xl'>
                    <svg
                      style={{ width: '100%', height: '100%' }}
                      viewBox='0 0 135 196'
                      preserveAspectRatio='none'
                      width='100%'
                      height='100%'>
                      <use href='#svg859100512_464'></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div className='border-[#a2a5eb] border-2 flex flex-col left-1/2 items-center  p-4 bg-[#55577f1a] rounded-3xl'>
                <div className='h-[250px] w-[145px] border-[#a2a5eb] rounded-3xl '>
                  <video
                    autoPlay={true}
                    loop={true}
                    src='https://framerusercontent.com/assets/4Bdjj2NXSOa3V5aPSVieDrJC9bk.mp4'
                    className='object-cover cursor-auto bg-black border-[#a2a5eb] border-2 rounded-xl'></video>
                </div>
                <div className='flex bg-white flex-col items-center justify-center rounded-lg border-[#ffffff0f]'></div>
              </div>
              <Card className='flex fle-col items-center justify-center bg-[#d9d9d908] border-[#ffffff0f] rounded-3xl p-4 '>
                <div className='flex flex-col items-start justify-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='icon icon-tabler icon-tabler-ad'
                    width='44'
                    height='44'
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
                    <path d='M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
                    <path d='M7 15v-4a2 2 0 0 1 4 0v4' />
                    <path d='M7 13l4 0' />
                    <path d='M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5' />
                  </svg>
                  <h3 className='text-white text-[17px] font-[Inter]'>Auto Subtitle</h3>
                  <p className='text-[#ffffff99] text-sm'>
                    Automatic AI subtitle genrator
                  </p>
                </div>
              </Card>
            </Card>
            <Card className='flex flex-col items-start justify-start border-[#e9f0ff1a] bg-[#f9fbff08] rounded-3xl p-[10px] h-[500px] w-full'>
              <div className='relative flex flex-col items-start justify-start gap-4 mt-8'>
                <p className='text-[17.6px] font-[Inter] text-white'>
                  Enter your story topic
                </p>
              </div>
              <div className='relative h-[56px] w-[573px] border-[#e9f0ff1a]'>
                <div className='absolute top-0 h-[56px] border-[#55577f66] bg-[#55577f3b] rounded-3xl w-[573px]'></div>
              </div>
              <div className=' top-[51px] left-[21px] z-1'>
                <p className='text-left text-[18px] font-[Inter] text-[#ffffff00]'>
                  <span className=' text-left text-[18px] font-[Inter] text-[#ffffff00] border-[#e9f0ff1a]'>
                    write a story about a girlfriend drama
                  </span>
                  <span className=''>✦</span>
                </p>
              </div>
              <div className='flex gap-4'>
                <div className='flex items-start gap-2 border-[#e9f0ff1a] rounded-full px-3 p-2 bg-[#55577f66]'>
                  <p className='text-[14.7px] text-white'>Genrate Outline</p>
                </div>
                <div className='flex items-start gap-2 border-[#e9f0ff1a] rounded-full px-3 p-2 bg-[#55577f66]'>
                  <p className='text-[14.7px] text-white'>Genrate Description</p>
                </div>
              </div>
              <div className='h-[92px] w-[453px]'></div>
              <div className='border-[#55577f80] bg-[#2e304f] h-[92px] top-0 w-[453px]'></div>
              <div className='flex flex-col items-start justify-start left-[20px] top-[20px]'>
                <div className='relative flex flex-col bg-[#54567e] h-[12px] w-[492px] opacity-1 '></div>
                <div className='flex flex-col items-start justify-start gap-2 border-[#e9f0ff1a]'>
                  <div className='bg-[#54567e] h-[12px] w-[351px] border-[#e9f0ff1a] rounded-lg'></div>
                  <div className='h-[12px] w-[271px] bg-[#54567e]'></div>
                </div>
              </div>

              <div className='flex flex-col items-start justify-start p-[26px] rounded-3xl border-[#ffffff0f] bg-[#d9d9d908] gap-3 w-full'>
                <div className='flex flex-col items-start justify-start gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='icon icon-tabler icon-tabler-message-circle-2'
                    width='44'
                    height='44'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='#2c3e50'
                    fill='white'
                    stroke-linecap='round'
                    stroke-linejoin='round'>
                    <path
                      stroke='none'
                      d='M0 0h24v24H0z'
                      fill='none'
                    />
                    <path d='M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1' />
                  </svg>
                  <h3 className='text-[17px] text-white font-[Inter]'>
                    AI Script Genrator
                  </h3>
                </div>
                <div className='flex flex-col items-start justify-start w-2/3'>
                  <p className='text-[15px] text-[#ffffff99]'>
                    Start with writing script using a prompt or using template
                    suggestions.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ToolsPage;
