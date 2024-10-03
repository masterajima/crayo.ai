import { Card } from '@/shadcn/ui/card';
import React from 'react';
import Image from 'next/image';

const ToolCard = ({ image, title, position }) => {
  return (
    <Card
      className={`absolute ${position} max-w-[160px] z-10 cursor-pointer items-start rounded-xl bg-white space-y-2 p-2.5 text-start shadow-[0_13px_22px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#E9F1FE] md:max-w-[275px] md:space-y-5 md:rounded-3xl md:p-5`}>
      <div className='relative aspect-[260/137] w-full'>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className='rounded-xl w-full border border-slate-200 object-cover'
        />
      </div>
      <div className='flex items-center justify-between w-full space-x-2 md:space-x-4'>
        <h6 className='max-w-[125px] font-bold text-[14px] leading-[110%] md:text-[21px]'>
          {title}
        </h6>
        <button className='rounded-full p-2 transition-all duration-200 hover:opacity-70'>
          <Image
            src='/assets/images/plusBlue.png'
            width={8}
            height={8}
            alt='button'
            className='transition-transform duration-300'
          />
        </button>
      </div>
    </Card>
  );
};

export default ToolCard;
