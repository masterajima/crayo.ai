import React from 'react';
import { Card } from '@/shadcn/ui/card';

const FeaturesPage = () => {
  return (
    <div className='flex flex-col items-center md:items-start justify-center md:justify-start lg:p-12 md:p-8  w-full'>
      <Card className='flex flex-col items-start justify-start rounded-3xl border-blue-300 bg-[#f9fbff] gap-4 lg:p-12 w-full  md:p-6 md:w-[30%] '>
        <div className='flex flex-col w-full h-[480px] lg:items-start '>
          <div className='flex flex-col items-start justify-start  gap-4 lg:px-3 mt-6'>
            <p className='lg:text-[11.6px] text-sm font-semibold  text-[#000d49] w-full'>
              Enter your story topic
            </p>
            <div className='flex flex-col items-start justify-start relative'>
              <div className='absolute bg-white top-0  lg:h-[37px] lg:w-[378px] items-start rounded-full  '>
                <div className='top-[12px] left-[16px] absolute'>
                  <p className='text-sm  text-[#000d49]'>
                    <span className='text-sm lg:text-left text-start text-[#000d49]'>
                      write a story about
                    </span>
                    <span className='ml-1 text-[#a1b7ff] text-sm animate-spin  transition ease-in-out'>
                      ✦
                    </span>
                  </p>
                  <div className='flex gap-2 mt-6 '>
                    <div className='flex gap-5 bg-[#d6e8ff] items-start justify-start p-2 rounded-full '>
                      <p className='text-[#000d49] text-[10px] '>Clockwork Detective</p>
                    </div>
                    <div className='flex gap-5 bg-[#d6e8ff] items-center justify-center p-2 rounded-full bg-[#D6E8FF73]'>
                      <p className='text-[#000d49] text-[10px]'>Garden of Whispers</p>
                    </div>
                    <div className='flex gap-5 bg-[#d6e8ff] items-center justify-center p-2 rounded-full bg-[#D6E8FF73]'>
                      <p className='text-[#000d49] text-[10px]'>Garden of Whispers</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='flex p-2 border-[#e9f0ff] '>
                      <div className='flex flex-col'>
                        <p className='text-[#000d49] font-normal text-[11.6px]'>
                          Select Story Tone
                        </p>
                      </div>
                    </div>
                    <div className='relative h-[37px] w-[378px] mt-6'>
                      <div className='absolute h-[37px] w-[378px] rounded-full border-[#e1ebff]  top-[0px] bg-white'>
                        <div className='flex gap-2'>
                          <div className='flex items-start justify-start z-1 gap-6 bg-white '>
                            <div className='flex items-center justify-center bg-[#e4eeff] gap-4 p-2 rounded-lg'>
                              <p className='text-[9.7px] text-[#000d49]'>Funny</p>
                            </div>{' '}
                          </div>
                          <div className='flex items-start justify-start z-1 gap-6 '>
                            <div className='flex items-center justify-center bg-[#e4eeff] gap-4 p-2 rounded-lg'>
                              <p className='text-[9.7px] text-[#000d49]'>Mystory</p>
                            </div>
                          </div>
                          <div className='flex items-start justify-start z-1 gap-6 '>
                            <div className='flex items-center justify-center bg-[#e4eeff] gap-4 p-2 rounded-lg'>
                              <p className='text-[9.7px] text-[#000d49]'>Horror</p>
                            </div>
                          </div>
                        </div>

                        <div className='flex flex-col items-start mt-6'>
                          <p className='text-[#000d49] text-[11.6px]'>Max Words</p>
                        </div>
                        <div className='relative h-[37px] w-[378px]'>
                          <div className='absolute border-[#e1ebff] w-[378px] h-[37px] '>
                            <div className='left-[16px] top-[12px]'>
                              <p className='text-[10px] text-[#000d4980] text-left'>
                                <span className='text-[10px] text-left text-[#000d4980]'>
                                  <div className='block text-left'>
                                    <span className='animate-bounce transition duration-300'>
                                      <span className='text-left border-[#e1ebff]'>
                                        3500+
                                      </span>
                                      <span className='text-[#000d4980]'>✦</span>
                                    </span>
                                  </div>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-start rounded-full p-2  bg-[#d6e8ff] border-[#e1ebff] gap-2'>
                      <svg
                        viewBox='0 0 15 15'
                        preserveAspectRatio='none'
                        width='22'
                        height='22'>
                        <use href='#svg2134566869_1463'></use>
                      </svg>
                    </div>
                    <div className='flex flex-col items-start justify-start mt-4'>
                      <p className='text-[#000d4980] text-sm'>Genrate Script</p>
                    </div>

                    <div className='flex flex-col items-start justify-start'>
                      <p className='text-[18px] text-[#000d4980]'>1- </p>
                      <h3 className='text-[#000d49] font-bold text-[17px] '>
                        Write and outline
                      </h3>
                      <p className='text-[15px] text-[#000d49] w-1/2 text-sm text-start'>
                        Start with writing script using a prompt or using template
                        suggestions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FeaturesPage;
