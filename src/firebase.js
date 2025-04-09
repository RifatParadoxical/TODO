import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuevlpqhXZtvBh8aNzieVbv0tPearzAuE",
    authDomain: "tactoctoe-ddd39.firebaseapp.com",
    projectId: "tactoctoe-ddd39",
    storageBucket: "tactoctoe-ddd39.firebasestorage.app",
    messagingSenderId: "942469692843",
    appId: "1:942469692843:web:5c4a1bf07d2dcb183e66ee",
    measurementId: "G-YSZ8LFJX86"
  };


 const app = initializeApp(firebaseConfig)
 const db = getFirestore(app)
 export { db } ;