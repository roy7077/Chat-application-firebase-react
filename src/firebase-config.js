// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_WqX7Vj-BHXhIe1emguVtzjAQsXVCHtA",
  authDomain: "fir-chat-app-8084a.firebaseapp.com",
  projectId: "fir-chat-app-8084a",
  storageBucket: "fir-chat-app-8084a.appspot.com",
  messagingSenderId: "951614237134",
  appId: "1:951614237134:web:95b726cb3824cf5ba9639f",
  measurementId: "G-01E93NYRCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)