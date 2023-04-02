// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'aguadash2-0.firebaseapp.com',
  projectId: 'aguadash2-0',
  storageBucket: 'aguadash2-0.appspot.com',
  messagingSenderId: '335222528295',
  appId: '1:335222528295:web:cc3eab2f138af88bf1b102',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
