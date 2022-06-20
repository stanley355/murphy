import React from 'react';
import Link from 'next/link';
import { FaJsfiddle, FaAws, FaGoogle, FaTelegram } from 'react-icons/fa';
import styles from './DesktopNavbar.module.scss';

const DesktopNavbar = () => {
  return (
    <nav className={styles.desktopNavbar}>
      <div className={styles.desktopNavbar__left}>
        <Link href="/">
          <a
            title="Marph"
            className={styles.desktopNavbar__logo} >
            <FaJsfiddle />
            Marph
          </a>
        </Link>
      </div>
      <div className={styles.desktopNavbar__right}>
        <Link href="/hosting/amazon-web-services">
          <a title="Amazon Web Services">
            <FaAws />
            AWS
          </a>
        </Link>
        <Link href="/hosting/google-cloud-platform">
          <a title="Google Cloud Platform">
            <FaGoogle />
            GCP
          </a>
        </Link>
        <Link href="/hosting/">
          <a title="Marph Web Services">
            <FaTelegram />
            Web Services
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default DesktopNavbar;