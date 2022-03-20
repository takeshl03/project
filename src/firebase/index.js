// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD38YGdKs8qgm1-fz5S3RSmNn6oJsqzhgs",
  authDomain: "projectx-11e4d.firebaseapp.com",
  projectId: "projectx-11e4d",
  storageBucket: "projectx-11e4d.appspot.com",
  messagingSenderId: "831940364495",
  appId: "1:831940364495:web:971fa8c5e00be4f68acfba",
  measurementId: "G-EYJC71EV88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app);
export { auth , db };