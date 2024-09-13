import Hero from '@/components/ui/home/hero';
import { Container } from '../components/ui/containers';
import WorkCrayo from '@/components/ui/home/work';
import FeaturesPage from '@/components/ui/home/features';
import ToolsPage from '@/components/ui/home/tools';
import FunctionPage from '@/components/ui/home/function';
import TestimonialPage from '@/components/ui/home/testimonial';

const Home = () => {
  return (
    <div className='flex flex-col justify-start items-start text-center px-6 w-full '>
      <Hero />
      <WorkCrayo />
      <FeaturesPage />
      <ToolsPage></ToolsPage>
      <FunctionPage></FunctionPage>
      <TestimonialPage></TestimonialPage>
    </div>
  );
};

export default Home;
