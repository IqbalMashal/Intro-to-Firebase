// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBatHjOOO-OBqMVrgMSTp_MC5wAXKfHnBQ",
  authDomain: "job-statues.firebaseapp.com",
  projectId: "job-statues",
  storageBucket: "job-statues.firebasestorage.app",
  messagingSenderId: "212322534512",
  appId: "1:212322534512:web:ea85690d0695808d1520b5",
  measurementId: "G-ECG908PVZR",
  databaseURL: "https://job-statues-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
