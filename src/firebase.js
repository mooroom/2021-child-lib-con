import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPcxQfpIX9Ak50QVskSDbEOLkVDOFEOSk",
  authDomain: "child-lib-con.firebaseapp.com",
  projectId: "child-lib-con",
  storageBucket: "child-lib-con.appspot.com",
  messagingSenderId: "1048745222669",
  appId: "1:1048745222669:web:b20b4a469fa2dfc2db6b44",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };
