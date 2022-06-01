import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { FaBuffer } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Link href="/">
        <a
          title="Marph"
          className={styles.navbar__logo} >
          Marph
        </a>
      </Link>
      <button className={styles.navbar__menuBtn}>
        <FaBuffer />
      </button>
    </header>
  );
}

export default Navbar;
