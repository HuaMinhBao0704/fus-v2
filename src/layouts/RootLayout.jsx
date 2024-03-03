import { Outlet } from 'react-router-dom';

import Header from '../components/shared/Header'; 
import Footer from '../components/shared/Footer';


const RootLayout = () => {
  return (
    <>
      <Header />

      <div className='router-content'>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default RootLayout;
