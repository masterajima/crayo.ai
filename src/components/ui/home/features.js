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
              <div className='flex items-center justify-center bg-[#e9e4ff] p-2 gap-2 rounded-lg border-[#e8e8fd]'>
                <div className='w-[126px] relative flex'>
                  <Image
                    src='/assets/images/quick.avif'
                    alt=''
                    width={126}
                    height={126}
                    className='object-fill object-center'
                  />
                </div>
              </div>
            </div>
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
          <div className='flex flex-col items-start justify-start gap-2 mt-4'>
            <p className='text-[#000d49] text-[11.6px]'>Select Story Baackground</p>
          </div>
          <div className='flex items-start justify-start gap-4 bg-[#e9e4] border-[#e9e9fd] rounded-lg'>
            <div className='flex items-center justify-center gap-8 border-[#e9e9fd]'>
              <div className='h-[102px] w-[400px] block'>
                <section className='flex items-center p-3 opacity-1 '>
                  <ul className=' list-none flex items-center justify-center gap-2 border-[#e3e3ff] transform duration-300 '>
                    <li>
                      <div className='border-[#e3e3ff] bg-[#e9e5ff] rounded-lg'>
                        <div className='absolute inset-0'>
                          <Image
                            src='/assets/images/user.avif'
                            alt='user'
                            width={200}
                            height={200}
                            className='object-cover object-center'
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='w-[100px] h-[88px] relative'>
                        <div className='absolute inset-0 border-[#e8e8fd]'>
                          <Image
                            src='/assets/images/train.png'
                            alt='train'
                            width={200}
                            height={200}
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
};

export default FeaturesPage;
