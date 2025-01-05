import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Box } from './Box';
import { TurnState } from "./TurnState";
import { BoxState } from "./BoxState";

export const Row = (props: { turnState: TurnState, box1: BoxState, box2: BoxState, box3: BoxState}) => (
    <View style={styles.row}>
        <Box turnState={props.turnState} state={props.box1}/>
        <Box turnState={props.turnState} state={props.box2}/>
        <Box turnState={props.turnState} state={props.box3}/>
    </View>
);

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
})
