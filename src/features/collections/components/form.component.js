import { useState, useContext } from "react";
import styled from "styled-components/native";
import { TextInput, Button, ActivityIndicator } from "react-native-paper";

import { SelectChip } from "../../../components/chip.component";
import { Spacer } from "../../../components/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import { CustomText } from "../../../components/text.component";

import { CollectionsContext } from "../../../services/collections/collections.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

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

const LoadingIndicator = styled(ActivityIndicator).attrs({
  animating: true,
  color: colors.brand.primary,
})``;

const NameInput = styled(TextInput).attrs((props) => ({
  mode: "outlined",
  activeOutlineColor: colors.text.primary,
  clearButtonMode: "while-editing",
  dense: true,
}))`
  width: 300px;
  background-color: white;
`;

const FormCover = styled.ScrollView``;

//TODO: move all styling
export const CollectionForm = ({ navigator }) => {
  const [collectionCategory, setCollectionCategory] = useState("basic");
  const [collectionName, setCollectionName] = useState("");
  const { addNew, isActionLoading } = useContext(CollectionsContext);
  const { onLogout } = useContext(AuthenticationContext);

  const handleAddPress = () => {
    addNew(collectionName, collectionCategory);
    navigator.goBack();
  };

  return (
    <FormContainer>
      <FormCover>
        <Section>
          <CustomText variant="title">Add a new collection</CustomText>
        </Section>
        <NameInput
          label="Collection Name"
          value={collectionName}
          onChangeText={(text) => setCollectionName(text)}
        />
        <Section>
          <SelectChip
            selected={collectionCategory == "basic"}
            category="basic"
            onPress={() => {
              setCollectionCategory("basic");
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
            {isActionLoading ? (
              <LoadingIndicator />
            ) : (
              <Button
                color={colors.brand.primary}
                uppercase={false}
                mode="contained"
                disabled={collectionName.trim() == "" || isActionLoading}
                onPress={() => handleAddPress()}
              >
                Add
              </Button>
            )}
            <Button
              color="red"
              uppercase={false}
              onPress={() => navigator.goBack()}
              mode="text"
            >
              Close
            </Button>
            <Button
              color="red"
              uppercase={false}
              onPress={() => onLogout()}
              mode="text"
            >
              LogOut
            </Button>
          </SectionEnd>
        </Section>
      </FormCover>
    </FormContainer>
  );
};
