import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const imageSource = require(`../assets/food.png`);

const HomeComponent = ({ item }) => {
  return (
    <View className="flex-1 border gap-2">
      <View>
        <Image source={imageSource} className=" w-44  h-32" />
        <Text>{item?.name}</Text>
      </View>

      <Pressable
        onPress={() => {
          // update selected product
          // dispatch(productsSlice.actions.setSelectedProduct(item.id));
          // navigation.navigate("Product Details");
        }}
      >
        {/* <Image source={{ uri: item.images }}  /> */}
      </Pressable>
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({});
