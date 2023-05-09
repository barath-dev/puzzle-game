import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3IEsMPfSbP8RIMlvyANzniHQMVqWsLHU",
  authDomain: "treasure-hunt-02.firebaseapp.com",
  projectId: "treasure-hunt-02",
  storageBucket: "treasure-hunt-02.appspot.com",
  messagingSenderId: "1075706338226",
  appId: "1:1075706338226:web:2c62a54aeb92534a3762ab"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export default firebase;
