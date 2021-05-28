import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SectionList,
  FlatList,
  ActivityIndicator,
} from "react-native";
import colors from "../../res/color";
import Http from "../../libs/http";
import CoinMarketItem from "../coinDetail/CoinMarketItem";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const CoinDetailScreen = () => {
  const route = useRoute();
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const { coin } = route.params;
  navigation.setOptions({ title: coin.symbol });

  const getMarkets = async () => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coin.id}`;
    const marketsList = await Http.instance.get(url);
    setMarkets(marketsList);
    setLoading(false);
  };

  const getSymbolIcon = (name) => {
    if (name) {
      return `https://c1.coinlore.com/img/25x25/${name}.png

    `;
    }
  };

  const getSections = (coin) => {
    const sections = [
      {
        title: "Market cap",
        data: [coin.market_cap_usd],
      },
      {
        title: "Volume 24h",
        data: [coin.volume24],
      },
      {
        title: "Change 24h",
        data: [coin.percent_change_24h],
      },
    ];

    return sections;
  };

  //Items to list

  const item = ({ item }) => (
    <View style={styles.sectionItem}>
      <Text style={styles.sectionText}>{item}</Text>
    </View>
  );

  useEffect(() => {
    getMarkets();
  });

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.iconImage}
          source={{ uri: getSymbolIcon(coin.nameid) }}
        />
        <Text style={styles.title}>{coin.name}</Text>
      </View>
      <View>
        <SectionList
          sections={getSections(coin)}
          renderItem={item}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>

      <View style={styles.containerMarkets}>
        <Text style={styles.marketsTittle}>Markets</Text>
        {loading && <ActivityIndicator color="#fff4" />}
        <FlatList
          horizontal={true}
          data={markets}
          renderItem={({ item }) => <CoinMarketItem item={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconImage: {
    width: 25,
    height: 25,
  },
  subHeader: {
    backgroundColor: `rgba(0,0,0,0.1)`,
    padding: 16,
    flexDirection: "row",
  },
  title: { fontSize: 16, fontWeight: "bold", color: "#fff", marginLeft: 8 },
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  section: {
    maxHeight: 220,
  },
  sectionHeader: {
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: "#fff",
    fontSize: 14,
  },
  sectionText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  containerMarkets: {
    alignItems: "center",
  },
  marketsTittle: {
    color: "#fff",
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default CoinDetailScreen;
