import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Lists from "./components/Lists";
import InputSection from "./components/InputSection";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

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
   <InputSection  inputValueHandler={ inputValueHandler} addButton={addButton}/>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Your List:</Text>
        <View style={styles.listItemContainer}>
          <ScrollView>
            {listItems?.map((item, index) => {
              return <Lists item={item} index={index} />;
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reminderContainer: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    flexDirection: "column",
  },
  listContainer: {
    flex: 3,
    paddingHorizontal: 40,
  },
  listItemContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  listTitle: {
    textTransform: "uppercase",
    fontWeight: 700,
    color: "teal",
    fontSize: 20,
  },
});
