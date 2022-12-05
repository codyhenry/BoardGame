import { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";
import { LoadingComponent } from "../../../components/activity-indicator.component";
import { GameInfoCard } from "../components/game-info-card.component";
import { ErrorScreen } from "../../../components/error.component";

import { GamesContext } from "../../../services/games/games.context";

const GameList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const GamesScreen = () => {
  const { games, isLoading, error } = useContext(GamesContext);
  return (
    <SafeArea>
      <Searchbar />
      {error && <ErrorScreen errorMessage={error} />}
      {!error && isLoading ? (
        <LoadingComponent />
      ) : (
        <GameList
          data={games}
          renderItem={({ game }) => (
            <Spacer side="bottom" size="md">
              <GameInfoCard game={game} />
            </Spacer>
          )}
          keyExtractor={(game) => game.name}
        />
      )}
    </SafeArea>
  );
};
