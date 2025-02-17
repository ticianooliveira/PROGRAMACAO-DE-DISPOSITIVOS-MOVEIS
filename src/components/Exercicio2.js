import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Exercicio2 = () => {
    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
  return (
    <View>
      <Text>Exercicio2</Text>
    </View>
  )
}

export default Exercicio2