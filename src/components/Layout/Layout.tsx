import React, { useEffect } from 'react';
import getConfig from 'next/config';

import Navbar from '../Navbar';
import Footer from '../Footer';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  APP_ENV,
  FIREBASE_APIKEY,
} = getConfig().publicRuntimeConfig;


const Layout = ({ children }: any) => {

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: FIREBASE_APIKEY,
    authDomain: "marph-4bb98.firebaseapp.com",
    projectId: "marph-4bb98",
    storageBucket: "marph-4bb98.appspot.com",
    messagingSenderId: "409398382775",
    appId: "1:409398382775:web:08f10ead553b82e906fd32",
    measurementId: "G-7S4L8WVV24"
  };

  // Initialize Firebase
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    if (APP_ENV === 'production') getAnalytics(app);
  }, []);

  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
