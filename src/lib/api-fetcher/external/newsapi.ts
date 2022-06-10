import getConfig from 'next/config';
import RestClient from '../../RestClient';
const { NEWSAPI_KEY } = getConfig().publicRuntimeConfig;

export const fetchNews = async (keyword: any | string) => {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const currentDate = `${year}-${month}-${day}`;

  const newsApiRequest = {
    method: 'GET',
    url: `https://newsapi.org/v2/everything?q=${keyword}&from=${currentDate}&sortBy=relevancy&language=en`,
    headers: {
      'X-Api-Key': NEWSAPI_KEY
    }
  };

  const allHeadlines = await RestClient(newsApiRequest, {});

  return allHeadlines;
};
