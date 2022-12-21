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
import { AddButton } from "../components/add.component";

import { CollectionsContext } from "../../../services/collections/collections.context";

const CollectionList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const CollectionsScreen = ({ navigation }) => {
  const { collections, isLoading, error } = useContext(CollectionsContext);
  return (
    <SafeArea>
      <Search />
      <AddButton navigator={navigation} />
      {error && <ErrorScreen errorMessage={error} />}
      {!error && isLoading ? (
        <LoadingComponent />
      ) : (
        <CollectionList
          data={collections}
          renderItem={({ item }) => (
            <Spacer side="bottom" size="xs">
              <Pressable
                onPress={
                  () =>
                    navigation.navigate("GamesHome", {
                      collection: item,
                    })
                  //call database if you havent entered the room before
                }
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              >
                <CollectionInfoCard collection={item} />
              </Pressable>
            </Spacer>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeArea>
  );
};
