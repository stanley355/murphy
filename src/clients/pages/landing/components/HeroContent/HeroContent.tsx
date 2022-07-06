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
      url: '/products/?category=ANLT'
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      url: '/products/?category=DTBS'
    },
    {
      title: 'Computing',
      icon: <FaUbuntu />,
      url: '/products/?category=CMPT'
    },
    {
      title: 'Containers',
      icon: <FaDocker />,
      url: '/products/?category=CTNR'
    },
    {
      title: 'Hosting',
      icon: <FaCloud />,
      url: '/hosting/'
    },
    {
      title: 'Servers',
      icon: <FaServer />,
      url: '/hosting/'
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
            <a title={menu.title} className={styles.heroContent__menu__card} href={menu.url} key={menu.title}>
              {menu.icon}
              {menu.title}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroContent;