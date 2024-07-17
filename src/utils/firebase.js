// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH9dR2jDpb4cw-APJc0IokvvR62XfnkWw",
  authDomain: "netflix-gpt-c26be.firebaseapp.com",
  projectId: "netflix-gpt-c26be",
  storageBucket: "netflix-gpt-c26be.appspot.com",
  messagingSenderId: "381337903150",
  appId: "1:381337903150:web:e8f38be39662b302f03fbf",
  measurementId: "G-7K21N06169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const  auth= getAuth();