import React from 'react';
import Image from 'next/image';

const ImageBackground = () => {
  return (
    <div className='absolute inset-0'>
      <Image
        src={src}
        alt='alt'
        layout='fill'
        quality={100}
      />
    </div>
  );
};

export default ImageBackground;
