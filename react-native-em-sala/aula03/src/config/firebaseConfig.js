// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5An-v1wCjiR_ZCbZx3zro97etAMYBqmo",
  authDomain: "tech-cursos-10f42.firebaseapp.com",
  projectId: "tech-cursos-10f42",
  storageBucket: "tech-cursos-10f42.firebasestorage.app",
  messagingSenderId: "32325583150",
  appId: "1:32325583150:web:b5427e1a826868e9923abf",
  measurementId: "G-KSHPQ74X0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);