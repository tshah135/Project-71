import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBaamaKZSTji5qzsCdUQiDnPXibMeID2K0",
    authDomain: "e-ride-2f862.firebaseapp.com",
    projectId: "e-ride-2f862",
    storageBucket: "e-ride-2f862.appspot.com",
    messagingSenderId: "357595533603",
    appId: "1:357595533603:web:31ab9363c3834c55393c96"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
