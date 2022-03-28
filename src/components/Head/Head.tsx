import React from 'react';
import Head from 'next/head';

interface IMeta {
  meta: {
    title: string,
    name: string;
    description: string;
    url: string;
    keywords: string;
    openGraph: {
      locale: string;
      type: string;
      title: string;
      description: string;
      modifiedTime: string;
      publishedTime: string;
    };
    twitter: {
      card: string;
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
      <meta charSet="utf-8" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" charSet='UTF-8' />
      <meta name="theme-color" media="(prefers-color-scheme: #cbdaff)" content="#cbdaff"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content={meta.openGraph.locale} />
      <meta property="og:type" content={meta.openGraph.type} />
      <meta property="og:title" content={meta.openGraph.title} />
      <meta property="og:description" content={meta.openGraph.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content={meta.name} />
      <meta property="article:publisher" content="https://marph.herokuapp.com/" />
      <meta property="article:published_time" content={meta.openGraph.publishedTime} />
      <meta property="article:modified_time" content={meta.openGraph.modifiedTime} />
      <meta name="twitter:card" content={meta.twitter.card} />
      <meta name="twitter:title" content={meta.twitter.title} />
      <meta name="twitter:description" content={meta.twitter.description} />
      <meta name="twitter:creator" content="@marph" />
      <meta name="twitter:site" content="@marph" />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="Stanley Winata" />
    </Head>
  );
}

export default MetaHead;
