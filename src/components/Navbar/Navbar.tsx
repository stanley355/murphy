import React from 'react';
import Link from 'next/link';
import { FaBuffer } from "react-icons/fa";
import styles from './Navbar.module.scss';

import MobileMenu from './MobileMenu';

const Navbar = () => {

  const MobileNavbar = () => {
    return (
      <nav className={styles.navbar__mobileNav}>
        <div className={styles.navbar__mobileNav__head}>
          <Link href="/">
            <a
              title="Marph"
              className={styles.navbar__mobileNav__logo} >
              Marph
            </a>
          </Link>
          <button className={styles.navbar__mobileNav__menuBtn}>
            <FaBuffer />
          </button>
        </div>
        <MobileMenu isOpen={true}/>
      </nav>
    );
  }

  return (
    <header className={styles.navbar}>
      <MobileNavbar />
    </header>
  );
}

export default Navbar;
