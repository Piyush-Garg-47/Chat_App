// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth' ; 
import {getFirestore} from 'firebase/firestore' ; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPILtouYQg_6ZAR9wAWPgG6kQDkjUmaKc",
  authDomain: "chatapp-5a161.firebaseapp.com",
  projectId: "chatapp-5a161",
  storageBucket: "chatapp-5a161.firebasestorage.app",
  messagingSenderId: "146409956964",
  appId: "1:146409956964:web:ea855f872c8e883be22171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) ; 
export const provider = new GoogleAuthProvider() ; 
export const db = getFirestore(app) ; 