import { Card } from '@/shadcn/ui/card';
import { Image } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import FeatureCase from '@/components/feature-case';

const ToolsPage = () => {
  const features = [
    {
      icon: Music,
      title: 'Popular Music',
      description: 'Access a wide range of popular music for your videos.',
    },
    {
      icon: Mic,
      title: 'Voice Narrator',
      description: 'Add professional narration to your content.',
    },
    {
      icon: Video,
      title: 'Background Video',
      description: 'Choose from a variety of background videos.',
    },
    {
      icon: Image,
      title: 'AI Image Generation',
      description: 'Generate unique images using AI technology.',
    },
    {
      icon: Share,
      title: 'Multi-platform',
      description: 'Share your content across multiple platforms easily.',
    },
    {
      icon: Edit,
      title: 'Manual Editing',
      description: 'Fine-tune your videos with manual editing tools.',
    },
  ];
  return (
    <FeatureCase
      title='All-in-One Tool for Generating Viral Shorts using AI'
      subtitle='Features'
      description='Create unlimited shorts videos at once. Auto generate captions, effects, background & music.'
      ctaText='Try Now'
      ctaLink='https://crayo.ai/dashboard'
      features={features}
    />
  );
};

export default ToolsPage;
