import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCpP0tssz3CtiQP8kX9afCXx45AqZ9nWoY",
  authDomain: "fir-auth-3fa1a.firebaseapp.com",
  projectId: "fir-auth-3fa1a",
  storageBucket: "fir-auth-3fa1a.firebasestorage.app",
  messagingSenderId: "968891947897",
  appId: "1:968891947897:web:139b7ff51ee705b1b96da8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
