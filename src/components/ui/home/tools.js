import { Card } from '@/shadcn/ui/card';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/shadcn/ui/button';

const ToolsPage = () => {
  return (
    <div className='flex flex-col items-center justify-between space-y-2 bg-gradient-to-b from-[#f0f7ff] to-white w-full px-4 py-3 text-center md:space-y-12 md:px-40 md:py-16 mt-8 '>
      <div className='flex items-center gap-2 p-2 px-3 py-1 text-black place-items-center dark:text-white dark:bg-black bg-white bg-opacity-20 sm:px-4 rounded-full'>
        <Image
          src='/assets/images/bulb.png'
          alt='bulb'
          width={16}
          height={16}></Image>
        <span className='text-[#4D7FED] text-sm font-bold sm:text-base'>FEATURES</span>
      </div>
      <div className='flex flex-col items-center justify-center space-y-2 w-full px-4 md:px-20'>
        <h3 className='font-semibold text-gray-900 text-[32px] md:text-[48px] leading-[120%]'>
          Crayo has the tools to support any use-case for your short-form content.
        </h3>
      </div>
      <div className='flex align-center justify-center pt-10 relative w-full'>
        <div className='absolute top-[7%] left-[0%] md:top-[8%] md:left-[15%] z-10 max-w-[160px] items-start rounded-xl space-y-2 bg-white text-start p-2.5 shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9f1fe] md:max-w-[275px] md:space-y-5 md:rounded-3x md:p-5'>
          <div className='relative aspect-[260/137]  w-full'>
            <Image
              src='/assets/images/video.png'
              alt='video'
              width={300}
              height={300}
              className='rounded-xl border border-slate-200 object-cover absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0'
            />
          </div>
          <div className='flex w-full justify-between items-center space-x-2 md:space-x-4'>
            <h6 className='text-[14px] max-w-[125px] leading-[110%] font-bold md:max-w-none md:text-[21px]'>
              Splitscreen video
            </h6>
            <button className='rounded-full bg-[#4D7FED]/10 p-2 transition-all duration-200 hover:opacity-200'>
              <Image
                src='/assets/images/plusBlue.png'
                alt='plus'
                width={8}
                height={8}
                className='transition-transform'
              />
            </button>
          </div>
        </div>
        <div className='absolute top-[-3%] left-[34%] md:top-[-1%] md:left-[40%] z-10 max-w-[160px]  space-y-2 rounded-xl bg-white items-start cursor-pointer p-2.5 text-start shadow-[o_13px_22px(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9F1FE] md:max-w-[275px] md:rounded-3xl md:p-5'>
          <div className='relative aspect-[260/137] w-full'>
            <Image
              src='/assets/images/fake-text.png'
              alt='fake '
              width={300}
              height={300}
              className='rounded-xl border border-slate-200 object-cover'
            />
          </div>
          <div className='flex w-full items-center justify-between space-x-2 md:space-x-4'>
            <h6 className='max-w-[125px] font-bold text-[14px] leading-[110%] md:max-w-none'>
              Fake Texts video
            </h6>
            <button className='rounded-full  bg-[#4D7FED]/10 p-2 transition-all duration-200 hover:opacity-70'>
              <Image
                src='/assets/images/plusBlue.png'
                alt='plus'
                width={8}
                height={8}
                className='transition-transform rounded-full object-cover'
              />
            </button>
          </div>
        </div>
        <div className='absolute top-[13%] right-[5%] md:right-[15%] md:top-[8%] z-10 max-w-[160px] space-y-2 cursor-pointer items-start rounded-xl bg-white p-2.5 shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 md:max-w-[275px] md:space-y-5 md:rounded-3xl md:p-5'>
          <div className='relative w-full aspect-[260/137]'>
            <Image
              src='/assets/images/avatar.png'
              alt='avtar'
              width={300}
              height={300}
              className='object-cover rounded-xl border border-slate-200'
            />
          </div>
          <div className='w-full flex items-center justify-between space-x-2 md:space-x-4'>
            <h6 className='max-w-[125px] font-bold text-[14px] leading-[110%]'>
              AI avtars
            </h6>
            <button className='rounded-full p-2 bg-[#4D7FED]/10 transition-all duration-200 hover:opacity-70'>
              <Image
                src='/assets/images/plusBlue.png'
                alt='plus'
                width={8}
                height={8}
                className='transition-transform duration-300 rounded-full'
              />
            </button>
          </div>
        </div>
        <div className='absolute bottom-[-3%] left-[3%] md:bottom-[4%] md:left-[20%] z-10 max-w-[160px] cursor-pointer items-start space-y-2 rounded-xl bg-white text-start shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9F1EF] md:max-w-[275px] md:space-y-5 md:rounded-3xl md:p-5'>
          <div className='relative aspect-[260/137] w-full'>
            <Image
              src='/assets/images/features.png'
              alt='features'
              width={300}
              height={300}
              className='border rounded-xl border-slate-200 object-cover'
            />
          </div>
          <div className='flex w-full items-center p-2 space-x-2 justify-between md:space-x-4'>
            <h6 className='font-bold text-[14px]md:text-[21px] leading-[110%]'>
              Youtube downloader
            </h6>
            <button className='rounded-full p-2 transition-all duration-200 hover:opacity-70 bg-[#4D7FED]/10'>
              <Image
                src='/assets/images/plusBlue.png'
                alt='plus'
                width={8}
                height={8}
                className='transition-transform duration-300 rounded-full'
              />
            </button>
          </div>
        </div>
        <div className='absolute bottom-[-2%] right-[3%] md:right-[20%] z-10 max-w-[160px] items-start space-y-2 rounded-xl bg-white p-2.5 text-start shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9F1FE] md:bottom-[4%] md:max-w-[275px] md:p-5 md:rounded-3xl md:space-y-5'>
          <div className='relative w-full aspect-[260/137]'>
            <Image
              src='/assets/images/voiceover.png'
              alt='voiceover'
              width={300}
              height={300}
              className='object-cover border border-slate-200 rounded'
            />
          </div>
          <div className='flex w-full justify-between items-center space-x-2 md:space-x-4'>
            <h6 className='font-bold text-[14px] md:text-[21px] leading-[110%]'>
              Voiceover story
            </h6>
            <Button className='rounded-full p-2 transition-all duration-200 hover:opacity-70  bg-[#4D7FED]/10'>
              <Image
                src='/assets/images/plusBlue.png'
                alt='plus'
                width={8}
                height={8}
                className='transition-transform duration-300 rounded-full'
              />
            </Button>
          </div>
        </div>
        <div className='md:p-18 align-center h-[350px] w-[350px] items-center justify-center flex rounded-full md:h-[750px] bg-[#4D7FED]/5'>
          <div className='md:p-18 flex h-[275px] w-[275px] justify-center rounded-full p-4 md:h-[600px] md:w-[600px]  bg-[#4D7FED]/5'>
            <div className='text-[21px] font-bold md:text-[32px]'>
              <span className='inline-block'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 100 100'>
                  <svg
                    width='21'
                    height='21'
                    viewBox='0 0 21 21'
                    style={{
                      opacity: 0.39774,
                      left: '14.3072%',
                      top: '75.6567%',
                      transform: 'scale(0.200859) rotate(138.068deg)',
                      position: 'absolute',
                    }}>
                    <path
                      d='M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z'
                      fill='#FE8BBB'></path>
                  </svg>

                  <svg
                    width='21'
                    height='21'
                    viewBox='0 0 21 21'
                    style={{
                      opacity: 0.640743,
                      left: '49.2781%',
                      top: '93.9338%',
                      transform: 'scale(0.238446) rotate(103.833deg)',
                      position: 'absolute',
                    }}>
                    <path
                      d='M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z'
                      fill='#9E7AFF'></path>
                  </svg>
                  <svg
                    width='21'
                    height='21'
                    viewBox='0 0 21 21'
                    style={{
                      opacity: 0.391281,
                      left: '62.8576%',
                      top: '73.662%',
                      transform: 'scale(0.382771) rotate(138.262deg)',
                      position: 'absolute',
                    }}>
                    <path
                      d='M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z'
                      fill='#9E7AFF'></path>
                  </svg>
                  <svg
                    width='21'
                    height='21'
                    viewBox='0 0 21 21'
                    style={{
                      opacity: 0.0357378,
                      left: '90.6001%',
                      top: '35.1101%',
                      transform: 'scale(0.0206677) rotate(148.928deg)',
                      position: 'absolute',
                    }}>
                    <path
                      d='M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z'
                      fill='#9E7AFF'></path>
                  </svg>
                  <svg
                    width='21'
                    height='21'
                    viewBox='0 0 21 21'
                    style={{
                      opacity: 0.474009,
                      left: '53.3246%',
                      top: '24.0602%',
                      transform: 'scale(0.477076) rotate(135.78deg)',
                      position: 'absolute',
                    }}>
                    <path
                      d='M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z'
                      fill='#FE8BBB'></path>
                  </svg>
                  <svg
                    width='21'
                    height='21'
                    viewBox='0 0 21 21'
                    style={{
                      opacity: 0.963074,
                      left: '34.9134%',
                      top: '61.7891%',
                      transform: 'scale(0.861157) rotate(118.338deg)',
                      position: 'absolute',
                    }}>
                    <path
                      d='M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z'
                      fill='#FE8BBB'></path>
                  </svg>
                </svg>
                <strong className='pt-10'>
                  Use countless viral-tested B-roll, overlays, fonts & more
                </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link href='https://crayo.ai/dashboard '>
        <button className='inline-flex items-center bg-black text-white justify-center whitespace-nowrap text-lg rounded-2xl font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/80 px-6 py-4'>
          Try all features
        </button>
      </Link>
    </div>
  );
};

export default ToolsPage;
