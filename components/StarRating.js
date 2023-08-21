import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        stars.push(<Ionicons key={i} name="star" size={24} color="orange" />);
      } else if (i === filledStars + 1 && halfStar) {
        stars.push(
          <Ionicons key={i} name="star-half" size={24} color="gray" />
        );
      } else {
        stars.push(
          <Ionicons key={i} name="star-outline" size={24} color="yellow" />
        );
      }
    }
    return stars;
  };

  return (
    <View className="flex-row items-center">
      {renderStars()}
      <Text className="ml-1 text-gray-600">{rating.toFixed(1)}</Text>
    </View>
  );
};

export default StarRating;
