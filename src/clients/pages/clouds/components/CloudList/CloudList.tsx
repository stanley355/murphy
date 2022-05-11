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

  const CloudListCardHead = ({ host }: any) => {
    return (
      <div className={styles.cloud__list__card__head}>
        <div className={styles.cloud__list__card__head__logo}>
          <img
            src={`/images/clouds/${slugify(host.name.toLowerCase())}.webp`}
            alt={host.name}
            width={80}
            height={80}
          />
        </div>
        <div className={styles.cloud__list__card__head__texts}>
          <div className={styles.cloud__list__card__head__title}>{host.name}</div>
          <div className={styles.cloud__list__card__head__linkcontainer}>
            <Link href={host.url}>
              <a title={host.name} className={styles.cloud__list__card__head__weblink}>
                Website
              </a>
            </Link>

            <Link href={`/clouds/${slugify(host.name)}`} >
              <a title={host.name} className={styles.cloud__list__card__head__productlink} >
                {host.plan_based ? ' Plans' : 'Products'}
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.cloud__list} id="cloud-list">
      {hosts && hosts.map((host: any) =>
        <div className={styles.cloud__list__card} key={host.name}>
          <CloudListCardHead host={host} />
          <div className={styles.cloud__list__card__description}>
            {
              expandingDesc.includes(host.name) ?
                host.description :
                <>
                  <span>{host.description.substring(0, 200).concat('...')}</span>
                  <span className={styles.cloud__list__card__description__seemore} onClick={() => updateExpandingDesc(host.name)}>See More</span>
                </>
            }
          </div>
        </div>)}
    </div>
  );
}

export default CloudList;
