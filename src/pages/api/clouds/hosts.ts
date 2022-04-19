import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import { setCloudFilterQuery } from '../../../clients/pages/clouds/utils/setCloudFilterQuery';
import RestClient from '../../../lib/RestClient';
const { MORPHCLOUDS_URL, MORPHCLOUDS_TOKEN } = getConfig().publicRuntimeConfig;

const CloudsHostsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const config = {
    method: req.method,
    url: `${MORPHCLOUDS_URL}/api/hosts/${setCloudFilterQuery(req.query)}`,
    headers: {
      Authorization: `Bearer ${MORPHCLOUDS_TOKEN}`
    }
  };

  let response: any;
  try {
    response = await RestClient(config, req.body);
  } catch (err) {
    console.error(err);
    response = {};
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(response);
};

export default CloudsHostsHandler;
