import { mocks, gameImages, links } from "./mock";
import { collection, getDocs, addDoc } from "firebase/firestore";

//GET all games from a collection
export const gamesRequest = (userRef, collectionId) => {
  const collectionPath = `${userRef}/Collections/${collectionId}`;
  return new Promise((resolve, reject) => {
    getDocs(collection(db, collectionPath))
      .then((response) => {
        resolve(response);
      })
      .catch(reject);
  });
};

//based on the collection. Add the prices that were scrapped recently
//oldPrice = currentPrice; currentPrice = newPrice
export const gamesTransform = ({ results = [] }) => {
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

//update the collection numGames count +1
export const gameAdd = () => {
  return;
};

export const gameRemove = () => {
  return;
};

export const gameUpdate = () => {
  return;
};
