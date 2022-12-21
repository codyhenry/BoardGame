import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CollectionsScreen } from "../../features/collections/screens/collections.screen";
import { Popup } from "../../features/collections/components/popup.component";
//game screen
// import { CollectionDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
//Need game screen to show all of the games in a collection
//Need game detail screen to show info about a single game
//title will be the name of the collection that was selected
import { Text } from "react-native";

const GamesScreen = ({ route, navigation }) => {
  console.log(route.params.collection);
  return <Text>Games</Text>;
};
const GameDetail = ({ route, navigation }) => {
  console.log(route.params.collection);
  return <Text>Game Info</Text>;
};

const CollectionStack = createNativeStackNavigator();
export const CollectionsNavigator = () => {
  return (
    <CollectionStack.Navigator
      screenOptions={{
        presentation: "card",
      }}
    >
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
        component={GameDetail}
        options={{ headerShown: false }}
      />
    </CollectionStack.Navigator>
  );
};
