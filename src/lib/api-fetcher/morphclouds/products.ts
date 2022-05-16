import getConfig from 'next/config';
import RestClient from '../../RestClient';
const { MORPHCLOUDS_URL, MORPHCLOUDS_TOKEN } = getConfig().publicRuntimeConfig;

export const fetchAllProducts = async () => {
  const allProductRequest = {
    method: 'GET',
    url: `${MORPHCLOUDS_URL}/api/products/`,
    headers: {
      Authorization: `Bearer ${MORPHCLOUDS_TOKEN}`,
    },
  };

  return await RestClient(allProductRequest, {});
};

export const fetchHostProducts = async (hostName: string) => {
  const hostProductsRequest = {
    method: 'GET',
    url: `${MORPHCLOUDS_URL}/api/products/hosts/${hostName}`,
    headers: {
      Authorization: `Bearer ${MORPHCLOUDS_TOKEN}`,
    },
  };

  return await RestClient(hostProductsRequest, {});
};
