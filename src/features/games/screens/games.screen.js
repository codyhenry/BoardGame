import { useContext } from "react";
import { FlatList, Pressable } from "react-native";
import styled from "styled-components/native";

//search bar here will not reach api
import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";
import { LoadingComponent } from "../../../components/activity-indicator.component";
import { InfoCardToRender } from "../components/game-info.component";
import { ErrorScreen } from "../../../components/error.component";
// import { AddButton } from "../components/add.component";

// import { GamesContext } from "../../../services/games/games.context";

const GameList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const GamesScreen = ({ route, navigation }) => {
  // const { games, isLoading, error } = useContext(GamesContext);
  //type is used to select appropriate Game info card component
  const { id, type } = route.params.collection;
  const games = [
    {
      name: "Catan",
      year: 1995,
      notes: "",
      pledgeLevel: "standard",
      pledgeValue: 50,
      estimatedDelivery: new Date().toLocaleDateString("en-US"),
    },
    {
      name: "Gloomhaven",
      year: 2016,
      playTime: 30,
      minPlayers: 1,
      maxPlayers: 3,
      notes: "Notes test",
    },
  ];
  const error = null;
  const isLoading = false;

  return (
    <SafeArea>
      <Search />
      {/* <AddButton navigator={navigation} /> */}
      {error && <ErrorScreen errorMessage={error} />}
      {!error && isLoading ? (
        <LoadingComponent />
      ) : (
        <GameList
          data={games}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate("GameDetail", {
                  game: item,
                  category: type,
                })
              }
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            >
              <Spacer side="bottom" size="md">
                {InfoCardToRender(type, item)}
              </Spacer>
            </Pressable>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
