import Hero from '@/components/ui/home/hero';
import { Container } from '../components/ui/containers';

const Home = () => {
  return (
    <Container className='flex justify-center items-center text-center w-full '>
      <Hero />
    </Container>
  );
};

export default Home;
