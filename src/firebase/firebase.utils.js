import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCK_kpuMI-Sgvt-oG_FsdanFuGSweyzbsU",
  authDomain: "crwn-db-c46f5.firebaseapp.com",
  projectId: "crwn-db-c46f5",
  storageBucket: "crwn-db-c46f5.appspot.com",
  messagingSenderId: "694989798320",
  appId: "1:694989798320:web:578c4dd7487da34a90f475",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
//we want to always trigger the google popup when ever we use the GoogleAuthProvider for authentication
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
