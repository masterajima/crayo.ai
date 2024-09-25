import React from 'react';
import Link from 'next/link';

const SocialLink = ({ href = '#' }) => {
  return (
    <Link
      href={href}
      className='flex items-center justify-center p-1 gap-2 rounded-full px-6 bg-[#ffffff66] border-[#ffffff66]'></Link>
  );
};

export default SocialLink;
