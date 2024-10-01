import React from 'react';
import Link from 'next/link';
import { Card } from '@/shadcn/ui/card';
import * as LucideIcons from 'lucide-react';
const FeatureCase = ({ title, subtitle, description, ctaLink, ctaText, features }) => {
  return (
    <div className='flex flex-col md:items-center md:justify-center lg:p-20  w-full'>
      <Card className='flex flex-col lg:items-start lg:justify-start md:items-center md:justify-center rounded-3xl border-gray-800  bg-gray-900 lg:p-18 w-full h-full'>
        <div className='flex flex-col items-start justify-start md:items-center md:justify-center mt-8'>
          <Link
            href='/'
            className='flex bg-[#ffffff0f] items-center justify-center p-2 rounded-full px-3 border-white'>
            <p className='text-white'>{subtitle}</p>
          </Link>
          <h2 className='text-4xl font-semibold text-white mb-4'>{title}</h2>
          <p className='text-lg text-white mb-6'>{description}</p>
          <Link
            href={ctaLink}
            className='bg-white text-white bg-opacity-10 rounded-full px-8 py-3'>
            {ctaText}
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {features.map((feature, index) => {
            const IconComponent = LucideIcons[feature.icon];
            return (
              <Card
                key={index}
                className='flex flex-col items-start p-6 bg-white bg-opacity-5 rounded-xl'>
                {IconComponent && (
                  <IconComponent className='w-12 h-12 text-white mb-4' />
                )}
                <h3 className='text-xl font-semibold text-white mb-2'>
                  {feature.title}
                </h3>
                <p className='text-white text-opacity-60'>{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default FeatureCase;
