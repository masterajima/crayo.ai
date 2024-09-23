import { Card } from '@/shadcn/ui/card';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/shadcn/ui/button';
import DynamicTool from '@/components/dynamic-tool';

const ToolsPage = () => {
  const toolData = {
    title: 'Crayo has the tools to support any use-case for your short-form content.',
    subtitle: 'FEATURES',
    features: [
      {
        image: '/assets/images/video.png',
        title: 'Splitscreen video',
        position: 'top-[7%] left-[0%] md:top-[8%] md:left-[15%]',
      },
      {
        image: '/assets/images/fake-text.png',
        title: 'Fake text video',
        position: 'top-[-3%] left-[34%] md:top-[-1%] md:left-[40%]',
      },
    ],
    centerText: 'Use countless viral-tested B-roll, overlays, fonts & more',
    buttonText: 'Try all features',
    buttonLink: 'https://crayo.ai/dashboard',
  };
  return <DynamicTool {...toolData}></DynamicTool>;
};

export default ToolsPage;
