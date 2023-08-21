import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PaymentHeader = ({ title, first, setfirst, handlePress }) => {
  let data = [
    { id: 1, name: "Checkout" },
    { id: 2, name: "Payment" },
    { id: 3, name: "Review" },
  ];

  return (
    <View className=" ">
      <View className=" flex-row w-full">
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        <View className="flex-row justify-center   w-full">
          <Text className="text-centerr">{title}</Text>
        </View>
      </View>

      <View className="px-5 flex-row justify-between ">
        {data.map((item) => (
          <TouchableOpacity
            onPress={() => handlePress(item.name)}
            key={item.id}
          >
            <View className="flex-row items-center gap-2">
              <View
                className={` w-6 h-6 flex-row justify-center rounded-full items-center  ${
                  item.name === first ? "bg-black" : "bg-black opacity-30"
                }`}
              >
                <Text className="text-white text-xs font-medium">
                  {item.id}
                </Text>
              </View>
              <Text
                className={`text-base font-medium  ${
                  item.name === first ? "text-black" : "text-black opacity-30"
                } `}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PaymentHeader;

const styles = StyleSheet.create({});
