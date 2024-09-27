import Hero from '@/components/ui/home/hero';
import { Container } from '../components/ui/containers';
import WorkCrayo from '@/components/ui/home/work';
import FeaturesPage from '@/components/ui/home/features';
import ToolsPage from '@/components/ui/home/tools';
import FunctionPage from '@/components/ui/home/function';
import TestimonialPage from '@/components/ui/home/testimonial';
import ExperiencePage from '@/components/ui/home/experience';
import LogoComponent from '@/components/logo-component';

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
  const features = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 24 24'>
          <path
            fill='#297dd6'
            d='M16.934 8.965A8.002 8.002 0 0 0 1 10c0 1.892.657 3.631 1.756 5.001C3.564 16.01 4 17.125 4 18.306V22h9l.001-3H15a2 2 0 0 0 2-2v-2.929l1.96-.84c.342-.146.372-.494.224-.727zM3 10a6 6 0 0 1 11.95-.779l.057.442l1.543 2.425l-1.55.664V17h-3.998L11 20H6v-1.694c0-1.639-.591-3.192-1.685-4.556A5.97 5.97 0 0 1 3 10m18.154 8.102l-1.665-1.11A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.51-4.993l1.664-1.11A10.95 10.95 0 0 1 23 12c0 2.258-.68 4.356-1.846 6.102'
          />
        </svg>
      ),
      label: 'AI Voice',
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 24 24'>
          <path
            fill='#297dd6'
            d='M12 3C6.5 3 2 6.58 2 11a7.22 7.22 0 0 0 2.75 5.5c0 .6-.42 2.17-2.75 4.5c2.37-.11 4.64-1 6.47-2.5c1.14.33 2.34.5 3.53.5c5.5 0 10-3.58 10-8s-4.5-8-10-8m0 14c-4.42 0-8-2.69-8-6s3.58-6 8-6s8 2.69 8 6s-3.58 6-8 6'
          />
        </svg>
      ),
      label: 'AI Backgrounds',
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 24 24'>
          <path
            fill='#297dd6'
            d='M7.154 13.539q.31 0 .54-.23q.229-.23.229-.54t-.23-.54t-.54-.229t-.538.23t-.23.54q0 .309.23.539t.539.23m0-2.77q.31 0 .54-.23q.229-.23.229-.539t-.23-.54t-.54-.23t-.538.23t-.23.54t.23.54t.539.23m0-2.77q.31 0 .54-.23t.229-.54t-.23-.539t-.54-.23t-.538.23t-.23.54t.23.54t.539.229m3.077 5.27H14.5v-1h-4.27zm0-2.77H17.5v-1h-7.27zm0-2.77H17.5v-1h-7.27zM3 20.078V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4z'
          />
        </svg>
      ),
      label: 'AI Script Generator',
    },
  ];
  return (
    <div className='flex flex-col justify-start items-start text-center px-6 w-full '>
      <Hero
        backgroundImage='https://framerusercontent.com/images/J9YwsU9nugMP4hdHntRplOALTI.png'
        logo={<LogoComponent />}
        menuItems={menuItems}
        tagline='Experience Creative Freedom'
        title='The fastest ✨ way to create Short Videos'
        description='Create unlimited short videos at once. Auto generate captions, effects, background & music.'
        ctaPrimary={{ href: 'https://crayo.ai/dashboard', label: 'Try now' }}
        ctaSecondary={{ href: '#learn-more', label: 'Learn More' }}
        heroImage='/assets/images/genrate.avif'
        features={features}
      />
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
