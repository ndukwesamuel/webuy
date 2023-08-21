import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const StarRating = ({ rating }) => {
  // Calculate the number of full stars and half stars

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  // Render the stars
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Full star
        stars.push(<Ionicons key={i} name="star" size={15} color="#7F938D" />);
      } else if (hasHalfStar && i === fullStars) {
        // Half star
        stars.push(
          <Ionicons key={i} name="star-half" size={15} color="#7F938D" />
        );
      } else {
        // Empty star
        stars.push(
          <Ionicons key={i} name="star-outline" size={15} color="#7F938D" />
        );
      }
    }
    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
