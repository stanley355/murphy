import React from 'react';
import Head from 'next/head';

interface IMeta {
  meta: {
    title: string,
    siteName: string;
    description: string;
    url: string;
    keywords: string;
    openGraph: {
      title: string;
      description: string;
      modifiedTime: string;
      publishedTime: string;
    };
    twitter: {
      site: string;
      title: string;
      description: string;
    };
  }
}

const MetaHead = (props: IMeta) => {
  const { meta } = props;

  return (
    <Head>
      <title>{meta.title}</title>
      <link rel="canonical" key="canonical" href={meta.url} />
      <meta name='keywords' content={meta.keywords} />
      <meta name='description' content={meta.description} />
      <meta property="og:locale" content="en_EN" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.openGraph.title} />
      <meta property="og:description" content={meta.openGraph.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="article:publisher" content="https://marph.herokuapp.com/" />
      <meta property="article:published_time" content={meta.openGraph.publishedTime} />
      <meta property="article:modified_time" content={meta.openGraph.modifiedTime} />
      <meta name="twitter:card" content="@marph" />
      <meta name="twitter:title" content={meta.twitter.title} />
      <meta name="twitter:description" content={meta.twitter.description} />
      <meta name="twitter:creator" content="@marph" />
      <meta name="twitter:site" content="@marph" />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="Stanley Winata" />
      <link rel="icon" href="/marph.ico"></link>
    </Head>
  );
}

export default MetaHead;
