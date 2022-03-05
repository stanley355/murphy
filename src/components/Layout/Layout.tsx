import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import styles from './Layout.module.scss';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <body className={styles.layout__body}>
        {children}
      </body>
      <Footer />
    </div>
  )
}

export default Layout;
