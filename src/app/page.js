import Hero from '@/components/ui/home/hero';
import { Container } from '../components/ui/containers';
import WorkCrayo from '@/components/ui/home/work';

const Home = () => {
  return (
    <div className='flex flex-col justify-start items-start text-center px-6 w-full '>
      <Hero />
      <WorkCrayo></WorkCrayo>
    </div>
  );
};

export default Home;
