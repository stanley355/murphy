import getConfig from 'next/config';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const { FIREBASE_APIKEY } = getConfig().publicRuntimeConfig;

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
  if (typeof window !== 'undefined') {
    const analytic = getAnalytics(app);
    console.log(analytic);
  }
};
