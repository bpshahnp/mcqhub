/* =========================================================================
   FIREBASE CONFIG
   Replace the values below with your own Firebase project's config.
   Get this from: Firebase Console → Project settings (gear icon) →
   General tab → "Your apps" → Web app → SDK setup and configuration.

   This file is loaded before script.js and creates the global `db`
   object that script.js uses to read/write the shared leaderboard.
   ========================================================================= */
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
