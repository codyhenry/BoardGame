import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CollectionsScreen } from "../../features/collections/screens/collections.screen";
import { Popup } from "../../features/collections/components/popup.component";
//game screen
import { GamesScreen } from "../../features/games/screens/games.screen";
import { GameDetailScreen } from "../../features/games/components/basic-games/basic-game-detail.screen";
//Need game screen to show all of the games in a collection
//Need game detail screen to show info about a single game
//title will be the name of the collection that was selected
import { Text } from "react-native";

// const GamesScreen = ({ route, navigation }) => {
//   console.log(route.params.collection);
//   return <Text>Games</Text>;
// };
// const GameDetail = ({ route, navigation }) => {
//   console.log(route.params.game);
//   return <Text>Game Info</Text>;
// };

const CollectionStack = createNativeStackNavigator();
export const CollectionsNavigator = () => {
  return (
    <CollectionStack.Navigator screenOptions={{}}>
      <CollectionStack.Screen
        name="CollectionsHome"
        component={CollectionsScreen}
        options={{ headerShown: false }}
      />
      <CollectionStack.Screen
        name="CollectionForm"
        component={Popup}
        options={{
          headerShown: false,
          presentation: "transparentModal",
          cardOverlayEnabled: true,
        }}
      />
      <CollectionStack.Screen
        name="GamesHome"
        component={GamesScreen}
        options={{ headerShown: false }}
      />
      <CollectionStack.Screen
        name="GameDetail"
        component={GameDetailScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </CollectionStack.Navigator>
  );
};
