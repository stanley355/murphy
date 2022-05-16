import getConfig from 'next/config';
import RestClient from '../../RestClient';
const { MORPHCLOUDS_URL, MORPHCLOUDS_TOKEN } = getConfig().publicRuntimeConfig;

export const fetchAllPlans = async () => {
  const allPlanRequest = {
    method: 'GET',
    url: `${MORPHCLOUDS_URL}/api/plans/`,
    headers: {
      Authorization: `Bearer ${MORPHCLOUDS_TOKEN}`,
    },
  };

  return await RestClient(allPlanRequest, {});
};

export const fetchHostPlans = async (hostName: string) => {
  const hostPlanRequest = {
    method: 'GET',
    url: `${MORPHCLOUDS_URL}/api/plans/hosts/${hostName}`,
    headers: {
      Authorization: `Bearer ${MORPHCLOUDS_TOKEN}`,
    },
  };

  return await RestClient(hostPlanRequest, {});
};
