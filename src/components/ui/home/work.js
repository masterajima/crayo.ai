import React from 'react';

const WorkCrayo = () => {
  return (
    <div className='flex flex-col items-center justify-center md:items-start md:justify-start p-12 gap-10 '>
      <div className='flex flex-col items-center md:items-start justify-center md:justify-start w-full '>
        <div className='flex flex-col items-start gap-10'>
          <div className='flex px-6 rounded-full py-2 bg-gradient-to-br from-[#dbf0ff] to-[#dfe2ff] via-[#dfe2ff] p-3'>
            <div className='flex gap-2 '>
              <div className='w-2 h-2 rounded-full  bg-[#000d49] '></div>
              <div className='flex  items-center gap-6'>
                <p className='text-[#000d49] font-medium text-sm text-center mx-auto'>
                  How it Works
                </p>
                <div className='w-2 h-2 rounded-full  bg-[#000d49] '></div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start gap-10'>
            <h1 clssName='font-semibold text-6xl text-[#000d49]'>
              From Ideas to Short Videos in Second
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCrayo;
