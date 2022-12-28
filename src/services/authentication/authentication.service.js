import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { db } from "../../../firebase.config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { auth } from "../../../firebase.config";

export const loginRequest = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        resolve(response.user);
      })
      .catch(reject);
  });
};

export const registerRequest = (email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        resolve(response.user);
      })
      .catch(reject);
  });
};

export const createUserAccount = (userId) => {
  const userRef = `Users/${userId}`;
  return new Promise((resolve, reject) => {
    setDoc(doc(db, userRef), {
      timestamp: serverTimestamp(),
    })
      .then((response) => {
        resolve(response);
      })
      .catch(reject);
  });
};

//TODO: figure out how this works
export const checkUserAuth = (user) => {
  onAuthStateChanged(auth, user);
};

export const logoutRequest = () => {
  signOut(auth);
};
