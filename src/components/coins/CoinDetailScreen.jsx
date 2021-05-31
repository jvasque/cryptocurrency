import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SectionList,
  FlatList,
  ActivityIndicator,
  Pressable,
  Alert,
} from "react-native";
import colors from "../../res/color";
import Http from "../../libs/http";
import CoinMarketItem from "../coinDetail/CoinMarketItem";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import db from "../../libs/config";

//component
const CoinDetailScreen = () => {
  const route = useRoute();
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const { coin } = route.params;
  const coins = db.collection("currencies");
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

  const addfavoriteCoin = async () => {
    await coins
      .doc(coin.name)
      .set({
        coin: coin.name,
      })
      .then(setIsFavorite(true));
  };

  const removeFavoriteCoin = async () => {
    Alert.alert("Remove favorite", "Are you sure?", [
      { text: "cancel", onPress: () => {}, style: "cancel" },
      {
        text: "Remove",
        onPress: async () => {
          await  coins.doc(coin.name).delete().then(setIsFavorite(false));
        },
        style: "destructive",
      },
    ]);
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteCoin();
    } else {
      addfavoriteCoin();
    }
  };

  const getData = async () => {
    let a = await coins.where("coin", "==", coin.name).get();
    if (a.empty) {
      setIsFavorite(false);
      return;
    }

    a.forEach((doc) => {
      setIsFavorite(true);
      //console.log(doc.id ," => ", doc.data())
    });
  };

  //Items to list

  const item = ({ item }) => (
    <View style={styles.sectionItem}>
      <Text style={styles.sectionText}>{item}</Text>
    </View>
  );

  useEffect(() => {
    getMarkets();
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.row}>
          <Image
            style={styles.iconImage}
            source={{ uri: getSymbolIcon(coin.nameid) }}
          />
          <Text style={styles.title}>{coin.name}</Text>
        </View>
        <View>
          <Pressable
            onPress={toggleFavorite}
            style={[
              styles.btnFavorite,
              isFavorite ? styles.btnFavoriteRemove : styles.btnFavoriteAdd,
            ]}
          >
            <Text style={styles.btnFavoriteText}>
              {isFavorite ? "Remove Favorite" : "Add favorite"}
            </Text>
          </Pressable>
        </View>
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
    justifyContent: "space-between",
  },
  row: {
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
    color: Colors.white,
    fontSize: 14,
  },
  sectionText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  containerMarkets: {
    alignItems: "center",
  },
  marketsTittle: {
    color: Colors.white,
    marginBottom: 10,
    fontWeight: "bold",
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8,
  },
  btnFavoriteText: {
    color: Colors.white,
  },
  btnFavoriteAdd: {
    backgroundColor: Colors.picton,
  },
  btnFavoriteRemove: {
    backgroundColor: Colors.carmine,
  },
});

export default CoinDetailScreen;
