import React from "react";
import { GetServerSideProps } from "next";
import getConfig from "next/config";
import Router from "next/router";
import axios from "axios";

const { MORPH_URL } = getConfig().publicRuntimeConfig;

const RedirectLink = ({ redirectUrl }: any) => {
  if (typeof window !== 'undefined') {
    if (redirectUrl !== "") Router.push(redirectUrl);
    else Router.push('/');
  }

  return (
    <h1 style={{ color: 'white', padding: '12px' }}>Redirecting to {redirectUrl}...</h1>
  );
}

export default RedirectLink;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { params } = context;
  const urlData = await axios.get(`${MORPH_URL}/api/shortenurl?url=${params && params.slug}`);

  return {
    props: {
      redirectUrl: urlData && urlData.data.origin_url,
    }, // will be passed to the page component as props
  }
}
