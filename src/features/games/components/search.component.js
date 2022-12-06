import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { CollectionContext } from "../../../services/collections/collections.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.spacing.sm};
`;

//change to only search games object locally
export const Search = () => {
  //destructure user and search props from collectionContext
  const { user, search } = useContext(CollectionContext);
  const [searchUser, setSearchUser] = useState(user);
  useEffect(() => {
    setSearchUser(user);
  }, [user]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a collection"
        value={searchUser}
        onSubmitEditing={() => search(searchUser)}
        onChangeText={(text) => {
          setSearchUser(text);
        }}
      />
    </SearchContainer>
  );
};
