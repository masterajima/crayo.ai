import React from 'react';
import Image from 'next/image';
import { Card } from '@/shadcn/ui/card';

const TestimonialCard = ({ imageSrc, name, role, content }) => {
  return (
    <Card className='flex flex-col justify-between h-full rounded-3xl bg-[#f2f2ff66] border-[#e9f0ff] p-6'>
      <div className='flex flex-col h-full'>
        <div className='flex items-center gap-4 mb-6'>
          <Image
            src={imageSrc}
            alt={`${name}'s profile`}
            width={55}
            height={55}
            className='rounded-full object-cover'
          />
          <div>
            <h3 className='text-[17px] font-semibold text-[#000D49]'>{name}</h3>
            <p className='text-[15px] text-[#000d4980]'>{role}</p>
          </div>
        </div>
        <p className='text-[#000D4980] text-base flex-grow'>{content}</p>
      </div>
    </Card>
  );
};

export default TestimonialCard;
