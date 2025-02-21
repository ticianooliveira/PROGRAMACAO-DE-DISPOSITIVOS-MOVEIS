import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Exercicio3 = () => {
  const [texto, setTexto] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={texto}
        onChangeText={setTexto}
      />
      <Text style={styles.texto}>Você digitou: {texto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    width: '80%',
    borderRadius: 8,
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
  }
})

export default Exercicio3
