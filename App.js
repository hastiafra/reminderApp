import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");

  const [listItems, setListItems] = useState([]);

  const inputValueHandler = (value) => {
    setInputText(value);
  };

  const addButton = () => {
    setListItems((currentList) => [...currentList, inputText]);
  };
  return (
    <View style={styles.reminderContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type something!"
          onChangeText={inputValueHandler}
        />
        <Pressable onPress={addButton}>
          <Text style={styles.btn}>add</Text>
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Your List:</Text>
        {listItems?.map((item, i) => {
          return (
            <Text style={styles.listItem} key={i}>
              {item}
            </Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: { 
  backgroundColor: "teal",
  borderRadius: 10,
  padding:10,
  color:"white",
  textTransform: "uppercase",
 },
  reminderContainer: {
    flex: 1,
    backgroundColor: "whitesmoke",
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
    fontSize: 18,
  },
  listContainer: {
    flex: 3,
    paddingHorizontal: 40,
  },
  listTitle: {
    textTransform: "uppercase",
    fontWeight: 700,
    color: "teal",
    fontSize: 20,
  },
  listItem: {
   
  },
});
