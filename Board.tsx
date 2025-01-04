import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Row } from "./Row";

export const Board = () => {
  return (
    <View style={styles.board}>
      <Row />
      <Row />
      <Row />
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    display: 'flex',
    flexDirection: 'column'
  }
})
