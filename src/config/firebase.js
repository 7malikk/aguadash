// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'aguadash-d2414.firebaseapp.com',
  projectId: 'aguadash-d2414',
  storageBucket: 'aguadash-d2414.appspot.com',
  messagingSenderId: '862840799122',
  appId: '1:862840799122:web:ce95a94c52eb8005b2cb4b',
  measurementId: 'G-1WRCWDQFDJ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
