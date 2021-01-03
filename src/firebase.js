import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC5ZCvsgS9mIRHdGtClykncHpvImxhVPdQ",
    authDomain: "clone-47972.firebaseapp.com",
    projectId: "clone-47972",
    storageBucket: "clone-47972.appspot.com",
    messagingSenderId: "650903286243",
    appId: "1:650903286243:web:116164e737bad065b4f0d6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };