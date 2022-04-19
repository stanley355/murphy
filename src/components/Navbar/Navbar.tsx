import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { FaCloud } from "react-icons/fa";

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
      <Link href="/clouds">
        <a
          title="Marph"
          className={styles.navbar__cloudBtn} >
          <FaCloud />
        </a>
      </Link>
    </header>
  );
}

export default Navbar;
