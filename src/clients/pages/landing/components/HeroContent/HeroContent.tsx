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
      url: '/clouds/'
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      url: '/clouds/?&database_support=true'
    },
    {
      title: 'Computing',
      icon: <FaUbuntu />,
      url: '/clouds/'
    },
    {
      title: 'Containers',
      icon: <FaDocker />,
      url: '/clouds/'
    },
    {
      title: 'Hosting',
      icon: <FaCloud />,
      url: '/clouds/'
    },
    {
      title: 'Servers',
      icon: <FaServer />,
      url: '/clouds/'
    }
  ]

  return (
    <div className={styles.heroContent}>
      <div className="container">
        <h1>One Stop for All Web Services</h1>
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