import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const NavbarDropdown = () => {
    return (
      <div className={styles.navbar__dropdown}>

      </div>
    );
  }

  return (
    <header className={styles.navbar}>
      <a href="/" className={styles.navbar__logo}>Marph API</a>
      <button className={styles.navbar__burgerBtn}><FaBars /></button>
    </header>
  );
}

export default Navbar;
