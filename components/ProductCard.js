import { AntDesign, Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      className="border-2 border-gray-400 p-2 w-1/2 rounded-md m-1 bg-white shadow-md"
    >
      <Image
        source={{ uri: product.image }}
        className="w-[90px] h-[60px] resizeMode-cover m-auto "
      />
      <Text className="text-md text-center font-bold my-2">
        {product.title}
      </Text>
      <View className="flex-row justify-between">
        <Text className="text-sm text-gray-600 break-word">
          ${product.price}
        </Text>
        <AntDesign name="pluscircleo" size={24} color="black" />
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View className="flex-1  bg-white bg-opacity-75">
          <Image
            source={{ uri: product.image }}
            className="w-[100%] h-[30%] rounded-lg"
          />
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            className="absolute top-0 right-0 p-4"
          >
            <AntDesign name="closecircle" size={24} color="white" />
          </TouchableOpacity>

          <View className="flex-1 pb-2  px-4">
            <Text className="text-lg font-bold my-2"> Free Delivery</Text>
            <Text className="text-sm text-gray-600 my-2">
              Men Sport Running Shoes Mulit Color
            </Text>
            <Text> Category : Shoes</Text>
            <StarRating rating={4.7} />

            <View className="flex-1">
              <Text className="text-lg font-bold my-2">
                Product Description
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                accusantium non mollitia assumenda, dolorum deleniti porro iure
                unde corrupti voluptatibus distinctio. Vitae a necessitatibus
                itaque, rerum doloremque at ad unde.
              </Text>
              <Text className="text-lg font-semibold text-gray-600">
                ${product.price}
              </Text>
            </View>

            <View className="  items-center ">
              <View className="flex-row items-center   justify-between  w-[80%]">
                <Feather
                  name="phone"
                  size={24}
                  color="orange"
                  style={{ borderWidth: 1, padding: 5 }}
                />

                <AntDesign
                  name="home"
                  size={24}
                  color="orange"
                  style={{ borderWidth: 1, padding: 5 }}
                />

                <View className=" bg-orange-300 flex-row justify-between items-center  px-4 py-2 rounded-md">
                  <AntDesign name="pluscircleo" size={24} color="white" />
                  <Text className="text-white text-md font-medium">
                    {" "}
                    Add To Cart
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    margin: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
});

export default ProductCard;
