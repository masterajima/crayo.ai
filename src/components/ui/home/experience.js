import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/section-header';
import LinkButton from '@/components/link-button';
import Feature from '@/components/feature';
import SocialLink from '@/components/social-link';

const ExperiencePage = ({ href, label }) => {
  return (
    <div className='relative w-full md:h-screen h-full'>
      <div className='absolute inset-0'>
        <Image
          src='/assets/images/mom.avif'
          alt='mom'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <SectionHeader
        title='Experience ⚡ Crayo'
        description='Crayo - your gateway to creating viral TikTok clips in seconds! Auto-generate captions, effects, background, and music for you.'></SectionHeader>
      <div className='flex flex-col md:flex items-center mt-8'>
        <LinkButton
          href='https://crayo.ai/dashboard'
          label='Try Now'></LinkButton>
      </div>
      <div className='flex lg:flex-row md:items-start md:justify-start items-center justify-center mt-8'>
        <Feature name='AI Voice' />
        <Feature name='AI Background' />
        <Feature name='AI Script Genrator' />
      </div>

      <div className='flex flex-col md:flex-row gap-10 bg-[#ffffff2e] backdrop:blur mt-10'>
        <div>
          <p className='text-[20px] text-[#000d49] font-bold'>Navigation</p>
          <LinkButton
            href='https://crayo.ai/pricing'
            label='Pricing'
          />
          <LinkButton
            href='https://crayo.ai/blog'
            label='Insight'></LinkButton>
        </div>
      </div>
      <p className='text-[20px] text-[#000d49] font-bold'>Social</p>
      <SocialLink
        href='https://x.com/CrayoAI'
        label='Twitter'
      />
      <SocialLink
        href='https://discord.com/invite/crayo'
        label='Discord'></SocialLink>
      <SocialLink
        href-='https://instagram.com/crayo.ai'
        label='Instegram'></SocialLink>
      <div className='flex justify-between gap-10 mt-14'>
        <p className='text-[15px] text-[#000d49b3]'>Copyright@2024 Crayo AI Inc</p>
        <p className='text-[15px] text-[#000d49b3]'>
          <Link href='https://crayo.ai/privacy'>Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default ExperiencePage;
