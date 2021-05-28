import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../res/color";

const FavoritesEmptyState = () => {
  return (
    <View >
      <Text style={styles.text}>You don't have any favorite coin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: Colors.blackPearl,
   
  },
  text: {
    display: "flex",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    marginTop: 10,
    alignItems: "center",
  },
});

export default FavoritesEmptyState;
