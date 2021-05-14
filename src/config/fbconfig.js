import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCAJP3R-S5bH05q4noaaJcvLNJkfJ-XIuw",
    authDomain: "evernote-clone-dec14.firebaseapp.com",
    projectId: "evernote-clone-dec14",
    storageBucket: "evernote-clone-dec14.appspot.com",
    messagingSenderId: "1068649098978",
    appId: "1:1068649098978:web:15a3335bf070ed4896b8bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;