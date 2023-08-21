import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StarRating } from "./Data";

const UserReview = ({ item }) => {
  return (
    <View className="flex-1  gap-1">
      <StarRating rating={item.rating} />

      <Text>{item?.user?.name}</Text>
      <Text>28 May 2023</Text>
      <Text>{item?.comment}</Text>
    </View>
  );
};

export default UserReview;

const styles = StyleSheet.create({});
