// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// App's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLJjMwlFZSkiLG8f2jn6-ZxleotG5bhpQ",
  authDomain: "poll-ninja-8666b.firebaseapp.com",
  projectId: "poll-ninja-8666b",
  storageBucket: "poll-ninja-8666b.appspot.com",
  messagingSenderId: "150686841924",
  appId: "1:150686841924:web:3cb89508d22a1a208d9011",
  measurementId: "G-5JZMDDM6K4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export {db};