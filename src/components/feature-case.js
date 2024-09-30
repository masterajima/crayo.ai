import React from 'react';
import Link from 'next/link';
import { Card } from '@/shadcn/ui/card';
const FeatureCase = () => {
  return (
    <div className='flex flex-col md:items-center md:justify-center lg:p-20  w-full'>
      <Card className='flex flex-col lg:items-start lg:justify-start md:items-center md:justify-center rounded-3xl border-gray-800  bg-gray-900 lg:p-18 w-full h-full'>
        <div className='flex flex-col items-start justify-start md:items-center md:justify-center mt-8'>
          <Link
            href='/'
            className='flex bg-[#ffffff0f] items-center justify-center p-2 rounded-full px-3 border-white'>
            <p className='text-white'>{subtitle}</p>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default FeatureCase;
