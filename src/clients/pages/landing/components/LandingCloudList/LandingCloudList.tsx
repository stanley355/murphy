import React from 'react';
import Link from 'next/link';
import { slugify } from '../../../../../utils/slugify';
import classNames from 'classnames';
import styles from './LandingCloudList.module.scss';

const LandingCloudList = (props: any) => {
  const { cloudList } = props;

  return (
    <div className={styles.landing__cloudlist}>
      <div className="container">
        <div className={styles.landing__cloudlist__title}>You'll never wander lonely to find your clouds, again!</div>
        <div className={styles.landing__cloudlist__subtitle}>Here are the best pick for web hosting providers in 2022:</div>
        <div className={styles.landing__cloudlist__list}>
          {cloudList && cloudList.map((cloud: any) =>
            <Link href={`/clouds/${slugify(cloud.name.toLowerCase())}`} key={cloud.name}>
              <a title={cloud.name} className={classNames(styles.landing__cloudlist__card, "gtm_img_redirection")}>
                <img
                  src={`/images/clouds/${slugify(cloud.name.toLowerCase())}.webp`}
                  alt={cloud.name}
                  width={125}
                  height={125}
                />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default LandingCloudList;
