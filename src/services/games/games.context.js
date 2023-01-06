import { useState, createContext, useContext, useEffect } from "react";

import {
  gamesRequest,
  gamesTransform,
  gameAdd,
  gameRemove,
  gameUpdate,
} from "./games.service";
import { AuthenticationContext } from "../authentication/authentication.context";

export const GamesContext = createContext();

export const GamesContextProvider = ({ children }) => {
  //games will be 15 games from db, updated everytime collection is entered
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState(null);
  const { user } = useContext(AuthenticationContext);
  const userRef = `Users/${user.uid}`;

  //GET single game from search
  // useEffect(() => {
  //   if (!keyword || keyword.trim().length === 0) {
  //     return;
  //   }
  //   gameRequest(keyword.toLowerCase())
  //     .then((result) => {
  //       setLocation(result);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, [keyword]);

  //TODO: Need debounce
  const onSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
  };

  //GET all games
  const getGamesforCollection = (currentCollectionId) => {
    setIsLoading(true);
    setGames([]);
    gamesRequest(userRef, currentCollectionId)
      .then(gamesTransform)
      .then((results) => {
        setIsLoading(false);
        //TODO: check result first may need result.data or something
        //TODO:may need to transform results into a usable array
        setGames(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const addToList = (game) => {
    const temp = [];
    temp.push(game, ...games);
    setGames(temp);
  };

  //POST game
  const addGameToCollection = (gametoAdd) => {
    setIsActionLoading(true);
    gameAdd(user.uid, currentCollectionId, gametoAdd)
      .then((gameId) => addToList(gameId, gametoAdd))
      .then(() => {
        setIsActionLoading(false);
      })
      .catch((err) => {
        setIsActionLoading(false);
        setError(err);
      });
  };

  const removeFromList = (gameId, collectionId) => {
    const temp = games;
    temp[collectionId] = temp[collectionId].filter((game) => {
      return game.id != gameId;
    });
    setGames(temp);
  };

  //DELETE game
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

  //UPDATE game
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
    <GamesContext.Provider
      value={{ games, isLoading, isActionLoading, error, search: onSearch }}
    >
      {children}
    </GamesContext.Provider>
  );
};

//TODO: function to save the games list to db on ANY change to the game list. Each request does not need its own save function
//TODO: To reduce database calls, each

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
