import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDbIjKAlg35dUOIUFxDbeLp0QvM8QYBgL8",
    authDomain: "crwn-db-70462.firebaseapp.com",
    projectId: "crwn-db-70462",
    storageBucket: "crwn-db-70462.appspot.com",
    messagingSenderId: "971045998163",
    appId: "1:971045998163:web:4055b9cb8c7579a64f00a6",
    measurementId: "G-KQ6QEHSZJB"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  export default firebase;