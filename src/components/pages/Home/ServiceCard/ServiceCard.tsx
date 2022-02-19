import styles from './ServiceCard.module.scss';
import React from 'react';
import { FaLink } from "react-icons/fa";


const ServiceCard = () => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceCard__title}>API Services</div>

      <div className={styles.serviceCard__services}>
        <div> <FaLink /> Shorten URL</div>
        <p>Forget about long and complicated URL, shortenize your URL to share with others!</p>
        <a href="/shortenurl">Shorten your URL now!</a>
      </div>

    </div>
  );
}

export default ServiceCard;
