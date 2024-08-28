import React from 'react';
import Image from 'next/image';
import { Card } from '@/shadcn/ui/card';
import { Container } from '../containers';
import { Button } from '@/shadcn/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className='bg-cover relative bg-center'
      style='background-image:url()'>
      <Container className='mx-auto px-4 py-16'>
        <div className='flex flex-col items-center text-center'>
          <div className='mb-8'>
            <div className='inline-flex items-center bg-white bg-opacity-40 border border-white border-opacity-50 rounded-full px-6 py-2'></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
