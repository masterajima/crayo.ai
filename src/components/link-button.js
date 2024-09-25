import Link from 'next/link';
import React from 'react';

const LinkButton = ({ href }) => {
  return (
    <Link
      href={href}
      className='flex items-center justify-center gap-2 rounded-full border-[#ffffff66] bg-white text-[#000d49]'>
        <div className='w-[26px] h-[26px] rounded-full'></div>
      </Link>
  );
};

export default LinkButton;
