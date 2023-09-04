// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKV5mHbyAvnxe1X0Ip2evllTauV6IS7X4",
    authDomain: "steeven-portfolio.firebaseapp.com",
    projectId: "steeven-portfolio",
    storageBucket: "steeven-portfolio.appspot.com",
    messagingSenderId: "935790038329",
    appId: "1:935790038329:web:42ed7c18cc4ad62faf2ce8",
    measurementId: "G-KVD6G4SVQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);