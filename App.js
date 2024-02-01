import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import InputArea from "./src/components/InputArea";
import ProductList from "./src/components/ProductList";
import RemoveModal from "./src/components/RemoveModal";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
  };

  const addItemToCart = (itemName) => {
    const newItem = {
      name: itemName,
      id: new Date().getTime()
    };
    setCartItems([...cartItems, newItem]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RemoveModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        removeItem={removeItemFromCart}
        itemSelected={itemSelected}
      />
      <Header />
      <InputArea addItem={addItemToCart} />
      <ProductList cartItems={cartItems} handleModal={handleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight,
  },
});

export default App;
