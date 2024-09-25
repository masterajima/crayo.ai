import React from 'react';
import { Card } from '@/shadcn/ui/card';
import CardComponent from '@/components/card';
import StoryTopicInput from '@/components/story-topic';
import StoryTone from '@/components/story-tone';
import MaxWordAInput from '@/components/max-word';
import GenrateScript from '@/components/genrate-script';
import Image from 'next/image';

const FeaturesPage = () => {
  const storyTopics = ['Clockwork Detective', 'Garden of Whispers', 'Mystory Manor'];
  const storyTone = ['Funny', 'Mystory', 'Horror'];
  return (
    <div className='flex flex-col lg:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start lg:p-12 md:p-8  w-full mt-8'>
      <CardComponent className='md:w-[30%] pt-8'>
        <div className='flex flex-col w-full h-[480px] lg:items-start px-4'>
          <div className='flex flex-col items-start justify-start  gap-4 lg:px-3 '>
            <p className='lg:text-[11.6px] lg:text-sm text-xs font-semibold text-start text-[#000d49] w-full'>
              Enter your story topic
            </p>

            <StoryTopicInput topics={storyTopics} />
            <div className='flex items-start justify-start gap-2 '>
              <div className='flex items-center rounded-full lg:p-1 border-[#e9f0ff] px-6 bg-blue-100 '>
                <p className='text-[#000D49] lg:text-xs text-[9.5px]'>
                  Clockwork Detective
                </p>
              </div>
              <div className='flex items-center rounded-full lg:p-1 border-[#e9f0ff] px-6 bg-blue-100 '>
                <p className='text-[#000D49] lg:text-xs text-[9.5px]'>Garden Whispers</p>
              </div>
              <div className='flex items-center rounded-full lg:p-1 border-[#e9f0ff] px-6 bg-blue-100 '>
                <p className='text-[#000D49] lg:text-xs text-[9.5px]'>
                  Journey of Avion
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start justify-start'>
              <div className='flex p-2 border-[#e9f0ff] '>
                <div className='flex flex-col'>
                  <p className='text-[#000d49] font-normal text-start text-[11.6px]'>
                    Select Story Tone
                  </p>
                  <div className='h-[37px] w-[378px] border-[#e1ebff] bg-white'>
                    <div className='h-[37px] w-[378px] border-[#e1ebff] bg-white rounded-full'>
                      <div className='flex items-start justify-start gap-2'>
                        <div className='flex items-center rounded-lg bg-[#e4eeff] border-[#e9f0ff] gap-2 p-2 '>
                          <p className='text-[#000d49] text-[9.7px]'>Funny</p>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            class='icon icon-tabler icon-tabler-circle-x'
                            width='11'
                            height='11'
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
                            <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
                            <path d='M10 10l4 4m0 -4l-4 4' />
                          </svg>
                        </div>
                        <div className='flex items-center rounded-lg bg-[#e4eeff] border-[#e9f0ff] gap-2 p-2 '>
                          <p className='text-[#000d49] text-[9.7px]'>Mystry</p>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            class='icon icon-tabler icon-tabler-circle-x'
                            width='11'
                            height='11'
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
                            <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
                            <path d='M10 10l4 4m0 -4l-4 4' />
                          </svg>
                        </div>
                        <div className='flex items-center rounded-lg bg-[#e4eeff] border-[#e9f0ff] gap-2 p-2 '>
                          <p className='text-[#000d49] text-[9.7px]'>Horror</p>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            class='icon icon-tabler icon-tabler-circle-x'
                            width='11'
                            height='11'
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
                            <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
                            <path d='M10 10l4 4m0 -4l-4 4' />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col items-start mt-6'>
                <p className='text-[#000d49] text-[11.6px]'>Max Words</p>
              </div>
              <MaxWordAInput />
              <GenrateScript />
              <div className='flex flex-col items-start justify-start mt-4'>
                <p className='text-[18px] text-[#000d49]'>1-</p>
                <h3 className='text-[#000d49] text-[17px] font-bold'>
                  Write and Outline
                </h3>
                <div className='flex flex-col items-start justify-start'>
                  <p className='text-sm text-[#000d49b0] w-2/3   text-start'>
                    Start with writing script using a prompt or using template
                    suggestions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardComponent>
      <CardComponent className='md:w-[30%] '>
        <div className='flex flex-col items-start justify-start h-[500px] mt-4 px-8'>
          <p className='text-[#311E57] text-[11.64px] px-3 '>Select your Font Style</p>
          <div className='flex flex-col items-start justify-start border-[#e8e8fd] bg-white rounded-lg p-2 mt-2'>
            <div className='flex items-center h-[52px] justify-center border-[#e8e8fd] gap-2'>
              <div className='flex items-center bg-[#E9EEFF] border-[#e8e8fd] rounded-lg p-2'>
                <Image
                  src='/assets/images/quick.avif'
                  alt='quick'
                  width={100}
                  height={100}></Image>
              </div>
              <div className='flex items-center h-[52px] justify-center border-[#e8e8fd]'>
                <div
                  className='flex items-center bg-[#E9E5FF] border-[#e8e8fd] rounded-lg p-2'
                  p-2>
                  <Image
                    src='/assets/images/brown.png'
                    alt='brown'
                    width={100}
                    height={100}></Image>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-2 mt-4 px-3'>
            <p className='text-[#000d49] font-[Inter] text-start text-[11.6px]'>
              Select Story Background
            </p>
          </div>
          <div className='flex items-start justify-start gap-4 bg-[#F9F9FF] border-[#e9e9fd] rounded-lg'>
            <div className='flex items-center justify-center gap-8 border-[#e9e9fd] h-[102px] w-[400px]'>
              <div className='h-[102px] w-[400px] block'>
                <section className='flex items-center p-3 opacity-1 '>
                  <ul className=' list-none flex items-center justify-center gap-2 border-[#e3e3ff] transform duration-300 '>
                    <li>
                      <div className='flex flex-col items-start justify-start p-2 gap-4  bg-white rounded-lg w-full'>
                        <div className='border-[#e3e3ff] bg-[#e9e5ff] rounded-lg flex items-start '>
                          <div className=' inset-0'>
                            <Image
                              src='/assets/images/user.avif'
                              alt='user'
                              width={114}
                              height={102}
                              className='object-cover object-center rounded-lg'
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex flex-col items-start justify-start p-2 gap-4  bg-white rounded-lg w-full'>
                        <div className='border-[#e3e3ff] bg-[#e9e5ff] rounded-lg flex items-start '>
                          <div className=' inset-0'>
                            <Image
                              src='/assets/images/user.avif'
                              alt='user'
                              width={114}
                              height={102}
                              className='object-cover object-center rounded-lg'
                            />
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className='flex flex-col items-start justify-start p-2 gap-4  bg-white rounded-lg w-full'>
                        <div className='border-[#e3e3ff] bg-[#e9e5ff] rounded-lg flex items-start '>
                          <div className=' inset-0'>
                            <Image
                              src='/assets/images/user.avif'
                              alt='user'
                              width={114}
                              height={102}
                              className='object-cover object-center rounded-lg'
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-2 mt-4'>
            <p className='text-[11.6px] text-[#311e57] font-semibold'>
              Select Story Background
            </p>
          </div>
          <div className='w-[378px] h-[37px] mt-4'>
            <div className='bg-white border-[#e8e8fd] rounded-lg p-2'>
              <div className='flex gap-2 z-1 bottom-5 border-[#e9e9fd]'>
                <div className='flex items-center justify-center p-2 rounded-lg bg-[#e9e5ff]'>
                  <p className='text-[9.7px] text-[#51497f]'>William - Male</p>
                </div>
                <div className='flex items-center justify-center p-2 rounded-lg bg-[#E9E5FF66]'>
                  <p className='text-[9.7px] text-[#51497f]'>Henry - Male</p>
                </div>
                <div className='flex items-center justify-center p-2 rounded-lg bg-[#E9E5FF66]'>
                  <p className='text-[9.7px] text-[#51497f]'>Jason - Male</p>
                </div>
                <div className='flex items-center justify-center p-2 rounded-lg bg-[#E9E5FF66]'>
                  <p className='text-[9.7px] text-[#51497f]'>Hannah - Male</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start  mt-8'>
            <p className='text-[#311e57] text-[18px]'>2-</p>
            <h3 className='text-[#311e57] font-bold'>Customize and Style</h3>
          </div>

          <div className='flex flex-col items-start justify-start'>
            <p className='text-[#311E5780] text-sm text-start w-2/3'>
              Select background video, voice and a music from free templates.
            </p>
          </div>
        </div>
      </CardComponent>
      <CardComponent className=' w-full'>
        <div className='flex flex-col items-center justify-center  gap-4 border-[#e9f0ff] bg-[#f9fbff] lg:h-[480px] px-6'>
          <div className='left-[50px] w-[122px] top-[90px] z-2 flex flex-col relative items-center justify-center mx-auto '>
            <Image
              src='/assets/images/current.avif'
              alt='white'
              width={400}
              height={400}
            />
          </div>
          <div className='flex flex-col items-center justify-center h-[200px] relative z-1 top-[2px] left-[50px] right-[-50px]'>
            <div className='w-[268px] h-[300px] flex items-center mx-auto absolute'>
              <div className='w-[786px] h-[300px] relative '>
                <Image
                  src='/assets/images/whitecircle.svg'
                  alt=''
                  width={400}
                  height={200}
                  className='object-cover object-center'></Image>
              </div>
            </div>
          </div>
          <div className='flex  items-center justify-center  p-2 bg-[#e4eeff] border-[#e9f0ff] rounded-full'>
            <p className='text-[10.6px] text-[#000d49]'>Exporting Video...50%</p>
          </div>

          <div className='flex flex-col items-start justify-start gap-4'>
            <p className='text-[18px] text-[#000d49]'>3-</p>
            <h3 className='text-[#000d49] text-[17px] font-bold'>Finish&Export</h3>

            <div className='flex flex-col items-start justify-start '>
              <p className='text-[15px] text-[#000d4980]'>
                Choose export format and download generated videos, script or narration.
              </p>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
};

export default FeaturesPage;
