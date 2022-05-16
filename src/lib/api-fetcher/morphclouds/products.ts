import getConfig from 'next/config';
import RestClient from '../../RestClient';
const { MORPHCLOUDS_URL, MORPHCLOUDS_TOKEN } = getConfig().publicRuntimeConfig;

export const fetchAllProducts = async () => {
  const allPlanRequest = {
    method: 'GET',
    url: `${MORPHCLOUDS_URL}/api/products/`,
    headers: {
      Authorization: `Bearer ${MORPHCLOUDS_TOKEN}`,
    },
  };

  return await RestClient(allPlanRequest, {});
};
