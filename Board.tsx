import { View, StyleSheet, Button } from "react-native";
import { Row } from "./Row";
import { useState } from "react";
import { BoxState } from "./BoxState";
import { TurnState } from "./TurnState";

export const Board = () => {
  let boxStates: BoxState[] = new Array(9).fill(null);
  const [isXTurn, setXTurn] = useState(true);
  let turnState: TurnState = { value: isXTurn, setValue: setXTurn };

  for (let i = 0; i < boxStates.length; i++) {
    const [box, setBox] = useState<string>(null);
    boxStates[i] = { value: box, setValue: setBox };
  }

  function ResetGame() {
    for (let i = 0; i < boxStates.length; i++)
    boxStates[i].setValue(null);
  }

  return (
    <View>
      <View style={styles.board}>
        <Row turnState={turnState} box1={boxStates[0]} box2={boxStates[1]} box3={boxStates[2]} />
        <Row turnState={turnState} box1={boxStates[3]} box2={boxStates[4]} box3={boxStates[5]} />
        <Row turnState={turnState} box1={boxStates[6]} box2={boxStates[7]} box3={boxStates[8]} />
      </View>

      <Button
        onPress={() => ResetGame()}
        title="reset"
        />

    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    display: 'flex',
    flexDirection: 'column'
  }
})
