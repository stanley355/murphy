import React from 'react';
import Head from 'next/head';

interface HeadInterface {
  title: string;
  description: string;
  keywords: string;
}

const MetaHead = (props: { meta: HeadInterface }) => {
  return (
    <Head>
      <title>{props.meta.title}</title>
      <meta name='keywords' content={props.meta.keywords}/>
      <meta name='description' content={props.meta.description} />
      <meta charSet="utf-8" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" charSet='UTF-8'/>
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <meta name="robots" content='index, follow, , max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
    </Head>
  );
}

export default MetaHead;
