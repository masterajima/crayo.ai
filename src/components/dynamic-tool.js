import React from 'react';
import Image from 'next/image';
import FeatureComponent from './feature-component';
import Link from 'next/link';

const DynamicTool = ({ subtitle, title, features, centerText, buttonLink }) => {
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
      <div className='flex flex-col items-center justify-center space-y-2 w-full px-4 md:px-20'>
        <h3 className='font-semibold text-gray-900 text-[32px] md:text-[48px] leading-[120%]'>
          {title}
        </h3>
      </div>
      <div className='flex items-center justify-center pt-10 relative'>
        {features.map((feature, index) => (
          <FeatureComponent
            key={index}
            {...feature}
          />
        ))}
        <div className='flex p-4 bg-[#4D7FED]/5 items-center md:p-18 h-[350px] w-[350px] rounded-full md:h-[750px] '>
          <div className='md:p-18 flex h-[275px] w-[275px] md:h-[600px] md:w-[600px] justify-center rounded-full p-4 bg-[#4D7FED]/5'>
            <div className='text-[21px] font-bold md:text-[32px]'>
              <span className='inline-block'>
                <strong className='pt-10'>{centerText}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link href={buttonLink}>
        <button className='inline-flex items-center bg-black text-white text-lg rounded-2xl font-semibold ring-offset-background transition-colors focus-visible:outline-none'></button>
      </Link>
    </div>
  );
};

export default DynamicTool;
