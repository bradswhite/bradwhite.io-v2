import { FC, ReactNode } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='overflow-hidden font-triakis'>
      <Navbar/>
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
