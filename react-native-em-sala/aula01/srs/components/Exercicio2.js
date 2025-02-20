import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Exercicio2 = () => {
  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(contador + 1)
  }

  function decrementar() {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Incrementar para Ticiano" onPress={incrementar} />
      <Text style={styles.texto}>O contador está em: {contador}</Text>
      <Button title="Decrementar para Ticiano" onPress={decrementar} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  texto: {
    fontSize: 18,
    marginVertical: 10,
  }
})

export default Exercicio2
