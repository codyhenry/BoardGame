import { mocks, gameImages, links } from "./mock";
import camelize from "camelize";

//collection will either be search keyword or button press
//get games based on collection and search term return only what matches both
//searching for a game while in a collecton is done client side.
//searching for a game while outside a collection is done server side
//in collection search bar will not extend beyond client side
export const gamesRequest = (collection = "favorites") => {
  return new Promise((resolve, reject) => {
    //returns all games belonging to a particular collection
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
    //TODO: Photo should come from database
    return {
      ...game,
      photo:
        gameImages[Math.floor(Math.random() * (gameImages.length - 1) + 1)],
      //alter any necessary fields here such as links
    };
  });
  return mappedResults;
};

export const gameAdd = () => {
  return;
};

export const gameRemove = () => {
  return;
};
