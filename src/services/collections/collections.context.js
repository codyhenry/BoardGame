import { useState, useEffect, createContext, useContext } from "react";

import {
  collectionRequest,
  collectionTransform,
  collectionAdd,
} from "./collections.service";
import { AuthenticationContext } from "../authentication/authentication.context";

export const CollectionsContext = createContext();

export const CollectionsContextProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);
  const [currentCollectionId, setCurrentCollectionId] = useState(null);
  const [newCollection, setNewCollection] = useState({});
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthenticationContext);

  const userRef = `Users/${user.id}`;
  //GET a user's collections
  useEffect(() => {
    collectionRequest(userRef)
      .then(collectionTransform)
      .then((result) => {
        setIsLoading(false);
        setCollections(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setError("Use the '+' to add a new collection!");
      });
  }, []);

  //ADD a new collection to a user
  const addCollection = () => {
    setIsActionLoading(true);
    collectionAdd(user.uid)
      .then(addToList(result.id))
      .then(() => {
        setIsActionLoading(false);
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
