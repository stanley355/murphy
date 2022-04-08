import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';

import RestClient from '../../../lib/RestClient';
const { MORPHURL_URL } = getConfig().publicRuntimeConfig;

const SingleurlHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const config = {
    method: 'POST',
    url: `${MORPHURL_URL}/api/v1`,
  };
  const payload = {
    origin_url: req.body.origin_url,
    hashed_url: '',
    custom_url: req.body.custom_url,
  };
  let response: any;

  try {
    response = await RestClient(config, payload);
  } catch (err) {
    console.error(err);
    response = {};
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(response);
};

export default SingleurlHandler;
