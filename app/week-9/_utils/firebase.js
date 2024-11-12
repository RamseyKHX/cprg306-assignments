// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Optional: import analytics only if you need it
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRR_5ftUWa1M6BOfIeUTX9VdDawBmtcPY",
  authDomain: "cprg306-assignments-449ba.firebaseapp.com",
  projectId: "cprg306-assignments-449ba",
  storageBucket: "cprg306-assignments-449ba.appspot.com", // corrected URL format for storageBucket
  messagingSenderId: "467164874035",
  appId: "1:467164874035:web:723844fb54ead30768ea46",
  measurementId: "G-14EV34845S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Analytics (optional)
export const auth = getAuth(app);
const analytics = getAnalytics(app);
