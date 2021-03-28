import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCgEz2SZqWRiqMtTuA7k_BA34_WqTfxXrA",
  authDomain: "netflix-clone-61927.firebaseapp.com",
  projectId: "netflix-clone-61927",
  storageBucket: "netflix-clone-61927.appspot.com",
  messagingSenderId: "308792385963",
  appId: "1:308792385963:web:5b90ada8d7308681bcb2ee",
  measurementId: "G-D2HDP4R0MQ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {auth}
export default db
