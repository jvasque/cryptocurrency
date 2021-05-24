import React from "react";
import { View, Text, StyleSheet, Image, SectionList } from "react-native";
import colors from "../../res/color";

const CoinDetailScreen = ({ route, navigation }) => {
  const { coin } = route.params;
  navigation.setOptions({ title: coin.symbol });

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
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.iconImage}
          source={{ uri: getSymbolIcon(coin.nameid) }}
        />
        <Text style={styles.title}>{coin.name}</Text>
      </View>
      <SectionList
        sections={getSections(coin)}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconImage: {
    width: 25,
    height: 25,
  },
  subHeader: {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 16,
    flexDirection: "row",
  },
  title: { fontSize: 16, fontWeight: "bold", color: "#fff", marginLeft: 8 },
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
});

export default CoinDetailScreen;
