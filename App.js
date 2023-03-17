import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");

  const [listItems, setListItems] = useState([])

  const inputValueHandler = (value) => {
    setInputText(value)
  };

  const addButton = () => {
    console.log(inputText)
  };
  return (
    <View style={styles.reminderContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type something!"
          onChangeText={inputValueHandler}
        />
        <Button title="Add" onPress={addButton} />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Your List...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reminderContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    flexDirection: "column",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    marginBottom: 10,
    marginTop: 40,
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 10,
  },
  listContainer: {
    flex: 3,
    paddingHorizontal: 40,
  },
  listTitle: {
    textTransform: "uppercase",
    fontWeight: 700,
  },
});
