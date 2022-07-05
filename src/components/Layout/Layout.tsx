import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const Layout = ({ children }: any) => {

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: 'marph-4bb98.firebaseapp.com',
    projectId: 'marph-4bb98',
    storageBucket: 'marph-4bb98.appspot.com',
    messagingSenderId: '409398382775',
    appId: '1:409398382775:web:08f10ead553b82e906fd32',
    measurementId: 'G-7S4L8WVV24',
  };

  console.log(111, firebaseConfig);
  console.log(222, process.env.APP_ENV);

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // if (typeof window !== 'undefined') {
  //   return getAnalytics(app);
  // }
  console.log(app.name);

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
