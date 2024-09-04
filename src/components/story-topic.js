import React from 'react';

const StoryTopicInput = ({ topics, title }) => {
  const storyTopics = ['Clockwork Detective', 'Garden of Whispers', 'Mystory Manor'];
  return (
    <div className='flex flex-col items-start justify-start relative'>
      <div className='absolute bg-white top-0 lg:h-[37px] lg:w-[378px] items-start rounded-full'>
        <div className='top-[12px] left-[16px] absolute'>
          <p className='text-sm text-[#000d49]'>
            <span className='text-sm lg:text-left text-start'>{title}</span>
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
