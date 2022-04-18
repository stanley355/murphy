import React from "react";
import { FaCheckCircle } from 'react-icons/fa';
import ProductList from "../ProductList/ProductList";
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <h1 className={styles.hero__title}>Marph Open Source API</h1>
        <div className={styles.hero__subtitle}>
          <FaCheckCircle /> Manage APIs for insights, value creation, and business acceleration
        </div>
        <div className={styles.hero__subtitle}>
          <FaCheckCircle /> Connect any architecture, any data plane, and deploy anywhere
        </div>

      </div>
      <ProductList />
    </div>
  );
}

export default Hero;
