import React from 'react';
import Link from 'next/link';
import styles from './HeroContent.module.scss';

import { FaCloud, FaShareAlt, FaDatabase, FaUbuntu, FaDocker, FaServer } from 'react-icons/fa';

const HeroContent = () => {

  // TODO: Adjust the url after creating a more advanced filter
  const HeroMenu = [
    {
      title: 'Analytics',
      icon: <FaShareAlt />,
      url: '/hosting/amazon-web-services/'
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      url: '/hosting/amazon-web-services/?&database_support=true'
    },
    {
      title: 'Computing',
      icon: <FaUbuntu />,
      url: '/hosting/amazon-web-services/'
    },
    {
      title: 'Containers',
      icon: <FaDocker />,
      url: '/hosting/amazon-web-services/'
    },
    {
      title: 'Hosting',
      icon: <FaCloud />,
      url: '/hosting/amazon-web-services/'
    },
    {
      title: 'Servers',
      icon: <FaServer />,
      url: '/hosting/amazon-web-services/'
    }
  ]

  return (
    <div className={styles.heroContent}>
      <div className="container">
        <h1>One Stop for All Web Services</h1>
        <div className={styles.heroContent__subtitle}>
          Explore hundreds of services to help you build large scale application fast and robust
        </div>
        <div className={styles.heroContent__menu}>
          {HeroMenu.map((menu: any) =>
              <Link href={menu.url} key={menu.title}>
                <a title={menu.title} className={styles.heroContent__menu__card}>
                  {menu.icon}
                  {menu.title}
                </a>
              </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroContent;