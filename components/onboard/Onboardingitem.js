import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import React from "react";

const Onboardingitem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[{ width }]} className="">
      <Image
        className=""
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <View style={{ flex: 0.3 }} className="">
        <Text className=" font-extrabold text-orange-500  text-[28px] text-center ">
          {item.title}
        </Text>
        <Text className=" font-light text-orange-500 text-center  text-[14px]">
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default Onboardingitem;

const styles = StyleSheet.create({
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
});
