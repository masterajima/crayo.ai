import { Container } from '@/components/ui/containers';
import Link from 'next/link';
import NavMenu from './menu';
import Image from 'next/image';
import NavItem from '../navitem';

const Navbar = ({ logo, menuItems = [], showMenu = true }) => {
  return (
    <nav className='py-2 border-b-4'>
      <div className='flex flex-col px-6 '>
        <div className='hidden sm:hidden md:hidden lg:block'>
          <div className='bg-blue-100 bg-opacity-90 w-full rounded-full backdrop-blur-lg '>
            <div className='flex items-start justify-between p-2'>
              <Link
                href='/'
                className='w-20 h-7 block p-3'>
                {logo}
              </Link>
              <div className='flex items-start space-x-2'>
                {menuItems.map((item, index) => (
                  <NavItem
                    key={index}
                    href={item.href}
                    className={item.className}>
                    {item.label}
                  </NavItem>
                ))}
              </div>
              {showMenu && (
                <div className='bg-white rounded-full'>
                  <Link
                    href='#'
                    className='flex items-center bg-blue-300 rounded-full px-6 py-2'>
                    <div className='bg-white rounded-full mr-2 p-2'>
                      <svg
                        className='w-4 h-4 text-custom-blue'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          strokeLinejoin='miter'
                          stroke='currentColor'
                          d='M13.5 5L20.5 12L13.5 19M3.5 12L20 12'
                          strokeWidth='2'></path>
                      </svg>
                    </div>
                    <span className='text-blue-900 text-sm font-semibold tracking-tight'>
                      Menu
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
