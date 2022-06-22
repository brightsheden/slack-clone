
//import { initializeApp } from "firebase/app";
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBwbyQk5JfccF7aS5l5hnArqEj_A7PDi9Q",
  authDomain: "slack-clone-ce882.firebaseapp.com",
  projectId: "slack-clone-ce882",
  storageBucket: "slack-clone-ce882.appspot.com",
  messagingSenderId: "579267945781",
  appId: "1:579267945781:web:a52ecbea35e95b7b54987c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}