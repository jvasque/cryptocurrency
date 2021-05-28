import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import favoritesScreen from "./favoritesScreen";
import Colors from "../../res/color"

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.blackPearl },
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen name="Favorites" component={favoritesScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
