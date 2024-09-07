import { Card } from '@/shadcn/ui/card';
import { Image } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const ToolsPage = () => {
  return (
    <div className='flex flex-col items-center justify-center p-12  w-full'>
      <Card className='flex flex-col items-center justify-center rounded-3xl border-gray-800  bg-gray-900 p-18 w-full h-full'>
        <div className='flex flex-col items-center justify-center mt-8'>
          <div className='flex items-center p-2 rounded-lg px-6 py-2 gap-8 border-white'>
            <div className='w-3 h-3 rounded-full text-white bg-white'></div>
            <p className='text-white'>Features</p>
            <div className='w-3 h-3 rounded-full text-white bg-white'></div>
          </div>
          <div className='w-[330px] gap-4 flex flex-col items-start '>
            <h2 className='text-[35px] font-semibold text-white'>
              All in one tool for{' '}
              <span className='text-white text-[35px]'>viral Shorts using AI</span>
            </h2>
          </div>
          <div className='flex flex-wrap gap-10'>
            <div className='flex items-center justify-center'>
              <Link></Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ToolsPage;
