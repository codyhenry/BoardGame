import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

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

//TODO: figure out how this works
export const checkUserAuth = (user) => {
  onAuthStateChanged(auth, user);
};

export const logoutRequest = () => {
  signOut(auth);
};
