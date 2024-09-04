import React from 'react';

const StoryTone = ({ tones }) => {
  return (
    <div className='relative h-[37px] w-[378px] mt-6'>
      <div className='absolute h-[37px] w-[378px] rounded-full border-[#e1ebff] top-0 bg-white'>
        <div className='flex gap-2'>
          {tones.map((index, tone) => {
            <div
              key={index}
              className='flex items-start justify-start z-1 gap-6'>
              <div className='flex items-center justify-center bg-[#e4eeff] rounded-lg p-2 '>
                <p className='text-[9.7px] text-[#000d49]'>{tone}</p>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default StoryTone;
