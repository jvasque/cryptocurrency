import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tailwind from "tailwind-rn";
import Http from "../../libs/http";
import axios from "axios";
import CoinsItem from "./CoinsItem";
import Colors from "../../res/color";

const CoinsScreen = () => {
  const navigation = useNavigation();
  const [dat, setData] = useState();
  const [loading, setLoading] = useState(true);

  const data = async () => {
    const getData = await Http.instance.get(
      "https://api.coinlore.net/api/tickers/"
    );
    setData(getData.data);
    if (getData.data.length !== 0) setLoading(false);
  };
  useEffect(() => {
    data();
  });

  const handlePress = (coin) => {
    navigation.navigate("Coins Details", { coin });
  };

  const list = ({ item }) => (
    <CoinsItem item={item} handlePress={() => handlePress(item)} />
  );

  return (
    <View
      style={
        (tailwind("flex items-center"), { backgroundColor: Colors.charade })
      }
    >
      <Text>Hola soy coinsScreens</Text>
      {loading && <ActivityIndicator color="#fff4" />}
      <FlatList data={dat} keyExtractor={(item) => item.id} renderItem={list} />
    </View>
  );
};

export default CoinsScreen;
