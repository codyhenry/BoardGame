import { useState, useEffect, createContext } from "react";

import { collectionRequest, collectionTransform } from "./collections.service";
import { AuthenticationContext } from "../authentication/authentication.context";

export const CollectionsContext = createContext();

export const CollectionsContextProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);
  const [currentCollectionId, setCurrentCollectionId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthenticationContext);

  const userRef = `Users/${user.id}`;
  //display all of a users collections when the page loads
  useEffect(() => {
    collectionRequest(userRef)
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

  //every time a collection is selected, change the current id

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
