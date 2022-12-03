import { mocks, gameImages, links } from "./mock";
import camelize from "camelize";

export const gamesRequest = (collection = "favorites") => {
  // console.log(JSON.stringify(mocks[collection], null, 2));
  return new Promise((resolve, reject) => {
    const gameMock = mocks[collection];
    if (!gameMock) {
      reject("not found");
    }
    resolve(gameMock);
  });
};

const gamesTransform = ({ results = [] }) => {
  const newResult = camelize(results);
  const mappedResults = newResult.map((game) => {
    return {
      ...game,
      //alter any necessary fields here
    };
  });
  return mappedResults;
};

/*
gamesRequest()
  .then(gamesTransform)
  .then((transformedResponse) => {
    console.log(JSON.stringify(transformedResponse, null, 1));
  })
  .catch((err) => {
    console.log(err);
  });
*/
