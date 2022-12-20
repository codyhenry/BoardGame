//update the mock data to hold multiple collections. Only one collection currently exists
import camelize from "camelize";
import { db } from "../../../firebase.config";
import { getDocs } from "firebase/firestore";

//get collections based on user
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

export const collectionTransform = (result = []) => {
  const newResult = camelize(result);

  return newResult.results;
};

export const collectionAdd = () => {
  return;
};
