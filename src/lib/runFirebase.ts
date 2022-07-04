import getConfig from 'next/config';
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const { APP_ENV, FIREBASE_APIKEY } = getConfig().publicRuntimeConfig;

export const runFirebase = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: FIREBASE_APIKEY,
    authDomain: 'marph-4bb98.firebaseapp.com',
    projectId: 'marph-4bb98',
    storageBucket: 'marph-4bb98.appspot.com',
    messagingSenderId: '409398382775',
    appId: '1:409398382775:web:08f10ead553b82e906fd32',
    measurementId: 'G-7S4L8WVV24',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(111, app.name);
  console.log(222, typeof window);
  if (typeof window !== 'undefined') {
    console.log(222, typeof window !== 'undefined');
    console.log(331, APP_ENV);
    if (APP_ENV === 'production') {
      console.log(333, APP_ENV);
      const analytic = getAnalytics(app);
      console.log(analytic);
    }
  }
};
