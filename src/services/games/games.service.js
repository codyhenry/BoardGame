import { mocks, gameImages, links } from "./mock";
import camelize from "camelize";

//collection will either be search keyword or button press
export const gamesRequest = (collection = "favorites") => {
  // console.log(JSON.stringify(mocks[collection], null, 2));
  return new Promise((resolve, reject) => {
    const gameMock = mocks[collection];
    if (!gameMock) {
      reject("Sorry, no results match your search");
    }
    resolve(gameMock);
  });
};

//based on the collection. Add the prices that were scrapped recently
//oldPrice = currentPrice; currentPrice = newPrice
export const gamesTransform = ({ results = [] }) => {
  const newResult = camelize(results);
  const mappedResults = newResult.map((game) => {
    return {
      ...game,
      photo:
        gameImages[Math.floor(Math.random() * (gameImages.length - 1) + 1)],
      //alter any necessary fields here such as links
    };
  });
  return mappedResults;
};
