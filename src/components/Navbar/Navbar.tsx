import React from 'react';
import styles from './Navbar.module.scss';

import MobileNavbar from './MobileNavbar';

const Navbar = () => {

  return (
    <header className={styles.navbar}>
      <MobileNavbar />
    </header>
  );
}

export default Navbar;
