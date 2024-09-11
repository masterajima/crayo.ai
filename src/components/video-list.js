import React from 'react';

const VideoSection = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <video
        autoPlay={true}
        loop={true}
        src='https://framerusercontent.com/assets/4Bdjj2NXSOa3V5aPSVieDrJC9bk.mp4'
        className='object-cover object-center bg-black border-[#a2a5eb] border-2 rounded-xl'
      />
      <div className='text-white text-center mt-4'>
        <h3 className=''>Automated Video in second</h3>
        <p className='text-sm text-gray-400'>
          Auto generate captions, effects, background and music.
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
