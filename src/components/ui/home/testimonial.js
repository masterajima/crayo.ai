import { Card } from '@/shadcn/ui/card';
import React from 'react';
import Image from 'next/image';

const TestimonialPage = () => {
  return (
    <div className='flex flex-col items-center justify-center p-12 w-full bg-[#ffffff] gap-3'>
      <div className='flex flex-col max-w-500 items-center justify-center'>
        <div className='flex flex-col items-center w-full gap-8'>
          <div className='flex items-center justify-center p-2 px-6 rounded-full gap-4 bg-gradient-to-r from-[#dbf0ff] to-[#dfe4ff] via-[#f6dfff]'>
            <div className='w-[3px] h-[3px] rounded-full bg-[#000d49]'></div>
            <p className='text-[#000D49] text-[12px] font-bold'>Testimonials</p>
            <div className='w-[3px] h-[3px] rounded-full bg-[#000d49]'></div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 mt-4'>
          <h2 className='font-semibold text-5xl text-center text-[#000D49]'>
            Our Customer ❤️ Us
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center mt-8 lg:w-2/3'>
          <p className='text-lg text-[#000D49B3]'>
            Create unlimited shorts videos at once. Auto generate captions, effects,
            background and music.
          </p>
        </div>
      </div>
      <div className='flex  items-start justify-start gap-4'>
        <Card className='flex flex-col items-start justify-start rounded-3xl bg-[#f2f2ff66] border-[#e9f0ff] p-6'>
          <div className='flex items-start justify-start gap-4'>
            <Image
              src='/assets/images/img.avif'
              alt='image'
              width={55}
              height={55}
              className='rounded-full object-cover object-center'
            />
            <div className='flex flex-col items-start justify-strat'>
              <h3 className='text-[17px] text-[#000D49]'>Daniel</h3>
              <p className='text-[15px] text-start text-[#000d4980]'>Content Creator</p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start  mt-8'>
            <p className='text-[#000D4980] '>
              I can make over 50 clips a day many of which will go viral. I've never seen
              anything like this before.
            </p>
          </div>
        </Card>
        <Card className='flex flex-col items-start justify-start rounded-3xl bg-[#f2f2ff66] border-[#e9f0ff] p-6'>
          <div className='flex items-start justify-start gap-4'>
            <Image
              src='/assets/images/img.avif'
              alt='image'
              width={55}
              height={55}
              className='rounded-full object-cover object-center'
            />
            <div className='flex flex-col items-start justify-start'>
              <h3 className='text-[17px] text-[#000D49]'>Sid</h3>
              <p className='text-[15px] text-start text-[#000d4980]'>Content Creator</p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start  mt-8'>
            <p className='text-[#000D4980] '>
              Crayo AI is incredible! I just type in my ideas and it generates a complete
              TikTok video. It's like magic – full videos with just text input!
            </p>
          </div>
        </Card>
        <Card className='flex flex-col items-start justify-start rounded-3xl bg-[#f2f2ff66] border-[#e9f0ff] p-6'>
          <div className='flex items-start justify-start gap-4'>
            <Image
              src='/assets/images/img.avif'
              alt='image'
              width={55}
              height={55}
              className='rounded-full object-cover object-center'
            />
            <div className='flex flex-col items-start justify-start'>
              <h3 className='text-[17px] text-[#000D49]'>Daniel</h3>
              <p className='text-[15px] text-start text-[#000d4980]'>Content Creator</p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start  mt-8'>
            <p className='text-[#000D4980] '>
              Crayo helped us 4x our content output The AI UGC creators on Crayo are the
              best AI video feature ever!
            </p>
          </div>
        </Card>
      </div>
      <div className='flex items-start justify-start gap-4'>
        <Card className='flex flex-col items-start justify-start rounded-3xl bg-[#f2f2ff66] border-[#e9f0ff] p-6'>
          <div className='flex items-start justify-start gap-4'>
            <Image
              src='/assets/images/img.avif'
              alt='image'
              width={55}
              height={55}
              className='rounded-full object-cover object-center'
            />
            <div className='flex flex-col items-start justify-start'>
              <h3 className='text-[17px] text-[#000D49]'>Aleem</h3>
              <p className='text-[15px] text-start text-[#000d4980]'>Content Creator</p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start  mt-8'>
            <p className='text-[#000D4980] '>
              The AI voiceovers on Crayo AI are game-changing. They add a professional
              touch to my videos, making them stand out on TikTok.
            </p>
          </div>
        </Card>
        <Card className='flex flex-col items-start justify-start rounded-3xl bg-[#f2f2ff66] border-[#e9f0ff] p-6'>
          <div className='flex items-start justify-start gap-4'>
            <Image
              src='/assets/images/img.avif'
              alt='image'
              width={55}
              height={55}
              className='rounded-full object-cover object-center'
            />
            <div className='flex flex-col items-start justify-start'>
              <h3 className='text-[17px] text-[#000D49]'>Daniel</h3>
              <p className='text-[15px] text-start text-[#000d4980]'>Content Creator</p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start  mt-8'>
            <p className='text-[#000D4980] '>
              The AI-driven editing on Crayo AI has saved me hours. It automatically
              crafts perfect TikTok clips from my long streams. Absolute game-changer!
            </p>
          </div>
        </Card>
        <Card className='flex flex-col items-start justify-start rounded-3xl bg-[#f2f2ff66] border-[#e9f0ff] p-6'>
          <div className='flex items-start justify-start gap-4'>
            <Image
              src='/assets/images/img.avif'
              alt='image'
              width={55}
              height={55}
              className='rounded-full object-cover object-center'
            />
            <div className='flex flex-col items-start justify-start'>
              <h3 className='text-[17px] text-[#000D49]'>Daniel</h3>
              <p className='text-[15px] text-start text-[#000d4980]'>Content Creator</p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start  mt-8'>
            <p className='text-[#000D4980] '>
              This is going to become the biggest clipping tool in 2024. Trust me.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TestimonialPage;
