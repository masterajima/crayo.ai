import React from 'react';
import { Card } from '@/shadcn/ui/card';

const FeaturesPage = () => {
  return (
    <div className='flex flex-col items-start justify-start p-12'>
      <Card className='flex flex-col items-center justify-center rounded-3xl border-blue-300 bg-[#f9fbff] gap-4'>
        <div className='flex flex-col w-full h-[480px] items-center '>
          <div className='flex flex-col items-start gap-4'>
            <p className='text-sm  text-[#000d49]'>Enter your story topic</p>
          </div>
        </div>
        <div className='flex flex-col h-[37px] w-[378px] relative'>
          <div className='absolute bg-white top-0 left-[50%] h-[37px] w-[378px] rounded-full px-6 py-2'>
            <div className='top-[12px] left-[16px] absolute'>
              <p className='text-sm text-left text-[#000d49]'>
                <span className='text-sm text-left text-[#000d49]'>
                  w r i t e a s t o r y a b o u t
                </span>
                <span className='ml-1 bg-[#a1b7ff] text-sm animate-spin'>✦</span>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FeaturesPage;
