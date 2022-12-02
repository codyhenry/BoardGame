import { SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer.component";

import { GameInfoCard } from "../components/game-info-card.component";

const GameList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const GamesScreen = () => {
  return (
    <SafeAreaView>
      <Searchbar />
      <GameList
        data={[{ name: 1 }, { name: 2 }]}
        renderItem={() => (
          <Spacer side="bottom" size="md">
            <GameInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};
