import React, { useEffect } from 'react';
import Router from 'next/router';

import styles from '../../styles/pages/home.module.scss'

import MetaHead from '../components/Head/Head';
import ServiceCard from '../components/pages/Home/ServiceCard/ServiceCard';
import DocsCard from '../components/pages/Home/DocsCard/DocsCard';
import ShortenerForm from '../components/pages/Home/ShortenerForm/ShortenerForm';

const Home = () => {
  const HomeMeta = {
    title: "Marph API Service",
    description: "Powerful and Fastest Open Source API Service written in Rust",
    keywords: "Shorten URL, API Service, Rust"
  }

  useEffect(() =>{
    Router.push('/shortenurl');
  })

  return (
    <div className={styles.home}>
      
    </div>
  )
}

export default Home
