import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { CollectionsNavigator } from "./collections.navigator";

import { CollectionsContextProvider } from "../../services/collections/collections.context";
import { GamesContextProvider } from "../../services/games/games.context";
import { theme } from "../theme/index";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Collections: { true: "md-albums", false: "md-albums-outline" },
  Market: { true: "md-pricetags", false: "md-pricetags-outline" },
  Search: { true: "md-search", false: "md-search-outline" },
};

//if header is disabled, wrap these in a safe-area.component - needs import
const SearchScreen = () => <Text>Search</Text>;
const MarketScreen = () => <Text>Market</Text>;

export const AppNavigator = () => (
  <CollectionsContextProvider>
    <GamesContextProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = TAB_ICON[route.name][focused];
            //You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.brand.primary,
          tabBarInactiveTintColor: theme.colors.ui.secondary,
          headerShown: false,
        })}
      >
        <Tab.Screen
          //The tabs will contain screens for stack navigation components
          name="Collections"
          component={CollectionsNavigator}
        />
        <Tab.Screen name="Market" component={MarketScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </GamesContextProvider>
  </CollectionsContextProvider>
);
