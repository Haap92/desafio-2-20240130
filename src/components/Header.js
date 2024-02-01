import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import cartLogo from "./../../assets/cart.png";

const Header = () => (
  <View style={styles.header}>
    <Text style={[styles.title]}>Retro Gaming</Text>
    <Image style={styles.image} source={cartLogo} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
    paddingVertical: 40,
  }
});

export default Header;
