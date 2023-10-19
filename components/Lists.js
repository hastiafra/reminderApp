import { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

const Lists = (props) => {
  const { id, setListItems, listItems, item, index } = props;

  const deleteItem = () => {
    const newList = listItems.filter((item) => {
      return item.id !== id;
    });
    setListItems(newList);
  };

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.clickedItem}
      onPress={deleteItem}
    >
      <View>
        <Text style={styles.listItem} key={index}>
          {item}
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
  clickedItem: {
    opacity: 0.5,
  },
});
