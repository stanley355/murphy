import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Navbar.module.scss';
import { FaBars, FaTimesCircle } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const NavbarDropdown = () => {
    return (
      <div
        className={classNames(
          styles.navbar__dropdown,
          showDropdown ? styles.navbar__dropdown__show : ""
        )}>
        <div className={styles.navbar__dropdown__top}>
          <a href="/" className={styles.navbar__dropdown__top__logo}>Marph API</a>
          <button
            className={styles.navbar__dropdown__top__closeBtn}
            onClick={() => setShowDropdown(false)}
          >
            <FaTimesCircle />
          </button>
        </div>
      </div>
    );
  }

  return (
    <header className={styles.navbar}>
      <NavbarDropdown />
      <a href="/" className={styles.navbar__logo}>Marph API</a>
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
