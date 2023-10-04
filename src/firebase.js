// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATrtUc3gKjr6Q0i4W8rgx_41YX-N-dmBo",
  authDomain: "grievance-bot-india.firebaseapp.com",
  projectId: "grievance-bot-india",
  storageBucket: "grievance-bot-india.appspot.com",
  messagingSenderId: "613050905972",
  appId: "1:613050905972:web:45b91d756f40e2add86821",
  measurementId: "G-YHVVJ6KCJE",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);
const storage = getStorage(firebase);

export { firebase, db, auth, storage };
