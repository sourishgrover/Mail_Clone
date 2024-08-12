import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYSaG9Rhvy6eCjINt_A7rMOKRDtgGOgB0",
  authDomain: "clone-aa6fb.firebaseapp.com",
  projectId: "clone-aa6fb",
  storageBucket: "clone-aa6fb.appspot.com",
  messagingSenderId: "242478738936",
  appId: "1:242478738936:web:ace4751c87aba3d1b23a0d",
  measurementId: "G-R0R9L4F720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();