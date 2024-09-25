import React from 'react';
import Image from 'next/image';

const ImageBackground = ({ src, alt }) => {
  return (
    <div className='absolute inset-0'>
      <Image
        src={src}
        alt={alt}
        layout='fill'
        objectFit={cover}
        quality={100}
      />
    </div>
  );
};

export default ImageBackground;
