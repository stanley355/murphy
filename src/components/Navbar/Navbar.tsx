import React from 'react';
import styles from './Navbar.module.scss';

import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import useResponsive from '../../utils/hooks/useResponsive';

const Navbar = () => {

  const { isDesktop } = useResponsive();

  return (
    <header className={styles.navbar}>
      {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
    </header>
  );
}

export default Navbar;
