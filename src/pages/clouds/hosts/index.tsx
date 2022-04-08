import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { GetStaticProps } from 'next';
import { FaLink, FaDiceD6 } from 'react-icons/fa'

import styles from './hosts.module.scss';
import RestClient from '../../../lib/RestClient';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const Hosts = ({ host_list }: any) => {
  return (
    <div className={styles.hosts}>
      <div className="container">
        <div className={styles.hosts__list}>
          {host_list && host_list.map((host: any) =>
            <div key={host.name} className={styles.hosts__list__card}>
              <div className={styles.hosts__list__card__imgContainer}>
                <img
                  src={`/images/hosts/${host.name.toLowerCase()}.webp`}
                  alt={host.name}
                  width={50}
                  height={50}
                />
              </div>
              {/* <div>{host.name}</div> */}
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
      </div>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const config = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/hosts/`
  }
  const data = await RestClient(config, {});

  return {
    props: {
      host_list: data
    }
  }
}

export default Hosts;
