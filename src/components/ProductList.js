import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet, Image } from "react-native";
import trash from './../../assets/trash.png';

const ProductList = ({ cartItems, handleModal }) => (
    <View style={styles.productList}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.product}>{item.name}</Text>
            <Pressable onPress={() => handleModal(item.id)}>
              <Image style={styles.image} source={trash} />
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
  
  const styles = StyleSheet.create({
    productList: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
      width: "100%"
    },
    item: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
      marginBottom: 10,
      marginRight: 15,
      width: "100%",
    },
    product: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#00AE96",
    },
    image: {
        width: 24,
        height: 30,
        marginRight: 10
      }
  });
  

export default ProductList;
