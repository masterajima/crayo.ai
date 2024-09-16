import Hero from '@/components/ui/home/hero';
import { Container } from '../components/ui/containers';
import WorkCrayo from '@/components/ui/home/work';
import FeaturesPage from '@/components/ui/home/features';
import ToolsPage from '@/components/ui/home/tools';
import FunctionPage from '@/components/ui/home/function';
import TestimonialPage from '@/components/ui/home/testimonial';
import ExperiencePage from '@/components/ui/home/experience';

const Home = () => {
  const testimonialData = {
    title: 'Our Customer ❤️ Us',
    subtitle:
      'Create unlimited shorts videos at once.Auto genrate captions,effects,background and music',
    testimonials: [
      {
        name: 'Daniel',
        role: 'Content Creator',
        content:
          'I can make over 50 clips a day many of which will go viral. Ive never seen anything like this before.',
        imageSrc: '/assets/images/img.avif',
      },
      {
        name: 'Sid',
        role: 'Content Creator',
        content:
          "Crayo AI is incredible! I just type in my ideas and it generates a complete TikTok video. It's like magic – full videos with just text input!",
        imageSrc: '/assets/images/img.avif',
      },
      {
        name: 'Moe',
        role: 'Content Creator',
        content:
          'Crayo helped us 4x our content output The AI UGC creators on Crayo are the best AI video feature ever!',
        imageSrc: '/assets/images/img.avif',
      },
      {
        name: 'Aleem',
        role: 'Content Creator',
        content:
          'The AI voiceovers on Crayo AI are game-changing. They add a professional touch to my videos, making them stand out on TikTok.',
        imageSrc: '/assets/images/img.avif',
      },
      {
        name: 'Arib',
        role: 'Content Creator',
        content:
          'The AI voiceovers on Crayo AI are game-changing. They add a professional touch to my videos, making them stand out on TikTok.',
        imageSrc: '/assets/images/img.avif',
      },
      {
        name: 'Musa',
        role: 'Content Creator',
        content: 'This is going to become the biggest clipping tool in 2024. Trust me.',
        imageSrc: '/assets/images/img.avif',
      },
    ],
  };
  return (
    <div className='flex flex-col justify-start items-start text-center px-6 w-full '>
      <Hero />
      <WorkCrayo />
      <FeaturesPage />
      <ToolsPage></ToolsPage>
      <FunctionPage></FunctionPage>
      <TestimonialPage {...testimonialData} />
      <ExperiencePage></ExperiencePage>
    </div>
  );
};

export default Home;
