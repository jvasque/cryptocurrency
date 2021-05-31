import firebase from "firebase";


const firebaseConfig = {
//insert your config from firebase console
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db ;

