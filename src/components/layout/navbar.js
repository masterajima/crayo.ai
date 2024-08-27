import { Container } from '@/components/ui/containers';
import Link from 'next/link';
import NavMenu from './menu';

const Navbar = () => {
  return (
    <nav className='py-4 border-b-2'>
      <Container className='flex justify-between items-center'>
        <Link
          href='/'
          className='text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl'
        >
          RP
        </Link>
        <NavMenu />
      </Container>
    </nav>
  );
};

export default Navbar;
