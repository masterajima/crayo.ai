import { Card } from '@/shadcn/ui/card';
import { Image } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import FeatureCase from '@/components/feature-case';

const ToolsPage = () => {
  return (
    <div className='flex flex-col items-center justify-between space-y-8 bg-gradient-to-b from-[F0F7FF] to-white px-4 py-3 text-center md:space-y-12 md:px-14 md:py-16'>
      <div className='relative w-fit place-items-center text-center text-black dark:bg-black inline-flex items-center dark:text-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 bg-white bg-opacity-20'>
        <Image
          src='assets/images/Lightbulb.png'
          alt=''
          width={16}
          height={16}
          className='mr-2'
        />
        <span className='text-sm font-bold sm:text-base'>Features</span>
      </div>
    </div>
  );
};

export default ToolsPage;
