import styles from '../../styles/pages/home.module.scss'
import type { NextPage } from 'next';

import MetaHead from '../components/Head/Head';
import HomeAPIS from '../components/pages/Home/APIS/APIS';

const Home: NextPage = () => {
  const HomeMeta = {
    title: "Morph API Service",
    description: "Powerful and Fastest Open Source API Service written in Rust",
    keywords: "Shorten URL, API Service, Rust"
  }

  return (
    <div className={styles.home}>
      <MetaHead meta={HomeMeta}/>
      <div className={styles.home__hero}>
        <h1>Morph</h1>
        <p>Powerful and Fastest Open Source API Service written in Rust</p>
        <a href="#docs">Get Started</a>
      </div>
      <div className="container">
        <HomeAPIS />
        <div>DOCS</div>
      </div>
    </div>
  )
}

export default Home
