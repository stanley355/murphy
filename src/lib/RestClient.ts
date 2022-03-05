import axios from "axios";
import getConfig from "next/config";

const { BASE_URL } = getConfig().publicRuntimeConfig;

interface RestClientConfig {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: String;
}

const RestClient = async (config: RestClientConfig, data: any) => {
  let response;

  try {
    response = await axios({
      method: config.method,
      url: `${BASE_URL}${config.url}`,
      data,
    });
  } catch (err) {
    console.error(err);
    response = {};
  }

  return response;
};
