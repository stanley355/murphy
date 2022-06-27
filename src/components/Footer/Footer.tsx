import React from 'react';
import { FaDiceD6, FaRegWindowRestore, FaDesktop, FaRegCopyright } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__top}>
          <div className={styles.footer__top__section}>
          <div className={styles.footer__top__section__title}>Marph Web Services</div>
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
          <div className={styles.footer__top__section}>
            <div className={styles.footer__top__section__title}>PT. Komunikasi Istimewa</div>
            <div>Chubb Square, 9th Floor, Jl. M.H. Thamrin No.10, RT.14/RW.20, Kb. Melati, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230</div>
            <div>support@marph.com</div>
            <div>(021) 30006718</div>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          Copyright <FaRegCopyright /> PT. Komunikasi Istimewa
        </div>
      </div>
    </footer>
  );
};

export default Footer;
