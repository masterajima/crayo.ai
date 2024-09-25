import React from 'react';

const Feature = ({ name }) => {
  return (
    <div className='flex items-center justify-center gap-2 px-8 border-[#ffffff33] bg-[#ffffffd4] rounded-full'>
      <p className='text-[#000d49] text-sm '>{name}</p>
    </div>
  );
};

export default Feature;
