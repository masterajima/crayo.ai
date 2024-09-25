import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start md:text-start max-w-2xl md:px-12'>
      <h2 className='text-3xl lg:text-5xl font-bold mb-4 '>{title}</h2>
    </div>
  );
};

export default SectionHeader;
