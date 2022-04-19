import React from 'react';
import Link from 'next/link';
import { slugify } from '../../../../../utils/slugify';

import styles from './LandingCloudList.module.scss';

const LandingCloudList = (props: any) => {
  const { cloudList } = props;

  return (
    <div className={styles.landing__cloudlist}>
      <div className="container">
        <h4 className={styles.landing__cloudlist__title}>You'll never wander lonely to find your clouds, again!</h4>
        <div className={styles.landing__cloudlist__subtitle}>Here are the clouds you have found:</div>
        <div className={styles.landing__cloudlist__list}>
          {cloudList && cloudList.map((cloud: any) =>
          // TODO: The href should be directed to its plan or product page
            <Link href={cloud.url} key={cloud.name}>
              <a title={cloud.name} className={styles.landing__cloudlist__card}>
                <img
                  src={`/images/clouds/${slugify(cloud.name.toLowerCase())}.webp`}
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