import { useState, createContext, useContext } from "react";

import {
  gamesRequest,
  gamesTransform,
  gameAdd,
  gameRemove,
  gameUpdate,
} from "./games.service";
import { AuthenticationContext } from "../authentication/authentication.context";
import { CollectionsContext } from "../collections/collections.context";

export const GamesContext = createContext();

export const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthenticationContext);
  const { currentCollectionId } = useContext(CollectionsContext);

  // const retrieveGames = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     gamesRequest()
  //       .then(gamesTransform)
  //       .then((result) => {
  //         setIsLoading(false);
  //         setGames(result);
  //       })
  //       .catch((err) => {
  //         setIsLoading(false);
  //         setError(err);
  //       });
  //   }, 2000);
  // };

  // useEffect(() => {
  //   retrieveGames();
  // }, []);

  //TODO check before database call that this information doesnt already exist
  const getGamesforCollection = () => {
    setIsLoading(true);
    gamesRequest(user.uid, currentCollectionId)
      .then(gamesTransform)
      .then((results) => {
        setIsLoading(false);
        //TODO: check result first may need result.data or something
        //TODO:may need to transform results into a usable array
        setGames((games) => ({ ...games, results }));
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const addToList = (game, collectionId) => {
    var temp = games;
    temp[collectionId].push({ game });
    setGames(temp);
  };

  const addGameToCollection = (GametoAdd) => {
    setIsActionLoading(true);
    gameAdd(user.uid, currentCollectionId, GametoAdd)
      .then(addToList(GametoAdd, currentCollectionId))
      .then(() => {
        setIsActionLoading(false);
      })
      .catch((err) => {
        setIsActionLoading(false);
        setError(err);
      });
  };

  const removeFromList = (gameId, collectionId) => {
    var temp = games;
    temp[collectionId] = temp[collectionId].filter((game) => {
      return game.id != gameId;
    });
    setGames(temp);
  };

  //set games by removing old collection and adding new collection
  const removeGameFromCollection = (gameToDelete) => {
    setIsActionLoading(true);
    gameRemove(user.uid, currentCollectionId, gameToDelete)
      .then(removeFromList(gameToDelete.id, currentCollectionId))
      .then(() => {
        setIsActionLoading(false);
      })
      .catch((err) => {
        setIsActionLoading(false);
        setError(err);
      });
  };

  const updateSaleStatus = (collectionId, gameId, isSold) => {
    var temp = games;
    objIndex = temp[collectionId].findIndex((game) => game.id === gameId);
    temp[collectionId][objIndex].isSold = !isSold;
    setGames(temp);
  };

  const updateSoldGame = (gameToUpdate) => {
    setIsActionLoading(true);
    gameUpdate(user.uid, currentCollectionId, gameToUpdate)
      .then(
        updateSaleStatus(
          currentCollectionId,
          gameToUpdate.id,
          gameToUpdate.isSold
        )
      )
      .then(() => {
        setIsActionLoading(false);
      })
      .catch((err) => {
        setIsActionLoading(false);
        setError(err);
      });
  };

  return (
    <GamesContext.Provider value={{ games, isLoading, isActionLoading, error }}>
      {children}
    </GamesContext.Provider>
  );
};

//TODO: The context here will have an object with nested objects inside. Each nested object is one collection of games
//TODO: function to save the games list to db on ANY change to the game list. Each request does not need its own save function

/*
var games = {};

console.log("Entering favorites collection: ");
var favorites=[];
console.log(games);
console.log("\nCalling DB");
favorites.push({name:"Catan",year:1995},{name:"Gloomhaven", year:2017});
games = {...games,favorites};

console.log("\nEntering selling collection: ");
var selling=[];
console.log(games);
console.log("\nCalling DB");
selling.push({name:"Marvel Dice Throne",year:2016});
games = {...games,selling};


console.log("\nEntering wishlist collection: ");
var wishlist=[];
console.log(games);
console.log("\nCalling DB");
wishlist.push({name:"Unmatched: Cobble and Fog",year:2018});
games = {...games,wishlist};

console.log("\nFinished!\n")
console.log(games);

//filter by gameId instead of name
console.log("\nRemoving Gloomhaven...");
var temp = games;
temp.favorites = temp.favorites.filter((game)=>{
    return game.name != "Gloomhaven";
});

games = temp;
console.log("\nFinished!\n")
console.log(games);

console.log("\nAdding Unstable Unicorns to favorites...");
var temp = games;
temp.favorites.push({name:"Unstable Unicorns", year: 2013});
games = temp;

console.log("\nFinished!\n")
console.log(games);


console.log("\nChanging year of unstable unicorns...");
var temp = games;
objIndex = temp.favorites.findIndex(game => game.name == "Unstable Unicorns");
temp.favorites[objIndex].year = 2024;
games = temp;

console.log("\nFinished!\n")
console.log(games);

console.log(games.favorites?"\nExists":"\nNot here");
console.log(games.kickstarter?"\nExists":"\nNot here");

*/
