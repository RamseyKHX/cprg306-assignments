
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics"; 


const firebaseConfig = {
  apiKey: "AIzaSyBRR_5ftUWa1M6BOfIeUTX9VdDawBmtcPY",
  authDomain: "cprg306-assignments-449ba.firebaseapp.com",
  projectId: "cprg306-assignments-449ba",
  storageBucket: "cprg306-assignments-449ba.appspot.com",
  messagingSenderId: "467164874035",
  appId: "1:467164874035:web:723844fb54ead30768ea46",
  measurementId: "G-14EV34845S",
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


export const db = getFirestore(app);

const analytics = getAnalytics(app);
