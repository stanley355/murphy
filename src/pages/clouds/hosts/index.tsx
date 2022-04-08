import React from 'react';
import getConfig from 'next/config';
import { GetStaticProps } from 'next';
import RestClient from '../../../lib/RestClient';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const Hosts = ({ host_list }: any) => {
  return (
    <div>
      <div >
        {host_list.map((host: any) =>
          <div key={host.name}>
            <div>{host.name}</div>
            <div>{host.description}</div>
            <div>{host.url}</div>
          </div>
        )}
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
