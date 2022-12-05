import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { CollectionContext } from "../../../services/collections/collections.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.spacing.sm};
`;

export const Search = () => {
  //destructure keyword and search props from collectionContext
  const { keyword, search } = useContext(CollectionContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a collection"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
