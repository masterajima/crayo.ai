import React from 'react';
import Link from 'next/link';
const FunctionPage = () => {
  return (
    <div className='flex flex-col items-start justify-start bg-[#ffffff] p-[50px] w-full gap-4'>
      <div className='flex items-start justify-start rounded-full p-2 gap-3 bg-gradient-to-r from-[#dbf0ff] via-[#f6dfff] to-[#dfe2ff] border-[#ffffff80]'>
        <div className='bg-[#000d49] rounded-full w-3 h-3'></div>
        <p className='text-[16px] font-[Inter] text-[#000d49]'>How it Works</p>
        <div className='bg-[#000d49] rounded-full w-3 h-3'></div>
      </div>
      <div className='flex flex-col lg:items-start lg:justify-start items-center justify-center'>
        <h2 className='text-[35px] font-normal text-[#000d49]'>
          Ultimate tool for Social Media growth
        </h2>
        <p className='text-[15px] font-[Inter] text-[#000D49B3]'>
          Create unlimited shorts videos at once. Auto generate captions, effects,
          background and music.
        </p>
      </div>
      <div className='flex flex-col items-start gap-5'>
        <div className='flex flex-col items-stretch'>
          <div className='flex items-center gap-3'>
            <Link
              href='https://crayo.ai/dashboard'
              className='bg-[#dde6ff] flex items-center gap-2 p-2 rounded-full'>
              <div className='flex bg-white z-2 w-[24px] '>
                <div className='w-[16px] h-[16px] z-1'>
                  <svg
                    overflow='visible'
                    width='100%'
                    height='100%'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    {' '}
                    <path
                      stroke-linejoin='miter'
                      stroke='var(--token-9d8c7f4b-b2a9-4034-9daa-4796a213ec8e, rgb(0, 13, 73))'
                      d='M13.5 5L20.5 12L13.5 19M3.5 12L20 12'
                      stroke-width='2'></path>{' '}
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FunctionPage;
