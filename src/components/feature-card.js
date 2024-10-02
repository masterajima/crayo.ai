import React from 'react';
import { Card } from '@/shadcn/ui/card';
import Image from 'next/image';

const FeatureCard = ({ imageSrc, title }) => {
  return (
    <Card className='flex flex-col items-start justify-start bg-[#f2f6ff] border-[#f2f6ff] rounded-3xl lg:p-8 p-4 w-full relative h-full'>
      <div className='absolute top-0 right-0'>
        <Image
          src={imageSrc}
          alt={title}
          width={189}
          height={189}
          className='object-cover object-top-right'
        />
      </div>
    </Card>
  );
};

export default FeatureCard;
