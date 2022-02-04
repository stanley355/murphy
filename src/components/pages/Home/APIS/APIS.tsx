import styles from './APIS.module.scss';
import React from 'react';
import { FaLink } from "react-icons/fa";


const HomeAPIS = () => {
  return (
    <div className={styles.homeAPIS}>
      <div className={styles.homeAPIS__title}>API Services</div>

      <div className={styles.homeAPIS__services}>
        <div> <FaLink /> Shorten URL</div>
        <p>Forget about long and complicated URL, shortenize your URL to share with others!</p>
        <a href="/shortenurl">Shorten your URL now!</a>
      </div>

    </div>
  );
}

export default HomeAPIS;
