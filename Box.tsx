import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BoxState } from './BoxState';
import { TurnState } from './TurnState';

function HandleButtonPress(turnState: TurnState, boxState: BoxState) {
  if (boxState.value !== null)
    return;

  const symbol: string = turnState.value ? 'x' : 'o';

  boxState.setValue(symbol);
  turnState.setValue(!turnState.value);
};

export const Box = (props: { turnState: TurnState, state: BoxState }) => {
  return (
    <Pressable onPressIn={() => HandleButtonPress(props.turnState, props.state)}>
      <View style={styles.box}>
          <Text style={styles.text}> {props.state.value} </Text>
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
