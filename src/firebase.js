import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "clone-d1541.firebaseapp.com",
  projectId: "clone-d1541",
  storageBucket: "clone-d1541.appspot.com",
  messagingSenderId: "616206680722",
  appId: "1:616206680722:web:92405d41b215c6bf9a1c4b",
  measurementId: "G-ZD6RKGMF30",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
