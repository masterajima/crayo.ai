import React from 'react';

const StoryTopicInput = ({ topics }) => {
  const storyTopics = ['Clockwork Detective', 'Garden of Whispers', 'Mystory Manor'];
  return (
    <div className='flex  items-start justify-start '>
      <div className=' bg-white  lg:px-6 items-start rounded-full w-[378px] '>
        <div className='top-[12px] left-[16px] '>
          <p className='text-sm text-[#000d49] font-[Inter]'>
            <div className='flex items-start justify-start'></div>
            <span className='text-[10.5px]  font-[Inter] '>
              write a story about girlfriend drama
            </span>
            <span className='ml-1 text-[#a1b7ff] text-sm animate-spin translate-x-6 transition duration-300'>
              ✦
            </span>
          </p>

          <div className='flex gap-2 mt-6'>
            {topics.map((topic, index) => {
              <div
                key={index}
                className='flex gap-5 bg-[#d6e8ff] items-center justify-center p-2 rounded-full bg-[#D6E8FF73]'>
                <p className='text-[#000d49] text-[10px]'>{topic}</p>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryTopicInput;
