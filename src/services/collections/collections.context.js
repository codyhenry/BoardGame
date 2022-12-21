import { useState, useEffect, createContext, useContext } from "react";

import {
  collectionRequest,
  collectionTransform,
  collectionAdd,
} from "./collections.service";
import { AuthenticationContext } from "../authentication/authentication.context";

export const CollectionsContext = createContext();

export const CollectionsContextProvider = ({ children }) => {
  //for printing a users collections to screen
  const [collections, setCollections] = useState([]);
  //load action buttons instead of screen
  const [isActionLoading, setIsActionLoading] = useState(false);
  //load screen
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthenticationContext);

  const userRef = `Users/${user.uid}`;
  //GET a user's collections
  useEffect(() => {
    collectionRequest(userRef)
      .then(collectionTransform)
      .then((result) => {
        setIsLoading(false);
        setCollections(result);
        result.length > 0
          ? setError(null)
          : setError("Use the '+' to add a new collection!");
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const createCollection = (collectionName, collectionCategory) => {
    const newCollection = {
      name: collectionName,
      type: collectionCategory,
      numGames: 0,
    };
    return newCollection;
  };

  const addToList = (newCol, collectionId) => {
    newCol.id = collectionId;
    setCollections([...collections, newCol]);
  };

  //ADD a new collection to a user
  const addCollection = (name, category) => {
    setIsActionLoading(true);
    const newCol = createCollection(name, category);
    collectionAdd(userRef, newCol)
      .then((result) => {
        addToList(newCol, result.id);
      })
      .then(() => {
        setIsActionLoading(false);
        error && setError(null);
      })
      .catch((err) => {
        setIsActionLoading(false);
        setError(err);
      });
  };

  //every time a collection is selected, change the current id

  //do not need to search for anything here because all collections are recieved on mount
  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    //setUser(searchKeyword);
  };

  return (
    <CollectionsContext.Provider
      value={{
        isLoading,
        isActionLoading,
        error,
        collections,
        search: onSearch,
        user,
        addNew: addCollection,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};
