import { Card } from '@/shadcn/ui/card';
import React from 'react';
import Image from 'next/image';
import TestimonialCard from '@/components/testimonial-card';

const TestimonialPage = ({ title, subtitle, testimonials }) => {
  return (
    <div className='flex flex-col items-center justify-center p-12 w-full bg-[#ffffff] gap-8'>
      <div className='flex flex-col max-w-500 items-center justify-center'>
        <div className='flex flex-col items-center w-full gap-8'>
          <div className='flex items-center justify-center p-2 px-6 rounded-full gap-4 bg-gradient-to-r from-[#dbf0ff] to-[#dfe4ff] via-[#f6dfff]'>
            <div className='w-[3px] h-[3px] rounded-full bg-[#000d49]'></div>
            <p className='text-[#000D49] text-[12px] font-bold'>Testimonials</p>
            <div className='w-[3px] h-[3px] rounded-full bg-[#000d49]'></div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 mt-4'>
          <h2 className='font-semibold text-5xl text-center text-[#000D49]'>{title}</h2>
        </div>
        <div className='flex flex-col items-center justify-center mt-8 lg:w-2/3'>
          <p className='text-lg text-[#000D49B3]'>{subtitle}</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
