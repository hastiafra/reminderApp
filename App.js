import { useState } from "react";
import Lists from "./components/Lists";
import InputSection from "./components/InputSection";
import Intro from "./components/Intro";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");

  const [listItems, setListItems] = useState([]);

  const inputValueHandler = (value) => {
    setInputText(value);
  };

  const addButton = () => {
    if (inputText.length > 0) {
      setListItems((currentList) => [
        ...currentList,
        { name: inputText, id: Math.floor(Math.random() * 100) },
      ]);
    }
  };

  return (
    <View style={styles.reminderContainer}>
      <Intro />
      <InputSection
        inputValueHandler={inputValueHandler}
        addButton={addButton}
      />
      <Text style={styles.listTitle}>Your List:</Text>
      <View style={styles.listItemContainer}>
        <ScrollView>
          {listItems?.map((item, index) => {
            return (
              <Lists
                setListItems={setListItems}
                listItems={listItems}
                item={item.name}
                id={item.id}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reminderContainer: {
    flex: 1,
    backgroundColor: "floralwhite",
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
    flex: 3,
    paddingHorizontal: 40,
  },
  listTitle: {
    textTransform: "uppercase",
    fontWeight: 700,
    color: "teal",
    fontSize: 20,
    paddingHorizontal: 40,
  },
});
