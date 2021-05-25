import React from 'react'
import { View } from 'react-native'

const CoinDetailScreen = ({item}) => {
    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}

export default CoinDetailScreen
