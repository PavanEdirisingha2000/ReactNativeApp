
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyAjMHP-yDBwbTriJTs2pd4SzE2E6rRTi6k",
  authDomain: "myapptest-f7cc0.firebaseapp.com",
  projectId: "myapptest-f7cc0",
  storageBucket: "myapptest-f7cc0.appspot.com",
  messagingSenderId: "36332157285",
  appId: "1:36332157285:web:48909cc8b887c9f9a3c98c"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRETORE_DB = getFirestore(FIREBASE_APP);