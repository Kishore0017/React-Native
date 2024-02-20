// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import{ getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKIDFYWVrT9tGcsuLid-2b4cvI0mLDfAg",
  authDomain: "eduspark-66ace.firebaseapp.com",
  projectId: "eduspark-66ace",
  storageBucket: "eduspark-66ace.appspot.com",
  messagingSenderId: "606644828021",
  appId: "1:606644828021:web:b2d556e18fd8047d0c453c",
  measurementId: "G-0QSSXQG521"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(FIREBASE_APP);
export const Fire_auth = getAuth(FIREBASE_APP);