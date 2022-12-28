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
      //crowdfund example
      name: "Catan",
      year: 1995,
      notes: "",
      pledgeLevel: "standard",
      pledgeValue: 50,
      estimatedDelivery: new Date().toLocaleDateString("en-US"),
      links: [
        {
          site: "kickstarter",
          url: "https://www.kickstarter.com/games?ref=discovery_overlay",
        },
      ],
    },
    {
      //basic example
      name: "Gloomhaven",
      year: 2016,
      playTime: 30,
      minPlayers: 1,
      maxPlayers: 3,
      notes: "Notes test",
    },
    //selling example (sold)
    {
      name: "Summoner Wars",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
      links: [{ site: "amazon", url: "amazon.com" }],
      year: 2015,
      bestPrice: 100.0,
      salePrice: 90.0,
      notes: "",
      condition: "worn",
      sold: true,
      soldDate: new Date().toLocaleDateString("en-US"),
    },
    //selling example (not sold)
    {
      name: "Here to Slay",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
      links: [{ site: "amazon", url: "amazon.com" }],
      year: 2016,
      bestPrice: 100.0,
      salePrice: 120.0,
      notes: "",
      condition: "like new",
      sold: false,
      soldDate: "",
    },
    //wishlist example
    {
      name: "Dice Throne Season 2",
      year: 2018,
      links: [
        { site: "amazon", url: "amazon.com" },
        { site: "target", url: "target.com" },
        { site: "miniature market", url: "miniaturemarket.com" },
        { site: "board game geek", url: "bgg.com" },
      ],
      oldPrice: 120.0,
      bestPrice: 100.0,
      playTime: 30,
      minPlayers: 1,
      maxPlayers: 3,
      notes: "",
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
