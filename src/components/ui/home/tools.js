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
        title: 'AI avatars',
        position: 'top-[7%] left-[0%] md:top-[8%] md:left-[%]15',
      },
      {
        image: '/assets/images/avatar.png',
        title: 'AI avatars',
        position: 'top-[13%] right-[5%] md:top-[8%] md:right-[15%]',
      },
      {
        image: '/assets/images/feature.png',
        title: 'Youtube downloader',
        position: 'bottom-[-3%] left-[3%] md:bottom-[4%] md:left-[20%]',
      },
      {
        image: '/assets/images/voiceover.png',
        title: 'Voiceover story',
        position: 'bottom-[-2%] right-[3%] md:bottom-[4%] md:right-[20%]',
      },
    ],
    centerText: 'Use countless viral-tested B-roll, overlays, fonts & more',
    buttonText: 'Try all features',
    buttonLink: 'https://crayo.ai/dashboard',
  };
  return <DynamicTool {...toolData}></DynamicTool>;
};

export default ToolsPage;
