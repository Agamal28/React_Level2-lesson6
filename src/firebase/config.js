// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxi1E66ZHn-vSQclCr8NqOdFU-FqEzmVs",
  authDomain: "react-firebase-6191a.firebaseapp.com",
  projectId: "react-firebase-6191a",
  storageBucket: "react-firebase-6191a.firebasestorage.app",
  messagingSenderId: "515578087343",
  appId: "1:515578087343:web:65a79988c2bbafd0b5115a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);