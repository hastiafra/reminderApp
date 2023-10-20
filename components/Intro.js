import { StyleSheet, Text, View, Modal } from "react-native";

const Intro = () => {
  return (
      <Modal visible={true}>
          <View style={styles.introContainer}>
        <Text style={styles.title}>Reminder App</Text>
    </View>
      </Modal>
  );
};

export default Intro;

const styles = StyleSheet.create({
  introContainer: {
    backgroundColor: "purple",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 40,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: 'center',
  },
  title: {
    color: "white",
    fontSize: 20,
  },
});
