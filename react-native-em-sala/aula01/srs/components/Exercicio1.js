import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio1 = ({ nome }) => {
  return (
    <View style={style.container}>
      <Text>Olá, {nome}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100
  }
})

export default Exercicio1
