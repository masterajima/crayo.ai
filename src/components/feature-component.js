import React from 'react';
import { Card } from '@/shadcn/ui/card';
import Image from 'next/image';

const FeatureComponent = ({ image, title }) => {
  return (
    <Card
      className={`absolute  z-10 max-w-[160px] items-start rounded-xl space-y-2 bg-white text-start p-2.5 shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9f1fe] md:max-w-[275px] md:space-y-5 md:rounded-3xl md:p-5`}>
      <div className='relative aspect-[260/137] w-full'>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className='border border-slate-200 object-cover absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0'
        />
      </div>
      <div className='flex w-full justify-between items-center space-x-2 md:space-x-4'>
        <h6 className='font-bold text-[14px] max-w-[125px] md:max-w-none'>{title}</h6>
        <button className='rounded-full p-2 bg-[#4D7FED]/10 transition-all duration-200 hover:opacity-70'>
          <Image
            src='/assets/images/plusBlue.png'
            alt='plus'
            width={8}
            height={8}
            className='transition-transform duration-200 rounded-full object-cover'
          />
        </button>
      </div>
    </Card>
  );
};

export default FeatureComponent;
