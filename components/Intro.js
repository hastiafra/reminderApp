import { useState } from "react";
import { Image, StyleSheet, Text, View, Modal } from "react-native";

const Intro = () => {
  const [showModal, setShowModal] = useState(true);

  setTimeout(() => {
    return setShowModal(false);
  }, 3000);

  return (
    <Modal visible={showModal} animationType="fade">
      <View style={styles.introContainer}>
        <Image
          style={styles.image}
          source={require("../assets/reminder.png")}
        />
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
    justifyContent: "center",
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
});
