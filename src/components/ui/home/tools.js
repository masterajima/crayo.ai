import { Card } from '@/shadcn/ui/card';
import { Image } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/shadcn/ui/button';
import Features from '@/components/feature-list';
import VideoSection from '@/components/video-list';
import { IconVideo, IconMusic } from 'lucide-react';

const ToolsPage = () => {
  return (
    <div className='flex flex-col md:items-center md:justify-center lg:p-20  w-full'>
      <Card className='flex flex-col lg:items-start lg:justify-start md:items-center md:justify-center rounded-3xl border-gray-800  bg-gray-900 lg:p-18 w-full h-full'>
        <div className='flex flex-col items-start justify-start md:items-center md:justify-center mt-8'>
          <Button
            href='/'
            label='Features'
            icon={<IconMusic></IconMusic>}
          />
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
              <Button
                href='https://crayo.ai/dashboard'
                label='Try Now'></Button>
              <Button
                href='https://crayo.ai/dashboard'
                label='Try Now'></Button>
            </div>
          </div>
          <div className='flex items-center justify-center gap-8 w-full px-12 p-12'>
            <Card className='flex  items-center justify-center rounded-3xl bg-[#ffffff0f] border-[#e9f0ff1a] lg:h-[540px]  w-full  p-18 lg:mt-8 gap-6 mb-8 px-8'>
              <div className='flex flex-col items-start'>
                <Features
                  icon={<IconMusic></IconMusic>}
                  label='Popular Music'></Features>
                <Features
                  icon={<IconVideo></IconVideo>}
                  label='Voice Narrator'></Features>
                <Features
                  icon={IconVideo}
                  label='Background Video'></Features>
                <Features
                  icon={IconVideo}
                  label='AI Image Genration'></Features>
              </div>
            </Card>
            <Card
              className='flex flex-col  items-center justify-center rounded-3xl bg-[#f9fbff08] border-[#e9f0ff1a
] lg:h-[470px]  w-full p-18 lg:mt-8 gap-12 mb-8'>
              <VideoSection></VideoSection>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ToolsPage;
