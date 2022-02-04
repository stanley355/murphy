import styles from './Layout.module.scss';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <Header />
      <body className={styles.layout__body}>
        {children}
      </body>
      <Footer />
    </div>
  )
}

export default Layout;
