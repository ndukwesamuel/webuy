import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { nativewind } from "nativewind";
import { relatedItems } from "./HomeData";

const RelatedItems = () => {
  return (
    <View className="p-4">
      <Text className="text-lg font-bold mb-4">Related Items</Text>
      <FlatList
        data={relatedItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        // keyExtractor={(item) => item.id.toString()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="mr-4 bg-[#ECBA82] rounded-lg shadow-md"
            // onPress={() => onItemClick(item)}
          >
            <Image
              source={{ uri: item.imageSource }}
              className="w-40 h-40 rounded-md mb-2"
            />
            <Text className="text-base font-semibold mb-1 text-white">
              {item.title}
            </Text>
            <Text className="text-gray-600 text-white">${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RelatedItems;
