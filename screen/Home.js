import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../screen/home.styles";
import { AntDesign, Fontisto, Ionicons } from "@expo/vector-icons";
import SliderBanner from "../components/homecomonents/SliderBanner";
import CategoriesCard from "../components/homecomonents/CategoriesCard";
import RelatedItems from "../components/homecomonents/RelatedItems";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("Search"); // Navigate to the "Search" screen
  };

  return (
    <SafeAreaView className="h-full  bg-[#ECEBE4]">
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.appBarText}>Nigeria</Text>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}> 8</Text>
            </View>

            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleSearchPress}
        className="flex-row items-center bg-white rounded-lg p-2 mx-5 mt-3 justify-between"
      >
        <AntDesign name="search1" size={20} color="#888" style="" />
        <Text className="text-sm ">What are you looking for ? </Text>
        <Ionicons name="radio-outline" size={24} color="black" />
      </TouchableOpacity>

      <View className="banner   p-4">
        {/* Other components */}

        <SliderBanner />
        {/* Other components */}
      </View>

      <View className="     ">
        <CategoriesCard />
      </View>

      <View className="bg-white">
        {/* Other components */}
        <RelatedItems />
        {/* Other components */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
