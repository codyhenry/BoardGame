import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CollectionsScreen } from "../../features/collections/screens/collections.screen";
import { Popup } from "../../features/collections/components/popup.component";
//game screen
import { GamesScreen } from "../../features/games/screens/games.screen";
import { GameDetail } from "../../features/games/components/game-detail-card.component";
//Need game screen to show all of the games in a collection
//Need game detail screen to show info about a single game
//title will be the name of the collection that was selected

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
        options={({ route }) => ({ title: route.params.name })}
      />
      <CollectionStack.Screen
        name="GameDetail"
        component={GameDetail}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <CollectionStack.Screen
        name="Notes"
        component={GamesScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </CollectionStack.Navigator>
  );
};
