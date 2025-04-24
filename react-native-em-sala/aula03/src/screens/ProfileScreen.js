import { View, Text, Button, Image } from 'react-native'
import React from 'react'

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: 'https://github.com/ticianooliveira.png' }}
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>👤 Ticiano</Text>
      <Text style={{ marginBottom: 30, fontSize: 20, fontWeight: 'bold' }}>Email: ticianoodonto@gmail.com</Text>
      <Button title="Sair" onPress={() => navigation.replace('Login')} />
    </View>
  )
}

export default ProfileScreen 

