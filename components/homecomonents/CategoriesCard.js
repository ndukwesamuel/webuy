import React from "react";

import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
  FlatList,
} from "react-native";
import { smallbanners } from "./HomeData";
import { useNavigation } from "@react-navigation/native";

const CategoriesCard = ({ banner }) => {
  const navigation = useNavigation();
  return (
    <View className=" bg-white flex-row justify-center">
      {smallbanners.map((banner, index) => (
        <TouchableOpacity
          key={index}
          className=" rounded-lg shadow-md  px-2 py-2"
          onPress={() => {
            // Navigate to the Search screen and pass data
            navigation.navigate("Search", { category: banner.category });
          }}
        >
          <Image
            source={{ uri: banner.imageSource }}
            className="w-[50px] h-[50px] rounded-md mb-2"
          />
          <Text className="text-[12px] font-light text-center">
            {banner?.category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoriesCard;
