import { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

//search bar here will not reach api
import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";
import { LoadingComponent } from "../../../components/activity-indicator.component";
import { GameInfoCard } from "../components/game-info-card.component";
import { ErrorScreen } from "../../../components/error.component";
import { AddButton } from "../components/add.component";

import { GamesContext } from "../../../services/games/games.context";

const GameList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const GamesScreen = ({ route, navigation }) => {
  const { games, isLoading, error } = useContext(GamesContext);
  return (
    <SafeArea>
      <Search />
      <AddButton navigator={navigation} />
      {error && <ErrorScreen errorMessage={error} />}
      {!error && isLoading ? (
        <LoadingComponent />
      ) : (
        <GameList
          data={games}
          renderItem={({ item }) => (
            <Spacer side="bottom" size="md">
              <GameInfoCard game={item} />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
