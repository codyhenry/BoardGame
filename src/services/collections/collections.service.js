//update the mock data to hold multiple collections. Only one collection currently exists
import camelize from "camelize";

import { mocks } from "./mock";

//get collections based on user
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
