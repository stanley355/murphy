import React from 'react';
import Link from 'next/link';
import { FaTasks } from 'react-icons/fa';
import styles from './CloudNavbar.module.scss';

interface ICloudNavbar {
  onFilterClick: () => void
}

const CloudNavbar = (props: ICloudNavbar) => {
  const { onFilterClick } = props;

  return (
    <div className={styles.cloud__navbar}>
      <Link href="/">
        <a title='Marph' className={styles.cloud__navbar__logo}>Marph</a>
      </Link>
      <button
        className={styles.cloud__navbar__filterBtn}
        onClick={onFilterClick}>
        Filter <FaTasks />
      </button>
    </div >
  );
}

export default CloudNavbar;
