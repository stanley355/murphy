import React from 'react';
import Link from 'next/link';
import { FaLink, FaDiceD6 } from 'react-icons/fa'

import styles from './list.module.scss';

interface HostsListInterface {
  list: [
    {
      id: string,
      name: string,
      description: string,
      url: string
    }
  ]
}

const HostsList = (props: HostsListInterface) => {
  const { list } = props;

  return (
    <div className={styles.hosts__list}>
      {list && list.map((host: any) =>
        <div key={host.name} className={styles.hosts__list__card}>
          <div className={styles.hosts__list__card__imgContainer}>
            <img
              src={`/images/hosts/${host.name.toLowerCase()}.webp`}
              alt={host.name}
              width={50}
              height={50}
            />
          </div>
          <div className={styles.hosts__list__card__title}>{host.name}</div>
          <Link href={host.url}>
            <a title={host.name} className={styles.hosts__list__card__websiteLink}>
              <FaLink /> Website
            </a>
          </Link>
          <Link href={`/clouds/hosts/${host.name.toLowerCase()}`}>
            <a title={host.name} className={styles.hosts__list__card__productLink}>
              <FaDiceD6 /> Products
            </a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default HostsList;
