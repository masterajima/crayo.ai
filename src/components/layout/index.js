import NavItem from '../nav-item';
import Footer from './footer';
import Main from './main';
import Navbar from './navbar';

const Layout = ({ children }) => {
 
  return (
    <>
      
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
