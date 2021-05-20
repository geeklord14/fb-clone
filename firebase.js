import firebase from "firebase";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD8S8TZGCIsn4ycX2sC687TjUXdGGJK6is",
  authDomain: "facebook-clone-45948.firebaseapp.com",
  projectId: "facebook-clone-45948",
  storageBucket: "facebook-clone-45948.appspot.com",
  messagingSenderId: "802280172635",
  appId: "1:802280172635:web:c6143741489f7b5de4a37e",
  measurementId: "G-KWHQZ7XCN6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
