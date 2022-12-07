import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CollectionsScreen } from "../../features/collections/screens/collections.screen";
//game screen
// import { CollectionDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
//Need game screen to show all of the games in a collection
//Need game detail screen to show info about a single game
//title will be the name of the collection that was selected
import { Text } from "react-native";

const CollectionsDetail = ({ route }) => {
  console.log(route.params.collection);
  return <Text>Market</Text>;
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
        name="CollectionsStackNav"
        component={CollectionsScreen}
        options={{ headerShown: false }}
      />
      <CollectionStack.Screen
        name="CollectionDetail"
        component={CollectionsDetail}
        options={{ title: "Detail" }}
      />
    </CollectionStack.Navigator>
  );
};
