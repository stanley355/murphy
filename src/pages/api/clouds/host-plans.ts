import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import RestClient from '../../../lib/RestClient';

const { MORPHCLOUDS_URL, MORPHCLOUDS_TOKEN } = getConfig().publicRuntimeConfig;

const HostPlansHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const config = {
    method: 'GET',
    url: `${MORPHCLOUDS_URL}/api/plans/hosts/${req.query.hostname}`,
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

export default HostPlansHandler;
