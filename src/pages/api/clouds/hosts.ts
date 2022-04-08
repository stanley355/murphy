import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';

import RestClient from '../../../lib/RestClient';
const { MORPHCLOUDS_URL } = getConfig().publicRuntimeConfig;

const SingleurlHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const config = {
    method: req.method,
    url: `${MORPHCLOUDS_URL}/api/hosts/`,
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

export default SingleurlHandler;
