//import firebase modules
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH_7x7InZ8MFnG5_pOgHJ5ZDGCX7eu6dI",
  authDomain: "teamnickelapp.firebaseapp.com",
  databaseURL: "https://teamnickelapp.firebaseio.com",
  projectId: "teamnickelapp",
  storageBucket: "teamnickelapp.appspot.com",
  messagingSenderId: "153137179121",
  appId: "1:153137179121:web:22fb385e8c064742e93c50",
  measurementId: "G-D5THP110V7",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
//initialize instance of firebase for the application
export default firebase;
