import { useState, useContext } from "react";
import styled from "styled-components/native";
import { TextInput, Button } from "react-native-paper";

import { SelectChip } from "../../../components/chip.component";
import { Spacer } from "../../../components/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";

import { CollectionsContext } from "../../../services/collections/collections.context";

//TODO: add scrollview to click off of text input

const Section = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-top: 5px;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const FormContainer = styled.View`
  padding-top: 10px;
  padding-bottom: 5px;
`;

const NameInput = styled(TextInput).attrs((props) => ({
  mode: "outlined",
  activeOutlineColor: colors.text.primary,
  clearButtonMode: "while-editing",
  autoCapitalize: "none",
  dense: true,
}))`
  width: 300px;
  background-color: white;
`;

export const CollectionForm = ({ navigator }) => {
  const [collectionCategory, setCollectionCategory] = useState("owned");
  const [collectionName, setCollectionName] = useState("");

  return (
    <FormContainer>
      <NameInput label="Collection Name" />
      <Section>
        <SelectChip
          selected={collectionCategory == "owned"}
          category="owned"
          onPress={() => {
            setCollectionCategory("owned");
          }}
        />
        <Spacer side="right" size="xs" />
        <SelectChip
          selected={collectionCategory == "selling"}
          category="selling"
          onPress={() => {
            setCollectionCategory("selling");
          }}
        />
      </Section>
      <Section>
        <SelectChip
          selected={collectionCategory == "wishlist"}
          category="wishlist"
          onPress={() => {
            setCollectionCategory("wishlist");
          }}
        />
        <Spacer side="right" size="xs" />
        <SelectChip
          selected={collectionCategory == "crowdfund"}
          category="crowdfund"
          onPress={() => {
            setCollectionCategory("crowdfund");
          }}
        />
      </Section>
      <Spacer size="lg" />
      <Section>
        <SectionEnd>
          <Button
            color={colors.brand.primary}
            uppercase={false}
            mode="contained"
            onPress={() => console.log("added")}
          >
            Add
          </Button>
          <Button
            color="red"
            uppercase={false}
            onPress={() => navigator.goBack()}
            mode="text"
          >
            Close
          </Button>
        </SectionEnd>
      </Section>
    </FormContainer>
  );
};
