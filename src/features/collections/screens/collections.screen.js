import { useContext } from "react";
import { FlatList, Pressable } from "react-native";
import styled from "styled-components/native";

//search bar here will not reach api
import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";
import { LoadingComponent } from "../../../components/activity-indicator.component";
import { CollectionInfoCard } from "../components/collection-info-card.component";
import { ErrorScreen } from "../../../components/error.component";

import { CollectionsContext } from "../../../services/collections/collections.context";

const CollectionList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const CollectionsScreen = ({ navigation }) => {
  //TODO: add a button to create new collection
  const { collections, isLoading, error } = useContext(CollectionsContext);

  return (
    <SafeArea>
      <Search />
      {error && <ErrorScreen errorMessage={error} />}
      {!error && isLoading ? (
        <LoadingComponent />
      ) : (
        <CollectionList
          data={collections}
          renderItem={({ item }) => (
            <Spacer side="bottom" size="xs">
              <Pressable
                onPress={() =>
                  navigation.navigate("CollectionDetail", { collection: item })
                }
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              >
                <CollectionInfoCard collection={item} />
              </Pressable>
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
