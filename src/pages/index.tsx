import React from 'react';
import Hero from '../clients/Homepage/Hero/Hero';
import styles from '../../styles/pages/home.module.scss'

const Home = () => {
  const HomeMeta = {
    title: "Marph API Service",
    description: "Powerful and Fastest Open Source API Service written in Rust",
    keywords: "Shorten URL, API Service, Rust"
  }

  return (
    <div className={styles.home}>
      <Hero />
    </div>
  )
}

export default Home
