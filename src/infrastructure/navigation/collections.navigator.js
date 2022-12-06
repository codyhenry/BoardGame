import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CollectionsScreen } from "../../features/restaurants/screens/restaurants.screen";
//game screen
import { CollectionDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const CollectionStack = createNativeStackNavigator();
export const CollectionsNavigator = () => {
  return (
    <CollectionStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <CollectionStack.Screen
        name="CollectionsStackNav"
        component={CollectionsScreen}
      />
      <CollectionStack.Screen
        name="CollectionDetail"
        component={CollectionDetailScreen}
      />
    </CollectionStack.Navigator>
  );
};
