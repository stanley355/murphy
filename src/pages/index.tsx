import type { NextPage } from 'next';
import styles from '../../styles/Home.module.scss'
import MetaHead from '../components/Head/Head';

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
      <div className={styles.container}></div>
    </div>
  )
}

export default Home
