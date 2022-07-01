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

  export const createUserProfileDocument = async(userAuth,additionalData) =>{
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
      
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try {
        
        userRef.set({
          displayName,
          email,
          ...additionalData
        })

      } catch (error) {
        console.log(error,error.message);
      }

    }
return userRef;
    
  }

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  export default firebase;