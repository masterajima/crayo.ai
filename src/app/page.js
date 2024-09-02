import Hero from '@/components/ui/home/hero';
import { Container } from '../components/ui/containers';
import WorkCrayo from '@/components/ui/home/work';

const Home = () => {
  return (
    <Container className='flex flex-col justify-center items-center text-center w-full '>
      <Hero />
      <WorkCrayo></WorkCrayo>
    </Container>
  );
};

export default Home;
