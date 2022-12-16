// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXwGUtW9P22ypQL5zpVrvno14KKseQ7R0",
  authDomain: "boardgameapp-a93cc.firebaseapp.com",
  projectId: "boardgameapp-a93cc",
  storageBucket: "boardgameapp-a93cc.appspot.com",
  messagingSenderId: "551690708596",
  appId: "1:551690708596:web:027aee8a26174634491321",
};

// Initialize Firebase
const createFirebaseApp = (config = {}) => {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
};

export const firebaseApp = createFirebaseApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

// const db = getFirestore(firebaseApp);
