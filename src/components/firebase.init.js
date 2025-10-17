// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbokvDmevDU5nzF87XdxQMEnSgt_X9kkI",
  authDomain: "fir-auth-m9.firebaseapp.com",
  projectId: "fir-auth-m9",
  storageBucket: "fir-auth-m9.firebasestorage.app",
  messagingSenderId: "669063400485",
  appId: "1:669063400485:web:d9d989b4ec45e4d35683cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
