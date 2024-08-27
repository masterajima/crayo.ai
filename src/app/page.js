import Hero from '@/components/ui/home/hero';
import { Container } from '../components/ui/containers';

const Home = () => {
  return (
    <Container className='flex justify-center items-center text-center h-[85vh]'>
      <div className='flex flex-col items-center justify-center'>
        <Hero />
      </div>
    </Container>
  );
};

export default Home;
