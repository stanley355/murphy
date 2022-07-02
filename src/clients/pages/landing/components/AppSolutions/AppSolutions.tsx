import React from 'react';
import Image from 'next/image';
import styles from './AppSolutions.module.scss';
import useResponsive from '../../../../../utils/hooks/useResponsive';

const AppSolutions = () => {

  const { isDesktop } = useResponsive();

  return (
    <div className={styles.appSolutions}>
      <div className="container">
        {!isDesktop && <h2>App Solutions</h2>}
        <div className={styles.appSolutions__list}>
          <div className={styles.appSolutions__card}>
            <div className={styles.appSolutions__card__imgContainer}>
              <Image
                alt="Web solution"
                src="/static/images/home/solution1.webp"
                width={250}
                height={120}
              />
            </div>
            <div className={styles.appSolutions__card__title}>Pick the Best Services</div>
            <div>From AWS, GCP, Heroku, Vercel, to Netlify and Digital Ocean</div>
          </div>
          <div className={styles.appSolutions__card}>
            <div className={styles.appSolutions__card__imgContainer}>
            <Image
                alt="Web solution"
                src="/static/images/home/solution2.webp"
                width={250}
                height={120}
              />
            </div>
            <div className={styles.appSolutions__card__title}>Define your Needs</div>
            <div>Whether it is analytics, storage, or databases, anything you want</div>
          </div>

          <div className={styles.appSolutions__card}>
            <div className={styles.appSolutions__card__imgContainer}>
            <Image
                alt="Web solution"
                src="/static/images/home/solution3.webp"
                width={250}
                height={120}
              />
            </div>
            <div className={styles.appSolutions__card__title}>Deploy  Everywhere</div>
            <div>With our simple interfaces, you are just one tap away from deployment </div>
          </div>

          <div className={styles.appSolutions__card}>
            <div className={styles.appSolutions__card__imgContainer}>
            <Image
                alt="Web solution"
                src="/static/images/home/solution4.webp"
                width={250}
                height={120}
              />
            </div>
            <div className={styles.appSolutions__card__title}>#1 Customer Services</div>
            <div>Ask everything you need for your app and we surely answers it for you</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppSolutions;