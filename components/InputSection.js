import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

const InputSection = (props) => {
  const { addButton, inputValueHandler } = props;
  return (
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
  );
};

export default InputSection;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "purple",
    borderRadius: 10,
    padding: 10,
    color: "white",
    textTransform: "uppercase",
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
});
