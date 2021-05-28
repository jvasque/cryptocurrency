import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CoinDetailScreen from "../../components/coins/CoinDetailScreen";
import CoinsScreen from "./CoinsScreen";
import Colors from "../../res/color";
const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.blackPearl },
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="Coins Details" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
