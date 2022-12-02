import { SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer.component";

import { CollectionInfoCard } from "../components/collection-info-card.component";

const CollectionList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const CollectionsScreen = () => {
  return (
    <SafeAreaView>
      <Searchbar />
      <CollectionList
        data={[{ name: 1 }, { name: 2 }]}
        renderItem={() => (
          <Spacer side="bottom" size="md">
            <CollectionInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};
