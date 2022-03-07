import axios from "axios";
import getConfig from "next/config";

interface RestClientConfig {
  method: any;
  url: string;
}

const RestClient = async (config: RestClientConfig, data: any) => {
  let response;

  try {
    response = await axios({
      method: config.method,
      url: config.url,
      data,
    });
  } catch (err) {
    response = {
      data: {}
    };
  }

  return response && response.data;
};

export default RestClient;
