//update the mock data to hold multiple collections. Only one collection currently exists
import { db } from "../../../firebase.config";
import { collection, getDocs, addDoc } from "firebase/firestore";

//GET collections based on user
//return all collections
export const collectionRequest = (userRef) => {
  const collectionPath = `${userRef}/Collections`;
  return new Promise((resolve, reject) => {
    getDocs(collection(db, collectionPath))
      .then((response) => {
        resolve(response);
      })
      .catch(reject);
  });
};

//append documentid to collection document
export const collectionTransform = (result = {}) => {
  var collections = [];
  result.forEach((doc) => {
    var temp = { ...doc.data(), id: doc.id };
    collections.push(temp);
  });

  return collections;
};

//POST new user collection
export const collectionAdd = (userRef, collectionToAdd) => {
  const collectionRef = `${userRef}/Collections`;
  return new Promise((resolve, reject) => {
    addDoc(collection(db, collectionRef), collectionToAdd)
      .then((response) => {
        resolve(response);
      })
      .catch(reject);
  });
};
