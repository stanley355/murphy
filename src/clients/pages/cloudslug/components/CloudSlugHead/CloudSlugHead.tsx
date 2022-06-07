
import React from 'react';
import Link from 'next/link';
import { slugify } from '../../../../../utils/slugify';

import styles from './CloudSlugHead.module.scss';

interface ICloudSlugHead {
  name: string,
  url: string,
}

const CloudSlugHead = (props: ICloudSlugHead) => {
  const { name, url } = props;
  
  return (
    <div className={styles.cloudslug__head}>
      <div>
        <img
          src={`/static/images/partners/${slugify(name)}.webp`}
          alt={name}
          width={80}
          height={80}
        />
      </div>
      <Link href={url}>
        <h1 title={name} className={styles.cloudslug__head__title}>
          {name}
        </h1>
      </Link>
    </div>
  )
}

export default CloudSlugHead;
