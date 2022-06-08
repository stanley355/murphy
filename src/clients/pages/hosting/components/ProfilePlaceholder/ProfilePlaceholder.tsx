import React from 'react';
import Link from 'next/link';
import styles from './ProfilePlaceHolder.module.scss';

import { slugify } from '../../../../../utils/slugify';

interface ProfilePlaceholderInterface {
  profile: {
    name: string,
    description: string,
    url: string
  }
}

const ProfilePlaceholder = (props: ProfilePlaceholderInterface) => {
  const { profile } = props;

  return (
    <div className={styles.profilePlaceholder}>
      <Link href={profile.url}>
        <div className={styles.profilePlaceholder__imgContainer}>
          <img
            src={`/static/images/partners/${slugify(profile.name)}.webp`}
            alt={profile.name}
            width={100}
            height={100}
          />
        </div>
      </Link>
      <div className={styles.profilePlaceholder__content}>
        <h1 className={styles.profilePlaceholder__title}>{profile.name}</h1>
        <div className={styles.profilePlaceholder__description}>{profile.description}</div>
      </div>
    </div>
  );
}

export default ProfilePlaceholder;