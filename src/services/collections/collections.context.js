import { useState, useEffect, createContext } from "react";

import { collectionRequest, collectionTransform } from "./collections.service";

export const CollectionContext = createContext();

export const CollectionContextProvider = ({ children }) => {
  const [collection, setCollection] = useState(null);
  const [user, setUser] = useState("johndoe");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //display all of a users collections when the page loads
  useEffect(() => {
    collectionRequest(user)
      .then(collectionTransform)
      .then((result) => {
        setIsLoading(false);
        setCollection(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
        console.log(error);
      });
  }, []);

  //do not need to search for anything here because all collections are recieved on mount
  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setUser(searchKeyword);
  };
  /*
  use for seperate search
  useEffect(() => {
    if (!keyword || keyword.trim().length === 0) {
      return;
    }
    collectionRequest(keyword.toLowerCase())
      .then(collectionTransform)
      .then((result) => {
        //console.log(result);
        setIsLoading(false);
        setCollection(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
        console.log(error);
      });
  }, [keyword]);*/

  return (
    <CollectionContext.Provider
      value={{ isLoading, error, collection, search: onSearch, user }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
