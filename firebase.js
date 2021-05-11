import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
   apiKey: "AIzaSyAvMAt-xWdoWhImAFh1uEmDOVhfhk_S2fc",
  authDomain: "wp-clone-933e1.firebaseapp.com",
  projectId: "wp-clone-933e1",
  storageBucket: "wp-clone-933e1.appspot.com",
  messagingSenderId: "612583606851",
  appId: "1:612583606851:web:a6ce5340104a57494622f6",
  measurementId: "G-28JBF7NSET"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
