import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Checkout = ({ title, first, setfirst, handlePress }) => {
  return (
    <View className="mt-10 px-5">
      <View className="flex-row justify-between  ">
        <View className="flex-col gap-5 text-black opacity-50">
          <Text className="font-medium text-lg">Order Amount </Text>
          <Text className="font-medium text-lg">Discount</Text>
          <Text className="font-medium text-lg"> Promo code</Text>
        </View>

        <View className="flex-col gap-5 text-black opacity-50">
          <Text className="font-medium text-lg">$50.90</Text>
          <Text className="font-medium text-lg">$0.00</Text>
          <Text className="font-medium text-lg">$0.00</Text>
        </View>
      </View>

      <View className="flex-row justify-between mt-10">
        <Text className="text-lg font-semibold">Total payable </Text>

        <Text className="text-lg font-semibold">$50.90</Text>
      </View>

      <TouchableOpacity onPress={() => handlePress("Payment")}>
        <Text className="bg-black text-center text-white px-5 py-2 rounded-lg mt-20">
          Proceed with Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
