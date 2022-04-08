import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';

import RestClient from '../../../lib/RestClient';
const { MORPHURL_URL } = getConfig().publicRuntimeConfig;

const RedirecturlHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const config = {
    method: 'GET',
    url: `${MORPHURL_URL}/api/v1/${req.query.url}`,
  };
  let response: any;

  try {
    response = await RestClient(config, {});
  } catch (err) {
    console.error(err);
    response = {};
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(response);
};

export default RedirecturlHandler;
