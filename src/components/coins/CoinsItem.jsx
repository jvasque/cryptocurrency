import React from "react";
import {
  Platform,
  View,
  Pressable,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import Colors from "../../res/color";

const CoinsItem = ({ item, handlePress }) => {
  const getImageArrow = () => {
    if (item.percent_change_1h > 0) {
      return require("../../assets/arrow_up.png");
    }
    return require("../../assets/arrow_down.png");
  };

  return (
    <Pressable onPress={handlePress} style={(styles.row, styles.container)}>
      <View>
        <Text style={styles.symbolText}>{item.name}</Text>
        <Text style={styles.nameText}>{item.symbol}</Text>
      </View>
      <View
        style={(styles.column, styles.symbolText, { alignItems: "center" })}
      >
        <Text style={styles.priceText}>Price: {`$ ${item.price_usd}`}</Text>
        <View style={styles.row}>
          <Image source={getImageArrow()} style={styles.image} />
          <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    marginLeft: Platform.OS === "ios" ? 16 : 0,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  symbolText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  nameText: {
    color: "#fff",
    fontSize: 14,
  },
  percentText: {
    color: "#fff",
    fontSize: 12,
  },
  priceText: {
    color: "#fff",
    fontSize: 14,
  },
  image: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
});
export default CoinsItem;
