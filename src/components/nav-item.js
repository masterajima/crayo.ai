import Link from 'next/link';
import React from 'react';

const NavItem = ({ href, children }) => {
  return (
    <Link
      href={href}
      className='px-4 py-2 text-sm font-medium text-[#00084d] bg-opacity-50 border border-white border-opacity-40 rounded-full hover:bg-opacity-50 transition duration-300 bg-blue-300 `${className}`'>
      {children}
    </Link>
  );
};

export default NavItem;
