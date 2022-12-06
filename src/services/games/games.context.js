import React, { useState, useEffect, createContext, useContext } from "react";

import { gamesRequest, gamesTransform } from "./games.service";
import { CollectionsContext } from "../collections/collections.context";

export const GamesContext = createContext();

export const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  //const [keyword, setKeyword] = useState("favorites");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const collectionContext = useContext(CollectionsContext);

  const retrieveGames = () => {
    setIsLoading(true);
    setTimeout(() => {
      gamesRequest()
        .then(gamesTransform)
        .then((result) => {
          setIsLoading(false);
          setGames(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveGames();
  }, []);

  //only returns the games that belong to a collection
  return (
    <GamesContext.Provider value={{ games, isLoading, error }}>
      {children}
    </GamesContext.Provider>
  );
};
