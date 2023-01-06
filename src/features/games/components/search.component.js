import React, { useState, useContext } from "react";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";

import { GamesContext } from "../../../services/games/games.context";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.spacing.sm};
`;

//change to only search games object locally
export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { search } = useContext(GamesContext);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    search(query);
  };
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search this collection"
        value={searchQuery}
        onChangeText={onChangeSearch}
      />
    </SearchContainer>
  );
};
