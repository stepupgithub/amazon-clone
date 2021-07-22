import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyAdyHIqBu9m_ee6Hr8oBaP0A7fOZZU7nhA",
     authDomain: "challenge-61ff3.firebaseapp.com",
     projectId: "challenge-61ff3",
     storageBucket: "challenge-61ff3.appspot.com",
     messagingSenderId: "842821043771",
     appId: "1:842821043771:web:1caeabb103c0e33cb9fe1e",
     measurementId: "G-237XJT23H8"
   };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };