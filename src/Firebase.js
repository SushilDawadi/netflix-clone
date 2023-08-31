import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDF-PWEviBq-T2W4y08UxbR5VUtBxJy8Y4",
  authDomain: "netflix-clone-aa873.firebaseapp.com",
  projectId: "netflix-clone-aa873",
  storageBucket: "netflix-clone-aa873.appspot.com",
  messagingSenderId: "902495376595",
  appId: "1:902495376595:web:a26ae773408f978dcab026",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
