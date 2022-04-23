import React from 'react';
import getConfig from 'next/config';
import { GetStaticProps, GetStaticPaths } from 'next';

import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import RestClient from '../../lib/RestClient';
import styles from './cloudslug.module.scss';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const SingleCloud = ({ hostData }: any) => {
  
  return (
    <div className='container'>
      <div className={styles.cloudslug} >
        {hostData.name}

      </div>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const hostName = params && params.slug;

  const config = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/hosts-single/?hostname=${capitalizeFirstLetter(hostName)}`
  }

  const hostData = await RestClient(config, {});

  return {
    props: {
      hostData: hostData ?? null
    },
    revalidate: 2 * 60, // cache API response for 2 minutes
  };
}


export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [
      { params: { slug: 'vercel' } }
    ],
    fallback: true,
  };
};

export default SingleCloud;
