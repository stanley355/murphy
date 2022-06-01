import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { FaBuffer } from "react-icons/fa";

const Navbar = () => {

  const MobileNavbar = () => {
    return (
      <nav className={styles.navbar__mobileNav}>
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
