import { Card } from '@/shadcn/ui/card';
import React from 'react';
import Image from 'next/image';

const WorkCard = ({ imageSrc, description, title }) => {
  return (
    <Card className=' flex flex-col items-start justify-start p-8 bg-blue-100 border border-slate-300 rounded-3xl'>
      <Image
        src={imageSrc}
        alt=''
        width={100}
        height={100}
        className='mb-4'
      />
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-md text-gray-600'>{description}</p>
    </Card>
  );
};

export default WorkCard;
