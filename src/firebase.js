// Import the functions you need from the SDKs you need
// import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM46vsSJddFuVGdNsy3JTR-VP8UKkyOq4",
  authDomain: "sabina-90.firebaseapp.com",
  projectId: "sabina-90",
  storageBucket: "sabina-90.firebasestorage.app",
  messagingSenderId: "361457922047",
  appId: "1:361457922047:web:f1f9693d6910aa4b81c1ca",
  measurementId: "G-JD0RTH347C"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);