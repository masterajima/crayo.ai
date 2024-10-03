import React from 'react';
import { Card } from '@/shadcn/ui/card';
import Image from 'next/image';
import CardComponent from './card';

const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <CardComponent className='md:w-[30%]'>
      <div className='flex flex-row space-x-2.5 px-5 pt-5'>
        <div className='relative rounded-full bg-slate-200 border border-slate-300 flex w-8 h-8 items-center justify-center'>
          <p className='text-sm text-blue-300'>{number}</p>
        </div>
        <p className='text-md md:text-lg font-bold'>{title}</p>
      </div>
      <Image
        src={imageSrc}
        alt={title}
        width={1000}
        height={222}
        className='w-full'
      />
      <div className='p-7'>
        <p className='text-md font-bold md:text-[18px] text-center leading-[130%]'>
          {description}
        </p>
      </div>
    </CardComponent>
  );
};

export default FeatureCard;
