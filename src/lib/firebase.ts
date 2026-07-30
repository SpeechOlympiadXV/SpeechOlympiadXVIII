import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBv-FLRed5upxr_5t5lsfvxqY5qbm4IYBg",
  authDomain: "speach-olimpiad.firebaseapp.com",
  projectId: "speach-olimpiad",
  storageBucket: "speach-olimpiad.firebasestorage.app",
  messagingSenderId: "724170715421",
  appId: "1:724170715421:web:5472365d0b12cb0fee71f4",
  measurementId: "G-725FHF4G8F"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
