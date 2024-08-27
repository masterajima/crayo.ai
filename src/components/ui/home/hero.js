import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <Container className='flex flex-col items-start justify-start px-4 mt-6 gap-2 w-full'>
      <div className='flex flex-col items-start justify-start max-w-[800px] bg-blue-300'>
        <Card className='flex flex-col itmes-start justify-start rounded-3xl border-gray-400 p-8 bg-blue-300'>
          <div className='flex flex-col items-start justify-start object-cover'>
            <Image
              src='https://framerusercontent.com/images/J9YwsU9nugMP4hdHntRplOALTI.png'
              className='object-cover object-center'
            />
          </div>
          <div className='flex flex-col items-center justify-center mt-4 mb-4 p-4 '>
            <TabsContent
              value='Experience Creative Freedom'
              className='text-center rounded-lg p-3 text-gray-900'>
              Experience Creative Freedom
            </TabsContent>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Hero;
