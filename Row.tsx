import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Box } from './Box';

export const Row = () => {
  return (
    <View style={styles.row}>
      <Box />
      <Box />
      <Box />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
})
