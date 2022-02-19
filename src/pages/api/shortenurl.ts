import axios from "axios";
import getConfig from "next/config";
import { NextApiRequest, NextApiResponse } from "next";
const { MORPHURL_URL } = getConfig().publicRuntimeConfig;

const shortenURLhandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const apiURL = req.method === "GET" ? `${MORPHURL_URL}/${req.query.url}` : MORPHURL_URL;

  const payload = {
    origin_url: req.body.origin_url,
    hashed_url: "",
    custom_url: req.body.custom_url,
  }
  let response: any;

  try {
    if (req.method === "GET") response = await axios.get(apiURL);
    else if (req.method === "POST") response = await axios.post(apiURL, payload);
  } catch (err) {
    response = {error: err};
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(response.data ? response.data : response);
};

export default shortenURLhandler;
