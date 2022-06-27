import React from 'react';
import Link from 'next/link';
import { slugify } from '../../../../../utils/slugify';
import styles from './HostList.module.scss';

interface HostListInterface {
  list: [any]
}

const HostList = (props: HostListInterface) => {
  const { list } = props;

  return (
    <div className={styles.hostList}>
      {list.map((each: any) =>
        <div key={each.name} className={styles.hostList__card}>
          <div className={styles.hostList__card__imgContainer}>
            <img
              src={`/static/images/partners/${slugify(each.name)}.webp`}
              alt={each.name}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.hostList__card__title}>{each.name}</div>
          <div className={styles.hostList__card__desc}>{each.description}</div>
          <div className={styles.hostList__card__links}>
            <Link href={each.url}>
              <a title={each.name}>
                Check Host
              </a>
            </Link>
            <Link href={`/hosting/${slugify(each.name)}`}>
              <a title={each.name}>
                Check Services
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default HostList;