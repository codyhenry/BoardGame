import { useState, useEffect, createContext } from "react";

import { collectionRequest, collectionTransform } from "./collections.service";

export const CollectionsContext = createContext();

export const CollectionsContextProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const user = "johndoe";

  //display all of a users collections when the page loads
  useEffect(() => {
    collectionRequest(user)
      .then(collectionTransform)
      .then((result) => {
        setIsLoading(false);
        setCollections(result);
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
    //setUser(searchKeyword);
  };

  return (
    <CollectionsContext.Provider
      value={{ isLoading, error, collections, search: onSearch, user }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};
