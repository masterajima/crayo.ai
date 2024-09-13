import React from 'react';

const TestimonialPage = () => {
  return (
    <div className='flex flex-col items-center justify-center p-12 w-full bg-[#ffffff] gap-3'>
      <div className='flex flex-col max-w-500 items-center justify-center'>
        <div className='flex flex-col items-center w-full gap-8'>
          <div className='flex items-center justify-center p-2 px-6 rounded-full gap-4 bg-gradient-to-r from-[#dbf0ff] to-[#dfe4ff] via-[#f6dfff]'>
            <div className='w-[3px] h-[3px] rounded-full bg-[#000d49]'></div>
            <p className='text-[#000D49] text-[12px] font-bold'>Testimonials</p>
            <div className='w-[3px] h-[3px] rounded-full bg-[#000d49]'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
