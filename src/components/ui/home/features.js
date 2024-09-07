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
    <div className='flex flex-col lg:flex-row gap-4 items-center md:items-start justify-center md:justify-start lg:p-12 md:p-8  w-full'>
      <CardComponent className='md:w-[30%]'>
        <div className='flex flex-col w-full h-[480px] lg:items-start '>
          <div className='flex flex-col items-start justify-start  gap-4 lg:px-3 mt-6'>
            <p className='lg:text-[11.6px] text-sm font-semibold  text-[#000d49] w-full'>
              Enter your story topic
            </p>
            <StoryTopicInput topics={storyTopics} />
            <div className='flex flex-col items-start justify-start'>
              <div className='flex p-2 border-[#e9f0ff] '>
                <div className='flex flex-col'>
                  <p className='text-[#000d49] font-normal text-[11.6px]'>
                    Select Story Tone
                  </p>
                </div>
              </div>

              <StoryTone tones={storyTone} />
              <div className='flex flex-col items-start mt-6'>
                <p className='text-[#000d49] text-[11.6px]'>Max Words</p>
              </div>
              <MaxWordAInput />
              <GenrateScript />
              <div className='flex flex-col items-start justify-start'>
                <p className='text-[18px] text-[#000d49]'>1-</p>
                <h3 className='text-[#000d49] text-[17px] font-bold'>
                  Write and Outline
                </h3>
                <p className='text-[15px] text-[#000d49] w-1/2 text-sm text-start'>
                  Start with writing script using a prompt or using template suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardComponent>
      <CardComponent className='md:w-[30%]'>
        <div className='flex flex-col items-start justify-start h-[500px]'>
          <p className='text-[#000d49] text-[11.64px] '>Select your Font Style</p>
          <div className='border-[#e8e8fd] bg-white flex flex-col items-start justify-start gap-2 p-2 rounded-lg mt-4'>
            <div className='flex items-center justify-centr h-[52px] gap-[7px] border-[#e8e8fd]'>
              <div className='flex items-center justify-center bg-[#e9e4ff] p-2  rounded-lg border-[#e8e8fd] gap-4'>
                <div className='w-[126px] relative flex'>
                  <Image
                    src='/assets/images/quick.avif'
                    alt='quick'
                    width={126}
                    height={126}
                    className='object-fill object-center'
                  />
                </div>

                <div className='flex items-center p-2 gap-2 rounded-lg bg-[#e9e5ff4d] border-[#e8e8fd]'>
                  <div className='flex items-center justify-center h-[52px] gap-[7px] border-[#e8e8fd]'>
                    <div className='flex w-[126px]'>
                      <Image
                        src='/assets/images/brown.png'
                        alt='brown'
                        width={126}
                        height={126}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-2 mt-4'>
            <p className='text-[#000d49] text-[11.6px]'>Select Story Baackground</p>
          </div>
          <div className='flex items-start justify-start gap-4 bg-[]border-[#e9e9fd] rounded-lg'>
            <div className='flex items-center justify-center gap-8 border-[#e9e9fd]'>
              <div className='h-[102px] w-[400px] block'>
                <section className='flex items-center p-3 opacity-1 '>
                  <ul className=' list-none flex items-center justify-center gap-2 border-[#e3e3ff] transform duration-300 '>
                    <li>
                      <div className='flex flex-col items-start justify-start p-2 gap-4  bg-white rounded-lg w-full'>
                        <div className='border-[#e3e3ff] bg-[#e9e5ff] rounded-lg '>
                          <div className=' inset-0'>
                            <Image
                              src='/assets/images/user.avif'
                              alt='user'
                              width={100}
                              height={102}
                              className='object-cover object-center rounded-lg'
                            />
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className='flex flex-col border-[#e8e8fd] rounded-lg  bg-white w-full gap-8 p-3'>
                        <div className='w-[100px] h-[88px] '>
                          <div className=' inset-0 border-[#e8e8fd] rounded-lg'>
                            <Image
                              src='/assets/images/train.png'
                              alt='train'
                              width={100}
                              height={102}
                              className='object-cover object-center rounded-lg'
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='flex flex-col items-start rounded-lg p-2 bg-white border-2 border-[#e8e8fd] '>
                        <div className='w-[98px] h-[88px]'>
                          <div className=' inset-0'>
                            <Image
                              src='/assets/images/heel.avif'
                              alt='heel'
                              width={100}
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
            <div className='bg-white border-[#e8e8fd] rounded-lg'>
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
          <div className='flex flex-col items-start justify-start gap-4'>
            <p className='text-[#311e57] text-[18px]'>2-</p>
          </div>
          <div className='flex flex-col items-start justify-start'>
            <h3 className='text-[#311e57] font-bold'>Customize and Style</h3>
          </div>
          <div className=''>
            <p className='text-[#311E5780] text-[15px] w-2/3'>
              Select background video, voice and a music from free templates.
            </p>
          </div>
        </div>
      </CardComponent>
      <CardComponent className=' w-[30%]'>
        <div className='flex flex-col items-center justify-center  gap-4 border-[#e9f0ff] bg-[#f9fbff]'>
          <div className='w-full h-full border-[#e9f0ff]'></div>
          <div className='flex  items-center justify-center  p-2 bg-[#e4eeff] border-[#e9f0ff] rounded-full'>
            <p className='text-[10.6px] text-[#000d49]'>Exporting Video...50%</p>
          </div>
          <div className='opacity-1  '>
            <Image
              src='/assets/images/circle.avif'
              alt='circle'
              width={100}
              height={100}
              className='object-cover object-center'
            />
          </div>
          <div className='flex flex-col items-start justify-start gap-4'>
            <p className='text-[18px] text-[#000d49]'>3-</p>
            <h3 className='text-[#000d49] text-[17px] font-bold'>Finish&Export</h3>

            <div className=''>
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
