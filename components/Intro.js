import { StyleSheet, Text, View, Modal } from "react-native";

const Intro = () => {
  <View style={styles.introContainer}>
    <Modal visible={true} enu>
      <Text style={styles.title}>Reminder App</Text>
    </Modal>
  </View>;
};

export default Intro;

const styles = StyleSheet.create({
  introContainer: {
    backgroundColor: "blue",
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
});
