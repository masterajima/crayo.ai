import Footer from './footer';
import Main from './main';
import Navbar from './navbar';
import LogoPage from '../logopage';

const Layout = ({ children }) => {
  const menuItems = [
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Insight' },
    { href: 'https://crayo.tolt.io/login', label: 'Affiliate' },
    { href: '/guide', label: 'Guide' },
  ];
  return (
    <>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
