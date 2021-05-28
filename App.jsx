import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CoinsStack from "./src/components/coins/CoinsStack";
import Colors from './src/res/color'
import FavoritesStack from "./src/components/favorites/FavoritesStack";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator tabBarOptions={{
        inactiveTintColor  : "#f2fefe",
        activeTintColor : "#fefefe",        
        activeBackgroundColor :"#1F1F1F", 
        inactiveBackgroundColor :"#1F1F1F"
        
      }}>
        <Tabs.Screen
          name="Coins"
          component={CoinsStack}
          options={{
            tabsBarIcon: ({ size, color }) => {
              <Image
               style={{ inactiveTintColor: color, width: size, height: size }} 
               source={require('./src/assets/bank.png')}
              />;
            },
          }}
        />   
         <Tabs.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{
            tabsBarIcon: ({ size, color }) => (
              <Image
               style={{ activeTintColor: color, width: size, height: size }} 
               source={require('./src/assets/star.png')}
              />
            ),
          }}
        />       
        
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

/**
 * 
  <Stack.Navigator>
        <Stack.Screen name="Coins Stack" component={CoinsStack} />
        <Stack.Screen name="Coins Details" component={CoinDetailScreen} />
      </Stack.Navigator> 
 */
