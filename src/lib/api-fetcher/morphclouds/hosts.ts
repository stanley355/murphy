import getConfig from 'next/config';
import RestClient from '../../RestClient';
const { MORPHCLOUDS_URL, MORPHCLOUDS_TOKEN } = getConfig().publicRuntimeConfig;

export const fetchAllHosts = async () => {
  const allHostRequest = {
    method: 'GET',
    url: `${MORPHCLOUDS_URL}/api/hosts/`,
    headers: {
      Authorization: `Bearer ${MORPHCLOUDS_TOKEN}`
    }
  };

  const a = await RestClient(allHostRequest, {});
  console.log("The a is" , a);
  return a;
};
