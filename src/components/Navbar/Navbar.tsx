import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { FaBars, FaCloud } from "react-icons/fa";

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
      <button
        className={styles.navbar__cloudBtn}
      >
        <FaCloud />
      </button>
    </header>
  );
}

export default Navbar;
