// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCNsTTcDlKxRfT-mWe6RdEtO62IkcMLXX8",
  authDomain: "pramendra-portfolio-6d2e9.firebaseapp.com",
  projectId: "pramendra-portfolio-6d2e9",
  storageBucket: "pramendra-portfolio-6d2e9.firebasestorage.app",
  messagingSenderId: "1072070046523",
  appId: "1:1072070046523:web:3e45e274914a728853bd1e",
  measurementId: "G-Y9CK56J3M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
