// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'aguadash-4.firebaseapp.com',
  projectId: 'aguadash-4',
  storageBucket: 'aguadash-4.appspot.com',
  messagingSenderId: '888806180733',
  appId: '1:888806180733:web:788843834b9af9f550ae14',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
