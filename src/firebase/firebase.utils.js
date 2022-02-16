import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDHXghXY12LCUbwofhDsDK8o6jNWUN76XY",
  authDomain: "crwn-db-7cbce.firebaseapp.com",
  projectId: "crwn-db-7cbce",
  storageBucket: "crwn-db-7cbce.appspot.com",
  messagingSenderId: "307377909883",
  appId: "1:307377909883:web:e846978b17794a990c32de",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
