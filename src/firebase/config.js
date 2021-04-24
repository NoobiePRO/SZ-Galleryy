import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBrHgu11MmXg1S6IA2_Aw-vUKCL4X0f4lQ",
    authDomain: "sz-gallery.firebaseapp.com",
    projectId: "sz-gallery",
    storageBucket: "sz-gallery.appspot.com",
    messagingSenderId: "313585102540",
    appId: "1:313585102540:web:074b0a72e75cdcf5339c69"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage= firebase.storage();
  const projectFirestore= firebase.firestore();

  export {projectStorage , projectFirestore };