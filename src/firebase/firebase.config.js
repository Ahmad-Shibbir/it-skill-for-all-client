// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrj1MzyIUiQPyEPmysioLIiznV1_1HIX0",
  authDomain: "it-skills-4-all.firebaseapp.com",
  projectId: "it-skills-4-all",
  storageBucket: "it-skills-4-all.appspot.com",
  messagingSenderId: "192062735144",
  appId: "1:192062735144:web:2ebfe93dbc3e011b43061d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;