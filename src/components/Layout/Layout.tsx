import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }: any) => {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
