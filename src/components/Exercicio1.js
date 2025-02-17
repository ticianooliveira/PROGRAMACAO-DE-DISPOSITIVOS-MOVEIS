import { View, Text } from 'react-native'
import React from 'react'

const Exercicio1 = ({nome}) => {
  return (
    <View style={styles.container}>
      <Text>oi {nome }</Text>
    </View>
  )
}

export default Exercicio1

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100,
    }
})