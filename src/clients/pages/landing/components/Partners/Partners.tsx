import React from 'react';
import Link from 'next/link';
import styles from './Partners.module.scss';
import { slugify } from '../../../../../utils/slugify';

interface PartnersInterface {
  partnerList: [string]
}

const Partners = (props: PartnersInterface) => {
  const { partnerList } = props;

  return (
    <div className={styles.partners}>
      <div className="container">
        <h2>Our Partners</h2>
        <div className={styles.partners__list}>
          {partnerList.map((partner: string) =>
            <Link href={`/hosting/${slugify(partner)}`} key={partner}>
              <a title={partner} className={styles.partners__card}>
                <img
                  src={`/static/images/partners/${slugify(partner)}.webp`}
                  alt={partner}
                  width={100}
                  height={100}
                />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Partners;