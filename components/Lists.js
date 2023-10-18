import { StyleSheet, Text } from "react-native";

const Lists = (props) => {
  return (
    <Text style={styles.listItem} key={props.index}>
      {props.item}
    </Text>
  );
};

export default Lists;

const styles = StyleSheet.create({
  listItem: {
    textTransform: "uppercase",
    backgroundColor: "cadetblue",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
