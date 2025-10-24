import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrM_jEFJ8c1omh-OuXpMbTflVAmwr_6q0",
  authDomain: "fbc-itire.firebaseapp.com",
  projectId: "fbc-itire",
  storageBucket: "fbc-itire.firebasestorage.app",
  messagingSenderId: "323233977351",
  appId: "1:323233977351:web:97724c389a5cbcb9df06a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// Ensure auth session persists across tabs and reloads
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Auth persistence error:", error);
});
