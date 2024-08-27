import React from 'react';
import Image from 'next/image';
import { Card } from '@/shadcn/ui/card';
import { Container } from '../containers';
import { Button } from '@/shadcn/ui/button';

const Hero = () => {
  return (
    <Container className=' flex flex-col items-start justify-start gap-2 w-full h-screen'>
      <div className='absolute inset-0'>
        <Image
          src='/assets/images/cover.avif'
          className='object-cover object-center w-full h-full'
          alt='cover'
          layout='fill'
          priority={true}
        />
      </div>

      <div className='relative flex flex-col items-start justify-start mt-4 mb-4 p-4 z-10'>
        <Button className='text-gray-900 border-gray-900 rounded-3xl p-3 bg-slate-200'>
          Experience Creative Free
        </Button>
        <div className='mt-4 flex flex-col items-start justify-start'>
          <h1 className='text-6xl font-semibold text-blue-900'>
            The fastest Way to genrate Short Videos
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
