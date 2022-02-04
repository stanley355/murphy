import styles from './Layout.module.scss';
import React from 'react';
import Header from '../Header/Header';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <Header />
      <body className={styles.layout__body}>
        {children}
      </body>
      <footer className={styles.layout__footer}></footer>
    </div>
  )
}

export default Layout;
