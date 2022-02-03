import type { NextPage } from 'next';
import styles from '../../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__hero}>
        <h1>Morph</h1>
        <p>Powerful and Fastest Open Source API written in Rust</p>
        <a href="#docs">Get Started</a>
      </div>
      <div className={styles.container}></div>
    </div>
  )
}

export default Home
