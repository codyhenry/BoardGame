//update the mock data to hold multiple collections. Only one collection currently exists
import camelize from "camelize";

import { mocks } from "./mock";

//get collections based on user
export const collectionRequest = () => {
  return new Promise((resolve, reject) => {
    const collectionMock = mocks[0];
    //User has no collections
    if (!collectionMock) {
      reject("Use the '+' to add a new collection!");
    }
  });
};

export const collectionTransform = () => {};
