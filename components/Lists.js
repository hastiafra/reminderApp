import { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

const Lists = (props) => {
  const { id, setListItems, listItems } = props;

  const deleteItem = () => {
    const newList = listItems.filter((item) => {
      return item.id !== id;
    });
    setListItems(newList);
  };

  return (
    <Pressable onPress={deleteItem}>
      <View>
        <Text style={styles.listItem} key={props.index}>
          {props.item}
        </Text>
      </View>
    </Pressable>
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
