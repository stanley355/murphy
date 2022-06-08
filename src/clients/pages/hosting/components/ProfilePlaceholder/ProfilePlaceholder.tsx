import React from 'react';

import styles from './ProfilePlaceHolder.module.scss';

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
      <div>{profile.name}</div>
      <div>{profile.description}</div>
    </div>
  );
}

export default ProfilePlaceholder;