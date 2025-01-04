import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <Board />
    </View>
  );
};

const Board = () => {
  return (
    <View style={styles.board}>
      <Row />
      <Row />
      <Row />
    </View>
  );
};

const Row = () => {
  return (
    <View style={styles.row}>
      <Box />
      <Box />
      <Box />
    </View>
  );
};

const Box = () => {
  const [value, setValue] = useState(false);

  return (
    <Pressable onPressIn={() => setValue(!value)}>
      <View style={styles.box}>
          <Text style={styles.text}> {value ? 'x' : 'o'} </Text>
      </View>
    </Pressable>
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
  },
  box: {
    borderColor: '#fff',
    borderWidth: 1,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  board: {
    display: 'flex',
    flexDirection: 'column'
  }
});
