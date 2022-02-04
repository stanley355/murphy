import axios from "axios";
import getConfig from "next/config";
import { NextApiRequest, NextApiResponse } from "next";
const { MORPHURL_URL } = getConfig().publicRuntimeConfig;

const shortenURLhandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const apiURL = req.method === "GET" ? `${MORPHURL_URL}/${req.query.url}` : MORPHURL_URL;

  let response: any;
  // console.log(req.body);

  try {
    if (req.method === "GET") response = await axios.get(apiURL);
    else if (req.method === "POST") response = await axios.post(apiURL, req.body);
  } catch (err) {
    response = err;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(response.data ? response.data : response);
};

export default shortenURLhandler;
