import React from 'react';
import styles from './AppSolutions.module.scss';

const AppSolutions = () => {
  return (
    <div className="container">
      <h2>App Solutions</h2>
      <div className={styles.appSolutions__card}>
        <div className={styles.appSolutions__card__imgContainer}>
          <img
            src="/static/images/home/solution1.webp"
            width={250}
            height={120}
          />
        </div>
        <div>Pick the best services</div>
        <div>Select from AWS, GCP, and many others</div>
      </div>
      <div className={styles.appSolutions__card}>
        <div className={styles.appSolutions__card__imgContainer}>
          <img
            src="/static/images/home/solution2.webp"
            width={250}
            height={120}
          />
        </div>
        <div>Define your needs</div>
        <div>Storage, database, or containers, everything you want</div>
      </div>

      <div className={styles.appSolutions__card}>
        <div className={styles.appSolutions__card__imgContainer}>
          <img
            src="/static/images/home/solution3.webp"
            width={250}
            height={120}
          />
        </div>
        <div>title</div>
        <div>subtitle</div>
      </div>

      <div className={styles.appSolutions__card}>
        <div className={styles.appSolutions__card__imgContainer}>
          <img
            src="/static/images/home/solution4.webp"
            width={250}
            height={120}
          />
        </div>
        <div>title</div>
        <div>subtitle</div>
      </div>
    </div>
  );
}

export default AppSolutions;