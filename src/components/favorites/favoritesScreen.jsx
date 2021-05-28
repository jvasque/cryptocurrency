import React from 'react'
import { View, StyleSheet} from 'react-native'
import FavoritesEmptyState from './FavoritesEmptyState'
import Colors from '../../res/color'


const favoritesScreen = () => {
    return (
        <View style={styles.container}>
           <FavoritesEmptyState />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.charade,
      flex: 1,
      justifyContent : "center"
    },
  });
  
export default favoritesScreen
