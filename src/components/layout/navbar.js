import { Container } from '@/components/ui/containers';
import Link from 'next/link';
import NavMenu from './menu';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='py-4 border-b-2'>
      <Container className='flex flex-col'>
        <div className='flex items-center justify-between bg-white/90 w-full rounded-lg backdrop-blur-md px-4 py-2'>
          <Link
            href='./'
            className='block'>
            <Image
              src='/path-to-your-logo.svg'
              alt='Logo'
              width={120}
              height={28}
              className='w-auto h-7'
            />
          </Link>
          <div className='flexs'>
            <Link
              href='#'
              className='flex items-center bg-white text-[#000D49] font-semibold text-sm rounded-full px-4 py-2 transition-colors hover:bg-[#CBDCFC]'>
              <span className=''>Menu</span>
            </Link>
          </div>
          <NavMenu />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
