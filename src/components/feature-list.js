import React from 'react';

const Features = ({ icon, label }) => {
  return (
    <div className='flex items-center gap-2 p-2 rounded-full bg-[#9ab7ff1a] border-[#9ab6ff]'>
      <div className='h-[24px] w-[24px]'>
        <div className='w-full h-full'>{icon}</div>
      </div>
      <span className='text-white text-lg font-[Inter] tracking-tight'>{label}</span>
    </div>
  );
};

export default Features;
