import React, { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

const InputArea = ({ addItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => setInputValue(value);

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      addItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleInputChange}
        value={inputValue}
        style={styles.input}
        placeholder="Add a product to the list"
      />
      <Pressable onPress={handleAddItem}>
        <Text style={styles.plus}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { 
    flexDirection: "row",
 },
  input: {
    borderColor: "1B02A4",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 15,
    borderRadius: 5,
    width: "90%",
    color: "#0043FF",
  },
  plus: {
    fontSize: 40, 
    color: '#1B02A4',
  }
});

export default InputArea;