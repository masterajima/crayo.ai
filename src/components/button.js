import React from 'react';
import Link from 'next/link';

const Button = ({ href, icon, label }) => {
  return (
    <Link
      href={href}
      className='flex items-center gap-2 bg-[#ffffff0f] px-6 rounded-full p-2'>
      <div className='flex items-center'>{icon}</div>
      <p className='text-white'>{label}</p>
    </Link>
  );
};

export default Button;
