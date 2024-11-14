// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRGDyBQ8bJtz2dgfDbabS7SKcmnssLHbE",
  authDomain: "ecommerce-app-78415.firebaseapp.com",
  projectId: "ecommerce-app-78415",
  storageBucket: "ecommerce-app-78415.firebasestorage.app",
  messagingSenderId: "340692119962",
  appId: "1:340692119962:web:01389614bd203d85530a23",
  measurementId: "G-TD4DBFSFYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {fireDb,auth}