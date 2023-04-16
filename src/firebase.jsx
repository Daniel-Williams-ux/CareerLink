// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNZKnzcdkVe8DUcnyFG4W_wU_2mzEyGVg",
  authDomain: "careerlink-6cc79.firebaseapp.com",
  projectId: "careerlink-6cc79",
  storageBucket: "careerlink-6cc79.appspot.com",
  messagingSenderId: "581887137564",
  appId: "1:581887137564:web:e61569bb7d333c37880cd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app }