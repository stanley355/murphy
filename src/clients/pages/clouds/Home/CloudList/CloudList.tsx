import React, { useState } from 'react';
import Link from 'next/link';
import styles from './CloudList.module.scss';
import { slugify } from '../../../../../utils/slugify';

interface CloudListInterface {
  hosts: [
    {
      id: Number,
      name: String,
      url: String,
      description: String,
    }
  ]
}

const CloudList = (props: CloudListInterface) => {
  const { hosts } = props;

  const [expandingDesc, setExpandingDesc] = useState([""]);

  const updateExpandingDesc = (name: string) => {
    let newExpandingDesc = [...expandingDesc];
    newExpandingDesc.push(name);
    setExpandingDesc(newExpandingDesc);
  }

  return (
    <div className={styles.cloud__list}>
      {hosts && hosts.map((host: any) =>
        <div className={styles.cloud__list__card}>
          <div className={styles.cloud__list__card__imgContainer}>
            <img
              src={`/images/clouds/${slugify(host.name.toLowerCase())}.webp`}
              width={125}
              height={125}
            />
          </div>
          <div className={styles.cloud__list__card__title}>{host.name}</div>
          <div className={styles.cloud__list__card__description}>
            {
              expandingDesc.includes(host.name) ?
                host.description :
                <>
                  <span>{host.description.substring(0, 100).concat('...')}</span>
                  <span className={styles.cloud__list__card__description__seemore} onClick={() => updateExpandingDesc(host.name)}>See More</span>
                </>
            }
          </div>
          <div className={styles.cloud__list__card__linkcontainer}>
            <Link href={host.url}>
              <a title={host.name} className={styles.cloud__list__card__weblink}>
                Website
              </a>
            </Link>

            <Link href={host.url} >
              <a title={host.name} className={styles.cloud__list__card__productlink}>
                Products
              </a>
            </Link>
          </div>
        </div>)}
    </div>
  );
}

export default CloudList;
