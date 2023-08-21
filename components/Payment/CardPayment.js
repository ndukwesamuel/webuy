import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardPayment = () => {
  return (
    <View className="bg-[#192801] rounded-md p-4 shadow-md py-10">
      <Text className="text-2xl font-bold mb-2 text-white">
        **** **** **** 1234
      </Text>

      <View className="flex-row justify-between">
        <View className="flex justify-between">
          <Text className="text-sm text-white opacity-70 mb-5">
            Card Holder Name
          </Text>

          <Text className="text-sm text-white opacity-70">Ndukwe samuel</Text>
        </View>

        <View className="flex justify-between">
          <Text className="text-sm text-white opacity-70 mb-5">
            Expiry Date
          </Text>

          <Text className="text-sm text-white opacity-70">03/10</Text>
        </View>
      </View>

      <View className="flex items-center mb-4">
        <View className="w-8 h-8 bg-blue-500 rounded-full mr-2"></View>
        <Text className="text-lg font-semibold text-white">VISA</Text>
      </View>
    </View>
  );
};

export default CardPayment;

const styles = StyleSheet.create({});
