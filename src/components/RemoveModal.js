import React from "react";
import { View, Text, Pressable, Modal, StyleSheet } from "react-native";

const RemoveModal = ({ modalVisible, setModalVisible, removeItem, itemSelected }) => {
  const handleRemoveItem = () => {
    removeItem(itemSelected);
    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.button}>¿Delete the product from the list?</Text>
        <Pressable onPress={() => setModalVisible(false)}>
          <Text style={styles.button}>No</Text>
        </Pressable>
        <Pressable onPress={handleRemoveItem}>
          <Text style={styles.button}>Yes</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#262626",
    justifyContent: "center",
    alignItems: "center",
    color: "#0043FF"
  },
  button: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#0043FF",
  },
});

export default RemoveModal;
