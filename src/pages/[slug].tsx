import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import getConfig from 'next/config';
import Router from 'next/router';
import RestClient from '../lib/RestClient';

const { BASE_URL } = getConfig().publicRuntimeConfig;

interface PageSlugProps {
  redirectURL: string
}

const PageSlug = (props: PageSlugProps) => {
  const { redirectURL } = props;

  if (typeof window !== 'undefined') {
    if (redirectURL !== "") Router.push(redirectURL);
    else Router.push('/');
  }

  return (
    <h1>Redirecting...</h1>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const config = {
    method: 'GET',
    url: `${BASE_URL}/api/shortenurl/redirecturl?url=${params && params.slug}`
  }
  const data = await RestClient(config, {});

  return {
    props: {
      redirectURL: data && data.origin_url
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default PageSlug;
