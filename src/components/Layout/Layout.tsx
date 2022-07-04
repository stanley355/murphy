import React from 'react';
import Head from 'next/head';
import { runFirebase } from '../../lib/runFirebase';
import Navbar from '../Navbar';
import Footer from '../Footer';


const Layout = ({ children }: any) => {

  runFirebase();

  return (
    <div className="layout">
      <Head>
        <meta charSet="utf-8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" charSet='UTF-8' />
        <meta name="theme-color" media="(prefers-color-scheme: #cbdaff)" content="#cbdaff"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
