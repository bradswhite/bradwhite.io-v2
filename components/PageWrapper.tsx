import { FC } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const PageWrapper: FC<{ children: FC | FC[] }> = ({ children }) => {
  return (
    <div className='overflow-hidden' style={{ fontFamily: 'Triakis' }}>
      <Navbar/>
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;