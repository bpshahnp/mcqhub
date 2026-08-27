// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb8TrE9MHC-RTBrNo2IOoyp56il8ZJYO4",
  authDomain: "mcqhub-293ea.firebaseapp.com",
  projectId: "mcqhub-293ea",
  storageBucket: "mcqhub-293ea.firebasestorage.app",
  messagingSenderId: "1062989893115",
  appId: "1:1062989893115:web:87b2a41ef81973701b0f5e",
  measurementId: "G-YWZ0ZT7K4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
