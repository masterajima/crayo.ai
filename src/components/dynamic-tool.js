import React from 'react';
import Image from 'next/image';

const DynamicTool = ({ subtitle }) => {
  return (
    <div className='flex flex-col items-center justify-between space-y-2 bg-gradient-to-b from-[#f0f7ff] to-white w-full px-2 py-3 text-center md:space-y-12 md:px-40 md:py-16 mt-8'>
      <div className='flex items-center gap-2 p-2 px-3 py-1 text-black place-items-center dark:text-white'>
        <Image
          src='/assets/images/bulb.png'
          alt='bulb'
          width={16}
          height={16}
        />
        <span className='text-[#4D7FED] text-sm font-bold sm:text-base'>{subtitle}</span>
      </div>
    </div>
  );
};

export default DynamicTool;
