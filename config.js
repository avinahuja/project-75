import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAgt5KzWtu5U289kii-zmHoGKSjk0tNvc0",
  authDomain: "e-ride-8c277.firebaseapp.com",
  projectId: "e-ride-8c277",
  storageBucket: "e-ride-8c277.appspot.com",
  messagingSenderId: "869801975292",
  appId: "1:869801975292:web:3bddbd3ec6307d3e6e2679"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
