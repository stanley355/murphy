import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { FaBars, FaTimesCircle, FaLink, FaSearch, FaCloud } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const NavbarDropdown = () => {
    return (
      <div className={styles.navbar__dropdown}>
        <div className={styles.navbar__dropdown__top}>
          <a href="/" title="Marph API" className={styles.navbar__dropdown__top__logo}>Marph API</a>
          <button
            className={styles.navbar__dropdown__top__closeBtn}
            onClick={() => setShowDropdown(false)}
          >
            <FaTimesCircle />
          </button>
        </div>
        <div className={styles.navbar__dropdown__bottom}>
          <Link href="/shortenurl">
            <a title='Shorten URL' onClick={() => setShowDropdown(false)}>
              <FaLink />
              Shorten URL
            </a>
          </Link>
          <Link href="/morphsearch">
            <a title='Search API' onClick={() => setShowDropdown(false)}>
              <FaSearch />
              Morph Search
            </a>
          </Link>
          <Link href="/clouds">
            <a title='Clouds Hosting Service' onClick={() => setShowDropdown(false)}>
              <FaCloud />
              Clouds Hosting Calculator
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <header className={styles.navbar}>
      {showDropdown && <NavbarDropdown />}
      <a
        href="/"
        title="Marph API"
        className={styles.navbar__logo} >
        Marph API
      </a>
      <button
        className={styles.navbar__burgerBtn}
        onClick={() => setShowDropdown(true)}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
