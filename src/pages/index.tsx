import React from 'react';
import Hero from '../clients/Homepage/Hero/Hero';

const Home = () => {
  const HomeMeta = {
    title: "Marph API Service",
    description: "Powerful and Fastest Open Source API Service written in Rust",
    keywords: "Shorten URL, API Service, Rust"
  }

  return (
    <div >
      <Hero />
    </div>
  )
}

export default Home
