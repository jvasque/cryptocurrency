import firebase from "firebase";

const firebaseConfig = {
  //insert your config from firebase console
  apiKey: "AIzaSyCtyltV6xkW4qTz3_Jl28a2vP3-fKTB_DU",
  authDomain: "cryptocurrency-631d1.firebaseapp.com",
  projectId: "cryptocurrency-631d1",
  storageBucket: "cryptocurrency-631d1.appspot.com",
  messagingSenderId: "659358451873",
  appId: "1:659358451873:web:6fd12ad204fd18736fc8e0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
