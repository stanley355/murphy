import styles from './Layout.module.scss';
import React from 'react';

export const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <header className={styles.layout__header}></header>
      <body className={styles.layout__body}>
        {children}
      </body>
      <footer className={styles.layout__footer}></footer>
    </div>
  )
}
