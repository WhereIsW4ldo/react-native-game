import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const Box = () => {
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
});
