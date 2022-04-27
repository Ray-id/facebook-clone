import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcp5Fk-dzOwDQjLB3CDP3PC9ocyt0IxlA",
  authDomain: "facebook-clone-d65c6.firebaseapp.com",
  projectId: "facebook-clone-d65c6",
  storageBucket: "facebook-clone-d65c6.appspot.com",
  messagingSenderId: "216623269254",
  appId: "1:216623269254:web:94b2e102b1d29ee07a9807",
  measurementId: "G-W4LB3LYBBZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
