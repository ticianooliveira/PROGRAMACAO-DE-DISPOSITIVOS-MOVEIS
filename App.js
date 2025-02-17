import { StyleSheet, View } from 'react-native';
import Exercicio1 from './src/components/Exercicio1';

export default function App() {
  return (
    <View style={styles.container}>
       <Exercicio1 nome="Fulano" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
