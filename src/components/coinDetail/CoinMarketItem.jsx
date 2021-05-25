import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from '../../res/color'

const CoinMarketItem = ({ item }) => {
  return (
    <View style={styles.container}>    
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.priceText}>{item.price_usd}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{       
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderColor : Colors.zircon,
        borderWidth:1,
        margin:10,        
        padding:16,
        alignItems :"center"
    },
    text:{
       
        color:"#fff",
        fontWeight:"bold"
    },
    priceText:{
       
        color:"#fff",
      
    }
})
export default CoinMarketItem;
