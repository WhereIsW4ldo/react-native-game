import { StyleSheet, View, Text } from 'react-native';
import { Board } from './Board';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tic Tac Toe</Text>
      <Board />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    paddingBottom: 5
  }
});
