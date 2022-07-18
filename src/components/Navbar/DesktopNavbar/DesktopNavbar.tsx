import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaDiceD6, FaRegWindowRestore, FaDesktop } from 'react-icons/fa';
import styles from './DesktopNavbar.module.scss';

const DesktopNavbar = () => {
  return (
    <nav className={styles.desktopNavbar}>
      <div className={styles.desktopNavbar__left}>
        <Link href="/">
          <a
            title="Marph"
            className={styles.desktopNavbar__logo} >
            <Image
              alt="Marph"
              src="/static/images/marph.webp"
              width="35"
              height="35"
            />
            Marph
          </a>
        </Link>
      </div>
      <div className={styles.desktopNavbar__right}>
        <Link href="/products/">
          <a title="Marph Web Products" >
            <FaDiceD6 />
            Products
          </a>
        </Link>
        <Link href="/plans/">
          <a title="Marph Web Plans" >
            <FaRegWindowRestore />
            Plans
          </a>
        </Link>
        <Link href="/hosting/">
          <a title="Marph Web Hosting" >
            <FaDesktop />
            Hosting
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default DesktopNavbar;