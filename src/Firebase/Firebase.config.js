// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDElyto7L3jEksUSQkO8exR9yPk3TpqHLk",
  authDomain: "weadding-with-react.firebaseapp.com",
  projectId: "weadding-with-react",
  storageBucket: "weadding-with-react.appspot.com",
  messagingSenderId: "385238710613",
  appId: "1:385238710613:web:0fed216b5d6a6ff507d7dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app