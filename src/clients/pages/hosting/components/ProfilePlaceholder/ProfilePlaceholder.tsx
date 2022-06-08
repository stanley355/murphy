import React from 'react';

import styles from './ProfilePlaceHolder.module.scss';

interface ProfilePlaceholderInterface {
  name: string,
  description: string,
  url: string
}

const ProfilePlaceholder = (props: ProfilePlaceholderInterface) => {
  const { name, description, url } = props;

  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
}

export default ProfilePlaceholder;