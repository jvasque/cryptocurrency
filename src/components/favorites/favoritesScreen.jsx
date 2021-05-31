import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import FavoritesEmptyState from "./FavoritesEmptyState";
import Colors from "../../res/color";
import db from "../../libs/config";

const favoritesScreen = () => {
  const [data, setData] = useState([]);
  const collection = db.collection("currencies");

  let getData = async () => {
    let collections = await collection.get()
    collections.map(doc=>console.log(doc.data()))
    
  };

  useEffect(() => {
   
   
  }, []);


  return (
    <View style={styles.container}>
      <Pressable onPress={getData}>{data.length === 0 && <FavoritesEmptyState />}</Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
    justifyContent: "center",
  },
});

export default favoritesScreen;
