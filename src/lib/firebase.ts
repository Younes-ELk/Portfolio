import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDymFA5LUceZAHpYQtRatmSOX5Y001tEAQ",
  authDomain: "portfolio-younes.firebaseapp.com",
  projectId: "portfolio-younes",
  storageBucket: "portfolio-younes.firebasestorage.app",
  messagingSenderId: "455502136669",
  appId: "1:455502136669:web:225177932cedb75fb894b4",
  measurementId: "G-N43TL7VS1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);