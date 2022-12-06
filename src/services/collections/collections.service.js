//update the mock data to hold multiple collections. Only one collection currently exists
import camelize from "camelize";

import { mocks } from "./mock";

//get collections based on user
//async search waiting on client side collections and firestore games
//searching for collections happens client side
//should search an index in firestore containing {games: collections}
//return all collections
export const collectionRequest = (userName = "JohnDoe") => {
  return new Promise((resolve, reject) => {
    const collectionMock = mocks[userName];
    //User has no collections
    if (!collectionMock) {
      reject("Use the '+' to add a new collection!");
    }
    resolve(collectionMock);
  });
};

export const collectionTransform = (result = []) => {
  const newResult = camelize(result);

  return newResult.results;
};
