import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CoinsStack from "./src/components/coins/CoinsStack";
import CoinDetailScreen from "./src/components/coins/CoinDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Coins Stack" component={CoinsStack} />
        <Stack.Screen name="Coins Details" component={CoinDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
