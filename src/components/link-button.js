import Link from 'next/link';
import React from 'react';

const LinkButton = ({ href, label }) => {
  return (
    <Link
      href={href}
      className='flex items-center justify-center gap-2 rounded-full border-[#ffffff66] bg-white text-[#000d49]'>
      <div className='w-[26px] h-[26px] rounded-full bg-[#cfd5fb]'>
        <div className='flex flex-col items-center justify-center'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              stroke='rgb(0, 13, 73)'
              d='M13.5 5L20.5 12L13.5 19M3.5 12L20 12'
              strokeWidth='2'
            />
          </svg>
        </div>
      </div>
      <p className='text-[#000d49] lg:text-sm'>{label}</p>
    </Link>
  );
};

export default LinkButton;
